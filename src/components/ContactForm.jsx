import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Calendar, Target, Phone, CheckCircle2 } from 'lucide-react';
import { viewportConfig } from '../utils/animations';

/**
 * ⚙️  CONFIGURACIÓN WHATSAPP
 * Reemplazá con el número real de Patricio (sin + ni espacios)
 */
const WA_NUMBER = '5491100000000';

/**
 * ⚙️  CONFIGURACIÓN WEBHOOK (Make / Zapier)
 * Descomentá y reemplazá con tu URL cuando estés listo:
 * const WEBHOOK_URL = 'https://hook.eu1.make.com/XXXXXXXXXXXXXXXX';
 */

const objectives = [
  'Perder grasa corporal', 'Ganar masa muscular', 'Recomposición corporal',
  'Mejorar resistencia y salud', 'Preparación deportiva', 'Inicio desde cero', 'Otro objetivo',
];

const InputField = ({ icon: Icon, label, id, ...props }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-[#8E8E93]">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93] pointer-events-none"><Icon size={16} /></div>
      <input id={id} {...props}
        className="w-full bg-dark-card border border-dark-border text-white placeholder-gray-700 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-200" />
    </div>
  </div>
);

const ContactForm = () => {
  const [form, setForm] = useState({ nombre: '', edad: '', objetivo: '', whatsapp: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const isValid = form.nombre.trim() && form.edad && form.objetivo && form.whatsapp.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);

    /**
     * ⚙️  WEBHOOK Make / Zapier – descomentá cuando tengas la URL:
     * try {
     *   await fetch(WEBHOOK_URL, {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ ...form, timestamp: new Date().toISOString(), fuente: 'Cayola Center Landing' }),
     *   });
     * } catch (err) { console.error('Webhook error:', err); }
     */

    await new Promise(res => setTimeout(res, 800));

    const message = encodeURIComponent(
      `¡Hola Patricio! 👋\n\nMe interesa comenzar en Cayola Center. Te cuento un poco sobre mí:\n\n` +
      `👤 *Nombre:* ${form.nombre}\n🎂 *Edad:* ${form.edad} años\n🎯 *Objetivo:* ${form.objetivo}\n📱 *WhatsApp:* ${form.whatsapp}\n\n` +
      `¿Podemos agendar una evaluación inicial? 💪`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="contacto" className="bg-black py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="space-y-6">
            <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} className="text-gold" />
            </div>
            <h3 className="text-3xl font-bold text-white">¡Genial, {form.nombre.split(' ')[0]}! 🎉</h3>
            <p className="text-[#8E8E93] leading-relaxed">
              Tu solicitud fue enviada a WhatsApp. Patricio se va a contactar con vos en las próximas horas.
            </p>
            <div className="bg-dark-card border border-dark-border rounded-2xl p-5 text-left space-y-2">
              <p className="text-white font-semibold text-sm mb-3">Tu solicitud incluye:</p>
              {[['👤 Nombre', form.nombre], ['🎂 Edad', `${form.edad} años`], ['🎯 Objetivo', form.objetivo], ['📱 WhatsApp', form.whatsapp]].map(([k, v]) => (
                <div key={k} className="flex gap-3 text-sm">
                  <span className="text-[#8E8E93]">{k}:</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setSubmitted(false)} className="text-gold text-sm hover:underline">Enviar otra solicitud</button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-black py-24 lg:py-32 relative overflow-hidden" aria-label="Formulario de contacto">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-gold/[0.025] blur-[130px] rounded-full" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left context */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-8 lg:sticky lg:top-28">
            <div>
              <p className="section-label"><span className="w-6 h-px bg-gold inline-block" />Evaluación gratuita</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                El primer paso <span className="text-gold-gradient">es el más importante</span>.
              </h2>
              <p className="text-[#8E8E93] text-lg leading-relaxed">
                Completá el formulario y en menos de 24 horas me pongo en contacto con vos para coordinar tu evaluación inicial sin costo.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Completás el formulario', desc: 'Solo te lleva 30 segundos.' },
                { step: '02', title: 'Te contacto en 24hs', desc: 'Por WhatsApp para coordinar tu evaluación.' },
                { step: '03', title: 'Evaluación sin costo', desc: 'Analizamos tus objetivos y diseñamos tu plan.' },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
                  transition={{ delay: i * 0.1, duration: 0.5 }} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-black flex-shrink-0">{s.step}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{s.title}</p>
                    <p className="text-[#8E8E93] text-sm">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-dark-card border border-dark-border rounded-2xl p-5">
              <p className="text-white font-semibold mb-1">🔒 Tu información es privada</p>
              <p className="text-[#8E8E93] text-sm leading-relaxed">Tus datos solo son usados para contactarte. No enviamos spam ni compartimos tu información con terceros.</p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <form onSubmit={handleSubmit} noValidate
              className="bg-dark-card border border-dark-border rounded-3xl p-7 sm:p-8 space-y-5 shadow-card">
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Solicitar evaluación inicial</h3>
                <p className="text-[#8E8E93] text-sm">Completá los datos y te contactamos.</p>
              </div>
              <div className="h-px bg-dark-border" />
              <InputField icon={User} label="Tu nombre completo" id="nombre" type="text" name="nombre"
                value={form.nombre} onChange={handleChange} placeholder="Ej. Juan García" required autoComplete="name" />
              <InputField icon={Calendar} label="Tu edad" id="edad" type="number" name="edad"
                value={form.edad} onChange={handleChange} placeholder="Ej. 28" min="14" max="90" required />
              <div className="space-y-2">
                <label htmlFor="objetivo" className="block text-sm font-medium text-[#8E8E93]">Tu objetivo principal</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93] pointer-events-none"><Target size={16} /></div>
                  <select id="objetivo" name="objetivo" value={form.objetivo} onChange={handleChange} required
                    className="w-full bg-dark-card border border-dark-border text-white rounded-xl pl-11 pr-10 py-3.5 text-sm outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-200 appearance-none cursor-pointer"
                    style={{ backgroundImage: 'none' }}>
                    <option value="" disabled className="bg-dark-card">Seleccioná tu objetivo...</option>
                    {objectives.map(obj => <option key={obj} value={obj} className="bg-dark-card">{obj}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8E8E93] pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </div>
              <InputField icon={Phone} label="Tu número de WhatsApp" id="whatsapp" type="tel" name="whatsapp"
                value={form.whatsapp} onChange={handleChange} placeholder="Ej. +54 9 11 0000-0000" required autoComplete="tel" />
              <motion.button type="submit" disabled={!isValid || loading}
                className="w-full btn-gold flex items-center justify-center gap-3 py-4 text-base font-bold disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
                whileHover={isValid ? { scale: 1.02 } : {}} whileTap={isValid ? { scale: 0.98 } : {}}>
                {loading ? (
                  <><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>Enviando...</>
                ) : <>Solicitar evaluación gratuita <ArrowRight size={18} /></>}
              </motion.button>
              <p className="text-center text-xs text-[#4A4A4F]">Al enviar aceptás ser contactado por WhatsApp.<br />Sin compromiso. Sin spam.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
