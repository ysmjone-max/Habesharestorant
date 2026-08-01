"use client";
import React from 'react';
import menuData from '../data/menu.json';
import { useTranslation } from '../app/TranslationContext';

export default function MenuSection() {
  const { lang, t } = useTranslation();
  const vegetarian = menuData.filter(item => item.category === 'Vegetarian');
  const meat = menuData.filter(item => item.category === 'Meat');
  const drinks = menuData.filter(item => item.category === 'Drinks');

  const MenuItem = ({ item }: { item: typeof menuData[0] }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div 
            className="border-b border-gray-200 py-4 md:py-6 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                    <h4 className="font-serif text-xl md:text-2xl font-bold text-habesha-espresso group-hover:text-habesha-green transition-colors leading-tight">{item.name}</h4>
                    <svg className={`w-4 h-4 md:w-5 md:h-5 text-habesha-gold flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <span className="font-sans text-lg md:text-xl text-habesha-gold font-bold flex-shrink-0">{item.price}</span>
            </div>
            
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <div className="sm:w-48 sm:h-48 w-full h-56 flex-shrink-0 overflow-hidden rounded shadow-md border border-habesha-gold/20 bg-gray-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed font-light text-base md:text-lg">{item[`desc_${lang}` as keyof typeof item]}</p>
                            <div className="flex gap-2 flex-wrap mt-auto">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[9px] md:text-[10px] px-2 md:px-3 py-1 uppercase tracking-widest bg-white border border-habesha-gold/30 text-habesha-green rounded-sm font-semibold">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  const MenuCategory = ({ title, items }: { title: string, items: typeof menuData }) => (
    <div className="mb-20 md:mb-24">
        <div className="flex flex-col items-center mb-8 md:mb-12">
            <h3 className="font-serif text-3xl md:text-4xl text-habesha-green mb-3 md:mb-4 text-center">{title}</h3>
            <div className="w-16 md:w-24 h-1 bg-habesha-gold"></div>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col">
            {items.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    </div>
  );

  return (
    <section id="menu" className="py-24 md:py-32 bg-transparent px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
                <span className="text-habesha-gold uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4 block">{t.menu_subtitle}</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-habesha-espresso">{t.menu_title}</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">{t.menu_desc}</p>
            </div>
            <MenuCategory title={t.cat_Vegetarian} items={vegetarian} />
            <MenuCategory title={t.cat_Meat} items={meat} />
            <MenuCategory title={t.cat_Drinks} items={drinks} />
        </div>
    </section>
  );
}
