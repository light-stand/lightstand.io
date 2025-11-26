import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const plans = [
  {
    name: "Lightstand Pro",
    price: "R$ 50",
    setup: "R$ 300 taxa única de setup",
    description: "Tudo que você precisa para ter uma presença digital profissional.",
    features: [
      "Site Profissional Completo", 
      "Hospedagem Premium Inclusa", 
      "Manutenção Mensal", 
      "Otimizado para Google (SEO)",
      "Carregamento Instantâneo",
      "Botão WhatsApp Integrado"
    ],
    highlight: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Investimento simples.
          </motion.h2>
          <p className="text-zinc-400 text-lg">
            Sem taxas escondidas. Cancele quando quiser.
          </p>
        </div>

        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl border backdrop-blur-sm flex flex-col w-full max-w-lg",
                plan.highlight 
                  ? "bg-white/10 border-white/20 ring-1 ring-white/20" 
                  : "bg-white/5 border-white/10"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wide">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-400">/mês</span>
                </div>
                <p className="text-sm text-zinc-500">{plan.setup}</p>
              </div>

              <p className="text-zinc-400 mb-8 pb-8 border-b border-white/10">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-xl font-medium transition-all",
                plan.highlight
                  ? "bg-white text-black hover:scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}>
                Começar Agora
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
