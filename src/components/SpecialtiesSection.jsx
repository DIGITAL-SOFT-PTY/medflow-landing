import React from 'react';

const SPECIALTIES = [
  { icon: '🫀', name: 'Cardiología',      note: 'Historial cardiovascular estructurado' },
  { icon: '🦷', name: 'Odontología',      note: 'Odontograma digital + planes de tratamiento' },
  { icon: '👁️', name: 'Oftalmología',     note: 'Registro de prescripciones ópticas' },
  { icon: '🦴', name: 'Traumatología',    note: 'Seguimiento de rehabilitación' },
  { icon: '🧠', name: 'Neurología',       note: 'Historial de episodios y medicamentos' },
  { icon: '👶', name: 'Pediatría',        note: 'Curvas de crecimiento y vacunación' },
  { icon: '💊', name: 'Medicina General', note: 'Consulta rápida y prescripciones' },
  { icon: '🩺', name: 'Dermatología',     note: 'Seguimiento fotográfico de lesiones' },
];

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Adaptado para tu especialidad
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Para cualquier especialidad médica
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            De pediatría a cardiología. MedFlow ya viene configurado para tu consulta — sin setup técnico.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SPECIALTIES.map(({ icon, name, note }) => (
            <div
              key={name}
              className="flex flex-col items-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md transition cursor-default"
            >
              <span className="text-3xl mb-3" aria-hidden="true">{icon}</span>
              <span className="font-semibold text-gray-800 text-sm text-center mb-1">{name}</span>
              <span className="text-xs text-gray-400 text-center leading-tight">{note}</span>
            </div>
          ))}

          {/* "+ 20 especialidades más" card */}
          <div className="flex flex-col items-center justify-center p-5 bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition cursor-default col-span-2 md:col-span-1">
            <span className="text-2xl font-black text-teal-600 mb-1">+20</span>
            <span className="font-semibold text-gray-600 text-sm text-center">especialidades más</span>
            <span className="text-xs text-gray-400 text-center mt-1">Configurable para cualquier consulta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
