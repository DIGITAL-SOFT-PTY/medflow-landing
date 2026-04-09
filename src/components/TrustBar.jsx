import React from 'react';

const STATS = [
  { value: '500+',  label: 'Clínicas activas en 10 países' },
  { value: '150K+', label: 'Consultas registradas' },
  { value: '$10M+', label: 'Facturados por nuestras clínicas' },
  { value: '4.9/5', label: 'En Google y Capterra' },
];

const BADGES = [
  '🔒 SSL 256-bit',
  '☁️ AWS Cloud',
  '🛡️ Datos protegidos',
  '✓ HIPAA-ready',
];

export default function TrustBar() {
  return (
    <section className="py-8 px-4 bg-teal-900" aria-label="Estadísticas">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl md:text-3xl font-black text-teal-300">{value}</p>
              <p className="text-teal-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 border-t border-teal-800">
          {BADGES.map((badge) => (
            <span key={badge} className="text-teal-300 text-xs font-medium">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
