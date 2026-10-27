import React from 'react';
import { motion } from 'motion/react';


// import Goats from './images/GOATS.webp';
import MarketsImg from './images/SKYLINE.webp';
import ExportImg from './images/EXPORT.webp';
import HeroImg from './images/HeroImg.webp';
import Herd from './images/Herd.webp';

interface Pillar {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function About() {
  const pillars: Pillar[] = [
    {
      title: "1. Ethical Sourcing",
      description: "We source healthy, premium goats, sheep, and Dorper livestock directly from vetted pastoral communities and licensed farming cooperatives across Kenya, ensuring natural grazing and full traceability.",
      image: Herd,
      imageAlt: "Herd of goats in a pastoral setting",
    },
    {
      title: "2. Buyer-Specific Order Planning",
      description: "We confirm product category, preferred carcass weight or cuts, packing format, quantity, destination, and delivery terms for each order.",
      image: HeroImg,
      imageAlt: "Meat carcasses in a processing facility",
    },
    {
      title: "3. Middle East & Global Markets",
      description: "We connect buyers in the Middle East and other international markets with Kenyan meat and agricultural products.",
      image: MarketsImg,
      imageAlt: "City skyline representing international markets",
    },
    {
      title: "4. Coordinated Export Planning",
      description: "We coordinate with relevant suppliers, processing facilities, and logistics providers, with attention to clear specifications, timely communication, appropriate documentation, and product handling through dispatch.",
      image: ExportImg,
      imageAlt: "Cargo aircraft being prepared for export freight",
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">About Royana Exports Limited</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">
            Kenyan Meat Exports for International Buyers
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            <strong className="font-semibold text-stone-800">Royana Exports Limited</strong> is a Nairobi-based exporter of chilled and frozen Kenyan sheep, goat, and beef products, as well as fresh fruits, nuts, and spices for international trade. Based at Diamond Plaza II in Parklands, Nairobi, we connect buyers in the Middle East and other markets with Kenyan products.
            <br /><br />
            Every order starts with the buyer's requirements. We align the product category, preferred carcass weight or cuts, packing format, quantity, destination, and delivery terms, then coordinate with relevant suppliers, processing facilities, and logistics providers.
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
                      alt={pillar.imageAlt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{pillar.title}</h3>
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