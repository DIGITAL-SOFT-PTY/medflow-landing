import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-800 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Lo que dicen los médicos</h2>
          <p className="text-gray-400 text-lg">Clínicas reales que transformaron su operación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="bg-gray-800 rounded-xl p-7 border border-gray-700 hover:border-teal-500 transition flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl" aria-hidden="true">{t.emoji}</span>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.clinic}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-teal-900 text-teal-300 rounded text-xs font-medium">
                    {t.specialty}
                  </span>
                </div>
              </div>
              <blockquote className="text-gray-300 italic flex-1">{t.text}</blockquote>
              <div className="flex text-yellow-400 mt-4 text-sm" aria-label="5 estrellas">⭐⭐⭐⭐⭐</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
