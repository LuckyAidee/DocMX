#!/usr/bin/env node

/**
 * Script de auditoría de seguridad para CI/CD
 * Detecta regresiones de seguridad en el código
 */

const fs = require('fs');
const path = require('path');

class SecurityAudit {
  constructor() {
    this.vulnerabilities = [];
    this.filesScanned = 0;
    // Excluir archivos internos del auditor y utilidades que contienen ejemplos
    this.excludePaths = [
      path.join('src','scripts','security-audit.js'),
      path.join('src','utils','sanitize.js')
    ];
  }

  scanForLocalStorageTokens(filePath, content) {
    // Detectar uso de localStorage/sessionStorage para tokens
    const dangerousPatterns = [
      /localStorage\.(setItem|getItem|removeItem)\([^)]*(token|access_token|refresh_token)/gi,
      /sessionStorage\.(setItem|getItem|removeItem)\([^)]*(token|access_token|refresh_token)/gi,
    ];

    dangerousPatterns.forEach((pattern) => {
      const matches = content.match(pattern);
      if (matches) {
        this.vulnerabilities.push({
          file: filePath,
          issue: 'ALMACENAMIENTO_INSECURO_TOKENS',
          matches: matches,
          severity: 'HIGH',
          message: 'Se detectó almacenamiento de tokens en localStorage/sessionStorage',
          solution: 'Migrar a HttpOnly cookies para almacenamiento seguro de tokens'
        });
      }
    });
  }

