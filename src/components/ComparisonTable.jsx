import React from 'react';
import { useInView } from '../hooks/useInView';

const ROWS = [
  ['Agenda digital inteligente',  true,      false,     'partial'],
  ['Recordatorios automáticos',   true,      false,     'partial'],
  ['Historial clínico digital',   true,      'partial', true],
  ['Cobros y recibos',            true,      'partial', 'partial'],
  ['Reportes en tiempo real',     true,      false,     'partial'],
  ['Soporte en español 24/7',     true,      false,     false],
  ['Implementación en 5 min',     true,      true,      false],
  ['App móvil incluida',          true,      false,     false],
  ['Precio público sin contrato', true,      true,      false],
  ['Precio mensual',              '$29',     'Gratis',  '$200+'],
];

function Cell({ val }) {
  if (val === true)      return <span className="text-teal-500 text-lg">✓</span>;
  if (val === false)     return <span className="text-red-400 text-lg">✗</span>;
  if (val === 'partial') return <span className="text-yellow-500 text-lg">◐</span>;
  return <span className="font-bold text-gray-700">{val}</span>;
}

export default function ComparisonTable({ onOpenSignup }) {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Comparación
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">MedFlow vs otras opciones</h2>
          <p className="text-xl text-gray-500">No todas las soluciones son iguales.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 font-bold text-gray-700">Función</th>
                <th className="px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-600 text-white rounded-full text-xs font-bold">
                    ⭐ MedFlow
                  </span>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-500">Excel</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-500">Sistema instalado (Mediline, etc.)</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([feature, medflow, excel, trad], i) => (
                <tr key={feature} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-6 py-4 text-gray-700 font-medium">{feature}</td>
                  <td className="px-6 py-4 text-center bg-teal-50/30"><Cell val={medflow} /></td>
                  <td className="px-6 py-4 text-center"><Cell val={excel} /></td>
                  <td className="px-6 py-4 text-center"><Cell val={trad} /></td>
                </tr>
              ))}
              {/* CTA row */}
              <tr className="bg-teal-600">
                <td className="px-6 py-4 text-white font-bold">MedFlow · Desde $29/mes · Sin contrato · 14 días gratis</td>
                <td colSpan={3} className="px-6 py-4 text-center">
                  <button
                    onClick={onOpenSignup}
                    className="px-6 py-2 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition text-sm cursor-pointer"
                  >
                    Comenzar ahora →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">◐ Funcionalidad parcial o requiere configuración avanzada</p>
      </div>
    </section>
  );
}
