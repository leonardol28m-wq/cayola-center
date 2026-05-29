import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { viewportConfig, staggerContainer, staggerItem } from '../utils/animations';

/**
 * IMÁGENES DE TRANSFORMACIONES:
 * Reemplazá las URLs de Unsplash con fotos reales de alumnos.
 * Guardar en: /public/assets/transformaciones/
 * Dimensiones recomendadas: 400×500px (ratio 4:5)
 */
const transformations = [
  {
    name: 'Lucía M.', age: 28, time: '16 semanas', goal: 'Recomposición corporal',
    result: '-8kg · Definición muscular · Hábitos sólidos',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Martín R.', age: 34, time: '12 semanas', goal: 'Aumento de masa muscular',
    result: '+5kg masa magra · Fuerza aumentada · Postura mejorada',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Sofía T.', age: 42, time: '20 semanas', goal: 'Pérdida de peso saludable',
    result: '-12kg · Energía renovada · Sin efecto rebote',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&q=80&sat=-80',
    afterImg: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=500&fit=crop&q=80',
  },
];

const TestimonialCard = ({ name, age, time, goal, result, beforeImg, afterImg }) => (
  <motion.div variants={staggerItem}
    className="group bg-dark-card border border-dark-border rounded-3xl overflow-hidden hover:border-gold/20 transition-all duration-400">
    <div className="relative grid grid-cols-2 gap-0">
      <div className="relative overflow-hidden">
        <img src={beforeImg} alt={`${name} antes`}
          className="w-full h-52 object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-dark-card to-transparent" />
        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-gray-300 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/10">
          Antes
        </span>
      </div>
      <div className="relative overflow-hidden">
        <img src={afterImg} alt={`${name} después`} className="w-full h-52 object-cover object-top" loading="lazy" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-dark-card to-transparent" />
        <span className="absolute top-3 right-3 bg-gold text-black text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">
          Después
        </span>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-dark-card z-10" aria-hidden="true" />
    </div>
    <div className="p-5 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-[#8E8E93] text-sm">{age} años · {goal}</p>
        </div>
        <div className="text-right">
          <p className="text-gold font-bold text-sm">{time}</p>
          <p className="text-[#8E8E93] text-[11px]">de programa</p>
        </div>
      </div>
      <div className="h-px bg-dark-border" />
      <p className="text-[#8E8E93] text-sm leading-relaxed">
        <span className="text-gold font-medium">Resultados: </span>{result}
      </p>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-sm">★</span>)}
      </div>
    </div>
  </motion.div>
);

const Transformations = () => (
  <section id="transformaciones" className="bg-black py-24 lg:py-32 relative overflow-hidden" aria-label="Transformaciones de alumnos">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.02] blur-[120px] rounded-full" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-16">
        <p className="section-label justify-center">
          <span className="w-6 h-px bg-gold inline-block" />Resultados reales<span className="w-6 h-px bg-gold inline-block" />
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
          Ellos ya lo <span className="text-gold-gradient">lograron</span>
        </h2>
        <p className="text-[#8E8E93] text-lg max-w-2xl mx-auto leading-relaxed">
          Transformaciones reales de personas reales. Sin filtros, sin Photoshop. Solo trabajo consistente y el sistema correcto.
        </p>
      </motion.div>
      <motion.div variants={staggerContainer(0.15)} initial="initial" whileInView="animate" viewport={viewportConfig}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {transformations.map((t, i) => <TestimonialCard key={i} {...t} />)}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
        transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-12">
        <p className="text-[#8E8E93] mb-5 text-sm">¿Querés ser el próximo caso de transformación?</p>
        <a href="#contacto" className="btn-gold inline-flex items-center gap-3 py-4 px-8 text-base">
          Quiero mi evaluación gratuita <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Transformations;
