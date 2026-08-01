"use client";
import React from 'react';
import locationData from '../data/locations.json';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from '../app/TranslationContext';

export default function LocationsSection() {
  const { t } = useTranslation();

  const LocationItem = ({ loc, index }: { loc: typeof locationData[0], index: number }) => {
    const isEven = index % 2 === 0;
    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden mb-12 last:mb-0 transform transition-transform hover:-translate-y-1 hover:shadow-3xl duration-500`}>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
            </div>
            
            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#F9F7F3]">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-habesha-espresso mb-4">{loc.name}</h3>
                
                <div className="space-y-6 mt-6">
                    <p className="flex items-start md:items-center gap-3 md:gap-4 text-gray-700 font-light text-base md:text-lg">
                        <MapPin className="text-habesha-gold w-5 h-5 flex-shrink-0 mt-1 md:mt-0" /> 
                        <span className="leading-tight">{loc.address}</span>
                    </p>
                    
                    <p className="flex items-center gap-3 md:gap-4 text-gray-700 font-light text-base md:text-lg">
                        <Phone className="text-habesha-gold w-5 h-5 flex-shrink-0" /> 
                        <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="hover:text-habesha-gold transition-colors">{loc.phone}</a>
                    </p>
                    
                    <div className="pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-3 md:gap-4 mb-4">
                            <Clock className="text-habesha-gold w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-habesha-espresso tracking-widest uppercase text-xs md:text-sm">{t.loc_hours}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600 font-light">
                            {Object.entries(loc.hours).map(([day, hours]) => (
                                <div key={day} className="flex justify-between border-b border-gray-100 py-2">
                                    <span className="capitalize font-medium text-gray-800">{t[`day_${day}` as keyof typeof t]}</span>
                                    <span>{hours === 'Closed' ? t.loc_closed : hours as string}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                    <a href={loc.mapsUrl} target="_blank" rel="noreferrer" className="flex-1 text-center py-4 bg-transparent text-habesha-espresso font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm border-2 border-habesha-gold hover:bg-habesha-gold transition-colors shadow-sm">{t.loc_directions}</a>
                    <a href="#reservations" className="flex-1 text-center py-4 bg-habesha-green text-habesha-cream font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-green-900 transition-colors shadow-sm">{t.loc_reserve}</a>
                </div>
            </div>
        </div>
    );
  };

  return (
    <section id="locations" className="py-24 md:py-32 bg-transparent px-6 md:px-8 border-t border-habesha-gold/10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
                <span className="text-habesha-gold uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4 block">{t.loc_subtitle}</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-habesha-espresso">{t.loc_title}</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-light">{t.loc_desc}</p>
            </div>
            <div className="flex flex-col space-y-0">
                {locationData.map((loc, index) => (
                    <LocationItem key={loc.id} loc={loc} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
}
