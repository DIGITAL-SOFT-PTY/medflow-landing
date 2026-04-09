import React, { useState } from 'react';
import { Stethoscope, Lock, CheckCircle, RotateCcw, Shield } from 'lucide-react';
import { useEmailForm } from '../hooks/useEmailForm';

const TRUST_ICONS = [
  { Icon: Lock,        label: 'Sin tarjeta de crédito' },
  { Icon: CheckCircle, label: 'Acceso completo 14 días' },
  { Icon: RotateCcw,   label: 'Cancela en 1 clic' },
];

export default function FinalCTA() {
  const [email, setEmail]       = useState('');
  const [clinicName, setClinic] = useState('');
  const { isLoading, submitStatus, errorMessage, send } = useEmailForm(
    'VITE_EMAILJS_TEMPLATE_ID',
    (fields) => ({
      from_email:  fields.email,
      clinic_name: fields.clinicName || 'No especificado',
      form_type:   'CTA Final — Comenzar Ahora',
      reply_to:    fields.email,
    }),
    () => { setEmail(''); setClinic(''); }
  );

  const handleSubmit = (e) => send(e, { email, clinicName });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6" aria-hidden="true">
          <Stethoscope className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-5">
          Digitaliza tu clínica hoy — gratis los primeros 14 días
        </h2>
        <p className="text-xl text-teal-100 mb-4">
          Únete a las 500+ clínicas que ya trabajan sin papeles. Acceso completo hoy, sin tarjeta.
        </p>

        {/* Social proof ticker */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          3 clínicas se registraron en las últimas 24 horas
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Formulario de registro rápido"
          className="flex flex-col gap-3 bg-white/10 rounded-xl p-4 backdrop-blur border border-white/20 mb-5"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="cta-clinic" className="sr-only">Nombre de tu clínica (opcional)</label>
              <input
                id="cta-clinic"
                type="text"
                placeholder="Nombre de tu clínica (opcional)"
                value={clinicName}
                onChange={(e) => setClinic(e.target.value)}
                className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cta-email" className="sr-only">Tu correo electrónico</label>
              <input
                id="cta-email"
                type="email"
                placeholder="tu@clinica.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-white text-teal-700 font-bold text-lg rounded-lg hover:bg-teal-50 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Enviando...
            </span>
          ) : 'Comenzar Gratis Ahora'}
          </button>
        </form>

        {errorMessage && <p className="text-red-300 text-center mb-3 text-sm">{errorMessage}</p>}
        {submitStatus === 'success' && (
          <p className="text-white text-center mb-3 font-semibold">
            ¡Perfecto! Te enviaremos un link para comenzar en breve.
          </p>
        )}

        {/* Trust icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-5">
          {TRUST_ICONS.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-teal-200 text-sm">
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-teal-100">
          <Shield className="w-4 h-4 flex-shrink-0" />
          <span><span className="font-bold text-white">Garantía 30 días</span> — Si no ves resultados, te devolvemos tu dinero.</span>
        </div>
      </div>
    </section>
  );
}
