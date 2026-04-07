import React from 'react';
import { Activity, Mail, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const APP_VERSION = '0.1.0';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10">
          {/* Branding */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="font-bold text-white text-lg">MedFlow</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Sistema de gestión clínica diseñado para médicos y clínicas de Latinoamérica.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('caracteristicas')} className="hover:text-white transition">
                  Características
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('precios')} className="hover:text-white transition">
                  Precios
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
              <li>
                <a href="mailto:info@medflow.com" className="hover:text-white transition">Contacto</a>
              </li>
              <li><a href="#" className="hover:text-white transition">Términos</a></li>
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" aria-hidden="true" />
                <a href="mailto:info@medflow.com" className="hover:text-white transition">info@medflow.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-500" aria-hidden="true" />
                <a href="tel:+50762774449" className="hover:text-white transition">+507 6277-4449</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p>© 2025 MedFlow. Hecho en Panamá 🇵🇦 para Latinoamérica.</p>
          <p className="text-gray-600 flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="text-gray-400 font-semibold">Digital Soft S.A.</span>
            <span className="ml-2 px-2 py-0.5 bg-gray-800 text-gray-500 rounded text-xs font-mono">
              v{APP_VERSION}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
