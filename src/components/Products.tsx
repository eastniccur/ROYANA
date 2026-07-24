import React, { useState } from 'react';
import { motion } from 'motion/react';
// Import local images from the same folder
import SpicesImg from './images/SPICES.webp';
import FruitsImg from './images/FRUITS.webp';
import NutsImg from './images/NUTS.webp';
import MUTTONS from './images/MUTTONS.webp';
import GOAT from './images/GOATS.webp';
import DORPER from './images/PROCESSING.webp';

interface MeatItem {
  id: string;
  name: string;
  image: string;
  description: string;
  carcassWeight: string;
  packaging: string;
  shelfLife: string;
  moq: string;
  shippingMethods: string;
  incoterms: string;
}

export default function Products() {
  // 1. Primary Focus: Detailed Meat Offering
  const meatProducts: MeatItem[] = [
    {
      id: "goat",
      name: "Chilled & Frozen Goat",
      image: GOAT,
      description: "Lean, tender Kenyan goat meat processed in export-licensed abattoirs. Available in whole carcasses or 6-way primal cuts under full veterinary clearance.",
      carcassWeight: "8 kg – 14 kg (Custom weights on request)",
      packaging: "Stockinette cloth wrapping / Vacuum-sealed bags in master cartons",
      shelfLife: "Chilled: 0°C to 2°C (14–21 Days) | Frozen: -18°C (12 Months)",
      moq: "1,000 kg (Air Freight) / 1 x 20ft Reefer Container",
      shippingMethods: "Air Freight (JKIA Nairobi) & Temperature-controlled Sea Freight",
      incoterms: "FOB (Nairobi/Mombasa), CIF, CFR"
    },
    {
      id: "mutton",
      name: "Chilled & Frozen Mutton",
      image: MUTTONS,
      description: "Premium quality mutton sourced from healthy Kenyan sheep. Processed under strict Halal requirements and rapidly chilled for optimal fresh shipment.",
      carcassWeight: "10 kg – 18 kg per carcass",
      packaging: "Protective stockinette wrap / Poly-lined cartons for primal cuts",
      shelfLife: "Chilled: 0°C to 2°C (14 Days) | Frozen: -18°C (12 Months)",
      moq: "1,000 kg (Air Cargo) / 10 Metric Tons (Sea Cargo)",
      shippingMethods: "Air Cargo & Refrigerated Sea Freight",
      incoterms: "FOB, CIF, CFR"
    },
    {
      id: "dorper",
      name: "Dorper Sheep Meat",
      image: DORPER,
      description: "Superior quality Dorper lamb/mutton renowned for high fat-to-meat ratio, tenderness, and exceptional flavor profiles across Middle Eastern markets.",
      carcassWeight: "12 kg – 20 kg per carcass",
      packaging: "Export stockinette sleeve & food-grade thermal wraps",
      shelfLife: "Chilled: 0°C to 2°C (14–21 Days) | Frozen: -18°C (12 Months)",
      moq: "1,000 kg",
      shippingMethods: "Direct Air Cargo & Cold-Chain Shipping Containers",
      incoterms: "FOB, CIF, CFR"
    },
    {
      id: "carcass",
      name: "Whole Halal Carcasses",
      image: DORPER,
      description: "Whole chilled or frozen carcasses (Goat, Sheep, Dorper) carefully inspected, tail-wrapped, and tagged with veterinary and Halal seals.",
      carcassWeight: "8 kg – 22 kg (Categorized by weight grade)",
      packaging: "Official veterinary sealed stockinette packaging",
      shelfLife: "Chilled: 14 Days | Frozen: 12 Months",
      moq: "500 Carcasses (Air Cargo)",
      shippingMethods: "Dedicated Air Freight Cold-Chain",
      incoterms: "FOB Nairobi, CIF Destination Airport"
    }
  ];

  // Active state for detailed Meat viewer
  const [activeMeat, setActiveMeat] = useState<MeatItem>(meatProducts[0]);

  // 2. Secondary Commodities
  const secondaryCategories = [
    {
      id: "spices",
      title: "Aromatic Spices",
      description: "Rich, vibrant, and ethically sourced spices. Carefully dried and packaged to preserve volatile oils and robust flavor profiles.",
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
      description: "Hand-picked tropical fruits exported under controlled temperature logistics.",
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
      description: "High-grade, carefully sorted nuts processed to maintain crunch and nutritional integrity.",
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

  // State for secondary image selection
  const [selectedSecondaryImages, setSelectedSecondaryImages] = useState<Record<string, string>>(() =>
    secondaryCategories.reduce((acc, cat) => {
      acc[cat.id] = cat.defaultImage;
      return acc;
    }, {} as Record<string, string>)
  );

  const handleSecondaryClick = (categoryId: string, image: string) => {
    setSelectedSecondaryImages((prev) => ({
      ...prev,
      [categoryId]: image,
    }));
  };

  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">Our Catalog</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">Export-Grade Products</h3>
          <p className="text-lg text-stone-600">
            Royana Exports Ltd specializes in premium Kenyan chilled and frozen Halal meat products, backed by secondary agricultural commodities for global wholesale markets.
          </p>
        </div>

        {/* ================= PRIMARY SECTION: MEAT CATALOG ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <span className="bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Primary Export Focus
            </span>
            <h3 className="text-2xl font-bold text-stone-900">Chilled & Frozen Halal Meat</h3>
          </div>

          {/* Meat Selector Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {meatProducts.map((meat) => {
              const isActive = activeMeat.id === meat.id;
              return (
                <button
                  key={meat.id}
                  onClick={() => setActiveMeat(meat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-emerald-200'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {meat.name}
                </button>
              );
            })}
          </div>

          {/* Active Meat Detail Card */}
          <motion.div 
            key={activeMeat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-lg grid lg:grid-cols-12 gap-0"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-100">
              <img 
                src={activeMeat.image} 
                alt={activeMeat.name} 
                className="w-full h-full object-cover"
              />

            </div>

            {/* Technical Specifications Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3">{activeMeat.name}</h4>
                <p className="text-stone-600 mb-6 leading-relaxed">{activeMeat.description}</p>
                
                {/* Specifications Grid */}
                <div className="grid sm:grid-cols-2 gap-4 bg-stone-50 p-5 rounded-xl border border-stone-100 mb-6">
                  <div>
                    <span className="block text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Carcass Weight</span>
                    <span className="text-sm font-medium text-stone-800">{activeMeat.carcassWeight}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Packaging</span>
                    <span className="text-sm font-medium text-stone-800">{activeMeat.packaging}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Shelf Life</span>
                    <span className="text-sm font-medium text-stone-800">{activeMeat.shelfLife}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Min. Order Quantity (MOQ)</span>
                    <span className="text-sm font-medium text-stone-800">{activeMeat.moq}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Shipping Methods</span>
                    <span className="text-sm font-medium text-stone-800">{activeMeat.shippingMethods}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Available Incoterms</span>
                    <span className="text-sm font-medium text-stone-800">{activeMeat.incoterms}</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Request Meat Quotation
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= SECONDARY SECTION: OTHER COMMODITIES ================= */}
        <div>
          <div className="mb-6 border-b border-stone-200 pb-3">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Secondary Offerings</span>
            <h3 className="text-xl font-bold text-stone-800">Other Agricultural Produce</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {secondaryCategories.map((cat, index) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={selectedSecondaryImages[cat.id] || cat.defaultImage} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white">{cat.title}</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => {
                        const isSelected = selectedSecondaryImages[cat.id] === item.image;
                        return (
                          <button
                            key={item.name}
                            onClick={() => handleSecondaryClick(cat.id, item.image)}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}