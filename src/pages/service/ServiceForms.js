import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function ServiceForms({ camposFormulario, formData, setFormData, error, esEspecializado, mensajeEspecializado }) {
  
  if (esEspecializado) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-8 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Trámite Especializado</h3>
            <p className="text-gray-700 leading-relaxed">
              {mensajeEspecializado || 'Este es un trámite especializado. Un agente se pondrá en contacto contigo después de la compra para solicitar la información necesaria.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const isValidCURP = (curp) => {
    if (curp.length !== 18) return false;
    const curpRegex = /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{2}$/;
    return curpRegex.test(curp);
  };

  const isValidRFC = (rfc) => {
    if (rfc.length !== 12 && rfc.length !== 13) return false;
    const rfcRegex = /^[A-ZÑ&]{3,4}\d{6}[A-V1-9A-Z0-9]{3}$/;
    return rfcRegex.test(rfc);
  };

  const isValidIdCIF = (idcif) => {
    if (idcif.length < 8 || idcif.length > 13) return false;
    const idcifRegex = /^[A-Z0-9]{8,13}$/;
    return idcifRegex.test(idcif);
  };

  if (camposFormulario && camposFormulario.includes('curp')) {
    const curp = formData.curp || '';

    return (
      <div>
        <label htmlFor="curp" className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
          <span>CURP</span>
          <span className="text-red-500">*</span>
          <span className="text-xs font-normal text-gray-500">(18 caracteres)</span>
        </label>
        
        <div className="space-y-2">
          <input
            type="text"
            id="curp"
            value={curp}
            onChange={(e) => setFormData({ ...formData, curp: e.target.value.toUpperCase() })}
            placeholder="ABCD123456HDFMNN09"
            maxLength={18}
            className={`w-full px-5 py-4 border-2 rounded-xl text-gray-800 text-lg font-semibold placeholder-gray-400 transition-all duration-300
              ${error 
                ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                : 'border-gray-300 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-100'
              } focus:outline-none`}
          />
          
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                curp.length === 18 && isValidCURP(curp) ? 'bg-green-500' : 'bg-teal-500'
              }`}
              style={{width: `${(curp.length / 18) * 100}%`}}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (camposFormulario && camposFormulario.includes('rfc')) {
    const rfc = formData.rfc || '';

    return (
      <div>
        <label htmlFor="rfc" className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
          <span>RFC</span>
          <span className="text-red-500">*</span>
          <span className="text-xs font-normal text-gray-500">(12 o 13 caracteres)</span>
        </label>
        
        <div className="space-y-2">
          <input
            type="text"
            id="rfc"
            value={rfc}
            onChange={(e) => setFormData({ ...formData, rfc: e.target.value.toUpperCase() })}
            placeholder="ABC123456XYZ"
            maxLength={13}
            className={`w-full px-5 py-4 border-2 rounded-xl text-gray-800 text-lg font-semibold placeholder-gray-400 transition-all duration-300
              ${error 
                ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                : 'border-gray-300 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-100'
              } focus:outline-none`}
          />
          
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                (rfc.length === 12 || rfc.length === 13) && isValidRFC(rfc) ? 'bg-green-500' : 'bg-teal-500'
              }`}
              style={{width: `${Math.min((rfc.length / 13) * 100, 100)}%`}}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (camposFormulario && camposFormulario.includes('idcif')) {
    const idcif = formData.idcif || '';

    return (
      <div>
        <label htmlFor="idcif" className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
          <span>IdCIF</span>
          <span className="text-red-500">*</span>
          <span className="text-xs font-normal text-gray-500">(8 a 13 caracteres)</span>
        </label>
        
        <div className="space-y-2">
          <input
            type="text"
            id="idcif"
            value={idcif}
            onChange={(e) => setFormData({ ...formData, idcif: e.target.value.toUpperCase() })}
            placeholder="A1B2C3D4E5"
            maxLength={13}
            className={`w-full px-5 py-4 border-2 rounded-xl text-gray-800 text-lg font-semibold placeholder-gray-400 transition-all duration-300
              ${error 
                ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                : 'border-gray-300 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-100'
              } focus:outline-none`}
          />
          
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                idcif.length >= 8 && idcif.length <= 13 && isValidIdCIF(idcif) ? 'bg-green-500' : 'bg-teal-500'
              }`}
              style={{width: `${Math.min((idcif.length / 13) * 100, 100)}%`}}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}