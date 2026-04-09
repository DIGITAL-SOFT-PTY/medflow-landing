import React from 'react';
import { Activity, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  const year = new Date().getFullYear();

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
            <p className="text-sm leading-relaxed max-w-xs mb-4">
              Sistema de gestión clínica diseñado para médicos y clínicas de Latinoamérica.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/medflow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/medflow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/medflow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
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

          {/* Recursos */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Blog médico</a></li>
              <li><a href="#" className="hover:text-white transition">Casos de éxito</a></li>
              <li><a href="#" className="hover:text-white transition">Guías gratuitas</a></li>
              <li><a href="#" className="hover:text-white transition">Webinars</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" aria-hidden="true" />
                <a href="mailto:digitalsoft507@gmail.com" className="hover:text-white transition">digitalsoft507@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-500" aria-hidden="true" />
                <a href="tel:+50762774449" className="hover:text-white transition">+507 6277-4449</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white transition">Términos</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Privacidad</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p>© {year} MedFlow. Hecho en Panamá 🇵🇦 para Latinoamérica.</p>
          <p className="text-gray-600 flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="text-gray-400 font-semibold">Digital Soft S.A.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
