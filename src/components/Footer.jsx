import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import { viewportConfig } from '../utils/animations';

// ⚙️  Actualizá con los datos reales de Patricio
const CONTACT = {
  instagram: 'https://instagram.com/cayolacenter',
  whatsapp: 'https://wa.me/5491100000000',
  email: 'patricio@cayolacenter.com',
  instagramHandle: '@cayolacenter',
};

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect width="40" height="40" rx="10" fill="#0A0A0A" stroke="#D4AF37" strokeWidth="1" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14" fill="#D4AF37" letterSpacing="-0.5">CC</text>
    </svg>
    <div>
      <span className="text-white font-bold text-lg tracking-tight leading-none block">Cayola</span>
      <span className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase leading-none">Center</span>
    </div>
  </div>
);

const socialLinks = [
  { name: 'Instagram', href: CONTACT.instagram, icon: Instagram, label: CONTACT.instagramHandle, color: 'hover:text-pink-400' },
  { name: 'WhatsApp', href: CONTACT.whatsapp, icon: WhatsAppIcon, label: 'Escribinos', color: 'hover:text-[#25D366]' },
  { name: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail, label: CONTACT.email, color: 'hover:text-gold' },
];

const navLinks = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#transformaciones', label: 'Transformaciones' },
  { href: '#patricio', label: 'Sobre Patricio' },
  { href: '#contacto', label: 'Contacto' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8" role="contentinfo" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-2">
            <Logo />
            <p className="text-[#8E8E93] text-sm leading-relaxed max-w-sm">
              Entrenamiento personalizado, nutrición y seguimiento profesional desde una plataforma creada para maximizar tus resultados.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                  <a key={link.name} href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-[#8E8E93] ${link.color} transition-all duration-200 hover:border-white/15`}
                    aria-label={link.name}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Nav */}
          <div>
            <p className="text-white font-semibold text-xs mb-5 tracking-wide uppercase">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#8E8E93] hover:text-gold text-sm transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-xs mb-5 tracking-wide uppercase">Contacto</p>
            <ul className="space-y-3">
              {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className={`flex items-center gap-2.5 text-[#8E8E93] text-sm ${link.color} transition-colors duration-200`}>
                      <Icon size={15} />{link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#4A4A4F] text-xs">© {year} Cayola Center · Patricio Nicolás Cayola. Todos los derechos reservados.</p>
          <p className="text-[#4A4A4F] text-xs">Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
