import React from 'react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const STATS = [
  { prefix: '',  numValue: 500,  suffix: '+',  label: 'Clínicas activas en 10 países' },
  { prefix: '',  numValue: 150,  suffix: 'K+', label: 'Consultas registradas' },
  { prefix: '$', numValue: 10,   suffix: 'M+', label: 'Facturados por nuestras clínicas' },
  { prefix: '',  numValue: 49,   suffix: '/5', label: 'En Google y Capterra', divide: 10 },
];

const BADGES = [
  '🔒 SSL 256-bit',
  '☁️ AWS Cloud',
  '🛡️ Datos protegidos',
  '✓ HIPAA-ready',
];

function AnimatedStat({ prefix, numValue, suffix, label, divide, started }) {
  const raw = useCountUp(numValue, 1400, started);
  const display = divide ? (raw / divide).toFixed(1) : Math.floor(raw);
  return (
    <div>
      <p className="text-2xl md:text-3xl font-black text-teal-300">
        {prefix}{display}{suffix}
      </p>
      <p className="text-teal-400 text-sm mt-1">{label}</p>
    </div>
  );
}

export default function TrustBar() {
  const [ref, inView] = useInView();

  return (
    <section className="py-8 px-4 bg-teal-900" aria-label="Estadísticas">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
          {STATS.map((s) => (
            <AnimatedStat key={s.label} {...s} started={inView} />
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
