import React, { useState, useMemo } from 'react';

export default function ROICalculator() {
  const [patientsPerDay, setPatientsPerDay] = useState(20);

  const { savedHours, extraAppointments, extraRevenue } = useMemo(() => {
    const savedHours       = Math.round(patientsPerDay * 6 * 22 / 60);
    const extraAppointments = Math.round(savedHours / 0.5);
    const extraRevenue      = (extraAppointments * 45).toLocaleString();
    return { savedHours, extraAppointments, extraRevenue };
  }, [patientsPerDay]);

  const stats = [
    { label: 'Horas ahorradas al mes',  value: `${savedHours}h`,         sub: 'en tareas administrativas',   color: 'teal' },
    { label: 'Citas extra posibles',     value: `+${extraAppointments}`,   sub: 'consultas adicionales/mes',   color: 'green' },
    { label: 'Ingreso extra estimado',   value: `$${extraRevenue}`,        sub: 'por mes (avg $45/consulta)',  color: 'blue' },
  ];

  const statColors = {
    teal:  { wrap: 'bg-teal-50  border-teal-100',  text: 'text-teal-700' },
    green: { wrap: 'bg-green-50 border-green-100', text: 'text-green-700' },
    blue:  { wrap: 'bg-blue-50  border-blue-100',  text: 'text-blue-700' },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Calculadora ROI
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ¿Cuánto ganarías con MedFlow?
          </h2>
          <p className="text-xl text-gray-500">Mueve el slider y descubre el impacto real en tu clínica.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="patients-slider" className="font-semibold text-gray-700">
                Pacientes que atiendes por día
              </label>
              <span className="text-3xl font-black text-teal-600">{patientsPerDay}</span>
            </div>
            <input
              id="patients-slider"
              type="range"
              min="1"
              max="80"
              value={patientsPerDay}
              onChange={(e) => setPatientsPerDay(Number(e.target.value))}
              className="w-full accent-teal-600 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1</span><span>80</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(({ label, value, sub, color }) => {
              const c = statColors[color];
              return (
                <div key={label} className={`rounded-xl p-5 text-center border ${c.wrap}`}>
                  <p className={`text-2xl font-black mb-1 ${c.text}`}>{value}</p>
                  <p className="font-semibold text-gray-800 text-sm">{label}</p>
                  <p className="text-xs text-gray-500 mt-1">{sub}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            * Estimación basada en reducción del 75% del tiempo administrativo promedio.
          </p>
        </div>
      </div>
    </section>
  );
}
