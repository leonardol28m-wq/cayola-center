import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light origin-left"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
};

export default ScrollProgress;
