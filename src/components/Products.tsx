import React from 'react';
import { motion } from 'motion/react';
// Import local images from the same folder
import MeatImg from './images/MEAT.webp';
import SpicesImg from './images/SPICES.webp';
import FruitsImg from './images/FRUITS.webp';
import NutsImg from './images/NUTS.webp';

export default function Products() {
  const categories = [
    {
      title: "Premium Raw Meat",
      description: "Certified Halal and Veterinary-approved beef, mutton, and poultry. Processed in KMC-approved facilities with strict cold-chain maintenance.",
      image: MeatImg,
      tags: ["Beef", "Mutton", "Poultry", "Halal"]
    },
    {
      title: "Aromatic Spices",
      description: "Rich, vibrant, and ethically sourced spices. Carefully dried and packaged to preserve volatile oils, aroma, and robust flavor profiles.",
      image: SpicesImg,
      tags: ["Cardamom", "Cinnamon", "Cloves", "Turmeric"]
    },
    {
      title: "Fresh Fruits",
      description: "Hand-picked tropical and subtropical fruits. Exported at peak ripeness utilizing advanced controlled-atmosphere shipping containers.",
      image: FruitsImg,
      tags: ["Avocados", "Mangoes", "Pineapples", "Passion Fruit"]
    },
    {
      title: "Premium Nuts",
      description: "High-grade, carefully sorted nuts. Processed to eliminate impurities and packed securely to maintain crunch and nutritional value.",
      image: NutsImg,
      tags: ["Hazelnuts", "Cashews", "Peanuts", "Almonds", "Walnuts"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">Our Catalog</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">Export-Grade Commodities</h3>
          <p className="text-lg text-stone-600">
            Royana Exports Ltd supplies a diverse portfolio of high-demand agricultural products. Every category is managed under strict quality assurance protocols to guarantee market readiness upon arrival.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
            >
              <div className="h-64 overflow-hidden relative">
                {/* Note: Placeholder images, client will replace with actual product imagery */}
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h4 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{cat.title}</h4>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-semibold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
