import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, X, Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Card = ({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className={cn(
      "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors",
      className
    )}
  >
    {children}
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section id="benefits" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            O problema dos sites amadores.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Sites lentos e feios perdem clientes todos os dias. Nós resolvemos isso definitivamente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Speed */}
          <Card className="md:col-span-2" delay={0.2}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Velocidade Instantânea</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Sites Wordpress carregam em 3-5 segundos. Nossos sites carregam em milissegundos.
                  Google ama velocidade. Seus clientes também.
                </p>
              </div>
              <div className="flex-1 bg-black/40 rounded-xl p-6 w-full border border-white/5">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <span className="text-zinc-500">Wordpress</span>
                  <span className="text-red-400 flex items-center gap-2">
                    <X className="w-4 h-4" /> 4.2s
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Lightstand</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <Check className="w-4 h-4" /> 0.1s
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2: Mobile First */}
          <Card delay={0.4}>
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">100% Mobile</h3>
            <p className="text-zinc-400 leading-relaxed">
              Desenhado primeiro para o celular, onde 80% dos seus clientes estão.
            </p>
          </Card>

          {/* Card 3: Security */}
          <Card delay={0.6}>
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sem Dor de Cabeça</h3>
            <p className="text-zinc-400 leading-relaxed">
              Nós cuidamos de tudo: domínio, hospedagem e atualizações. Você foca no seu negócio.
            </p>
          </Card>

          {/* Card 4: Score */}
          <Card className="md:col-span-2" delay={0.8}>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Google Lighthouse Score Alto</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Otimização máxima para SEO. Apareça na frente dos seus concorrentes no Google.
                </p>
              </div>
              <div className="flex gap-4">
                {[98, 100, 97, 98].map((score, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-green-500 font-bold text-xl">
                      {score}
                    </div>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">
                      {["Perf", "Acess", "Best", "SEO"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
