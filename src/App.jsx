import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import {
  Check, Users, Calendar, DollarSign, BarChart3, Phone, Mail,
  ArrowRight, Menu, X, Stethoscope, Heart, Activity, ClipboardList,
  Shield, FileText, Clock, Zap, Plus
} from 'lucide-react';

const APP_VERSION = '0.1.0';

export default function MedFlowLanding() {
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [demoName, setDemoName] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [showBanner, setShowBanner] = useState(true);
  const [patientsPerDay, setPatientsPerDay] = useState(20);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true); setErrorMessage('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_email: signupEmail, clinic_name: clinicName || 'No especificado',
          form_type: 'Signup — Crear Cuenta', reply_to: signupEmail },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success'); setSignupEmail(''); setClinicName('');
      setTimeout(() => setShowSignupModal(false), 2000);
    } catch { setErrorMessage('Hubo un error al enviar. Intenta de nuevo.'); }
    finally { setIsLoading(false); }
  };

  const handleDemoRequest = async (e) => {
    e.preventDefault();
    setIsLoading(true); setErrorMessage('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_DEMO_ID,
        { from_name: demoName, from_email: demoEmail,
          phone: demoPhone || 'No proporcionado', reply_to: demoEmail },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('demo'); setDemoEmail(''); setDemoName(''); setDemoPhone('');
      setTimeout(() => setShowDemoModal(false), 2000);
    } catch { setErrorMessage('Hubo un error al enviar. Intenta de nuevo.'); }
    finally { setIsLoading(false); }
  };

  const handleFinalCTA = async (e) => {
    e.preventDefault();
    setIsLoading(true); setErrorMessage('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_email: email, clinic_name: 'No especificado',
          form_type: 'CTA Final — Comenzar Ahora', reply_to: email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setEmail(''); setSubmitStatus('cta-success');
    } catch { setErrorMessage('Hubo un error. Por favor intenta de nuevo.'); }
    finally { setIsLoading(false); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white border-b border-teal-100 shadow-sm z-50">
        {showBanner && (
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center py-2 px-10 text-sm font-medium relative">
            🎉 Oferta de lanzamiento — <span className="font-bold">30% off los primeros 3 meses</span> · Termina el 30 Abr
            <button onClick={() => setShowBanner(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
              <X size={14} />
            </button>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            {/* Logo con cruz médica */}
            <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-md">
              <Plus className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900 leading-tight">MedFlow</div>
              <div className="text-xs text-teal-600 font-semibold tracking-wide">GESTIÓN CLÍNICA</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            <button onClick={() => scrollToSection('caracteristicas')} className="hover:text-teal-600 transition">
              Características
            </button>
            <button onClick={() => scrollToSection('especialidades')} className="hover:text-teal-600 transition">
              Especialidades
            </button>
            <button onClick={() => scrollToSection('precios')} className="hover:text-teal-600 transition">
              Precios
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-teal-600 transition">
              FAQ
            </button>
          </div>

          <div className="hidden md:flex gap-3 items-center">
            <button
              onClick={() => alert('Ir a login: login.medflow.com')}
              className="px-5 py-2 text-teal-700 font-medium hover:bg-teal-50 rounded-lg transition border border-teal-200"
            >
              Ingresar
            </button>
            <button
              onClick={() => setShowDemoModal(true)}
              className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition shadow-sm"
            >
              Solicitar Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              {[
                { label: 'Características', id: 'caracteristicas' },
                { label: 'Especialidades', id: 'especialidades' },
                { label: 'Precios', id: 'precios' },
                { label: 'FAQ', id: 'faq' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setShowDemoModal(true)}
                className="w-full mt-2 px-6 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
              >
                Solicitar Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className={`${showBanner ? 'pt-36' : 'pt-28'} pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-cyan-50`}>
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
                MedFlow digitaliza y automatiza la gestión de tu clínica: pacientes, citas, cobros, historial clínico y reportes — todo en un solo lugar.
              </p>

              <div className="space-y-3">
                {[
                  'Prueba gratis 14 días — Sin tarjeta de crédito',
                  'Implementación en menos de 5 minutos',
                  '+500 clínicas activas en Panamá y Latinoamérica',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="px-8 py-4 bg-teal-600 text-white font-bold text-lg rounded-xl hover:bg-teal-700 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Comenzar Gratis <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowDemoModal(true)}
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

            {/* Right - Clinical Dashboard Preview */}
            <div className="relative">
              {/* Decorative ring */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-60"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-100 rounded-full opacity-60"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Cabecera del panel */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Stethoscope className="w-5 h-5" />
                    <span>Panel Clínico — Hoy</span>
                  </div>
                  <span className="text-teal-200 text-sm">{new Date().toLocaleDateString('es-PA', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>

                <div className="p-5 space-y-5">
                  {/* Stats rápidas */}
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

                  {/* Agenda del día */}
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Próximas citas</p>
                    <div className="space-y-2">
                      {[
                        { name: 'Clínica San Miguel', type: 'Pediatría', time: '10:00', color: 'teal' },
                        { name: 'Clínica Dental Plus', type: 'Odontología', time: '11:30', color: 'green' },
                        { name: 'Centro Médico Aurora', type: 'Medicina General', time: '14:00', color: 'orange' },
                      ].map((appt, i) => (
                        <div key={i} className={`flex items-center justify-between p-3 rounded-lg border-l-4 ${
                          appt.color === 'teal' ? 'bg-teal-50 border-teal-500' :
                          appt.color === 'green' ? 'bg-green-50 border-green-500' :
                          'bg-orange-50 border-orange-400'
                        }`}>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{appt.name}</p>
                            <p className="text-xs text-gray-500">{appt.type}</p>
                          </div>
                          <span className={`font-bold text-sm ${
                            appt.color === 'teal' ? 'text-teal-600' :
                            appt.color === 'green' ? 'text-green-600' :
                            'text-orange-500'
                          }`}>{appt.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Clínicas activas' },
              { value: '50K+', label: 'Pacientes gestionados' },
              { value: '$10M+', label: 'Facturados' },
              { value: '4.9★', label: 'Rating en Google' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-black text-teal-400">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Proceso simple
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Empieza en 3 pasos
            </h2>
            <p className="text-xl text-gray-500">Sin instalaciones. Sin técnicos. Sin complicaciones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-teal-100 z-0" />
            {[
              { step: '01', icon: '🏥', title: 'Crea tu cuenta', desc: 'Regístrate con tu email en menos de 2 minutos. Sin tarjeta de crédito requerida.' },
              { step: '02', icon: '👥', title: 'Carga tus pacientes', desc: 'Importa desde Excel o agrega pacientes manualmente. Nuestro equipo te asiste.' },
              { step: '03', icon: '🚀', title: 'Gestiona todo', desc: 'Agenda, cobros, historial y reportes listos desde el primer día.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-teal-200 transition">
                <div className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-md">
                  {item.icon}
                </div>
                <span className="text-xs font-black text-teal-400 tracking-widest mb-2">PASO {item.step}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Adaptado para tu especialidad
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Diseñado para clínicas médicas
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              MedFlow se adapta a múltiples especialidades médicas sin configuración compleja.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🫀', name: 'Cardiología' },
              { icon: '🦷', name: 'Odontología' },
              { icon: '👁️', name: 'Oftalmología' },
              { icon: '🦴', name: 'Traumatología' },
              { icon: '🧠', name: 'Neurología' },
              { icon: '👶', name: 'Pediatría' },
              { icon: '💊', name: 'Medicina General' },
              { icon: '🩺', name: 'Dermatología' },
            ].map((esp, i) => (
              <div key={i} className="flex flex-col items-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md transition cursor-default">
                <span className="text-3xl mb-3">{esp.icon}</span>
                <span className="font-semibold text-gray-800 text-sm text-center">{esp.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Problemas que resolvemos
            </h2>
            <p className="text-xl text-gray-500">Cada día en tu clínica, nosotros los eliminamos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ClipboardList className="w-8 h-8 text-red-500" />,
                bg: 'bg-red-50 border-red-100',
                title: 'Expedientes en papel',
                problem: 'Historiales perdidos, información ilegible, archivadores que se llenan.',
                solution: 'Expediente digital centralizado, buscable en segundos.',
              },
              {
                icon: <Calendar className="w-8 h-8 text-orange-500" />,
                bg: 'bg-orange-50 border-orange-100',
                title: 'Agenda desorganizada',
                problem: 'Pacientes sin recordatorios, citas duplicadas, huecos en el día.',
                solution: 'Agenda inteligente con recordatorios automáticos.',
              },
              {
                icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
                bg: 'bg-yellow-50 border-yellow-100',
                title: 'Cobros manuales',
                problem: 'Sin control de deudas, recibos a mano, facturas perdidas.',
                solution: 'Recibos al instante, reportes financieros automáticos.',
              },
              {
                icon: <Clock className="w-8 h-8 text-purple-500" />,
                bg: 'bg-purple-50 border-purple-100',
                title: 'Horas en administración',
                problem: '2-3 horas diarias en tareas que no son atención médica.',
                solution: 'Todo automatizado. Solo 10 minutos de gestión al día.',
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
                bg: 'bg-blue-50 border-blue-100',
                title: 'Sin visibilidad financiera',
                problem: 'No sabes tus ingresos reales ni tendencias del mes.',
                solution: 'Dashboard con reportes diarios en 1 clic.',
              },
              {
                icon: <Users className="w-8 h-8 text-teal-500" />,
                bg: 'bg-teal-50 border-teal-100',
                title: 'Sala de espera caótica',
                problem: 'Pacientes sin orden, esperas sin información, recepción desbordada.',
                solution: 'Sistema de turnos y sala de espera digital.',
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-xl p-7 border ${item.bg} hover:shadow-lg transition`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${item.bg}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.problem}</p>
                <p className="text-teal-700 font-semibold text-sm flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Funcionalidades
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Todo lo que necesita tu clínica
            </h2>
            <p className="text-xl text-gray-500">Sin módulos innecesarios. Sin curva de aprendizaje larga.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Users, color: 'teal', title: 'Gestión de Pacientes', desc: 'Expediente digital, historial completo, búsqueda rápida por nombre o cédula.' },
              { Icon: Calendar, color: 'cyan', title: 'Agenda Inteligente', desc: 'Citas automáticas, bloqueos de horario, recordatorios por SMS y email.' },
              { Icon: DollarSign, color: 'green', title: 'Cobros y Recibos', desc: 'Genera recibos en segundos, controla deudas y exporta reportes.' },
              { Icon: BarChart3, color: 'blue', title: 'Reportes Diarios', desc: 'Dashboard con métricas de ingresos, atenciones y tendencias.' },
              { Icon: FileText, color: 'indigo', title: 'Notas Clínicas', desc: 'Anamnesis, diagnósticos y recetas en un flujo rápido y estructurado.' },
              { Icon: Activity, color: 'rose', title: 'Sala de Espera', desc: 'Turnos digitales con pantalla de llamada para recepción.' },
              { Icon: Shield, color: 'amber', title: 'Seguridad Médica', desc: 'Encriptación de nivel bancario y backups automáticos diarios.' },
              { Icon: Zap, color: 'purple', title: 'Soporte 24/7', desc: 'Chat en vivo y teléfono. Siempre en español, siempre disponible.' },
            ].map(({ Icon, color, title, desc }, i) => {
              const colorMap = {
                teal: 'bg-teal-50 border-teal-200 text-teal-600',
                cyan: 'bg-cyan-50 border-cyan-200 text-cyan-600',
                green: 'bg-green-50 border-green-200 text-green-600',
                blue: 'bg-blue-50 border-blue-200 text-blue-600',
                indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
                rose: 'bg-rose-50 border-rose-200 text-rose-600',
                amber: 'bg-amber-50 border-amber-200 text-amber-600',
                purple: 'bg-purple-50 border-purple-200 text-purple-600',
              };
              return (
                <div key={i} className={`p-6 rounded-xl border hover:shadow-lg transition ${colorMap[color].split(' ')[0]} ${colorMap[color].split(' ')[1]}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-white border ${colorMap[color].split(' ')[1]}`}>
                    <Icon className={`w-6 h-6 ${colorMap[color].split(' ')[2]}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Comparación
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              MedFlow vs otras opciones
            </h2>
            <p className="text-xl text-gray-500">No todas las soluciones son iguales.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-bold text-gray-700">Función</th>
                  <th className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-600 text-white rounded-full text-xs font-bold">⭐ MedFlow</span>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-500">Excel</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-500">Software tradicional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Agenda digital inteligente', true, false, 'partial'],
                  ['Recordatorios automáticos', true, false, 'partial'],
                  ['Historial clínico digital', true, 'partial', true],
                  ['Cobros y recibos', true, 'partial', 'partial'],
                  ['Reportes en tiempo real', true, false, 'partial'],
                  ['Soporte en español 24/7', true, false, false],
                  ['Implementación en 5 min', true, true, false],
                  ['Precio mensual', '$29', 'Gratis', '$200+'],
                ].map(([feature, medflow, excel, trad], i) => {
                  const render = (val) => {
                    if (val === true) return <span className="text-teal-500 text-lg">✓</span>;
                    if (val === false) return <span className="text-red-400 text-lg">✗</span>;
                    if (val === 'partial') return <span className="text-yellow-500 text-lg">◐</span>;
                    return <span className="font-bold text-gray-700">{val}</span>;
                  };
                  return (
                    <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 text-gray-700 font-medium">{feature}</td>
                      <td className="px-6 py-4 text-center bg-teal-50/30">{render(medflow)}</td>
                      <td className="px-6 py-4 text-center">{render(excel)}</td>
                      <td className="px-6 py-4 text-center">{render(trad)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">◐ Funcionalidad parcial o requiere configuración avanzada</p>
        </div>
      </section>

      {/* CALCULADORA ROI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Calculadora ROI
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              ¿Cuánto ganarías con MedFlow?
            </h2>
            <p className="text-xl text-gray-500">Mueve el slider y descubre el impacto real en tu clínica.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="font-semibold text-gray-700">Pacientes que atiendes por día</label>
                <span className="text-3xl font-black text-teal-600">{patientsPerDay}</span>
              </div>
              <input
                type="range" min="1" max="80" value={patientsPerDay}
                onChange={(e) => setPatientsPerDay(Number(e.target.value))}
                className="w-full accent-teal-600 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1</span><span>80</span></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Horas ahorradas al mes',
                  value: `${Math.round(patientsPerDay * 6 * 22 / 60)}h`,
                  sub: 'en tareas administrativas',
                  color: 'teal',
                },
                {
                  label: 'Citas extra posibles',
                  value: `+${Math.round(patientsPerDay * 6 * 22 / 60 / 0.5)}`,
                  sub: 'consultas adicionales/mes',
                  color: 'green',
                },
                {
                  label: 'Ingreso extra estimado',
                  value: `$${(Math.round(patientsPerDay * 6 * 22 / 60 / 0.5) * 45).toLocaleString()}`,
                  sub: 'por mes (avg $45/consulta)',
                  color: 'blue',
                },
              ].map((stat, i) => (
                <div key={i} className={`rounded-xl p-5 text-center border ${
                  stat.color === 'teal' ? 'bg-teal-50 border-teal-100' :
                  stat.color === 'green' ? 'bg-green-50 border-green-100' :
                  'bg-blue-50 border-blue-100'
                }`}>
                  <p className={`text-2xl font-black mb-1 ${
                    stat.color === 'teal' ? 'text-teal-700' :
                    stat.color === 'green' ? 'text-green-700' : 'text-blue-700'
                  }`}>{stat.value}</p>
                  <p className="font-semibold text-gray-800 text-sm">{stat.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">* Estimación basada en reducción del 75% del tiempo administrativo promedio.</p>
          </div>
        </div>
      </section>

      {/* REPORTES */}
      <section id="reportes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Reportes
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Datos que impulsan decisiones
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Visualiza el rendimiento de tu clínica en tiempo real. Sin hojas de cálculo, sin esfuerzo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-bold text-gray-900">Atenciones mensuales</p>
                  <p className="text-sm text-gray-500">Últimos 6 meses</p>
                </div>
                <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold">+38% ↑</span>
              </div>
              <svg viewBox="0 0 300 165" className="w-full">
                {[130, 90, 50].map(y => (
                  <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                ))}
                {[
                  { month: 'Oct', value: 45, pct: 0.45 },
                  { month: 'Nov', value: 58, pct: 0.58 },
                  { month: 'Dic', value: 52, pct: 0.52 },
                  { month: 'Ene', value: 67, pct: 0.67 },
                  { month: 'Feb', value: 78, pct: 0.78 },
                  { month: 'Mar', value: 92, pct: 0.92 },
                ].map((d, i) => {
                  const x = i * 50 + 8;
                  const barH = d.pct * 120;
                  const y = 135 - barH;
                  return (
                    <g key={i}>
                      <rect x={x} y={y} width="30" height={barH} rx="4" fill={i === 5 ? '#0d9488' : '#99f6e4'} />
                      <text x={x + 15} y="152" textAnchor="middle" fontSize="11" fill="#6b7280">{d.month}</text>
                      <text x={x + 15} y={y - 5} textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">{d.value}</text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Line Chart */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-bold text-gray-900">Ingresos mensuales</p>
                  <p className="text-sm text-gray-500">Últimos 6 meses (USD)</p>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold">+104% ↑</span>
              </div>
              <svg viewBox="0 0 300 165" className="w-full">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[30, 70, 110].map(y => (
                  <line key={y} x1="10" y1={y} x2="290" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                ))}
                <path d="M 10,132 L 66,112 L 122,120 L 178,90 L 234,60 L 290,28 L 290,152 L 10,152 Z" fill="url(#areaGrad)" />
                <polyline points="10,132 66,112 122,120 178,90 234,60 290,28" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round" />
                {[[10,132,'$1.2K'],[66,112,'$1.5K'],[122,120,'$1.4K'],[178,90,'$1.7K'],[234,60,'$2.1K'],[290,28,'$2.5K']].map(([x,y,label],i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="4" fill="#0d9488" />
                    {i === 5 && <text x={x} y={y - 10} textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">{label}</text>}
                  </g>
                ))}
                {['Oct','Nov','Dic','Ene','Feb','Mar'].map((m, i) => (
                  <text key={i} x={10 + i * 56} y="162" textAnchor="middle" fontSize="11" fill="#6b7280">{m}</text>
                ))}
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Tasa de retención', value: '94%', color: 'teal' },
              { label: 'Citas cumplidas', value: '96%', color: 'green' },
              { label: 'Tiempo de espera', value: '-65%', color: 'blue' },
              { label: 'ROI promedio', value: '3.2x', color: 'purple' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                <p className={`text-2xl font-black ${
                  stat.color === 'teal' ? 'text-teal-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`}>{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-800 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Lo que dicen los médicos
            </h2>
            <p className="text-gray-400 text-lg">Clínicas reales que transformaron su operación.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '👨‍⚕️',
                name: 'Dr. Carlos Mendoza',
                clinic: 'Clínica Vida — Panamá',
                specialty: 'Medicina General',
                text: '"Reduje en 60% el tiempo administrativo. Ahora veo más pacientes y gano más. MedFlow fue la mejor inversión para mi clínica."',
              },
              {
                emoji: '👩‍⚕️',
                name: 'Dra. María González',
                clinic: 'Clínica Dental Plus — Panamá',
                specialty: 'Odontología',
                text: '"Los recordatorios automáticos cambiaron todo. Pasé de 30% a 95% de asistencia. Se lo recomiendo a todas mis colegas."',
              },
              {
                emoji: '👨‍💼',
                name: 'Juan Pérez',
                clinic: 'Centro Médico Aurora — Colón',
                specialty: 'Administrador',
                text: '"Los reportes diarios me muestran exactamente cuánto facturamos. Ahora tomamos decisiones con datos reales. Vale cada dólar."',
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-7 border border-gray-700 hover:border-teal-500 transition flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl">{t.emoji}</span>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.clinic}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-teal-900 text-teal-300 rounded text-xs font-medium">{t.specialty}</span>
                  </div>
                </div>
                <p className="text-gray-300 italic flex-1">{t.text}</p>
                <div className="flex text-yellow-400 mt-4 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
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
            {/* PLAN 1 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
              <div className="mb-6">
                <h3 className="text-xl font-black text-gray-900 mb-1">Emprendedor</h3>
                <p className="text-gray-500 text-sm">Para clínicas nuevas hasta 500 pacientes</p>
              </div>
              <div className="mb-7">
                <span className="text-5xl font-black text-gray-900">$29</span>
                <span className="text-gray-500 ml-1">/mes</span>
              </div>
              <button
                onClick={() => setShowSignupModal(true)}
                className="w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition mb-7 cursor-pointer"
              >
                Comenzar
              </button>
              <ul className="space-y-3">
                {['Hasta 500 pacientes', 'Agenda básica', 'Reportes básicos', 'Soporte por email'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PLAN 2 - DESTACADO */}
            <div className="bg-gradient-to-b from-teal-600 to-teal-700 rounded-2xl p-8 shadow-2xl md:scale-105 text-white">
              <div className="inline-block mb-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-black mb-1">Profesional</h3>
                <p className="text-teal-200 text-sm">Para clínicas medianas 500-2000 pacientes</p>
              </div>
              <div className="mb-7">
                <span className="text-5xl font-black">$79</span>
                <span className="text-teal-200 ml-1">/mes</span>
              </div>
              <button
                onClick={() => setShowDemoModal(true)}
                className="w-full py-3 bg-white text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition mb-7 cursor-pointer"
              >
                Solicitar Demo
              </button>
              <ul className="space-y-3">
                {[
                  'Hasta 2000 pacientes',
                  'Agenda avanzada',
                  'Cobros y recibos',
                  'Notas clínicas',
                  'Reportes completos',
                  'Soporte prioritario',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-teal-200 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-teal-100">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PLAN 3 */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
              <div className="mb-6">
                <h3 className="text-xl font-black text-gray-900 mb-1">Empresarial</h3>
                <p className="text-gray-500 text-sm">Para múltiples sucursales</p>
              </div>
              <div className="mb-7">
                <span className="text-3xl font-black text-gray-900">Personalizado</span>
              </div>
              <button
                onClick={() => alert('Contacta a: +507 6277-4449 o digitalsoft507@gmail.com')}
                className="w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition mb-7 cursor-pointer"
              >
                Contactar Ventas
              </button>
              <ul className="space-y-3">
                {[
                  'Pacientes ilimitados',
                  'Multi-clínica',
                  'Impresoras térmicas',
                  'Integraciones custom',
                  'Account Manager',
                  'Capacitación incluida',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm">
            Todos los planes incluyen 14 días de prueba gratis · Cancela cuando quieras · Sin cargos ocultos
          </p>
        </div>
      </section>

      {/* PAÍSES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Presente en toda Latinoamérica
            </h2>
            <p className="text-gray-500">Clínicas activas en 10 países y creciendo.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { code: 'pa', country: 'Panamá' },
              { code: 'co', country: 'Colombia' },
              { code: 'mx', country: 'México' },
              { code: 'cr', country: 'Costa Rica' },
              { code: 'gt', country: 'Guatemala' },
              { code: 'sv', country: 'El Salvador' },
              { code: 'hn', country: 'Honduras' },
              { code: 'do', country: 'Rep. Dominicana' },
              { code: 'ec', country: 'Ecuador' },
              { code: 'pe', country: 'Perú' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-teal-300 hover:shadow-md transition">
                <img
                  src={`https://flagcdn.com/w80/${item.code}.png`}
                  alt={`Bandera de ${item.country}`}
                  className="w-14 h-9 object-cover rounded shadow-sm"
                />
                <span className="text-sm font-semibold text-gray-700 text-center">{item.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Preguntas frecuentes</h2>
            <p className="text-gray-500 text-lg">Respuestas directas a tus dudas.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '¿Cuánto tiempo toma implementar MedFlow?',
                a: 'Menos de 5 minutos. Creas tu cuenta, cargas tus datos y estás listo. Algunos clientes cargan 100+ pacientes en su primer día.',
              },
              {
                q: '¿Puedo importar mis pacientes actuales?',
                a: 'Sí. Importamos desde Excel, Google Sheets o bases de datos existentes. Nuestro equipo te asiste en todo el proceso.',
              },
              {
                q: '¿Qué pasa si cancelo?',
                a: 'Puedes exportar todos tus datos. Sin penalizaciones. Puedes volver cuando quieras sin perder tu historial.',
              },
              {
                q: '¿Son seguros los datos de mis pacientes?',
                a: 'Sí. Encriptación de nivel bancario, servidores con redundancia y backup automático diario. Cumplimos con normativas de privacidad médica.',
              },
              {
                q: '¿Tienen integraciones con otros sistemas?',
                a: 'Sí. Integramos con impresoras, SMS, email y WhatsApp. Si necesitas algo específico, nuestro equipo lo desarrolla.',
              },
              {
                q: '¿Necesito firmar contratos largos?',
                a: 'No. Todo es mes a mes. No creemos en retener clientes con contratos. Tu permanencia se gana con el servicio.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-md transition">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Nuestro equipo
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Las personas detrás de MedFlow
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Un equipo apasionado por transformar la salud en Latinoamérica.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Samuel Vasquez', title: 'Founder & CEO', initials: 'SV', color: 'teal', desc: 'Visión estratégica y liderazgo del producto.' },
              { name: 'Orphas Teruel', title: 'Co-Founder & COO', initials: 'OT', color: 'blue', desc: 'Operaciones, crecimiento y alianzas clave.' },
              { name: 'Israel Barria', title: 'Chief Technology Officer', initials: 'IB', color: 'indigo', desc: 'Arquitectura, ingeniería y seguridad del sistema.' },
              { name: 'Alexandra Teruel', title: 'Chief Marketing Officer', initials: 'AT', color: 'purple', desc: 'Marca, contenido y adquisición de clientes.' },
              { name: 'Tarsis Teruel', title: 'VP of Sales', initials: 'TT', color: 'green', desc: 'Expansión comercial en toda Latinoamérica.' },
              { name: 'Astrid Teruel', title: 'Head of Customer Success', initials: 'AT', color: 'rose', desc: 'Experiencia del cliente y soporte especializado.' },
            ].map((member, i) => {
              const colorMap = {
                teal: 'bg-teal-500', blue: 'bg-blue-500', indigo: 'bg-indigo-500',
                purple: 'bg-purple-500', green: 'bg-green-500', rose: 'bg-rose-500',
              };
              return (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-teal-200 transition text-center">
                  <div className={`w-20 h-20 ${colorMap[member.color]} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden`}>
                    {/* Silueta de cara */}
                    <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full" fill="white" fillOpacity="0.15">
                      <circle cx="40" cy="27" r="13" />
                      <ellipse cx="40" cy="70" rx="22" ry="16" />
                    </svg>
                    <span className="relative z-10 text-white font-black text-xl tracking-wide">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-0.5">{member.name}</h3>
                  <p className="text-teal-600 text-xs font-semibold uppercase tracking-wide mb-3">{member.title}</p>
                  <p className="text-gray-500 text-sm">{member.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Tu clínica, digitalizada hoy
          </h2>
          <p className="text-xl text-teal-100 mb-10">
            Únete a 500+ clínicas en Latinoamérica. 14 días gratis, sin tarjeta de crédito.
          </p>

          <form onSubmit={handleFinalCTA} className="flex flex-col sm:flex-row gap-3 justify-center bg-white/10 rounded-xl p-3 backdrop-blur border border-white/20">
            <input
              type="email"
              placeholder="tu@clinica.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none bg-white"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-7 py-3 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Comenzar Ahora'}
            </button>
          </form>

          {errorMessage && <p className="text-red-300 text-center mt-3 text-sm">{errorMessage}</p>}

          {submitStatus === 'cta-success' && (
            <p className="text-white text-center mt-4 font-semibold">
              ¡Perfecto! Te enviaremos un link para comenzar en breve.
            </p>
          )}

          <p className="text-teal-200 text-sm mt-5">
            Sin tarjeta de crédito · Acceso completo por 14 días · Cancela cuando quieras
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10">
            {/* Branding */}
            <div className="col-span-2 sm:col-span-3 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" strokeWidth={3} />
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
                <li><button onClick={() => scrollToSection('caracteristicas')} className="hover:text-white transition">Características</button></li>
                <li><button onClick={() => scrollToSection('precios')} className="hover:text-white transition">Precios</button></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><button onClick={() => alert('Contacto: +507 6277-4449')} className="hover:text-white transition">Contacto</button></li>
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-500" />
                  <a href="mailto:info@medflow.com" className="hover:text-white transition">info@medflow.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-500" />
                  <button onClick={() => alert('Llamar a: +507 6277-4449')} className="hover:text-white transition">+507 6277-4449</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
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

      {/* MODAL - SIGNUP */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Plus className="w-5 h-5 text-teal-600" strokeWidth={3} />
              </div>
              <div>
                <h2 className="text-xl font-black text-gray-900">Crear cuenta gratis</h2>
                <p className="text-gray-500 text-sm">14 días de prueba. Sin tarjeta.</p>
              </div>
            </div>

            <form onSubmit={handleSignup} className="space-y-3">
              <input
                type="email"
                placeholder="tu@clinica.com"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm"
                required
              />
              <input
                type="text"
                placeholder="Nombre de tu clínica"
                value={clinicName}
                onChange={(e) => setClinicName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Crear Cuenta'}
              </button>
            </form>

            {errorMessage && <p className="text-red-600 text-center mt-3 text-sm">{errorMessage}</p>}

            {submitStatus === 'success' && (
              <p className="text-teal-600 text-center mt-4 font-semibold">¡Revisa tu email para continuar!</p>
            )}

            <button
              onClick={() => { setShowSignupModal(false); setErrorMessage(''); setSubmitStatus(null); }}
              className="mt-4 w-full text-gray-400 hover:text-gray-700 font-medium text-sm transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* MODAL - DEMO */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h2 className="text-xl font-black text-gray-900">Agendar Demo</h2>
                <p className="text-gray-500 text-sm">Un especialista te mostrará MedFlow (15 min).</p>
              </div>
            </div>

            <form onSubmit={handleDemoRequest} className="space-y-3">
              <input
                type="text"
                placeholder="Tu nombre completo"
                value={demoName}
                onChange={(e) => setDemoName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm"
                required
              />
              <input
                type="email"
                placeholder="tu@clinica.com"
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm"
                required
              />
              <input
                type="tel"
                placeholder="+507 ____-____"
                value={demoPhone}
                onChange={(e) => setDemoPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Confirmar Demo'}
              </button>
            </form>

            {errorMessage && <p className="text-red-600 text-center mt-3 text-sm">{errorMessage}</p>}

            {submitStatus === 'demo' && (
              <p className="text-teal-600 text-center mt-4 font-semibold">¡Te contactaremos pronto!</p>
            )}

            <button
              onClick={() => { setShowDemoModal(false); setErrorMessage(''); setSubmitStatus(null); }}
              className="mt-4 w-full text-gray-400 hover:text-gray-700 font-medium text-sm transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/50762774449?text=Hola%2C%20me%20interesa%20conocer%20MedFlow"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
