import { motion } from 'framer-motion';
import { Check, Dumbbell, Camera, Scale, Ruler, LineChart, Utensils, LayoutDashboard } from 'lucide-react';
import { viewportConfig, staggerContainer, staggerItem } from '../utils/animations';

const features = [
  { icon: Dumbbell, text: 'Rutinas personalizadas por semana', highlight: true },
  { icon: Camera, text: 'Galería privada de fotos evolutivas', highlight: false },
  { icon: Scale, text: 'Registro y gráfico de peso corporal', highlight: false },
  { icon: Ruler, text: 'Seguimiento de medidas corporales', highlight: false },
  { icon: Camera, text: 'Videos explicativos por ejercicio en HD', highlight: true },
  { icon: Utensils, text: 'Plan nutricional y macros diarios', highlight: false },
  { icon: LineChart, text: 'Dashboard de progreso en tiempo real', highlight: true },
  { icon: LayoutDashboard, text: 'Acceso desde cualquier dispositivo, 24/7', highlight: false },
];

const DashboardMockup = () => (
  <div className="bg-[#0A0A0A] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
    style={{ border: '1px solid rgba(212,175,55,0.2)' }}>
    <div className="flex items-center gap-1 px-4 pt-4 pb-3 border-b border-[#1A1A1A]">
      {['Dashboard', 'Rutinas', 'Nutrición', 'Progreso'].map((tab, i) => (
        <button key={tab} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${i === 0 ? 'bg-gold text-black font-bold' : 'text-gray-500'}`}>
          {tab}
        </button>
      ))}
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#141414] rounded-xl p-3 border border-[#1E1E1E]">
          <p className="text-[11px] text-gray-500 mb-1">Peso corporal</p>
          <p className="text-white font-bold text-base">78.5 kg</p>
          <div className="mt-2 flex items-end gap-1 h-12">
            {[82, 80.5, 80, 79.5, 79, 78.8, 78.5].map((h, i) => (
              <div key={i} className={`flex-1 rounded-sm ${i === 6 ? 'bg-gold' : 'bg-[#2A2A2A]'}`}
                style={{ height: `${((h - 77) / 6) * 100}%` }} />
            ))}
          </div>
          <p className="text-[10px] text-green-400 mt-1.5">▼ 3.5kg en 8 semanas</p>
        </div>
        <div className="bg-[#141414] rounded-xl p-3 border border-[#1E1E1E]">
          <p className="text-[11px] text-gray-500 mb-2">Medidas</p>
          {[{ label: 'Cintura', value: '82cm', prev: '87cm' }, { label: 'Pecho', value: '98cm', prev: '96cm' }, { label: 'Cadera', value: '95cm', prev: '99cm' }].map((m, i) => (
            <div key={i} className="flex justify-between items-center py-0.5">
              <span className="text-[10px] text-gray-500">{m.label}</span>
              <div className="text-right">
                <span className="text-[11px] text-white font-semibold">{m.value}</span>
                <span className="text-[10px] text-gray-700 ml-1 line-through">{m.prev}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#141414] rounded-xl p-3 border border-[#1E1E1E]">
        <p className="text-[11px] text-gray-500 mb-2">Esta semana</p>
        <div className="grid grid-cols-7 gap-1">
          {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d, i) => (
            <div key={d} className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${i < 4 ? 'bg-gold text-black' : i === 4 ? 'border border-gold text-gold' : 'bg-[#1E1E1E] text-gray-600'}`}>
                {i < 4 ? '✓' : i === 4 ? '→' : d}
              </div>
              <span className="text-[9px] text-gray-600">{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#141414] rounded-xl p-3 border border-[#1E1E1E]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[11px] text-gray-500">Fotos de evolución</p>
          <span className="text-[10px] text-gold">+ Agregar foto</span>
        </div>
        <div className="flex gap-2 overflow-hidden">
          {['Sem 1', 'Sem 4', 'Sem 8'].map((label, i) => (
            <div key={i} className="flex-1 aspect-[3/4] bg-[#1E1E1E] rounded-lg border border-[#2A2A2A] flex flex-col items-center justify-end pb-2">
              <span className="text-[9px] text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Platform = () => (
  <section id="plataforma" className="bg-dark-secondary py-24 lg:py-32 relative overflow-hidden" aria-label="Plataforma privada">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] blur-[100px] rounded-full" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
          <div>
            <p className="section-label"><span className="w-6 h-px bg-gold inline-block" />Tu plataforma privada</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-5">
              Tu centro de <span className="text-gold-gradient">rendimiento</span> personal.
            </h2>
            <p className="text-[#8E8E93] text-lg leading-relaxed">
              Una plataforma diseñada específicamente para maximizar tu progreso. Todo lo que necesitás, organizado y accesible en un solo lugar.
            </p>
          </div>
          <motion.ul variants={staggerContainer(0.08)} initial="initial" whileInView="animate" viewport={viewportConfig} className="space-y-3">
            {features.map((f, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-center gap-4 group">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${f.highlight ? 'bg-gold/10 border border-gold/30 group-hover:bg-gold/20' : 'bg-dark-card border border-dark-border'}`}>
                  <Check size={14} className="text-gold" strokeWidth={2.5} />
                </div>
                <span className={`text-sm ${f.highlight ? 'text-white font-medium' : 'text-[#8E8E93]'}`}>{f.text}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.a href="#contacto" className="btn-gold inline-flex items-center gap-3 py-4 px-8 text-base"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.3 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            Quiero acceder a mi plataforma
          </motion.a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="absolute inset-0 bg-gold/5 blur-[60px] rounded-3xl" aria-hidden="true" />
          <DashboardMockup />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Platform;
