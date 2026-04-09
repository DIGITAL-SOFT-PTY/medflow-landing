import React, { useState, useRef } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';
import { useInView } from '../hooks/useInView';

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className={`bg-white rounded-xl border transition ${isOpen ? 'border-teal-400 shadow-md' : 'border-gray-200 hover:border-teal-300 hover:shadow-sm'}`}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-bold text-gray-900 text-sm sm:text-base">{item.q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-teal-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          <Plus size={18} />
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 200}px` : '0px' }}
      >
        <div className="px-6 pb-5">
          <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Preguntas frecuentes</h2>
          <p className="text-gray-500 text-lg">Respuestas directas. ¿Tienes otra duda? Escríbenos por WhatsApp — respondemos en minutos.</p>
        </div>

        <div ref={ref} className={`space-y-3 reveal ${inView ? 'visible' : ''}`}>
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
