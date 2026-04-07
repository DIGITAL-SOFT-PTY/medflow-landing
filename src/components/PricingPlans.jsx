import React from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../data/pricing';

const CONTACT_INFO = '+507 6277-4449 o digitalsoft507@gmail.com';

export default function PricingPlans({ onOpenSignup, onOpenDemo }) {
  const handleCta = (ctaAction) => {
    if (ctaAction === 'signup')  return onOpenSignup();
    if (ctaAction === 'demo')    return onOpenDemo();
    if (ctaAction === 'contact') {
      window.location.href = `mailto:digitalsoft507@gmail.com?subject=Plan Empresarial MedFlow`;
    }
  };

  return (
    <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Planes simples y transparentes
          </h2>
          <p className="text-xl text-gray-500">Mes a mes. Sin contratos. Sin sorpresas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            plan.featured ? (
              /* Featured plan */
              <div key={plan.id} className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-2xl p-8 shadow-2xl md:scale-105 text-white">
                <div className="inline-block mb-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">
                  {plan.badge}
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                  <p className="text-teal-200 text-sm">{plan.desc}</p>
                </div>
                <div className="mb-7">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-teal-200 ml-1">{plan.period}</span>
                </div>
                <button
                  onClick={() => handleCta(plan.ctaAction)}
                  className="w-full py-3 bg-white text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition mb-7 cursor-pointer"
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-teal-200 flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-teal-100">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              /* Standard plan */
              <div key={plan.id} className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
                <div className="mb-6">
                  <h3 className="text-xl font-black text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.desc}</p>
                </div>
                <div className="mb-7">
                  {plan.period
                    ? <><span className="text-5xl font-black text-gray-900">{plan.price}</span><span className="text-gray-500 ml-1">{plan.period}</span></>
                    : <span className="text-3xl font-black text-gray-900">{plan.price}</span>
                  }
                </div>
                <button
                  onClick={() => handleCta(plan.ctaAction)}
                  className="w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition mb-7 cursor-pointer"
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          Todos los planes incluyen 14 días de prueba gratis · Cancela cuando quieras · Sin cargos ocultos
        </p>
      </div>
    </section>
  );
}
