import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Clock, Calendar, Search, User, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Atelier', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  // Turnaround Logic
  const getTurnaroundMessage = () => {
    const today = new Date();
    const pickup = new Date(today);
    pickup.setDate(today.getDate() + 14); // 2 week turnaround
    
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return `DROP OFF TODAY (${today.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric'})}) = READY BY ${pickup.toLocaleDateString('en-US', options).toUpperCase()}`;
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col font-sans">
        
        {/* BIG Utility Bar - Designed to stop phone calls */}
        <div className="bg-stone-950 text-stone-200 py-3 md:py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center border-b border-white/10 relative z-50 shadow-lg">
          
          {/* Left: Hours (Stops "Are you open?" calls) */}
          <div className="flex items-center space-x-6 text-xs md:text-sm font-medium tracking-wide mb-2 md:mb-0">
             <div className="flex items-center space-x-2 text-stone-400">
                <Clock size={16} className="text-amber-600" />
                <span>MON-FRI: 10am-6pm</span>
             </div>
             <span className="hidden md:inline text-stone-700">|</span>
             <div className="hidden md:block text-stone-400">SAT: 10am-4pm</div>
          </div>

          {/* Center: Turnaround Banner (Stops "When will it be ready?" calls) */}
          <div className="flex-1 md:mx-4 w-full md:w-auto mb-2 md:mb-0">
             <div className="flex justify-center items-center space-x-3 bg-amber-900/30 text-amber-100 px-4 py-2 rounded-sm border border-amber-800/50 text-center">
                <Calendar size={18} className="text-amber-500 animate-pulse hidden md:block" />
                <span className="font-bold text-xs md:text-sm tracking-widest">{getTurnaroundMessage()}</span>
             </div>
          </div>

          {/* Right: Actions (Stops "Is my order ready?" calls) */}
          <div className="flex items-center justify-center space-x-6 w-full md:w-auto">
             <button 
                onClick={() => handleNavClick('faq')}
                className="flex items-center space-x-2 text-xs md:text-sm hover:text-white transition-colors text-stone-400"
             >
                <HelpCircle size={16} />
                <span className="uppercase tracking-wider">FAQ</span>
             </button>

             <button 
                onClick={() => setIsPortalOpen(true)}
                className="flex items-center space-x-2 bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-sm transition-all group border border-stone-700"
             >
                <User size={16} className="group-hover:text-amber-500 transition-colors" />
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Check Order Status</span>
             </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`w-full transition-all duration-500 border-b ${
            isScrolled || isMobileMenuOpen
              ? 'bg-stone-50 border-stone-200 py-4 shadow-sm'
              : 'bg-stone-900/80 backdrop-blur-md border-white/5 py-4'
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div 
                className="flex items-center space-x-2 cursor-pointer group" 
                onClick={() => handleNavClick('hero')}
            >
              <div className={`p-2 border transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'border-stone-900 text-stone-900' : 'border-white text-white group-hover:bg-white group-hover:text-stone-900'}`}>
                 <Scissors size={20} />
              </div>
              <span className={`text-2xl font-serif tracking-widest font-bold transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'}`}>
                V.
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm uppercase tracking-widest hover:text-amber-600 transition-colors duration-300 font-medium ${
                    isScrolled ? 'text-stone-600' : 'text-stone-200'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center space-x-4 md:hidden">
                <button
                  className="text-stone-800 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className={isScrolled ? 'text-stone-900' : 'text-stone-900'} /> : <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />}
                </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 shadow-xl transition-all duration-500 overflow-hidden ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-stone-900 text-lg font-serif tracking-widest hover:text-amber-600"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-stone-200 w-full text-center px-6">
                 <p className="text-xs text-stone-500 mb-2 font-bold">HOURS</p>
                 <p className="text-xs text-stone-500 mb-1">MON-FRI: 10am - 6pm</p>
                 <p className="text-xs text-stone-500">SAT: 10am - 4pm</p>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Order Portal Modal */}
      {isPortalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={() => setIsPortalOpen(false)}></div>
            <div className="relative bg-white w-full max-w-md rounded-sm shadow-2xl overflow-hidden animate-fade-in">
                <div className="bg-stone-900 p-6 flex justify-between items-center text-white">
                    <h3 className="font-serif text-xl tracking-wide">Client Portal</h3>
                    <button onClick={() => setIsPortalOpen(false)} className="hover:text-amber-500 transition-colors">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-8">
                    <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                        Enter your ticket number and last name to view the status of your alteration.
                    </p>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Ticket Number</label>
                            <div className="relative">
                                <Search size={16} className="absolute left-3 top-3 text-stone-400" />
                                <input type="text" placeholder="#12345" className="w-full pl-10 pr-4 py-2 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors" />
                        </div>
                        <button className="w-full bg-stone-900 text-white py-3 uppercase tracking-widest text-xs font-bold hover:bg-amber-700 transition-colors">
                            Check Status
                        </button>
                    </form>
                    <div className="mt-6 pt-6 border-t border-stone-100 text-center">
                        <a href="#" className="text-xs text-stone-400 hover:text-stone-600 underline">Need help finding your ticket?</a>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;