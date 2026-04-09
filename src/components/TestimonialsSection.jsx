import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-800 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Clínicas reales. Resultados comprobados.</h2>
          <p className="text-gray-400 text-lg">Más de 500 clínicas activas comparten su experiencia con MedFlow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="bg-gray-800 rounded-xl p-7 border border-gray-700 hover:border-teal-500 transition flex flex-col">
              {/* Avatar con iniciales + metric chip */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${t.gradientClass} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-black text-lg">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.clinic}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-teal-900 text-teal-300 rounded text-xs font-medium">
                    {t.specialty}
                  </span>
                </div>
              </div>

              {/* Metric chip */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-900/60 border border-teal-700 rounded-lg text-sm">
                  <span className="text-teal-300 font-black text-base">{t.metric.value}</span>
                  <span className="text-teal-400">{t.metric.label}</span>
                </span>
              </div>

              <blockquote className="text-gray-300 italic flex-1 text-sm leading-relaxed">{t.text}</blockquote>
              <div className="flex text-yellow-400 mt-4 text-sm" aria-label="5 estrellas">⭐⭐⭐⭐⭐</div>
            </article>
          ))}

          {/* Caso de éxito teaser */}
          <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-xl p-7 border border-teal-700 hover:border-teal-400 transition flex flex-col justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 bg-teal-700 text-teal-200 rounded text-xs font-bold uppercase tracking-wide mb-4">
                Caso de éxito
              </span>
              <h3 className="text-white font-black text-lg mb-2">Centro Médico Aurora</h3>
              <p className="text-teal-200 text-sm mb-4">De 40 a 95 pacientes/mes en solo 60 días después de implementar MedFlow.</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-teal-800/50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-black text-white">+138%</p>
                  <p className="text-teal-300 text-xs">más pacientes</p>
                </div>
                <div className="bg-teal-800/50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-black text-white">60 días</p>
                  <p className="text-teal-300 text-xs">para verlo</p>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-teal-300 hover:text-white font-semibold text-sm transition group">
              Leer el caso completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Strip de reseñas Google */}
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            ⭐⭐⭐⭐⭐{' '}
            <span className="text-white font-semibold">Más de 200 reseñas de 5 estrellas en Google</span>
            {' '}·{' '}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition"
            >
              Ver reseñas →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
