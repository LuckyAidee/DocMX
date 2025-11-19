import React from 'react';
import { AlertCircle } from 'lucide-react';

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

const InputField = ({
  type,
  label,
  placeholder,
  maxLength,
  validLength,
  validator,
  formData,
  setFormData,
  errors,
  setErrors,
  helpText
}) => {
  const value = formData[type] || '';
  const hasError = errors && errors[type];
  const errorMessage = hasError ? errors[type] : '';

  const isValid = validLength
    ? (Array.isArray(validLength)
        ? validLength.includes(value.length) && validator(value)
        : value.length === validLength && validator(value))
    : validator(value);

  const validateField = (val) => {
    if (!val || val.trim() === '') {
      return 'Este campo es obligatorio';
    }

    if (validLength) {
      if (Array.isArray(validLength)) {
        if (!validLength.includes(val.length)) {
          return `Debe tener ${validLength.join(' o ')} caracteres`;
        }
      } else {
        if (val.length !== validLength) {
          return `Debe tener exactamente ${validLength} caracteres`;
        }
      }
    }

    if (!validator(val)) {
      return 'El formato ingresado no es válido';
    }

    return null;
  };

  const handleChange = (e) => {
    const newValue = e.target.value.toUpperCase();
    setFormData({ ...formData, [type]: newValue });

    // Validar en tiempo real solo si el usuario ya comenzó a escribir
    if (newValue.length > 0) {
      const validationError = validateField(newValue);
      if (setErrors) {
        setErrors(prev => ({
          ...prev,
          [type]: validationError
        }));
      }
    } else {
      // Limpiar error si el campo está vacío
      if (setErrors) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[type];
          return newErrors;
        });
      }
    }
  };

  return (
    <div>
      <label htmlFor={type} className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
        <span>{label}</span>
        <span className="text-red-500">*</span>
        <span className="text-xs font-normal text-gray-500">{helpText}</span>
      </label>

      <div className="space-y-2">
        <input
          type="text"
          id={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full px-5 py-4 border-2 rounded-xl text-gray-800 text-lg font-semibold placeholder-gray-400 transition-all duration-300
            ${hasError
              ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100'
              : 'border-gray-300 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-100'
            } focus:outline-none`}
        />

        {hasError && (
          <div className="flex items-center gap-2 text-red-600 text-sm font-medium px-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              isValid ? 'bg-green-500' : hasError ? 'bg-red-400' : 'bg-teal-500'
            }`}
            style={{width: `${Math.min((value.length / maxLength) * 100, 100)}%`}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default function ServiceForms({ camposFormulario, formData, setFormData, errors, setErrors, esEspecializado, mensajeEspecializado }) {

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

  const inputs = [];

  if (camposFormulario && camposFormulario.includes('curp')) {
    inputs.push(
      <InputField
        key="curp"
        type="curp"
        label="CURP"
        placeholder="ABCD123456HDFMNN09"
        maxLength={18}
        validLength={18}
        validator={isValidCURP}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        helpText="(18 caracteres)"
      />
    );
  }

  if (camposFormulario && camposFormulario.includes('rfc')) {
    inputs.push(
      <InputField
        key="rfc"
        type="rfc"
        label="RFC"
        placeholder="ABC123456XYZ"
        maxLength={13}
        validLength={[12, 13]}
        validator={isValidRFC}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        helpText="(12 o 13 caracteres)"
      />
    );
  }

  if (camposFormulario && camposFormulario.includes('idcif')) {
    inputs.push(
      <InputField
        key="idcif"
        type="idcif"
        label="IdCIF"
        placeholder="A1B2C3D4E5"
        maxLength={13}
        validLength={null}
        validator={(val) => val.length >= 8 && val.length <= 13 && isValidIdCIF(val)}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        helpText="(8 a 13 caracteres)"
      />
    );
  }

  if (inputs.length === 0) {
    return null;
  }

  return <div className="space-y-6">{inputs}</div>;
}
