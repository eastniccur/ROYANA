import React from 'react';
import { motion } from 'motion/react';


import Goats from './images/GOATS.webp';
import ProcessingImg from './images/PROCESSING.webp';
import MarketsImg from './images/SKYLINE.webp';
import ExportImg from './images/EXPORT.webp';

interface Pillar {
  title: string;
  description: string;
  image?: string;
}

export default function About() {
  const pillars: Pillar[] = [
    {
      title: "1. Ethical Sourcing",
      description: "We source healthy, premium goats, sheep, and Dorper livestock directly from vetted pastoral communities and licensed farming cooperatives across Kenya, ensuring natural grazing and full traceability.",
      image: Goats,
    },
    {
      title: "2. Certified Processing Partners",
      description: "We collaborate exclusively with export-licensed abattoirs and facilities operating under strict Halal practices, HACCP guidelines, and veterinary supervision for hygienic slaughter and chilling.",
      image: ProcessingImg,
    },
    {
      title: "3. Target Markets",
      description: "Our primary export channels serve wholesale importers, distributor networks, and commercial meat suppliers across the Middle East (GCC region), select EU destinations, and East Asia.",
      image: MarketsImg,
    },
    {
      title: "4. Full Export & Air Freight Services",
      description: "We handle end-to-end export execution—including government health certificates, veterinary documentation, Halal certification, custom packaging, and temperature-controlled air freight.",
      image: ExportImg,
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">About Royana Exports</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">
            Reliable Kenyan Halal Meat Supply
          </h3>
          <p className="text-lg text-stone-600 leading-relaxed">
            Royana Exports Ltd connects Kenyan livestock producers with international buyers. We streamline the export process to deliver high-quality chilled and frozen Halal carcass and primal cuts under complete sanitary compliance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-50 rounded-2xl border border-stone-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image Placeholder Slot (Renders if image prop is provided) */}
                {pillar.image && (
                  <div className="w-full h-44 overflow-hidden bg-stone-200">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h4 className="text-xl font-bold text-stone-900 mb-3">{pillar.title}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}