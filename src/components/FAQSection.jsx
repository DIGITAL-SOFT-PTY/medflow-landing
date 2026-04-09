import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Preguntas frecuentes</h2>
          <p className="text-gray-500 text-lg">Respuestas directas. ¿Tienes otra duda? Escríbenos por WhatsApp — respondemos en minutos.</p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`bg-white rounded-xl border transition ${isOpen ? 'border-teal-400 shadow-md' : 'border-gray-200 hover:border-teal-300 hover:shadow-sm'}`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base">{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-teal-600">
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
