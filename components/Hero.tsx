import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onConsult: () => void;
  onFAQ: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore, onConsult, onFAQ }) => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2560&auto=format&fit=crop"
          alt="Alterations by V Storefront Exterior"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" 
          style={{ animationDuration: '25s' }}
        />
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="mb-6 animate-fade-in flex flex-col items-center">
            <span className="h-[1px] w-12 bg-amber-400 mb-4 block"></span>
            <span className="text-amber-400 tracking-[0.2em] uppercase text-xs md:text-sm font-semibold max-w-md leading-relaxed">
            The Premier Seamstress for all of Central Louisiana
            </span>
            <span className="h-[1px] w-12 bg-amber-400 mt-4 block"></span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 leading-tight animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          Alterations <br />
          <span className="italic text-stone-100 font-light">by V</span>
        </h1>
        <p className="max-w-xl text-stone-100 text-lg md:text-xl font-light mb-10 leading-relaxed animate-fade-in drop-shadow-md" style={{ animationDelay: '0.4s' }}>
          We don't just fix clothes; we perfect them. Experience the transformation of a flawless fit right here in Alexandria.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={onExplore}
            className="px-8 py-3 bg-white text-stone-900 font-medium tracking-widest hover:bg-stone-200 transition-colors duration-300 min-w-[180px]"
          >
            OUR SERVICES
          </button>
          <button 
            onClick={onConsult}
            className="px-8 py-3 border border-white text-white font-medium tracking-widest hover:bg-white hover:text-stone-900 transition-colors duration-300 min-w-[180px] backdrop-blur-sm"
          >
            BOOK FITTING
          </button>
          <button 
            onClick={onFAQ}
            className="px-8 py-3 border border-stone-500 text-stone-200 font-medium tracking-widest hover:border-white hover:text-white transition-colors duration-300 min-w-[180px] backdrop-blur-sm hover:bg-stone-900/50"
          >
            READ FAQ
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;