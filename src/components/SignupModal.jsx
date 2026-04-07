import React, { useState, useEffect, useRef } from 'react';
import { Plus, X } from 'lucide-react';
import { useEmailForm } from '../hooks/useEmailForm';

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

  // Focus first input when modal opens
  useEffect(() => {
    if (show) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [show]);

  // Close on Escape
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

  const handleSubmit = (e) => {
    send(e, { signupEmail, clinicName });
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-modal-title"
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
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
            <button onClick={handleClose} className="mt-6 px-6 py-2 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition">
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
              {isLoading ? 'Enviando...' : 'Crear Cuenta'}
            </button>
            {errorMessage && <p role="alert" className="text-red-600 text-center text-sm">{errorMessage}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
