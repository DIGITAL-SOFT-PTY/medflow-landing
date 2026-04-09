import React from 'react';
import { useInView } from '../hooks/useInView';

const BAR_DATA = [
  { month: 'Oct', value: 45, pct: 0.45 },
  { month: 'Nov', value: 58, pct: 0.58 },
  { month: 'Dic', value: 52, pct: 0.52 },
  { month: 'Ene', value: 67, pct: 0.67 },
  { month: 'Feb', value: 78, pct: 0.78 },
  { month: 'Mar', value: 92, pct: 0.92 },
];

const LINE_POINTS = [
  [10, 132, '$1.2K'],
  [66, 112, '$1.5K'],
  [122, 120, '$1.4K'],
  [178, 90,  '$1.7K'],
  [234, 60,  '$2.1K'],
  [290, 28,  '$2.5K'],
];

const METRIC_COLORS = {
  teal:   'text-teal-600',
  green:  'text-green-600',
  blue:   'text-blue-600',
  purple: 'text-purple-600',
};

const KPI_STATS = [
  { label: 'Tasa de retención', value: '94%',  color: 'teal' },
  { label: 'Citas cumplidas',   value: '96%',  color: 'green' },
  { label: 'Tiempo de espera',  value: '-65%', color: 'blue' },
  { label: 'ROI promedio',      value: '3.2x', color: 'purple' },
];

export default function ReportsSection() {
  const [ref, inView] = useInView();

  return (
    <section id="reportes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${inView ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Reportes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Datos que impulsan decisiones</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Visualiza el rendimiento de tu clínica en tiempo real. Sin hojas de cálculo, sin esfuerzo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar chart */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-bold text-gray-900">Atenciones mensuales</p>
                <p className="text-sm text-gray-500">Últimos 6 meses</p>
              </div>
              <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold">+38% ↑</span>
            </div>
            <svg viewBox="0 0 300 165" className="w-full" role="img" aria-label="Gráfico de atenciones mensuales">
              {[130, 90, 50].map(y => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#f3f4f6" strokeWidth="1" />
              ))}
              {BAR_DATA.map((d, i) => {
                const x = i * 50 + 8;
                const barH = d.pct * 120;
                const y = 135 - barH;
                return (
                  <g key={d.month}>
                    <rect x={x} y={y} width="30" height={barH} rx="4" fill={i === 5 ? '#0d9488' : '#99f6e4'} />
                    <text x={x + 15} y="152" textAnchor="middle" fontSize="11" fill="#6b7280">{d.month}</text>
                    <text x={x + 15} y={y - 5} textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">{d.value}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Line chart */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-bold text-gray-900">Ingresos mensuales</p>
                <p className="text-sm text-gray-500">Últimos 6 meses (USD)</p>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold">+104% ↑</span>
            </div>
            <svg viewBox="0 0 300 165" className="w-full" role="img" aria-label="Gráfico de ingresos mensuales">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#0d9488" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 70, 110].map(y => (
                <line key={y} x1="10" y1={y} x2="290" y2={y} stroke="#f3f4f6" strokeWidth="1" />
              ))}
              <path
                d="M 10,132 L 66,112 L 122,120 L 178,90 L 234,60 L 290,28 L 290,152 L 10,152 Z"
                fill="url(#areaGrad)"
              />
              <polyline
                points="10,132 66,112 122,120 178,90 234,60 290,28"
                fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round"
              />
              {LINE_POINTS.map(([x, y, label], i) => (
                <g key={label}>
                  <circle cx={x} cy={y} r="4" fill="#0d9488" />
                  {i === LINE_POINTS.length - 1 && (
                    <text x={x} y={y - 10} textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">{label}</text>
                  )}
                </g>
              ))}
              {['Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar'].map((m, i) => (
                <text key={m} x={10 + i * 56} y="162" textAnchor="middle" fontSize="11" fill="#6b7280">{m}</text>
              ))}
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {KPI_STATS.map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
              <p className={`text-2xl font-black ${METRIC_COLORS[color]}`}>{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
