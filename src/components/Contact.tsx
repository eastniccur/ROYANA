import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Building, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_59qk80e';
const EMAILJS_TEMPLATE_ID = 'template_8cgfhju';
const EMAILJS_PUBLIC_KEY = 'kIZvMXdo-_H1Fw3qy';

interface ContactFormData {
  from_name: string;
  from_email: string;
  product: string;
  destination: string;
  quantity: string;
  message: string;
}

const initialFormData: ContactFormData = {
  from_name: '',
  from_email: '',
  product: '',
  destination: '',
  quantity: '',
  message: '',
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove stale feedback when the client edits the form.
    if (status) {
      setStatus('');
      setSubmissionSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting || !formRef.current) {
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending your inquiry...');
    setSubmissionSuccess(false);

    try {
      await emailjs.sendForm(
        'service_qp4k91u',
        'template_t845sid',
        formRef.current,
        {
          publicKey: 'kIZvMXdo-_H1Fw3qy',
        }
      );

      setStatus(
        'Your inquiry has been sent successfully. Our team will review your request.'
      );
      setSubmissionSuccess(true);

      setFormData(initialFormData);
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS submission error:', error);

      setStatus(
        'We could not send your inquiry. Please check your connection and try again, or contact us directly by email or WhatsApp.'
      );
      setSubmissionSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            Initiate Trade
          </span>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Let's Discuss Your Export Requirements
          </h2>

          <p className="text-base leading-7 text-stone-600 sm:text-lg">
            Looking for a reliable supply partner in Kenya? Tell us about
            your product requirements, destination market, and expected order
            volume. Our team will review your inquiry and get back to you.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Contact Form */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 shadow-sm sm:p-8 lg:p-9">
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-stone-900">
                Trade Inquiry Form
              </h3>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                Complete the details below so we can better understand your
                requirements.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Submission timestamp */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString('en-GB', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                  timeZone: 'Africa/Nairobi',
                }) + ' EAT'}
                readOnly
              />

              {/* Contact Information */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="from_name"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    Company / Contact Name *
                  </label>

                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    autoComplete="name"
                    required
                    maxLength={120}
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="e.g. Global Foods LLC"
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    Business Email *
                  </label>

                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="procurement@company.com"
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  />
                </div>
              </div>

              {/* Product and Destination */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    Product Category *
                  </label>

                  <select
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    <option value="Goat Meat">Goat Meat</option>
                    <option value="Mutton & Lamb">Mutton & Lamb</option>
                    <option value="Dorper Sheep Meat">Dorper Sheep Meat</option>
                    <option value="Other Meat Products">Other Meat Products</option>
                    <option value="Spices">Spices</option>
                    <option value="Fresh Fruits">Fresh Fruits</option>
                    <option value="Nuts">Nuts</option>
                    <option value="Mixed Container / Other">
                      Mixed Container / Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    Destination Market *
                  </label>

                  <select
                    id="destination"
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  >
                    <option value="" disabled>
                      Select a market
                    </option>
                    <option value="Middle East">Middle East</option>
                    <option value="European Union">European Union</option>
                    <option value="Other Europe">Other Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Other Market">Other Market</option>
                  </select>
                </div>
              </div>

              {/* Estimated Quantity */}
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-sm font-semibold text-stone-700"
                >
                  Estimated Order Quantity
                </label>

                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  maxLength={150}
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 5 tonnes per shipment, or not yet decided"
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                />

                <p className="mt-1.5 text-xs text-stone-500">
                  Optional. An approximate quantity is sufficient.
                </p>
              </div>

              {/* Client Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-stone-700"
                >
                  Product Specifications & Requirements *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the cuts or products you need, preferred packaging, chilled or frozen requirements, destination port, certifications, or any other specifications."
                  className="w-full resize-y rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm leading-6 text-stone-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                />

                <p className="mt-1.5 text-right text-xs text-stone-500">
                  {formData.message.length}/5000 characters
                </p>
              </div>

              {/* EmailJS template metadata */}
              <input
                type="hidden"
                name="company_name"
                value="Royana Exports Ltd"
                readOnly
              />

              {/* Submission Feedback */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-lg border p-4 text-sm leading-6 ${
                    submissionSuccess
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : status.startsWith('We could not')
                        ? 'border-rose-200 bg-rose-50 text-rose-700'
                        : 'border-stone-200 bg-white text-stone-600'
                  }`}
                >
                  {submissionSuccess ? (
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : status.startsWith('We could not') ? (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <Send className="mt-0.5 h-5 w-5 shrink-0" />
                  )}

                  <p>{status}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 py-4 font-bold text-white shadow-md transition duration-200 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    Submit Trade Inquiry
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-stone-500">
                Your contact details will be used to respond to your business
                inquiry.
              </p>
            </form>
          </div>

          {/* Corporate Contact Information */}
          <div className="flex flex-col justify-center space-y-9 lg:py-5">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                Get in Touch
              </span>

              <h3 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
                Contact Our Export Division
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Our team is ready to discuss your sourcing requirements,
                product specifications, and export arrangements. Contact us
                directly if you have an urgent commercial inquiry.
              </p>
            </div>

            <div className="space-y-7">
              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-emerald-100 p-3">
                  <Building className="h-6 w-6 text-emerald-700" />
                </div>

                <div>
                  <h4 className="font-bold text-stone-900">
                    Royana Exports Ltd
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    Diamond Plaza, 4th Avenue Parklands
                    <br />
                    Nairobi, Kenya
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Diamond+Plaza+Parklands+Nairobi+Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <MapPin className="h-4 w-4" />
                    View location
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-emerald-100 p-3">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>

                <div>
                  <h4 className="font-bold text-stone-900">
                    Direct Line
                  </h4>

                  <a
                    href="tel:+254710441476"
                    className="mt-1 inline-block text-stone-600 transition hover:text-emerald-700"
                  >
                    +254 710 441 476
                  </a>

                  <p className="mt-1 text-sm text-stone-500">
                    Mon–Fri, 08:00–17:00 EAT
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-emerald-100 p-3">
                  <Mail className="h-6 w-6 text-emerald-700" />
                </div>

                <div>
                  <h4 className="font-bold text-stone-900">
                    Email Us
                  </h4>

                  <a
                    href="mailto:info@royanaexports.co.ke"
                    className="mt-1 inline-block break-all text-stone-600 underline underline-offset-4 transition hover:text-emerald-700"
                  >
                    info@royanaexports.co.ke
                  </a>
                </div>
              </div>
            </div>

            {/* Business Trust Note */}
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-5">
              <h4 className="font-bold text-stone-900">
                Looking for a supply partner?
              </h4>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                Share your requirements with us so we can discuss product
                availability, specifications, and potential supply
                arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254710441476?text=Hello%20Royana%20Exports%2C%20I%20have%20a%20trade%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Royana Exports on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-6 sm:right-6"
      >
        <svg
          className="h-7 w-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.237-6.162-3.48-8.405" />
        </svg>

        <span className="ml-2 hidden whitespace-nowrap text-sm font-bold sm:group-hover:inline">
          Chat with Us
        </span>
      </a>
    </section>
  );
}

