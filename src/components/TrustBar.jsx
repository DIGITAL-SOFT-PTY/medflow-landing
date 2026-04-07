import React from 'react';

const STATS = [
  { value: '500+',  label: 'Clínicas activas' },
  { value: '50K+',  label: 'Pacientes gestionados' },
  { value: '$10M+', label: 'Facturados' },
  { value: '4.9★',  label: 'Rating en Google' },
];

export default function TrustBar() {
  return (
    <section className="py-8 px-4 bg-gray-900" aria-label="Estadísticas">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl md:text-3xl font-black text-teal-400">{value}</p>
              <p className="text-gray-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
