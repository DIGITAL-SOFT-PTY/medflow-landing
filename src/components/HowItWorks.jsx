import React from 'react';
import { UserPlus, Upload, LayoutDashboard } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    Icon: UserPlus,
    title: 'Crea tu cuenta',
    desc: 'Crea tu cuenta con tu email. Sin tarjeta, sin instalaciones. Tu clínica lista en 2 minutos.',
    timing: '⏱ 2 min',
  },
  {
    step: '02',
    Icon: Upload,
    title: 'Carga tus pacientes',
    desc: 'Importa tus pacientes desde Excel en 1 clic — o empieza con los que lleguen hoy. Te guiamos en cada paso.',
    timing: '⏱ 5 min',
  },
  {
    step: '03',
    Icon: LayoutDashboard,
    title: 'Gestiona todo',
    desc: 'Agenda citas, cobra, escribe notas clínicas y ve tus reportes — todo desde una sola pantalla, el mismo día.',
    timing: '⏱ Desde el día 1',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Proceso simple
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            De cero a tu clínica digital en 5 minutos
          </h2>
          <p className="text-xl text-gray-500">Sin instalaciones. Sin técnicos. Sin complicaciones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-teal-100 z-0" aria-hidden="true" />
          {STEPS.map(({ step, Icon, title, desc, timing }) => (
            <div key={step} className="relative z-10 flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-teal-200 transition">
              <div className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-md" aria-hidden="true">
                <Icon className="w-7 h-7" />
              </div>
              <span className="text-xs font-black text-teal-400 tracking-widest mb-2">PASO {step}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <span className="mt-auto inline-block px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold">
                {timing}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
