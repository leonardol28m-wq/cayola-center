import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Logo = () => (
  <a href="#inicio" className="flex items-center gap-3 group" aria-label="Cayola Center">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#0A0A0A" stroke="#D4AF37" strokeWidth="1" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14"
          fill="#D4AF37" letterSpacing="-0.5">CC</text>
      </svg>
    </div>
    <div className="hidden sm:block">
      <span className="text-white font-bold text-lg tracking-tight leading-none block">Cayola</span>
      <span className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase leading-none">Center</span>
    </div>
  </a>
);

const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick}
    className="relative text-[#8E8E93] hover:text-white text-sm font-medium transition-colors duration-200 group">
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
  </a>
);

const navLinks = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#transformaciones', label: 'Transformaciones' },
  { href: '#patricio', label: 'Sobre Patricio' },
  { href: '#contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
        role="navigation" aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
              ))}
            </div>
            <div className="hidden md:block">
              <motion.a href="#contacto"
                className="group inline-flex items-center gap-2 btn-gold py-2.5 px-6 text-sm"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Quiero mi evaluación
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={closeMenu}
                  className="text-white/80 hover:text-gold text-lg font-medium transition-colors py-1">
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/5">
                <a href="#contacto" onClick={closeMenu}
                  className="btn-gold inline-flex items-center gap-2 py-3 px-6 text-sm w-full justify-center">
                  Quiero mi evaluación <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
