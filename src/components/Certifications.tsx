import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, ShieldAlert } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { name: "KEBS", full: "Kenya Bureau of Standards", desc: "Ensures compliance with national safety and quality requirements." },
    { name: "KMC", full: "Kenya Meat Commission", desc: "Approved facility processing for high-grade raw meat exports." },
    { name: "VETERINARY", full: "Certified Veterinary Cleared", desc: "Strict animal health and sanitary compliance for meat products." },
    { name: "HALAL", full: "Halal Certified", desc: "100% compliant with Islamic dietary laws and slaughter procedures." },
    { name: "HACCP", full: "Hazard Analysis Critical Control Point", desc: "International standard defining the requirements for effective food safety." }
  ];

  return (
    <section id="certifications" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">Global Trust</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Recognized Industry Certifications</h3>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Royana Exports Ltd does not compromise on safety or quality. Our operations are fully accredited by leading national and international regulatory bodies, providing our global partners with absolute assurance and market access.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 max-w-sm backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Security & Verification</h4>
                  <p className="text-sm text-emerald-200">
                    All export documentation features cryptographically secure verifiable tracking numbers to prevent fraud and ensure rapid customs clearance at destination ports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-emerald-800/80 hover:bg-emerald-700 transition-colors border border-emerald-700/50 rounded-xl p-6 text-center flex flex-col items-center group"
            >
              <BadgeCheck className="w-12 h-12 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-1 tracking-tight">{cert.name}</h4>
              <p className="text-xs text-emerald-300 font-medium uppercase tracking-wider mb-3">{cert.full}</p>
              <p className="text-sm text-emerald-100/80 leading-snug">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
