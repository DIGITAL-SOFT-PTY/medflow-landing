import React from 'react';
import { FEATURES, FEATURE_COLOR_MAP } from '../data/features';
import { useInView } from '../hooks/useInView';

const DELAYS = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', '', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export default function FeaturesGrid() {
  const [ref, inView] = useInView();

  return (
    <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Funcionalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            8 herramientas que trabajan por ti
          </h2>
          <p className="text-xl text-gray-500">Todo integrado. Aprenderás en una tarde. Lo usarás por años.</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ Icon, color, title, desc }, i) => {
            const [bgClass, borderClass, textClass] = FEATURE_COLOR_MAP[color].split(/\s+/);
            return (
              <div key={title} className={`reveal ${DELAYS[i]} ${inView ? 'visible' : ''} p-6 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition-all ${bgClass} ${borderClass}`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-white border ${borderClass}`}>
                  <Icon className={`w-6 h-6 ${textClass}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
