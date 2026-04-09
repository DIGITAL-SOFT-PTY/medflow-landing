import React, { useState } from 'react';
import { Check, Shield } from 'lucide-react';
import { PLANS } from '../data/pricing';

export default function PricingPlans({ onOpenSignup, onOpenDemo }) {
  const [billing, setBilling] = useState('monthly');
  const isYearly = billing === 'yearly';

  const handleCta = (ctaAction) => {
    if (ctaAction === 'signup')  return onOpenSignup();
    if (ctaAction === 'demo')    return onOpenDemo();
    if (ctaAction === 'contact') {
      window.location.href = 'mailto:digitalsoft507@gmail.com?subject=Plan%20Empresarial%20MedFlow';
    }
  };

  return (
    <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Planes simples y transparentes
          </h2>
          <p className="text-xl text-gray-500">Mes a mes. Sin contratos. Sin sorpresas.</p>

          {/* Toggle mensual / anual */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Mensual</span>
            <button
              onClick={() => setBilling(isYearly ? 'monthly' : 'yearly')}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-teal-600' : 'bg-gray-200'}`}
              aria-label="Cambiar entre facturación mensual y anual"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${isYearly ? 'translate-x-7' : ''}`}
              />
            </button>
            <span className={`text-sm font-semibold ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
              Anual
            </span>
            {isYearly && (
              <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">
                2 meses gratis
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            plan.featured ? (
              <div key={plan.id} className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-2xl p-8 shadow-2xl md:scale-105 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">
                    {plan.badge}
                  </span>
                  {plan.popularBadge && (
                    <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-200 rounded-full text-xs font-semibold">
                      🏆 {plan.popularBadge}
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                  <p className="text-teal-200 text-sm">{plan.desc}</p>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-black">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-teal-200 ml-1">{plan.period}</span>
                </div>
                {isYearly && plan.yearlySaving && (
                  <p className="text-teal-200 text-xs mb-5">Ahorras {plan.yearlySaving} · Facturado anualmente</p>
                )}
                {!isYearly && <div className="mb-5" />}
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
              <div key={plan.id} className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
                <div className="mb-6">
                  <h3 className="text-xl font-black text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.desc}</p>
                </div>
                <div className="mb-2">
                  {plan.period ? (
                    <>
                      <span className="text-5xl font-black text-gray-900">
                        {isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price}
                      </span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-black text-gray-900">{plan.price}</span>
                  )}
                </div>
                {isYearly && plan.yearlySaving && (
                  <p className="text-teal-600 text-xs mb-5">Ahorras {plan.yearlySaving} · Facturado anualmente</p>
                )}
                {(!isYearly || !plan.yearlySaving) && <div className="mb-5" />}
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

        {/* Garantía */}
        <div className="mt-10 flex items-center justify-center gap-3 px-6 py-4 bg-teal-50 border border-teal-200 rounded-2xl">
          <Shield className="w-6 h-6 text-teal-600 flex-shrink-0" />
          <p className="text-gray-700 text-sm font-medium">
            <span className="font-bold text-gray-900">Garantía de 30 días</span> — Si no estás satisfecho, te devolvemos tu dinero. Sin preguntas. Sin trámites.
          </p>
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Todos los planes incluyen 14 días de prueba gratis · Cancela cuando quieras · Sin cargos ocultos
        </p>
      </div>
    </section>
  );
}
