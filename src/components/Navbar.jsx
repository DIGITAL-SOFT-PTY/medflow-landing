import React, { useState, useEffect } from 'react';
import { Activity, X, Menu } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const NAV_LINKS = [
  { label: 'Características', id: 'caracteristicas' },
  { label: 'Especialidades',  id: 'especialidades' },
  { label: 'Testimonios',     id: 'testimonios' },
  { label: 'Precios',         id: 'precios' },
  { label: 'Reportes',        id: 'reportes' },
  { label: 'Equipo',          id: 'equipo' },
  { label: 'FAQ',             id: 'faq' },
];

const SPY_IDS = ['hero', 'caracteristicas', 'especialidades', 'testimonios', 'precios', 'reportes', 'equipo', 'faq'];

export default function Navbar({ showBanner, setShowBanner, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    SPY_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-teal-100 shadow-sm z-50">
      {showBanner && (
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center py-2 px-10 text-sm font-medium relative">
          🎉 Oferta de lanzamiento —{' '}
          <span className="font-bold">30% off los primeros 3 meses</span> · Solo para las próximas 20 clínicas
          <button
            onClick={() => setShowBanner(false)}
            aria-label="Cerrar banner de oferta"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-md">
            <Activity className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <div className="font-bold text-xl text-gray-900 leading-tight">MedFlow</div>
            <div className="text-xs text-teal-600 font-semibold tracking-wide">GESTIÓN DE CLÍNICAS</div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-5 text-sm font-medium text-gray-600">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`hover:text-teal-600 transition pb-0.5 border-b-2 ${
                activeSection === id ? 'border-teal-600 text-teal-600' : 'border-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <a
            href="https://login.medflow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-teal-700 font-medium hover:bg-teal-50 rounded-lg transition border border-teal-200"
          >
            Ingresar
          </a>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition shadow-sm cursor-pointer"
          >
            Solicitar Demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg transition text-sm ${
                  activeSection === id
                    ? 'bg-teal-50 text-teal-700 font-semibold'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => { onOpenDemo(); setMobileMenuOpen(false); }}
              className="w-full mt-2 px-6 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition cursor-pointer"
            >
              Solicitar Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
