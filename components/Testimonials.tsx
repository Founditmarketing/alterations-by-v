import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Clientele Stories</h2>
          <div className="h-0.5 w-12 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-amber-600/30 transition-colors duration-500">
              <div className="flex space-x-1 mb-6 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-stone-300 mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-medium tracking-wide uppercase text-sm">{t.name}</p>
                <p className="text-stone-500 text-xs mt-1 uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
