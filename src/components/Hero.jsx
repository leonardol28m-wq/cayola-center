import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import PlatformMockup from './PlatformMockup';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20" aria-label="Sección principal">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute -top-60 right-0 w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gold/[0.02] blur-[160px]" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
    </div>
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
        {/* Left content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-7 flex flex-col justify-center">
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-white/[0.04] border border-gold/20 rounded-full pl-2 pr-4 py-1.5">
              <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow block" />
              </span>
              <span className="text-gold text-xs sm:text-sm font-semibold tracking-wide">Entrenamiento Premium · Buenos Aires</span>
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants}
            className="text-[2.6rem] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold leading-[1.08] tracking-[-0.03em]">
            Transformá tu físico{' '}
            <span className="text-gold-gradient block">con un plan diseñado</span>
            exclusivamente para vos.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-[#8E8E93] leading-relaxed max-w-lg">
            Entrenamiento personalizado, nutrición y seguimiento profesional desde una
            <strong className="text-white font-medium"> plataforma creada </strong>
            para maximizar tus resultados.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.button onClick={() => scrollTo('contacto')}
              className="group btn-gold inline-flex items-center justify-center gap-3 py-4 px-8 text-base"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Quiero mi evaluación
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            <motion.button onClick={() => scrollTo('plataforma')}
              className="group btn-outline inline-flex items-center justify-center gap-3 py-4 px-7 text-base"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <div className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors">
                <Play size={13} className="text-gold ml-0.5" fill="currentColor" />
              </div>
              Ver cómo funciona
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-5 pt-1">
            <div className="flex -space-x-3" aria-hidden="true">
              {['from-gray-600 to-gray-800','from-gray-700 to-gray-900','from-gray-500 to-gray-700','from-gray-600 to-gray-800'].map((cls, i) => (
                <div key={i} className={`w-9 h-9 rounded-full border-2 border-black bg-gradient-to-br ${cls}`} />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5" aria-label="5 estrellas">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-gold fill-gold" />)}
              </div>
              <p className="text-sm text-[#8E8E93]">
                <span className="text-white font-semibold">+50 alumnos</span> transformaron su físico
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Mockup desktop */}
        <motion.div initial={{ opacity: 0, x: 60, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex justify-center items-center relative">
          <PlatformMockup />
        </motion.div>

        {/* Mobile mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }} className="flex lg:hidden justify-center">
          <div className="scale-90 origin-top"><PlatformMockup /></div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 hidden sm:flex" aria-hidden="true">
      <span className="text-[11px] text-gray-600 tracking-[0.2em] uppercase font-medium">Scroll</span>
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center pt-1.5">
        <div className="w-1 h-2 bg-gold rounded-full" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
