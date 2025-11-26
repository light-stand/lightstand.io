import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-8 h-8 text-purple-400" />,
    title: "Vibecoding Technology",
    description: "Desenvolvimento assistido por IA combinado com engenheiros experts. Código limpo, moderno e escalável."
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    title: "Astro Core",
    description: "Arquitetura de ilhas para zero JavaScript desnecessário. Seu site é entregue como HTML estático ultra-leve."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    title: "Lead Ready",
    description: "Estrutura otimizada para conversão. CTAs estratégicos e design focado em transformar visitantes em clientes."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-zinc-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative p-8 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-sm hover:border-white/10 transition-colors">
                <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
