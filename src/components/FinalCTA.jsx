import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { viewportConfig } from '../utils/animations';

const FinalCTA = () => (
  <section id="cta-final" className="relative py-28 lg:py-36 overflow-hidden" aria-label="Llamada a la acción final">
    <div className="absolute inset-0 bg-dark-secondary" aria-hidden="true">
      <div className="absolute inset-0 bg-gold-radial opacity-80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/20"
          style={{ left: `${10 + i * 16}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      ))}
    </div>
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
            <Sparkles size={28} className="text-gold" />
          </div>
        </div>
        <div className="space-y-3">
          <p className="section-label justify-center text-center">
            <span className="w-6 h-px bg-gold inline-block" />La decisión es tuya<span className="w-6 h-px bg-gold inline-block" />
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05]">
            Tu mejor versión{' '}
            <span className="text-gold-gradient block sm:inline">empieza con</span>{' '}
            una decisión.
          </h2>
        </div>
        <p className="text-[#8E8E93] text-xl max-w-2xl mx-auto leading-relaxed">
          Cada día que esperás es un día que podrías haber avanzado.
          El momento perfecto no existe. El momento es <strong className="text-white">ahora</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <motion.a href="#contacto" className="btn-gold inline-flex items-center gap-3 py-5 px-10 text-lg"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            Comenzar ahora <ArrowRight size={20} />
          </motion.a>
          <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3 py-5 px-8 text-base">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hablar por WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          {['✓ Sin compromiso', '✓ Evaluación gratuita', '✓ Respuesta en 24hs'].map(label => (
            <span key={label} className="text-[#8E8E93] text-sm">{label}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
