import React from 'react';

const SPECIALTIES = [
  { icon: '🫀', name: 'Cardiología' },
  { icon: '🦷', name: 'Odontología' },
  { icon: '👁️', name: 'Oftalmología' },
  { icon: '🦴', name: 'Traumatología' },
  { icon: '🧠', name: 'Neurología' },
  { icon: '👶', name: 'Pediatría' },
  { icon: '💊', name: 'Medicina General' },
  { icon: '🩺', name: 'Dermatología' },
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
            Diseñado para clínicas médicas
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            MedFlow se adapta a múltiples especialidades médicas sin configuración compleja.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SPECIALTIES.map(({ icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md transition cursor-default"
            >
              <span className="text-3xl mb-3" aria-hidden="true">{icon}</span>
              <span className="font-semibold text-gray-800 text-sm text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
