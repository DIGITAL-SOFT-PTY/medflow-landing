import React from 'react';
import { Check, ClipboardList, Calendar, DollarSign, Clock, BarChart3, Users } from 'lucide-react';

const PROBLEMS = [
  {
    Icon: ClipboardList, iconColor: 'text-red-500',    bg: 'bg-red-50    border-red-100',
    title: 'Expedientes en papel',
    problem: 'Historiales perdidos, información ilegible, archivadores que se llenan.',
    solution: 'Expediente digital centralizado, buscable en segundos.',
  },
  {
    Icon: Calendar,      iconColor: 'text-orange-500', bg: 'bg-orange-50  border-orange-100',
    title: 'Agenda desorganizada',
    problem: 'Pacientes sin recordatorios, citas duplicadas, huecos en el día.',
    solution: 'Agenda inteligente con recordatorios automáticos.',
  },
  {
    Icon: DollarSign,    iconColor: 'text-yellow-500', bg: 'bg-yellow-50  border-yellow-100',
    title: 'Cobros manuales',
    problem: 'Sin control de deudas, recibos a mano, facturas perdidas.',
    solution: 'Recibos al instante, reportes financieros automáticos.',
  },
  {
    Icon: Clock,         iconColor: 'text-purple-500', bg: 'bg-purple-50  border-purple-100',
    title: 'Horas en administración',
    problem: 'El médico promedio pierde 2.5 horas al día en papeleo, llamadas y cobros manuales.',
    solution: 'Todo automatizado. Solo 10 minutos de gestión al día.',
  },
  {
    Icon: BarChart3,     iconColor: 'text-blue-500',   bg: 'bg-blue-50    border-blue-100',
    title: 'Sin visibilidad financiera',
    problem: 'No sabes tus ingresos reales ni tendencias del mes.',
    solution: 'Dashboard con reportes diarios en 1 clic.',
  },
  {
    Icon: Users,         iconColor: 'text-teal-500',   bg: 'bg-teal-50    border-teal-100',
    title: 'Sala de espera caótica',
    problem: 'Pacientes que no saben cuánto esperar, recepciones colapsadas, primeras impresiones arruinadas.',
    solution: 'Sistema de turnos y sala de espera digital.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">¿Te suena familiar?</h2>
          <p className="text-xl text-gray-500">Estos son los problemas más comunes en clínicas de Latinoamérica. MedFlow los resuelve desde el día 1.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map(({ Icon, iconColor, bg, title, problem, solution }) => (
            <div key={title} className={`bg-white rounded-xl p-7 border ${bg} hover:shadow-lg transition`}>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${bg}`}>
                <Icon className={`w-8 h-8 ${iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm mb-3">{problem}</p>
              <p className="text-teal-700 font-semibold text-sm flex items-center gap-1.5">
                <Check className="w-4 h-4" /> {solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
