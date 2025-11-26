import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          lightstand
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Soluções</a>
          <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Preços</a>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contato</a>
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </motion.nav>
  );
}
