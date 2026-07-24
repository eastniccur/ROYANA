import React from 'react';
import { motion } from 'motion/react';
import { Globe2, ShieldCheck, Ship } from 'lucide-react';
import GOATS from './images/GOATS.webp';

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
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              <Globe2 className="w-4 h-4 shrink-0" />
              Global Halal Meat Supply Chain From Kenya
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
              Premium <span className="text-emerald-700">Chilled & Frozen Halal Meat</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
              Royana Exports Ltd delivers premium chilled and frozen Halal meat from Kenya to global markets. Specializing in high-quality goat, mutton, and Dorper meat, we bridge the gap between rich livestock farming and international trade partners across the Middle East, EU, and Asia.
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
                <span>Shipping to Gulf, EU & Asia</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600 font-medium">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>Licensed Halal & Vet Documentation</span>
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
                src={GOATS} 
                alt="Kenyan livestock and high-quality Halal meat export operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}