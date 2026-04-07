import React from 'react';
import { Check, Activity, Heart, ArrowRight, Stethoscope } from 'lucide-react';

const APPOINTMENTS = [
  { name: 'Clínica San Miguel',    type: 'Pediatría',         time: '10:00', color: 'teal' },
  { name: 'Clínica Dental Plus',   type: 'Odontología',       time: '11:30', color: 'green' },
  { name: 'Centro Médico Aurora',  type: 'Medicina General',  time: '14:00', color: 'orange' },
];

const APPT_COLORS = {
  teal:   { wrap: 'bg-teal-50   border-teal-500',   text: 'text-teal-600' },
  green:  { wrap: 'bg-green-50  border-green-500',  text: 'text-green-600' },
  orange: { wrap: 'bg-orange-50 border-orange-400', text: 'text-orange-500' },
};

const HERO_BULLETS = [
  'Prueba gratis 14 días — Sin tarjeta de crédito',
  'Implementación en menos de 5 minutos',
  '+500 clínicas activas en Panamá y Latinoamérica',
];

export default function HeroBanner({ showBanner, onOpenSignup, onOpenDemo }) {
  const today = new Date().toLocaleDateString('es-PA', {
    weekday: 'long', day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <section
      id="hero"
      className={`${showBanner ? 'pt-36' : 'pt-28'} pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-cyan-50`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-bold">
              <Activity className="w-4 h-4" />
              Solución N°1 para clínicas en Latinoamérica
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              El sistema que tu clínica merece
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              MedFlow digitaliza y automatiza la gestión de tu clínica: pacientes, citas, cobros,
              historial clínico y reportes — todo en un solo lugar.
            </p>

            <div className="space-y-3">
              {HERO_BULLETS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-teal-600" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenSignup}
                className="px-8 py-4 bg-teal-600 text-white font-bold text-lg rounded-xl hover:bg-teal-700 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Comenzar Gratis <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onOpenDemo}
                className="px-8 py-4 border-2 border-teal-200 text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition"
              >
                Ver Demo
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart className="w-4 h-4 text-red-400" />
              <span>4.9/5 estrellas — Soporte médico en español 24/7</span>
            </div>
          </div>

          {/* Right — Dashboard preview */}
          <div className="relative">
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-60" aria-hidden="true" />
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-100 rounded-full opacity-60" aria-hidden="true" />

            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Stethoscope className="w-5 h-5" />
                  <span>Panel Clínico — Hoy</span>
                </div>
                <span className="text-teal-200 text-sm">{today}</span>
              </div>

              <div className="p-5 space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-teal-50 rounded-lg border border-teal-100">
                    <p className="text-2xl font-black text-teal-700">12</p>
                    <p className="text-xs text-gray-500 mt-0.5">Citas hoy</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                    <p className="text-2xl font-black text-green-700">$1.8K</p>
                    <p className="text-xs text-gray-500 mt-0.5">Ingresos</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-2xl font-black text-blue-700">3</p>
                    <p className="text-xs text-gray-500 mt-0.5">En espera</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Próximas citas</p>
                  <div className="space-y-2">
                    {APPOINTMENTS.map((appt) => {
                      const c = APPT_COLORS[appt.color];
                      return (
                        <div key={appt.name} className={`flex items-center justify-between p-3 rounded-lg border-l-4 ${c.wrap}`}>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{appt.name}</p>
                            <p className="text-xs text-gray-500">{appt.type}</p>
                          </div>
                          <span className={`font-bold text-sm ${c.text}`}>{appt.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
