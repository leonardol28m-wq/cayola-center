import { motion } from 'framer-motion';
import { Target, Salad, BarChart3, BookOpen, Play, Smartphone } from 'lucide-react';
import { staggerItem, staggerContainer, viewportConfig } from '../utils/animations';

const features = [
  { icon: Target, title: 'Entrenamiento Personalizado', desc: 'Cada rutina es diseñada exclusivamente para tu cuerpo, objetivos y nivel. Sin planes genéricos, sin copy-paste.' },
  { icon: Salad, title: 'Nutrición Adaptada', desc: 'Plan nutricional ajustado a tu metabolismo, preferencias y estilo de vida. Comés bien sin sufrir.' },
  { icon: BarChart3, title: 'Seguimiento Constante', desc: 'Análisis semanal de tus métricas, ajustes en tiempo real y comunicación directa conmigo.' },
  { icon: BookOpen, title: 'Registro de Progreso', desc: 'Dashboard completo: peso, medidas, fotos de evolución y estadísticas de rendimiento en un solo lugar.' },
  { icon: Play, title: 'Videos Explicativos', desc: 'Biblioteca de videos HD para ejecutar cada ejercicio con técnica perfecta. Sin excusas, sin errores.' },
  { icon: Smartphone, title: 'Acceso desde Cualquier Dispositivo', desc: 'Tu plataforma privada disponible en celular, tablet o computadora. Tu entrenador en tu bolsillo.' },
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div variants={staggerItem} className="group card-dark p-7 hover:bg-dark-hover cursor-default">
    <div className="mb-5">
      <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 group-hover:border-gold/40 transition-all duration-300">
        <Icon size={22} className="text-gold" />
      </div>
    </div>
    <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{title}</h3>
    <p className="text-[#8E8E93] text-sm leading-relaxed">{desc}</p>
    <div className="mt-6 h-px w-0 bg-gradient-to-r from-gold/50 to-transparent group-hover:w-full transition-all duration-500" />
  </motion.div>
);

const WhyCayola = () => (
  <section id="por-que" className="bg-dark-secondary py-24 lg:py-32 relative overflow-hidden" aria-label="Por qué Cayola Center">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-16">
        <p className="section-label justify-center">
          <span className="w-6 h-px bg-gold inline-block" />
          Por qué Cayola Center
          <span className="w-6 h-px bg-gold inline-block" />
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
          Todo lo que necesitás para <span className="text-gold-gradient">transformárte</span>
        </h2>
        <p className="text-[#8E8E93] text-lg max-w-2xl mx-auto leading-relaxed">
          No es solo un entrenamiento. Es un ecosistema completo diseñado para que logres resultados reales y duraderos.
        </p>
      </motion.div>
      <motion.div variants={staggerContainer(0.1, 0.1)} initial="initial" whileInView="animate" viewport={viewportConfig}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {features.map((f, i) => <FeatureCard key={i} {...f} />)}
      </motion.div>
    </div>
  </section>
);

export default WhyCayola;
