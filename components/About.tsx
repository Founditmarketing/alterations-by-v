import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-4 left-4 w-full h-full border border-stone-300 z-0"></div>
                        <img
                            src="/alterationbyvshop.jpg"
                            alt="V working on a dress"
                            className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h4 className="text-amber-600 uppercase tracking-widest text-sm mb-4 font-bold">The V Standard</h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
                            World-Class Fit for <br />
                            Central Louisiana.
                        </h2>
                        <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
                            <p>
                                At <strong>Alterations by V</strong>, we believe that residents of Central Louisiana deserve the same level of sartorial excellence found in the world's fashion capitals. V brings decades of experience to Alexandria, proving that true style emerges when a garment is molded to your unique physiology.
                            </p>
                            <p>
                                We are not a dry cleaner that does hemming on the side. We are Central Louisiana's dedicated alterations atelier. Whether it's restructuring a vintage blazer or perfecting a wedding gown's intricate lace hem, we treat every stitch with the reverence it deserves.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-stone-300 pt-8">
                            <div>
                                <h3 className="text-3xl font-serif text-stone-900">Premier</h3>
                                <p className="text-xs uppercase tracking-widest text-stone-500 mt-2">Sewing Expert</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-stone-900">Bespoke</h3>
                                <p className="text-xs uppercase tracking-widest text-stone-500 mt-2">Fitting Process</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;