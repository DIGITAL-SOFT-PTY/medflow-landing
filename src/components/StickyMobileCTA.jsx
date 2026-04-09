import React, { useState, useEffect } from 'react';

export default function StickyMobileCTA({ onOpenSignup, onOpenDemo }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-lg transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <button
        onClick={onOpenSignup}
        className="flex-1 py-2.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition text-sm cursor-pointer"
      >
        Comenzar gratis
      </button>
      <button
        onClick={onOpenDemo}
        className="flex-1 py-2.5 border-2 border-teal-200 text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition text-sm cursor-pointer"
      >
        Ver Demo
      </button>
    </div>
  );
}
