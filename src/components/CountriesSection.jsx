import React from 'react';
import { useInView } from '../hooks/useInView';

const COUNTRIES = [
  { code: 'pa', name: 'Panamá' },
  { code: 'co', name: 'Colombia' },
  { code: 'mx', name: 'México' },
  { code: 'cr', name: 'Costa Rica' },
  { code: 'gt', name: 'Guatemala' },
  { code: 'sv', name: 'El Salvador' },
  { code: 'hn', name: 'Honduras' },
  { code: 'do', name: 'Rep. Dominicana' },
  { code: 'ec', name: 'Ecuador' },
  { code: 'pe', name: 'Perú' },
];

export default function CountriesSection() {
  const [ref, inView] = useInView();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? 'visible' : ''}`}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Presente en toda Latinoamérica
          </h2>
          <p className="text-gray-500">Clínicas activas en 10 países y creciendo.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {COUNTRIES.map(({ code, name }) => (
            <div
              key={code}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-teal-300 hover:shadow-md transition"
            >
              <img
                src={`https://flagcdn.com/w80/${code}.png`}
                alt={`Bandera de ${name}`}
                loading="lazy"
                className="w-14 h-9 object-cover rounded shadow-sm"
              />
              <span className="text-sm font-semibold text-gray-700 text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
