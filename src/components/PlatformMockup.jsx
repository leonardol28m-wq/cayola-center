import { motion } from 'framer-motion';
import { Check, Dumbbell, Camera, TrendingUp, Flame } from 'lucide-react';

const exercises = [
  { name: 'Sentadilla', sets: '4×10', done: true },
  { name: 'Hip Thrust', sets: '4×12', done: true },
  { name: 'Prensa 45°', sets: '3×15', done: false },
  { name: 'Curl Femoral', sets: '3×12', done: false },
];

const macros = [
  { label: 'Proteína', value: 185, max: 200, color: '#D4AF37' },
  { label: 'Carbs', value: 210, max: 280, color: '#6B7280' },
  { label: 'Grasas', value: 65, max: 80, color: '#4B5563' },
];

const PlatformMockup = () => (
  <div className="relative flex justify-center items-center">
    {/* Glow behind phone */}
    <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full scale-75" />

    {/* Phone frame */}
    <motion.div
      className="relative w-[300px] sm:w-[320px] bg-[#0A0A0A] rounded-[44px] shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden"
      style={{ border: '1.5px solid rgba(212,175,55,0.25)' }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Notch */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-28 h-6 bg-[#050505] rounded-full" />
      </div>

      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pb-2 text-[11px] text-gray-500">
        <span className="font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 24 12" className="w-5 h-3" fill="#8E8E93">
            <rect x="0" y="3" width="3" height="9" rx="1" /><rect x="5" y="2" width="3" height="10" rx="1" />
            <rect x="10" y="1" width="3" height="11" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" />
          </svg>
          <svg viewBox="0 0 25 12" className="w-6 h-3" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#8E8E93" strokeWidth="1" />
            <rect x="2" y="2" width="16" height="8" rx="2" fill="#D4AF37" />
          </svg>
        </div>
      </div>

      {/* App content */}
      <div className="px-4 pb-6 space-y-3 max-h-[600px] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-1">
          <div>
            <p className="text-[11px] text-gray-500">Bienvenido de nuevo,</p>
            <p className="text-white font-bold text-sm">Juan García 👋</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
            <span className="text-black font-bold text-xs">JG</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5">
          {[{ label: 'kg actual', value: '78.5' }, { label: 'progreso', value: '87%' }, { label: 'días racha', value: '21' }].map((s, i) => (
            <div key={i} className="bg-[#141414] rounded-xl p-2.5 text-center border border-[#242424]">
              <p className="text-gold font-bold text-base leading-none mb-1">{s.value}</p>
              <p className="text-gray-500 text-[10px]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Workout */}
        <div className="bg-gradient-to-br from-[#1A1600] to-[#141414] rounded-2xl p-3 border border-gold/20">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-[10px] text-gray-500 mb-0.5 flex items-center gap-1">
                <Dumbbell size={10} className="text-gold" /> Rutina de hoy
              </p>
              <p className="text-white font-bold text-xs">Piernas + Glúteos</p>
            </div>
            <span className="bg-gold text-black text-[9px] font-black px-2 py-0.5 rounded-full tracking-wide">HOY</span>
          </div>
          <div className="flex gap-3 text-[10px] text-gray-500 mb-2.5">
            <span>6 ejercicios</span><span>•</span><span>55 min</span><span>•</span>
            <span className="text-gold">Alta intensidad</span>
          </div>
          <div className="space-y-1.5">
            {exercises.map((ex, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${ex.done ? 'bg-gold' : 'border border-gray-700'}`}>
                  {ex.done && <Check size={9} className="text-black" strokeWidth={3} />}
                </div>
                <span className={`text-[11px] flex-1 ${ex.done ? 'text-gray-600 line-through' : 'text-white'}`}>{ex.name}</span>
                <span className="text-[10px] text-gray-600">{ex.sets}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition */}
        <div className="bg-[#141414] rounded-2xl p-3 border border-[#242424]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-white text-xs font-semibold">Nutrición</p>
            <p className="text-gold text-[10px] font-bold">1,850 / 2,200 kcal</p>
          </div>
          <div className="h-1.5 bg-[#242424] rounded-full mb-2.5 overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
              initial={{ width: 0 }} animate={{ width: '84%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} />
          </div>
          <div className="grid grid-cols-3 gap-1">
            {macros.map((m, i) => (
              <div key={i}>
                <div className="h-1 bg-[#242424] rounded-full mb-1 overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ background: m.color }}
                    initial={{ width: 0 }} animate={{ width: `${(m.value / m.max) * 100}%` }}
                    transition={{ duration: 1.2, delay: 0.7 + i * 0.1 }} />
                </div>
                <p className="text-[10px] text-gray-600">{m.label}: <span className="text-gray-400">{m.value}g</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution photos */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-white text-xs font-semibold">Evolución fotográfica</p>
            <p className="text-gold text-[10px]">Ver todo →</p>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-[#141414] rounded-xl border border-[#242424] flex flex-col items-center justify-center gap-1">
                <Camera size={14} className="text-gray-600" />
                <p className="text-[9px] text-gray-700">Sem. {i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-3">
        <div className="w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </motion.div>

    {/* Floating notification */}
    <motion.div className="absolute -right-4 top-16 bg-dark-card border border-dark-border rounded-2xl px-3 py-2 shadow-card"
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }}>
      <p className="text-[10px] text-gray-400">💪 ¡Completaste el 87%</p>
      <p className="text-[10px] text-white font-semibold">de tu objetivo semanal!</p>
    </motion.div>

    {/* Floating badge */}
    <motion.div className="absolute -left-6 bottom-24 bg-dark-card border border-gold/20 rounded-2xl px-3 py-2 shadow-card"
      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.6 }}>
      <p className="text-[10px] text-gold font-bold">🏆 ¡Nuevo récord!</p>
      <p className="text-[10px] text-gray-400">Hip Thrust 80kg</p>
    </motion.div>
  </div>
);

export default PlatformMockup;