  scanForXSSVulnerabilities(filePath, content) {
    // Detectar patrones que pueden llevar a XSS
    const xssPatterns = [
      // DOM XSS
      { pattern: /\.innerHTML\s*=/g, severity: 'HIGH' },
      { pattern: /\.outerHTML\s*=/g, severity: 'HIGH' },
      { pattern: /document\.write\(/g, severity: 'HIGH' },
      // Ejecución dinámica
      { pattern: /eval\(/g, severity: 'CRITICAL' },
      { pattern: /new\s+Function\(/g, severity: 'CRITICAL' },
      { pattern: /setTimeout\([^)]*String\(/g, severity: 'HIGH' },
      // React dangerouslySetInnerHTML sin DOMPurify
      { pattern: /dangerouslySetInnerHTML[\s\S]{0,50}__html:/g, severity: 'HIGH' },
      // URLs sin sanitizar
      { pattern: /location\.(href|replace|assign)\s*=\s*[^"'\s]+/g, severity: 'MEDIUM' },
      // target="_blank" sin rel="noopener noreferrer"
      { pattern: /target\s*=\s*["']_blank["'][^>]*(?!rel\s*=\s*["'](?:[^"']*\s)?noopener)/g, severity: 'LOW' }
    ];

    xssPatterns.forEach(({pattern, severity}) => {
      const matches = content.match(pattern);
      if (matches) {
        // Filtrar falsos positivos (por ejemplo, comentarios) y tags que ya tienen rel
        const realIssues = matches.filter(match => {
          const trimmed = match.trim();
          if (trimmed.startsWith('//') || trimmed.startsWith('/*')) return false;
          // si el match contiene rel= entonces no es un problema
          if (/rel\s*=/.test(match)) return false;
          return true;
        });

        if (realIssues.length > 0) {
          this.vulnerabilities.push({
            file: filePath,
            issue: 'XSS_POTENCIAL',
            matches: realIssues,
            severity,
            message: 'Se detectó código potencialmente vulnerable a XSS',
            solution: severity === 'CRITICAL' 
              ? 'CRÍTICO: Eliminar uso de eval/Function. Usar alternativas seguras.'
              : severity === 'HIGH'
              ? 'Usar DOMPurify antes de dangerouslySetInnerHTML o textContent en lugar de innerHTML'
              : 'Validar URLs y añadir rel="noopener noreferrer" a links externos'
          });
        }
      }
    });
  }

  scanForHardcodedSecrets(filePath, content) {
    // Detectar secretos hardcodeados (evitar falsos positivos en mensajes de UI que contienen 'password')
    const secretPatterns = [
      /(api[_-]?key|secret|token)\s*[:=]\s*['"`][^'"`\s]{10,}['"`]/gi,
      /(jwt|auth)[_-]?secret\s*[:=]\s*['"`]/gi,
    ];

    secretPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        this.vulnerabilities.push({
          file: filePath,
          issue: 'SECRETO_HARDCODEADO',
          matches: matches.map(m => m.substring(0, 50) + '...'),
          severity: 'CRITICAL',
          message: 'Se detectaron posibles secretos hardcodeados',
          solution: 'Mover secretos a variables de entorno'
        });
      }
    });
  }

  scanFile(filePath) {
    try {
      // Ignorar archivos explícitos en la lista de exclusión
      if (this.excludePaths && this.excludePaths.some(p => filePath.endsWith(p))) {
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      this.filesScanned++;
      
      this.scanForLocalStorageTokens(filePath, content);
      this.scanForXSSVulnerabilities(filePath, content);
      this.scanForHardcodedSecrets(filePath, content);
      
    } catch (error) {
      console.warn(`No se pudo leer el archivo: ${filePath}`);
    }
  }

  scanDirectory(directory) {
    try {
      const items = fs.readdirSync(directory);
      
      items.forEach(item => {
        const fullPath = path.join(directory, item);
        
        try {
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            if (!item.includes('node_modules') && !item.includes('.git') && !item.includes('build')) {
              this.scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
              this.scanFile(fullPath);
            }
          }
        } catch (error) {
          console.warn(`No se pudo acceder a: ${fullPath}`);
        }
      });
    } catch (error) {
      console.warn(`No se pudo escanear directorio: ${directory}`);
    }
  }

  generateReport() {
    console.log('\nAUDITORÍA DE SEGURIDAD');
    console.log('=' .repeat(50));
    console.log(`Archivos escaneados: ${this.filesScanned}`);
    console.log(`Vulnerabilidades encontradas: ${this.vulnerabilities.length}`);
    
    if (this.vulnerabilities.length === 0) {
      console.log('\nNo se encontraron vulnerabilidades de seguridad');
      process.exit(0);
    } else {
      console.log('\nSE ENCONTRARON VULNERABILIDADES DE SEGURIDAD:\n');
      
      // Agrupar por severidad
      const bySeverity = {
        CRITICAL: [],
        HIGH: [],
        MEDIUM: [],
        LOW: []
      };

      this.vulnerabilities.forEach(vuln => {
        bySeverity[vuln.severity] = bySeverity[vuln.severity] || [];
        bySeverity[vuln.severity].push(vuln);
      });

      // Mostrar por orden de severidad
      ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].forEach(severity => {
        if (bySeverity[severity] && bySeverity[severity].length > 0) {
          console.log(`\n${'🔴'.repeat(severity === 'CRITICAL' ? 3 : severity === 'HIGH' ? 2 : 1)} ${severity} (${bySeverity[severity].length})`);
          console.log('-'.repeat(50));
          
          bySeverity[severity].forEach((vuln, index) => {
            console.log(`\n${index + 1}. 📁 ${vuln.file}`);
            console.log(`   ${vuln.issue}`);
            console.log(`   ${vuln.message}`);
            console.log(`   Solución: ${vuln.solution}`);
            console.log(`   Coincidencias: ${vuln.matches.slice(0, 3).join(', ')}${vuln.matches.length > 3 ? '...' : ''}`);
          });
        }
      });

      console.log('\nRECOMENDACIONES:');
      console.log('   1. Revisa y corrige las vulnerabilidades CRITICAL y HIGH primero');
      console.log('   2. Usa HttpOnly cookies para tokens de autenticación');
      console.log('   3. Implementa sanitización de inputs');
      console.log('   4. Mueve todos los secretos a variables de entorno\n');
      
      process.exit(1); // Fallar el build en CI/CD
    }
  }
}

// Manejar argumentos de línea de comandos
const args = process.argv.slice(2);
const shouldFix = args.includes('--fix');

// Ejecutar auditoría
const audit = new SecurityAudit();
console.log('🔍 Iniciando auditoría de seguridad...\n');
audit.scanDirectory('./src');
audit.generateReport();