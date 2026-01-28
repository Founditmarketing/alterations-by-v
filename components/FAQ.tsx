import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-full mb-4">
            <HelpCircle size={24} className="text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-stone-500">Please read before calling to ensure we can serve you best.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-stone-200 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-stone-50 shadow-sm' : 'bg-white hover:border-amber-200'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-amber-800' : 'text-stone-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus size={20} className="text-amber-600 flex-shrink-0" />
                ) : (
                  <Plus size={20} className="text-stone-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-200/50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-stone-900 text-stone-300 p-8 rounded-lg">
             <p className="mb-4 font-serif text-xl text-white">Still have a question?</p>
             <p className="text-sm mb-6">Use our AI Assistant "V" in the bottom right corner for instant answers about fabrics, pricing, and services.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;