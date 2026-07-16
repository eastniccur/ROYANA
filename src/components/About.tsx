import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Snowflake, Scale } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Sprout className="w-8 h-8 text-emerald-700" />,
      title: "Source & Sustainability",
      description: "Our origin is deeply rooted in sustainable farming practices. We partner directly with vetted agricultural communities and trusted farms to ensure ethical sourcing, optimal harvest conditions, and environmental stewardship from soil to shipment."
    },
    {
      icon: <Snowflake className="w-8 h-8 text-emerald-700" />,
      title: "Global Logistics & Cold-Chain",
      description: "Temperature integrity is non-negotiable. Our state-of-the-art cold-chain infrastructure guarantees that sensitive cargo like raw meat and fresh fruits maintain absolute peak freshness during transit to the Middle East, EU, and Asia."
    },
    {
      icon: <Scale className="w-8 h-8 text-emerald-700" />,
      title: "Uncompromising Compliance",
      description: "We operate under the strictest international product standards. Every shipment is subject to rigorous quality control protocols, veterinary inspections, and sanitary verifications to exceed global import regulations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">Our Foundation</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">Integrity at Every Stage of the Supply Chain</h3>
          <p className="text-lg text-stone-600">
            Royana Exports Ltd was built on the premise that global markets deserve uncompromising quality. We manage a complex, highly-regulated supply chain with absolute precision to deliver premium agricultural assets worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-emerald-100/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">{feature.title}</h4>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
