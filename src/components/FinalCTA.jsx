import React, { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { useEmailForm } from '../hooks/useEmailForm';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const { isLoading, submitStatus, errorMessage, send } = useEmailForm(
    'VITE_EMAILJS_TEMPLATE_ID',
    (fields) => ({
      from_email: fields.email,
      clinic_name: 'No especificado',
      form_type: 'CTA Final — Comenzar Ahora',
      reply_to: fields.email,
    }),
    () => setEmail('')
  );

  const handleSubmit = (e) => send(e, { email });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6" aria-hidden="true">
          <Stethoscope className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-5">Tu clínica, digitalizada hoy</h2>
        <p className="text-xl text-teal-100 mb-10">
          Únete a 500+ clínicas en Latinoamérica. 14 días gratis, sin tarjeta de crédito.
        </p>

        <form
          onSubmit={handleSubmit}
          aria-label="Formulario de registro rápido"
          className="flex flex-col sm:flex-row gap-3 justify-center bg-white/10 rounded-xl p-3 backdrop-blur border border-white/20"
        >
          <label htmlFor="cta-email" className="sr-only">Tu correo electrónico</label>
          <input
            id="cta-email"
            type="email"
            placeholder="tu@clinica.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Enviando...' : 'Comenzar Ahora'}
          </button>
        </form>

        {errorMessage && <p className="text-red-300 text-center mt-3 text-sm">{errorMessage}</p>}
        {submitStatus === 'success' && (
          <p className="text-white text-center mt-4 font-semibold">
            ¡Perfecto! Te enviaremos un link para comenzar en breve.
          </p>
        )}

        <p className="text-teal-200 text-sm mt-5">
          Sin tarjeta de crédito · Acceso completo por 14 días · Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}
