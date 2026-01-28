import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-amber-600 mb-6"></div>
            <p className="text-stone-600 text-lg">
              We specialize in the delicate balance of structure and fluidity. From heirloom restoration to modern fit adjustments, every stitch is intentional.
            </p>
          </div>
          <button className="hidden md:block text-stone-900 font-bold border-b border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors mt-6 md:mt-0">
            VIEW FULL PRICE LIST
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => (
            <div 
                key={service.id} 
                className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-serif text-stone-900 group-hover:text-amber-700 transition-colors">
                    {service.title}
                </h3>
                <span className="text-sm font-medium text-stone-400">
                    {service.priceRange}
                </span>
              </div>
              <p className="text-stone-600 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
