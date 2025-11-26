import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg tracking-tighter text-white">
            <span className="font-medium">light</span><span className="font-bold">stand</span>
          </span>
          <span className="text-zinc-500 text-sm">© 2025</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-sm text-zinc-600">
          Designed by Lightstand in 2025
        </div>
      </div>
    </footer>
  );
}
