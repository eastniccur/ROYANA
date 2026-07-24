import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  // 1. Create a form reference for EmailJS to scan values
  const formRef = useRef<HTMLFormElement>(null);
  
  // 2. Local submission status feedback for the user
  const [status, setStatus] = useState<string>('');

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    product: '',
    destination: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending inquiry...');

    if (!formRef.current) return;

    // 3. Connect to EmailJS SDK
    emailjs
      .sendForm('service_59qk80e', 'template_8cgfhju', formRef.current, {
        publicKey: 'kIZvMXdo-_H1Fw3qy',
      })
      .then(
        () => {
          setStatus('Success! Your trade inquiry has been sent.');
          // Clear form fields on clean submission
          setFormData({ from_name: '', from_email: '', product: '', destination: '', message: '' });
        },
        (error) => {
          setStatus(`Submission failed: ${error.text || 'Please check your connection.'}`);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">Initiate Trade</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">Contact Our Export Division</h3>
          <p className="text-lg text-stone-600">
            Ready to secure a reliable supply chain? Reach out to our dedicated trade specialists to discuss volume, shipping logistics, and tailored export solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <h4 className="text-2xl font-bold text-stone-900 mb-6">Trade Inquiry Form</h4>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              {/* Hidden input to pass submission time to EmailJS {{time}} variable */}
              <input 
                type="hidden" 
                name="time" 
                value={new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })} 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Company / Contact Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all"
                    placeholder="e.g. Global Foods LLC"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Corporate Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all"
                    placeholder="procurement@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-stone-700 mb-1">Product Category</label>
                  <select 
                    id="product" 
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select product...</option>
                    <option value="raw-meat">Raw Meat (Halal/Beef/Mutton/Poultry)</option>
                    <option value="spices">Aromatic Spices</option>
                    <option value="fruits">Fresh Fruits</option>
                    <option value="nuts">Premium Nuts</option>
                    <option value="mixed">Mixed Container / Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-stone-700 mb-1">Destination Market</label>
                  <select 
                    id="destination"
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select destination...</option>
                    <option value="middle-east">Middle East (UAE, KSA, etc.)</option>
                    <option value="eu">European Union</option>
                    <option value="asia">Asia (China, Japan, etc.)</option>
                    <option value="other">Other Region</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Volume & Requirements</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all resize-none"
                  placeholder="Please specify estimated monthly volume, specific certifications needed, or port of destination..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-8 rounded-lg transition-colors shadow-md"
              >
                Submit Trade Inquiry
              </button>

              {status && (
                <p className={`text-sm font-semibold mt-3 text-center ${status.includes('Success') ? 'text-emerald-600' : status.includes('failed') ? 'text-rose-600' : 'text-stone-500'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Physical Contact Info */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h4 className="text-2xl font-bold text-stone-900 mb-6">Corporate Headquarters</h4>
              <p className="text-stone-600 leading-relaxed mb-8">
                Our global operations are coordinated from our central offices. For urgent logistical queries or immediate procurement needs, please contact us directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                  <Building className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h5 className="font-bold text-stone-900">Royana Exports Ltd</h5>
                  <p className="text-stone-600">Diamond Plaza, 4th Avenue Parklands.</p>
                  <p className="text-stone-600">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h5 className="font-bold text-stone-900">Direct Line</h5>
                  <a href="tel:+254710441476" className="text-stone-600 hover:text-emerald-700 transition-colors">
                    +254 710 441 476
                  </a>
                  <p className="text-sm text-stone-500 mt-1">Mon-Fri, 08:00 - 17:00 (EAT)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h5 className="font-bold text-stone-900">Email</h5>
                  <a 
                    href="mailto:info@royanaexports.co.ke" 
                    className="text-stone-600 hover:text-emerald-700 underline underline-offset-2 transition-colors"
                  >
                    info@royanaexports.co.ke
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254710441476?text=Hello%20Royana%20Exports,%20I%20have%20a%20trade%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        <svg 
          className="w-7 h-7 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.237-6.162-3.48-8.405" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-bold">
          Chat with Us
        </span>
      </a>
    </section>
  );
}