import { motion } from 'framer-motion';
import { ClipboardList, Crosshair, PenLine, LayoutDashboard, TrendingUp, RefreshCw } from 'lucide-react';
import { viewportConfig } from '../utils/animations';

const steps = [
  { icon: ClipboardList, number: '01', title: 'Completás tu evaluación inicial', desc: 'Un formulario diseñado para conocer tu historial, objetivos, hábitos y cualquier limitación física. Es el punto de partida.' },
  { icon: Crosshair, number: '02', title: 'Analizo tus objetivos', desc: 'Reviso en detalle cada aspecto de tu evaluación para entender qué necesitás realmente, no lo que creés que necesitás.' },
  { icon: PenLine, number: '03', title: 'Diseño tu planificación', desc: 'Creo tu programa de entrenamiento y plan nutricional 100% personalizado. Cada ejercicio tiene un propósito, cada comida una razón.' },
  { icon: LayoutDashboard, number: '04', title: 'Accedés a tu plataforma privada', desc: 'Te doy acceso a tu espacio personal donde encontrás tus rutinas, videos, plan nutricional y herramientas de seguimiento.' },
  { icon: TrendingUp, number: '05', title: 'Registrás tu progreso', desc: 'Cargás tus métricas, fotos de evolución y completás tus rutinas. Ves tu progreso en tiempo real en tu dashboard.' },
  { icon: RefreshCw, number: '06', title: 'Ajustamos el plan según tus resultados', desc: 'En base a tus datos y progreso real, actualizo y optimizo tu programa continuamente. Tu plan evoluciona con vos.' },
];

const StepCard = ({ step, index, isLast }) => {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {!isLast && (
        <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-dark-border via-dark-border to-transparent" aria-hidden="true" />
      )}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-dark-card border border-gold/30 flex items-center justify-center z-10 relative">
          <Icon size={20} className="text-gold" />
        </div>
      </div>
      <div className="pb-10 flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-gold text-xs font-black tracking-[0.2em]">{step.number}</span>
          <div className="w-6 h-px bg-gold/30" aria-hidden="true" />
        </div>
        <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
        <p className="text-[#8E8E93] leading-relaxed text-sm">{step.desc}</p>
      </div>
    </motion.div>
  );
};

const TheDifference = () => (
  <section id="diferencia" className="bg-black py-24 lg:py-32 relative overflow-hidden" aria-label="Cómo funciona el proceso">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gold/[0.02] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="space-y-6">
            <p className="section-label"><span className="w-6 h-px bg-gold inline-block" />El proceso</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              No recibís una rutina.{' '}
              <span className="text-gold-gradient">Recibís un sistema</span>{' '}
              completo.
            </h2>
            <p className="text-[#8E8E93] text-lg leading-relaxed">
              Cada paso está diseñado para maximizar tus resultados. Un proceso claro, estructurado y centrado en vos.
            </p>
            <div className="gold-divider" />
            <div className="grid grid-cols-2 gap-4">
              {[{ value: '100%', label: 'Personalizado' }, { value: '24/7', label: 'Acceso a tu plataforma' }, { value: '+50', label: 'Alumnos activos' }, { value: '∞', label: 'Soporte continuo' }].map((s, i) => (
                <div key={i} className="bg-dark-card border border-dark-border rounded-2xl p-4">
                  <p className="text-gold font-black text-2xl">{s.value}</p>
                  <p className="text-[#8E8E93] text-sm mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div>
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TheDifference;
