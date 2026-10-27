import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Package, Snowflake, Leaf } from 'lucide-react';

import SpicesImg from './images/SPICES.webp';
import FruitsImg from './images/FRUITS.webp';
import NutsImg from './images/NUTS.webp';
import DorperMeat from './images/DorperMeat.webp';
import Carcasses from './images/Carcasses.webp';
import Sheep from './images/Sheep.webp';
import GMeat from './images/GMeat.webp';

// Replace these image imports with suitable product photographs
// when the corresponding images are available.

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  formats?: string[];
  category: 'meat' | 'agriculture';
}

const meatProducts: Product[] = [
  {
    id: 'goat',
    name: 'Goat Meat',
    description:
      'Kenyan goat meat for international wholesale buyers, with chilled and frozen options subject to availability.',
    image: GMeat,
    formats: ['Chilled', 'Frozen'],
    category: 'meat',
  },
  {
    id: 'mutton',
    name: 'Mutton & Lamb',
    description:
      'Sheep meat products for importers, distributors, and commercial food suppliers.',
    image: Sheep,
    formats: ['Chilled', 'Frozen'],
    category: 'meat',
  },
  {
    id: 'dorper',
    name: 'Dorper Sheep Meat',
    description:
      'Dorper sheep meat for wholesale buyers seeking quality meat products from Kenya.',
    image: DorperMeat,
    formats: ['Chilled', 'Frozen'],
    category: 'meat',
  },
  {
    id: 'carcass',
    name: 'Whole Halal Carcasses',
    description:
      'Whole goat and sheep carcasses for wholesale and commercial meat buyers, subject to availability.',
    image: Carcasses,
    formats: ['Chilled', 'Frozen'],
    category: 'meat',
  },
];

const agriculturalProducts: Product[] = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    description:
      'Selected Kenyan tropical fruits for international wholesale markets.',
    image: FruitsImg,
    category: 'agriculture',
  },
  {
    id: 'spices',
    name: 'Spices',
    description:
      'Selected spices for importers, distributors, and wholesale buyers.',
    image: SpicesImg,
    category: 'agriculture',
  },
  {
    id: 'nuts',
    name: 'Nuts',
    description:
      'Selected nut varieties for commercial buyers and international distributors.',
    image: NutsImg,
    category: 'agriculture',
  },
];

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h4 className="mb-2 text-xl font-bold text-stone-900 transition-colors group-hover:text-emerald-700">
          {product.name}
        </h4>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-stone-600">
          {product.description}
        </p>

        {product.formats && (
          <div className="mb-5 flex flex-wrap gap-2">
            {product.formats.map((format) => (
              <span
                key={format}
                className="rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800"
              >
                {format}
              </span>
            ))}
          </div>
        )}

        <a
          href={`#contact`}
          aria-label={`Request a quote for ${product.name}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-emerald-700">
            Our Product Range
          </span>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Quality Products from Kenya to Global Markets
          </h2>

          <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
            Explore our range of goat and sheep meat products alongside
            selected agricultural produce for international wholesale buyers.
          </p>
        </motion.div>

        {/* Primary export category: meat */}
        <div className="mb-20">
          <div className="mb-8 flex flex-col gap-3 border-b border-stone-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                Primary Export Products
              </span>

              <h3 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Chilled & Frozen Meat
              </h3>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-stone-600">
              Explore our meat range for wholesale supply and international
              trade enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {meatProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Secondary export category: agriculture */}
        <div>
          <div className="mb-8 flex flex-col gap-3 border-b border-stone-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Leaf className="h-4 w-4" />
                Additional Export Products
              </span>

              <h3 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Agricultural Produce
              </h3>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-stone-600">
              Discover our selection of fruits, spices, and nuts for
              international wholesale enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agriculturalProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index + meatProducts.length}
              />
            ))}
          </div>
        </div>

        {/* Final enquiry prompt */}
        <div className="mt-16 rounded-2xl bg-emerald-800 px-6 py-10 text-center sm:px-10">
          <Package className="mx-auto mb-4 h-8 w-8 text-emerald-100" />

          <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Looking for a Supply Partner?
          </h3>

          <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-emerald-50">
            Contact our team to discuss product availability, specifications,
            packaging options, and your export requirements.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
          >
            Discuss Your Requirements
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

