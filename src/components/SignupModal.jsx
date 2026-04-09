import React, { useState, useEffect, useRef } from 'react';
import { Plus, X } from 'lucide-react';
import { useEmailForm } from '../hooks/useEmailForm';

function Spinner() {
  return (
    <span className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      Enviando...
    </span>
  );
}

export default function SignupModal({ show, onClose }) {
  const [signupEmail, setSignupEmail] = useState('');
  const [clinicName,  setClinicName]  = useState('');
  const firstInputRef = useRef(null);

  const { isLoading, submitStatus, errorMessage, send, reset } = useEmailForm(
    'VITE_EMAILJS_TEMPLATE_ID',
    (fields) => ({
      from_email:  fields.signupEmail,
      clinic_name: fields.clinicName || 'No especificado',
      form_type:   'Signup — Crear Cuenta',
      reply_to:    fields.signupEmail,
    })
  );

  useEffect(() => {
    if (show) setTimeout(() => firstInputRef.current?.focus(), 300);
  }, [show]);

  useEffect(() => {
    if (!show) return;
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [show]);

  const handleClose = () => {
    setSignupEmail('');
    setClinicName('');
    reset();
    onClose();
  };

  const handleSubmit = (e) => { send(e, { signupEmail, clinicName }); };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-modal-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      <div className={`relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${
        show ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
      }`}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center" aria-hidden="true">
              <Plus className="w-5 h-5 text-teal-600" strokeWidth={3} />
            </div>
            <div>
              <h2 id="signup-modal-title" className="text-xl font-black text-gray-900">Crear cuenta gratis</h2>
              <p className="text-gray-500 text-sm">14 días de prueba. Sin tarjeta.</p>
            </div>
          </div>
          <button onClick={handleClose} aria-label="Cerrar modal" className="text-gray-400 hover:text-gray-700 transition p-1">
            <X size={20} />
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center py-6">
            <p className="text-4xl mb-4">✅</p>
            <p className="text-teal-700 font-bold text-lg mb-2">¡Cuenta creada!</p>
            <p className="text-gray-500 text-sm">Revisa tu email para continuar con el acceso.</p>
            <button onClick={handleClose} className="mt-6 px-6 py-2 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition cursor-pointer">
              Entendido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3" aria-label="Formulario de registro">
            <div>
              <label htmlFor="signup-email" className="sr-only">Email</label>
              <input
                id="signup-email"
                ref={firstInputRef}
                type="email"
                placeholder="tu@clinica.com"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="signup-clinic" className="sr-only">Nombre de tu clínica (opcional)</label>
              <input
                id="signup-clinic"
                type="text"
                placeholder="Nombre de tu clínica (opcional)"
                value={clinicName}
                onChange={(e) => setClinicName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? <Spinner /> : 'Crear Cuenta'}
            </button>
            {errorMessage && <p role="alert" className="text-red-600 text-center text-sm">{errorMessage}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
