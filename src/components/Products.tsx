import React, { useState } from 'react';
import { motion } from 'motion/react';
// Import local images from the same folder
import MeatImg from './images/MEAT.webp';
import SpicesImg from './images/SPICES.webp';
import FruitsImg from './images/FRUITS.webp';
import NutsImg from './images/NUTS.webp';
import MUTTON from './images/MUTTON.webp';
import GOAT from './images/GOAT.webp';
import LAMB from './images/LAMB.webp';

export default function Products() {
  const categories = [
    {
      id: "meat",
      title: "Premium Raw Meat",
      description: "Certified Halal and Veterinary-approved beef, mutton, and poultry. Processed in KMC-approved facilities with strict cold-chain maintenance.",
      defaultImage: MeatImg,
      items: [
        { name: "Beef", image: MeatImg },      // Replace MeatImg with specific import (e.g. BeefImg) when ready
        { name: "Mutton", image: MUTTON },    // Replace MeatImg with MuttonImg
        { name: "Goat", image: GOAT },   // Replace MeatImg with PoultryImg
        { name: "Lamb", image: LAMB }
      ]
    },
    {
      id: "spices",
      title: "Aromatic Spices",
      description: "Rich, vibrant, and ethically sourced spices. Carefully dried and packaged to preserve volatile oils, aroma, and robust flavor profiles.",
      defaultImage: SpicesImg,
      items: [
        { name: "Cardamom", image: SpicesImg },
        { name: "Cinnamon", image: SpicesImg },
        { name: "Cloves", image: SpicesImg },
        { name: "Turmeric", image: SpicesImg }
      ]
    },
    {
      id: "fruits",
      title: "Fresh Fruits",
      description: "Hand-picked tropical and subtropical fruits. Exported at peak ripeness utilizing advanced controlled-atmosphere shipping containers.",
      defaultImage: FruitsImg,
      items: [
        { name: "Avocados", image: FruitsImg },
        { name: "Mangoes", image: FruitsImg },
        { name: "Pineapples", image: FruitsImg },
        { name: "Passion Fruit", image: FruitsImg }
      ]
    },
    {
      id: "nuts",
      title: "Premium Nuts",
      description: "High-grade, carefully sorted nuts. Processed to eliminate impurities and packed securely to maintain crunch and nutritional value.",
      defaultImage: NutsImg,
      items: [
        { name: "Hazelnuts", image: NutsImg },
        { name: "Cashews", image: NutsImg },
        { name: "Peanuts", image: NutsImg },
        { name: "Almonds", image: NutsImg },
        { name: "Walnuts", image: NutsImg }
      ]
    }
  ];

  // State to track selected images mapped by category ID
  const [selectedImages, setSelectedImages] = useState<Record<string, string>>(() =>
    categories.reduce((acc, cat) => {
      acc[cat.id] = cat.defaultImage;
      return acc;
    }, {} as Record<string, string>)
  );

  const handleItemClick = (categoryId: string, image: string) => {
    setSelectedImages((prev) => ({
      ...prev,
      [categoryId]: image,
    }));
  };

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
              key={cat.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
            >
              <div className="h-64 overflow-hidden relative">
                {/* Note: Placeholder images, client will replace with actual product imagery */}
                <img 
                  src={selectedImages[cat.id] || cat.defaultImage} 
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
                  {cat.items.map((item) => {
                    const isSelected = selectedImages[cat.id] === item.image;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleItemClick(cat.id, item.image)}
                        className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                          isSelected
                            ? 'bg-emerald-700 text-white'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}