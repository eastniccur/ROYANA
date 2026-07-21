import React from 'react';
import { motion } from 'motion/react';
import { Globe2, ShieldCheck, Ship } from 'lucide-react';
import MEATS from './images/MEATS.webp';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-700 rounded-full mix-blend-multiply filter blur-[100px] translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500 rounded-full mix-blend-multiply filter blur-[120px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Added: Clear Company Name Just Above the Badge */}
            <p className="text-stone-900 font-extrabold text-lg sm:text-xl tracking-wider uppercase mb-3">
              Royana Exports Limited
            </p>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide uppercase mb-6">
              <Globe2 className="w-4 h-4" />
              Global Agricultural Supply Chain
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
              Premium Agricultural & <span className="text-emerald-700">Raw Meat Exports</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
              Royana Exports Ltd delivers world-class agricultural commodities. From certified halal meat and exotic fruits to premium spices and nuts, we bridge the gap between rich harvests and global markets across the Middle East, EU, and Asia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="inline-flex justify-center items-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-emerald-200">
                Discuss Your Import Needs
              </a>
              <a href="#products" className="inline-flex justify-center items-center bg-white hover:bg-stone-50 text-emerald-800 border border-stone-200 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm">
                Explore Our Catalog
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-stone-600 font-medium">
                <Ship className="w-5 h-5 text-amber-600" />
                <span>Shipping to ME, EU & Asia</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600 font-medium">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>KEBS, HALAL & HACCP Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-stone-200">
              <img 
                src={MEATS} 
                alt="Premium agricultural products and logistics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-semibold text-lg">Uncompromising Quality</p>
                <p className="text-white/80 text-sm">Source-to-destination traceability</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Certified</p>
                <p className="text-stone-900 font-bold">100% Export Ready</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}