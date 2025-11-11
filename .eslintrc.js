module.exports = {
  extends: [
    'react-app',
    'plugin:security/recommended'
  ],
  plugins: ['security'],
  rules: {
    // Reglas de seguridad general
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-unsafe-regex': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
    
    // Reglas específicas de React
    'react/no-danger': 'warn',
    'react/no-find-dom-node': 'error',
    'react/no-unescaped-entities': 'error',
    
    // Reglas personalizadas para el proyecto
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',
    'no-param-reassign': 'error',
    'prefer-const': 'error',
    'eqeqeq': ['error', 'always']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};