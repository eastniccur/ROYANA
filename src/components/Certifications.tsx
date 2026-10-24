import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import KebsLogo from './images/certifications/kebs-logo.webp';
import KmcLogo from './images/certifications/kmc-logo.webp';
import VeterinaryLogo from './images/certifications/veterinary-logo.webp';
import HalalLogo from './images/certifications/halal-logo.webp';
import HaccpLogo from './images/certifications/haccp-logo.webp';

const certs = [
  {
    name: 'KEBS',
    full: 'Kenya Bureau of Standards',
    logo: KebsLogo,
    desc: 'Relevant standards and product compliance requirements.',
  },
  {
    name: 'KMC',
    full: 'Kenya Meat Commission',
    logo: KmcLogo,
    desc: 'Relevant meat processing and supply information.',
  },
  {
    name: 'Veterinary',
    full: 'Veterinary Health Documentation',
    logo: VeterinaryLogo,
    desc: 'Applicable veterinary health and inspection documents.',
  },
  {
    name: 'Halal',
    full: 'Halal Compliance',
    logo: HalalLogo,
    desc: 'Halal certification information for applicable products.',
  },
  {
    name: 'HACCP',
    full: 'Food Safety Management',
    logo: HaccpLogo,
    desc: 'Applicable food safety systems and supporting documentation.',
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-green-100/50 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
            <ShieldCheck className="h-4 w-4" />
            Quality & Compliance
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Confidence in Every{' '}
            <span className="text-emerald-700">Export Order</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Every international order has its own product, documentation, and
            destination requirements. Work with our team to establish the
            applicable quality, health, and export documentation for your
            shipment.
          </p>
        </motion.div>

        {/* Certification and compliance cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {certs.map((cert, index) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              {/* Actual logo image */}
              <div className="mb-5 flex h-24 w-full items-center justify-center rounded-xl bg-white p-3">
                <img
                  src={cert.logo}
                  alt={`${cert.full} logo`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {cert.name}
              </h3>

              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                {cert.full}
              </p>

              <p className="flex-grow text-sm leading-6 text-slate-600">
                {cert.desc}
              </p>

              <div className="mt-5 h-1 w-10 rounded-full bg-emerald-600 transition-all duration-300 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Buyer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-emerald-900 p-7 text-white sm:p-9 lg:flex-row lg:items-center"
        >
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold sm:text-2xl">
              Need documentation for your target market?
            </h3>

            <p className="mt-2 text-sm leading-6 text-emerald-100 sm:text-base">
              Tell us your destination country and product requirements so we
              can discuss the applicable documentation for your order.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-900 transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900"
          >
            Discuss Requirements
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

