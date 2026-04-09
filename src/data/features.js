import { Users, Calendar, DollarSign, BarChart3, FileText, Activity, Shield, Zap } from 'lucide-react';

export const FEATURES = [
  { Icon: Users,       color: 'teal',   title: 'Gestión de Pacientes', desc: 'Encuentra cualquier paciente en 2 segundos. Historial, alergias y visitas anteriores al instante.' },
  { Icon: Calendar,    color: 'cyan',   title: 'Agenda Inteligente',    desc: 'Elimina las ausencias: los recordatorios automáticos reducen el no-show hasta un 65%.' },
  { Icon: DollarSign,  color: 'green',  title: 'Cobros y Recibos',      desc: 'Cobra más rápido y cobra todo. Recibos en 1 clic, control de deudas, cero facturas perdidas.' },
  { Icon: BarChart3,   color: 'blue',   title: 'Reportes Diarios',      desc: 'Abre tu día sabiendo exactamente cuánto facturaste ayer y qué te espera hoy.' },
  { Icon: FileText,    color: 'indigo', title: 'Notas Clínicas',        desc: 'Notas clínicas en la mitad del tiempo. Plantillas por especialidad, recetas digitales incluidas.' },
  { Icon: Activity,    color: 'rose',   title: 'Sala de Espera',        desc: 'Recepción sin caos: pantalla digital de turnos, pacientes informados, recepcionista tranquila.' },
  { Icon: Shield,      color: 'amber',  title: 'Seguridad Médica',      desc: 'Datos de tus pacientes protegidos como en un banco. Copias automáticas diarias, nunca pierdas nada.' },
  { Icon: Zap,         color: 'purple', title: 'Soporte 24/7',          desc: 'Nuestro equipo habla tu idioma — español, 24 horas, 7 días. Un humano real, no un bot.' },
];

export const FEATURE_COLOR_MAP = {
  teal:   'bg-teal-50   border-teal-200   text-teal-600',
  cyan:   'bg-cyan-50   border-cyan-200   text-cyan-600',
  green:  'bg-green-50  border-green-200  text-green-600',
  blue:   'bg-blue-50   border-blue-200   text-blue-600',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
  rose:   'bg-rose-50   border-rose-200   text-rose-600',
  amber:  'bg-amber-50  border-amber-200  text-amber-600',
  purple: 'bg-purple-50 border-purple-200 text-purple-600',
};
