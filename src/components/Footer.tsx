import React from 'react';

// Import your specific logo image (placed in the same folder as the footer)
import Logo from './images/LOGO.webp'; 

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo Area (Replaced Leaf & text with your specific image) */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img 
              src={Logo} 
              alt="Royana Exports Logo" 
              className="h-16 w-auto object-contain" 
            />
          </div>

          <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} Royana Exports Ltd. All rights reserved. <br />
            Premium Global Agricultural Supply Chain.
          </div>

          <div className="flex justify-center md:justify-end gap-6 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Trade</a>
          </div>

        </div>
      </div>
    </footer>
  );
}