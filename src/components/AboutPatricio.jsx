import { motion } from 'framer-motion';
import { viewportConfig } from '../utils/animations';

/**
 * FOTO DE PATRICIO:
 * Reemplazá la URL con la foto real de Patricio.
 * Guardar en: /public/assets/patricio-cayola.jpg
 * Dimensiones: mínimo 600×750px, formato portrait.
 *
 * AI Prompt si necesitás referencia visual:
 * "Professional fitness coach, dark premium studio background,
 *  confident posture, athletic build, professional photography"
 */
const PATRICIO_PHOTO = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=750&fit=crop&q=80';

const credentials = [
  'Licenciado en Educación Física y Deportes',
  'Especialista en Nutrición Deportiva',
  'Certificado en Entrenamiento Funcional',
  'Especialista en Recomposición Corporal',
  'Formación en Entrenamiento para Adultos Mayores',
];

const specialties = [
  { label: 'Deportistas', desc: 'Preparación específica por deporte' },
  { label: 'Recomposición corporal', desc: 'Perder grasa y ganar músculo simultáneamente' },
  { label: 'Adultos mayores', desc: 'Entrenamiento seguro y progresivo' },
  { label: 'Principiantes', desc: 'Comenzar bien desde el primer día' },
];

const AboutPatricio = () => (
  <section id="patricio" className="bg-dark-secondary py-24 lg:py-32 relative overflow-hidden" aria-label="Sobre Patricio Cayola">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gold/[0.03] blur-[100px] rounded-full" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Photo */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative flex justify-center">
          <div className="relative">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
              style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
              <img src={PATRICIO_PHOTO} alt="Patricio Nicolás Cayola – Entrenador Personal"
                className="w-full h-[500px] object-cover object-top" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-bold text-xl">Patricio Nicolás Cayola</p>
                <p className="text-gold text-sm font-medium">Entrenador Personal & Coach de Transformación</p>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl" style={{ border: '2px solid rgba(212,175,55,0.3)' }} aria-hidden="true" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl" style={{ border: '2px solid rgba(212,175,55,0.15)' }} aria-hidden="true" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -right-4 top-20 bg-dark-card border border-gold/20 rounded-2xl p-4 shadow-gold-sm hidden sm:block">
            <p className="text-gold font-black text-3xl">+50</p>
            <p className="text-[#8E8E93] text-xs">Alumnos<br />transformados</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -left-4 bottom-28 bg-dark-card border border-dark-border rounded-2xl p-4 shadow-card hidden sm:block">
            <p className="text-white font-black text-3xl">8+</p>
            <p className="text-[#8E8E93] text-xs">Años de<br />experiencia</p>
          </motion.div>
        </motion.div>

        {/* Right: Bio */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
          <div>
            <p className="section-label"><span className="w-6 h-px bg-gold inline-block" />Quién soy</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              No soy solo tu <span className="text-gold-gradient">entrenador</span>. Soy tu sistema.
            </h2>
            <div className="space-y-4 text-[#8E8E93] leading-relaxed">
              <p>Soy Patricio Cayola, Licenciado en Educación Física con más de 8 años dedicados exclusivamente a la transformación física real. No creo en los atajos ni en las promesas vacías.</p>
              <p>Mi diferencial es la combinación de coaching humano profundo con una plataforma tecnológica propia que permite seguimiento continuo, datos reales y ajustes precisos. Cada alumno es un proyecto único.</p>
              <p>Trabajo con <strong className="text-white">deportistas, personas que buscan recomposición corporal</strong> y <strong className="text-white">adultos mayores</strong>, adaptando cada programa con el mismo nivel de exigencia y dedicación.</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-white font-semibold text-sm mb-3">Formación y certificaciones</p>
            {credentials.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
                transition={{ delay: i * 0.07, duration: 0.5 }} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="text-[#8E8E93] text-sm">{c}</span>
              </motion.div>
            ))}
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4">Trabajo especialmente con</p>
            <div className="grid grid-cols-2 gap-3">
              {specialties.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportConfig}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-dark-card border border-dark-border rounded-2xl p-4 hover:border-gold/20 transition-colors duration-300">
                  <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
                  <p className="text-[#8E8E93] text-xs leading-snug">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPatricio;
