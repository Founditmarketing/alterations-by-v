import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">Visit the Atelier</h2>
              <p className="text-stone-600 font-light leading-relaxed">
                We operate by appointment to ensure every client receives our undivided attention.
                Please allow 2-3 weeks for standard alterations and 6-8 weeks for bridal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-stone-900">Location</h4>
                  <p className="text-stone-600 text-sm mt-1">
                    Serving Central Louisiana<br/>
                    Alexandria, LA 71301
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-amber-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-stone-900">Contact</h4>
                  <p className="text-stone-600 text-sm mt-1">+1 (318) 555-0123<br/>hello@alterationsbyv.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-amber-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-stone-900">Atelier Hours</h4>
                  <p className="text-stone-600 text-sm mt-1">
                    Tue - Fri: 10am - 6pm<br/>
                    Sat: 10am - 4pm<br/>
                    Sun - Mon: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-stone-50 p-8 md:p-12 shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif text-stone-900 mb-8">Request a Fitting</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border-b border-stone-300 p-3 focus:outline-none focus:border-amber-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border-b border-stone-300 p-3 focus:outline-none focus:border-amber-600 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-white border-b border-stone-300 p-3 focus:outline-none focus:border-amber-600 transition-colors" />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white border-b border-stone-300 p-3 focus:outline-none focus:border-amber-600 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Service Interest</label>
                    <select className="w-full bg-white border-b border-stone-300 p-3 focus:outline-none focus:border-amber-600 transition-colors text-stone-800">
                        <option>Bridal Alterations</option>
                        <option>Suit Resizing</option>
                        <option>Hemming/Repair</option>
                        <option>Vintage Restoration</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
                        Date Needed <Calendar size={12} />
                    </label>
                    <input type="date" className="w-full bg-white border-b border-stone-300 p-3 focus:outline-none focus:border-amber-600 transition-colors text-stone-800" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Garment Details</label>
                <textarea rows={4} placeholder="Please describe the item and what needs to be done..." className="w-full bg-white border-b border-stone-300 p-3 focus:outline-none focus:border-amber-600 transition-colors resize-none placeholder-stone-300"></textarea>
              </div>

              <div className="pt-4">
                <button type="button" className="px-10 py-4 bg-stone-900 text-white uppercase tracking-widest text-xs font-bold hover:bg-amber-700 transition-all duration-300 w-full md:w-auto">
                  Request Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;