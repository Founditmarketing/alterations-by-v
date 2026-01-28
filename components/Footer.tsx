import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif text-white mb-2">V.</h3>
                <p className="text-xs uppercase tracking-widest">Alterations by V</p>
            </div>
            
            <div className="flex space-x-8">
                <a href="#" className="hover:text-white transition-colors">Services</a>
                <a href="#" className="hover:text-white transition-colors">Portfolio</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex space-x-4">
                <a href="#" className="p-2 hover:bg-stone-800 rounded-full transition-colors"><Instagram size={18} /></a>
                <a href="#" className="p-2 hover:bg-stone-800 rounded-full transition-colors"><Facebook size={18} /></a>
            </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-900 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-stone-600">
            <p>&copy; {new Date().getFullYear()} Alterations by V. All rights reserved.</p>
            <p>Designed for the Modern Atelier.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
