import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8 backdrop-blur-sm">
            Especialista em Negócios Locais
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
        >
          Seu negócio precisa de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            um site profissional.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Nós já criamos um para você. Sem reuniões, sem compromisso e sem pagar nada adiantado. 
          Veja seu site pronto com seus dados reais antes de decidir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20ver%20o%20prot%C3%B3tipo%20do%20meu%20site%21"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Ver meu site pronto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium text-lg transition-colors hover:bg-white/10 backdrop-blur-sm"
          >
            Como funciona
          </a>
        </motion.div>
      </div>
    </section>
  );
}
