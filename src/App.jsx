import React, { useState } from 'react';
import { Check, Users, Calendar, DollarSign, BarChart3, Phone, Mail, MapPin, ArrowRight, Zap, Menu, X, ChevronDown } from 'lucide-react';

export default function MedFlowLanding() {
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Manejo de signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupEmail) {
      console.log('✅ Email capturado:', signupEmail);
      setSubmitStatus('success');
      setSignupEmail('');
      setTimeout(() => setShowSignupModal(false), 2000);
    }
  };

  // Manejo de demo
  const handleDemoRequest = (e) => {
    e.preventDefault();
    if (demoEmail) {
      console.log('✅ Demo solicitada:', demoEmail);
      setSubmitStatus('demo');
      setDemoEmail('');
      setTimeout(() => setShowDemoModal(false), 2000);
    }
  };

  // Manejo de email en CTA final
  const handleFinalCTA = (e) => {
    e.preventDefault();
    if (email) {
      console.log('✅ Email capturado (CTA final):', email);
      alert(`¡Perfecto! Te enviaremos un link para comenzar a: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">MedFlow</div>
              <div className="text-xs text-blue-600 font-semibold">Gestión de Clínicas</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-700">
            <button onClick={() => scrollToSection('caracteristicas')} className="hover:text-blue-600 transition">
              Características
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="hover:text-blue-600 transition">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('precios')} className="hover:text-blue-600 transition">
              Precios
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-blue-600 transition">
              FAQ
            </button>
          </div>

          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => alert('Ir a login: login.medflow.com')}
              className="px-6 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition"
            >
              Ingresar
            </button>
            <button 
              onClick={() => setShowDemoModal(true)}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('caracteristicas')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              >
                Características
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('precios')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              >
                Precios
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
              >
                FAQ
              </button>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="w-full px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Ver Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                🎯 Solución N°1 en Panamá y Latinoamérica
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Gestiona tu clínica en minutos, no horas
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                MedFlow automatiza pacientes, citas, cobros y reportes. Diseñado específicamente para clínicas pequeñas y medianas que quieren crecer sin complicaciones.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Prueba gratis 14 días - Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Setup en menos de 5 minutos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">+500 clínicas activas en Latinoamérica</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={() => setShowSignupModal(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Comenzar Gratis <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setShowDemoModal(true)}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition"
                >
                  Ver Demo
                </button>
              </div>

              <p className="text-sm text-gray-500 pt-4">
                ⭐ 4.9/5 estrellas en Google • Soporte en español 24/7
              </p>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">📅 Agenda - Hoy</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div>
                        <p className="font-semibold text-gray-900">Juan Pérez</p>
                        <p className="text-sm text-gray-600">Consulta General</p>
                      </div>
                      <span className="text-blue-600 font-bold">10:00</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div>
                        <p className="font-semibold text-gray-900">María González</p>
                        <p className="text-sm text-gray-600">Seguimiento</p>
                      </div>
                      <span className="text-green-600 font-bold">11:30</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <div>
                        <p className="font-semibold text-gray-900">Carlos López</p>
                        <p className="text-sm text-gray-600">Primera Cita</p>
                      </div>
                      <span className="text-orange-600 font-bold">14:00</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Pacientes Hoy</p>
                    <p className="text-3xl font-bold text-blue-600">12</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Ingresos</p>
                    <p className="text-3xl font-bold text-green-600">$1.8K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESUELVE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Los problemas que enfrentas cada día
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Y cómo MedFlow los resuelve en minutos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">😫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión Manual de Pacientes</h3>
              <p className="text-gray-600 mb-4">Cuadernos, Excel, teléfono... información desorganizada y pérdidas.</p>
              <p className="text-blue-600 font-semibold">✓ MedFlow: Base de datos centralizada y segura</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agenda Caótica</h3>
              <p className="text-gray-600 mb-4">Pacientes olvidados, citas perdidas, doble reservas constantes.</p>
              <p className="text-blue-600 font-semibold">✓ MedFlow: Agenda automática con recordatorios</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cobros Desorganizados</h3>
              <p className="text-gray-600 mb-4">No sabes cuánto facturaste, pacientes con deudas pendientes.</p>
              <p className="text-blue-600 font-semibold">✓ MedFlow: Recibos automáticos y reportes financieros</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pérdida de Tiempo</h3>
              <p className="text-gray-600 mb-4">Gastan 2-3 horas diarias en tareas administrativas.</p>
              <p className="text-blue-600 font-semibold">✓ MedFlow: Automatiza todo, 10 minutos/día</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sin Control Financiero</h3>
              <p className="text-gray-600 mb-4">No sabes si estás ganando o perdiendo dinero realmente.</p>
              <p className="text-blue-600 font-semibold">✓ MedFlow: Reportes diarios en 1 click</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sala de Espera Confusa</h3>
              <p className="text-gray-600 mb-4">Caos, pacientes esperando sin saber cuándo los llamarán.</p>
              <p className="text-blue-600 font-semibold">✓ MedFlow: Sistema de turnos inteligente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Todo lo que necesitas para crecer
            </h2>
            <p className="text-xl text-gray-600">Sin complicaciones innecesarias</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Gestión de Pacientes</h3>
              <p className="text-gray-700 text-sm">Base de datos centralizada, historial completo, búsqueda rápida</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition">
              <Calendar className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Agenda Inteligente</h3>
              <p className="text-gray-700 text-sm">Citas automáticas, recordatorios SMS, control de disponibilidad</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition">
              <DollarSign className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cobros & Recibos</h3>
              <p className="text-gray-700 text-sm">Genera recibos al instante, controla deudas, reportes financieros</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition">
              <BarChart3 className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Reportes Diarios</h3>
              <p className="text-gray-700 text-sm">Dashboard con métricas, ingresos, pacientes, tendencias</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:shadow-lg transition">
              <Zap className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Sala de Espera</h3>
              <p className="text-gray-700 text-sm">Sistema de turnos, pantalla de espera, llamada inteligente</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 hover:shadow-lg transition">
              <Zap className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Notas Clínicas</h3>
              <p className="text-gray-700 text-sm">Notas simples, acceso rápido, historial del paciente</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200 hover:shadow-lg transition">
              <Users className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Multi-Usuario</h3>
              <p className="text-gray-700 text-sm">Médicos, recepcionistas, administradores con roles distintos</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200 hover:shadow-lg transition">
              <Zap className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Soporte 24/7</h3>
              <p className="text-gray-700 text-sm">Chat en vivo, email, teléfono - En español siempre</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            Clínicas que ya transformaron su negocio
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">👨‍⚕️</div>
                <div>
                  <p className="font-bold text-white">Dr. Carlos Mendoza</p>
                  <p className="text-gray-400 text-sm">Clínica Vida - Panamá</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Reduje en 60% el tiempo administrativo. Ahora veo más pacientes y gano más dinero. MedFlow fue la mejor inversión para mi clínica."
              </p>
              <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">👩‍⚕️</div>
                <div>
                  <p className="font-bold text-white">Dra. María González</p>
                  <p className="text-gray-400 text-sm">Clínica Dental Plus - Panamá</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Las pacientes reciben recordatorios automáticos. Pasé de 30% a 95% de asistencia. Increíble. Recomiendo MedFlow a todas mis colegas."
              </p>
              <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">👨‍💼</div>
                <div>
                  <p className="font-bold text-white">Juan Pérez</p>
                  <p className="text-gray-400 text-sm">Centro Médico Aurora - Colón</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Los reportes diarios me muestran exactamente cuánto gané. Ahora puedo tomar decisiones inteligentes. Vale cada dólar."
              </p>
              <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <p className="text-4xl font-black text-blue-400">500+</p>
              <p className="text-gray-400 mt-2">Clínicas activas</p>
            </div>
            <div>
              <p className="text-4xl font-black text-green-400">50K+</p>
              <p className="text-gray-400 mt-2">Pacientes gestionados</p>
            </div>
            <div>
              <p className="text-4xl font-black text-orange-400">$10M+</p>
              <p className="text-gray-400 mt-2">Facturados por clientes</p>
            </div>
            <div>
              <p className="text-4xl font-black text-purple-400">4.9★</p>
              <p className="text-gray-400 mt-2">Rating en Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Planes simples y transparentes
            </h2>
            <p className="text-xl text-gray-600">Cancela cuando quieras. Sin contratos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* PLAN 1 */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Emprendedor</h3>
              <p className="text-gray-600 text-sm mb-6">Para clínicas nuevas (1-500 pacientes)</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-gray-900">$29</span>
                <span className="text-gray-600">/mes</span>
              </div>

              <button 
                onClick={() => setShowSignupModal(true)}
                className="w-full py-3 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition mb-8 cursor-pointer"
              >
                Comenzar
              </button>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hasta 500 pacientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Agenda básica</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reportes básicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
            </div>

            {/* PLAN 2 - DESTACADO */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border-2 border-blue-600 p-8 shadow-xl scale-105">
              <div className="inline-block mb-4 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Profesional</h3>
              <p className="text-gray-600 text-sm mb-6">Para clínicas medianas (500-2000 pacientes)</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-gray-900">$79</span>
                <span className="text-gray-600">/mes</span>
              </div>

              <button 
                onClick={() => setShowDemoModal(true)}
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition mb-8 cursor-pointer"
              >
                Solicitar Demo
              </button>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hasta 2000 pacientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Agenda avanzada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cobros y recibos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Notas clínicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reportes completos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Soporte prioritario</span>
                </li>
              </ul>
            </div>

            {/* PLAN 3 */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Empresarial</h3>
              <p className="text-gray-600 text-sm mb-6">Para múltiples sucursales</p>

              <div className="mb-8">
                <span className="text-3xl font-black text-gray-900">Personalizado</span>
              </div>

              <button 
                onClick={() => alert('Contacta a: +507 600-1234 o info@medflow.com')}
                className="w-full py-3 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition mb-8 cursor-pointer"
              >
                Contactar Ventas
              </button>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pacientes ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-clínica</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Impresoras térmicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integraciones custom</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Account Manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Capacitación incluida</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 text-lg">
            ✓ Todos incluyen 14 días de prueba gratis • ✓ Cancela cuando quieras • ✓ Sin sorpresas
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
            Preguntas frecuentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">¿Cuánto tiempo toma implementar MedFlow?</h3>
              <p className="text-gray-600">Menos de 5 minutos. Creas tu cuenta, carga tus datos y listo. Algunos clientes cargan 100+ pacientes en su primer día.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">¿Puedo importar mis pacientes actuales?</h3>
              <p className="text-gray-600">Sí. Podemos importar desde Excel, Google Sheets o bases de datos. Nuestro equipo te ayuda en todo.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">¿Qué pasa si cancelo?</h3>
              <p className="text-gray-600">Puedes exportar todos tus datos. No hay penalizaciones. Puedes volver cuando quieras sin problema.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">¿Es seguro mis datos?</h3>
              <p className="text-gray-600">100% seguro. Encriptación de nivel bancario. Servidores en la nube con redundancia. Backup automático diario.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">¿Tienen integraciones con otros sistemas?</h3>
              <p className="text-gray-600">Sí. Integramos con impresoras, SMS, email, WhatsApp. Y si necesitas algo custom, nuestro equipo lo hace.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">¿Necesito contratos largos?</h3>
              <p className="text-gray-600">No. Mes a mes. Cancela cuando quieras. No creemos en tratar clientes como cautivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Estás listo para simplificar tu clínica?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Únete a 500+ clínicas en Latinoamérica. Prueba gratis por 14 días.
          </p>

          <form onSubmit={handleFinalCTA} className="flex flex-col sm:flex-row gap-3 justify-center items-center bg-white/20 rounded-xl p-4 backdrop-blur">
            <input
              type="email"
              placeholder="tu@clinica.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none min-w-0"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition whitespace-nowrap cursor-pointer"
            >
              Comenzar Ahora
            </button>
          </form>

          <p className="text-blue-100 text-sm mt-6">
            No requiere tarjeta de crédito. Acceso completo por 14 días.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
                <span className="font-bold text-white">MedFlow</span>
              </div>
              <p className="text-sm">Gestión de clínicas para Latinoamérica.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('caracteristicas')} className="hover:text-white transition">Características</button></li>
                <li><button onClick={() => scrollToSection('precios')} className="hover:text-white transition">Precios</button></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><button onClick={() => alert('Contacto: +507 600-1234')} className="hover:text-white transition">Contacto</button></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@medflow.com">info@medflow.com</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <button onClick={() => alert('Llamar a: +507 600-1234')}>+507 600-1234</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 MedFlow. Hecho en Panamá 🇵🇦 con ❤️ para Latinoamérica.</p>
          </div>
        </div>
      </footer>

      {/* MODAL - SIGNUP */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Comienza gratis en 2 minutos</h2>
            <p className="text-gray-600 mb-6">Sin tarjeta de crédito. 14 días de prueba completa.</p>

            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="email"
                placeholder="tu@clinica.com"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <input
                type="text"
                placeholder="Nombre de tu clínica"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Crear Cuenta Gratis
              </button>
            </form>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-4 font-semibold">✅ ¡Revisa tu email!</p>
            )}

            <button
              onClick={() => setShowSignupModal(false)}
              className="mt-4 w-full text-gray-600 hover:text-gray-900 font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* MODAL - DEMO */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Agendar Demo</h2>
            <p className="text-gray-600 mb-6">Un especialista te mostrará cómo funciona MedFlow (15 minutos).</p>

            <form onSubmit={handleDemoRequest} className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <input
                type="email"
                placeholder="tu@clinica.com"
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <input
                type="tel"
                placeholder="+507 ____-____"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Confirmar Demo
              </button>
            </form>

            {submitStatus === 'demo' && (
              <p className="text-green-600 text-center mt-4 font-semibold">✅ ¡Te llamaremos pronto!</p>
            )}

            <button
              onClick={() => setShowDemoModal(false)}
              className="mt-4 w-full text-gray-600 hover:text-gray-900 font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
