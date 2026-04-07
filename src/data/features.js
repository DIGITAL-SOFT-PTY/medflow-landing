import { Users, Calendar, DollarSign, BarChart3, FileText, Activity, Shield, Zap } from 'lucide-react';

export const FEATURES = [
  { Icon: Users,       color: 'teal',   title: 'Gestión de Pacientes', desc: 'Expediente digital, historial completo, búsqueda rápida por nombre o cédula.' },
  { Icon: Calendar,    color: 'cyan',   title: 'Agenda Inteligente',    desc: 'Citas automáticas, bloqueos de horario, recordatorios por SMS y email.' },
  { Icon: DollarSign,  color: 'green',  title: 'Cobros y Recibos',      desc: 'Genera recibos en segundos, controla deudas y exporta reportes.' },
  { Icon: BarChart3,   color: 'blue',   title: 'Reportes Diarios',      desc: 'Dashboard con métricas de ingresos, atenciones y tendencias.' },
  { Icon: FileText,    color: 'indigo', title: 'Notas Clínicas',        desc: 'Anamnesis, diagnósticos y recetas en un flujo rápido y estructurado.' },
  { Icon: Activity,    color: 'rose',   title: 'Sala de Espera',        desc: 'Turnos digitales con pantalla de llamada para recepción.' },
  { Icon: Shield,      color: 'amber',  title: 'Seguridad Médica',      desc: 'Encriptación de nivel bancario y backups automáticos diarios.' },
  { Icon: Zap,         color: 'purple', title: 'Soporte 24/7',          desc: 'Chat en vivo y teléfono. Siempre en español, siempre disponible.' },
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
