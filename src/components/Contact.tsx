import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  // 1. Create a form reference for EmailJS to scan values
  const formRef = useRef<HTMLFormElement>(null);
  
  // 2. Local submission status feedback for the user
  const [status, setStatus] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your dashboard keys
    emailjs
      .sendForm('service_59qk80e', 'template_7kh5g4a', formRef.current, {
        publicKey: 'kIZvMXdo-_H1Fw3qy',
      })
      .then(
        () => {
          setStatus('Success! Your trade inquiry has been sent.');
          // Clear form fields on clean submission
          setFormData({ name: '', email: '', product: '', destination: '', message: '' });
        },
        (error) => {
          setStatus(`Submission failed: ${error.text || 'Please check your connection.'}`);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            
            {/* Added formRef here */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Company / Contact Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" // Used as dynamic variable inside your EmailJS Template email
                    required
                    value={formData.name}
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
                    name="email" // Used as dynamic variable inside your EmailJS Template email
                    required
                    value={formData.email}
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
                    name="product" // Used as dynamic variable inside your EmailJS Template email
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
                    name="destination" // Used as dynamic variable inside your EmailJS Template email
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
                  name="message" // Used as dynamic variable inside your EmailJS Template email
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

              {/* Status Update Messages displayed cleanly under the submission button */}
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
                  <p className="text-stone-600">+254 710 441 476</p>
                  <p className="text-sm text-stone-500 mt-1">Mon-Fri, 08:00 - 17:00 (EAT)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h5 className="font-bold text-stone-900">Email </h5>
                  <p className="text-stone-600">info@royanaexports.co.ke</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}