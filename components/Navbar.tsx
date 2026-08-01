"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../app/TranslationContext';

export default function Navbar() {
  const { lang, setLang, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = (newLang: 'en' | 'it' | 'am') => {
    setLang(newLang);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-habesha-espresso/95 backdrop-blur-md text-habesha-cream shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => { window.scrollTo(0,0); closeMobileMenu(); }}>
            <div className="flex flex-col">
              <span className="font-serif text-3xl text-habesha-gold font-bold tracking-widest uppercase leading-none">Habesha</span>
              <span className="font-sans text-[10px] text-habesha-beige tracking-[0.3em] uppercase mt-1">Restaurant</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="hover:text-habesha-gold transition-colors text-sm uppercase tracking-widest font-semibold">{t.nav_story}</a>
            <a href="#menu" className="hover:text-habesha-gold transition-colors text-sm uppercase tracking-widest font-semibold">{t.nav_menu}</a>
            <a href="#locations" className="hover:text-habesha-gold transition-colors text-sm uppercase tracking-widest font-semibold">{t.nav_locations}</a>
            <a href="#reservations" className="bg-transparent border-2 border-habesha-gold text-habesha-gold px-6 py-2 rounded-sm text-sm font-bold tracking-widest hover:bg-habesha-gold hover:text-habesha-espresso transition-all duration-300 uppercase">{t.nav_book}</a>
            
            {/* Desktop Language Selector */}
            <div className="flex bg-[#46352B] rounded-sm p-1 ml-4 border border-habesha-gold/30">
              <button onClick={() => toggleLanguage('it')} className={`px-2 py-1 text-xs font-bold ${lang === 'it' ? 'bg-habesha-gold text-habesha-espresso' : 'text-habesha-beige hover:text-white'} rounded-sm transition-colors`}>{t.lang_it}</button>
              <button onClick={() => toggleLanguage('en')} className={`px-2 py-1 text-xs font-bold ${lang === 'en' ? 'bg-habesha-gold text-habesha-espresso' : 'text-habesha-beige hover:text-white'} rounded-sm transition-colors`}>{t.lang_en}</button>
              <button onClick={() => toggleLanguage('am')} className={`px-2 py-1 text-xs font-bold ${lang === 'am' ? 'bg-habesha-gold text-habesha-espresso' : 'text-habesha-beige hover:text-white'} rounded-sm transition-colors`}>{t.lang_am}</button>
            </div>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-habesha-gold hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-habesha-espresso border-t border-habesha-gold/20 shadow-inner">
          <div className="px-4 py-6 flex flex-col space-y-5">
            <a href="#about" onClick={closeMobileMenu} className="text-habesha-cream hover:text-habesha-gold uppercase tracking-widest font-semibold text-sm">{t.nav_story}</a>
            <a href="#menu" onClick={closeMobileMenu} className="text-habesha-cream hover:text-habesha-gold uppercase tracking-widest font-semibold text-sm">{t.nav_menu}</a>
            <a href="#locations" onClick={closeMobileMenu} className="text-habesha-cream hover:text-habesha-gold uppercase tracking-widest font-semibold text-sm">{t.nav_locations}</a>
            <a href="#reservations" onClick={closeMobileMenu} className="bg-habesha-gold text-habesha-espresso px-6 py-3 rounded-sm text-center font-bold tracking-widest uppercase text-sm mt-2 shadow-sm">{t.nav_book}</a>
            
            {/* Mobile Language Selector */}
            <div className="pt-4 mt-4 border-t border-habesha-gold/20 flex gap-2 justify-center">
              <button onClick={() => { toggleLanguage('it'); closeMobileMenu(); }} className={`px-4 py-2 text-sm font-bold ${lang === 'it' ? 'bg-habesha-gold text-habesha-espresso' : 'bg-[#46352B] text-habesha-beige'} rounded-sm transition-colors`}>{t.lang_it}</button>
              <button onClick={() => { toggleLanguage('en'); closeMobileMenu(); }} className={`px-4 py-2 text-sm font-bold ${lang === 'en' ? 'bg-habesha-gold text-habesha-espresso' : 'bg-[#46352B] text-habesha-beige'} rounded-sm transition-colors`}>{t.lang_en}</button>
              <button onClick={() => { toggleLanguage('am'); closeMobileMenu(); }} className={`px-4 py-2 text-sm font-bold ${lang === 'am' ? 'bg-habesha-gold text-habesha-espresso' : 'bg-[#46352B] text-habesha-beige'} rounded-sm transition-colors`}>{t.lang_am}</button>
            </div>
          </div>
        </div>
      )}

      {/* Traditional Ribbon Pattern */}
      <div 
        className="w-full h-6 md:h-10 bg-repeat-x opacity-70" 
        style={{ 
          backgroundImage: 'url("/Habesharestorant/images/ribbon_large.png")', 
          backgroundSize: 'auto 100%' 
        }} 
      />
    </nav>
  );
}
