"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import LocationsSection from '../components/LocationsSection';
import ReviewsSection from '../components/ReviewsSection';
import BookingSection from '../components/BookingSection';
import { useTranslation } from './TranslationContext';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main 
      className="min-h-screen text-habesha-espresso"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(247, 243, 235, 0.93), rgba(247, 243, 235, 0.93)), url("/Habesharestorant/images/pattern.png")',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '300px'
      }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center bg-habesha-green text-habesha-cream overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url("/Habesharestorant/images/foto  (1).jpg")' }}
        />
        
        <div className="relative z-20 text-center px-6 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-habesha-gold uppercase tracking-[0.4em] font-bold text-xs md:text-sm lg:text-base mb-6 md:mb-8 block">{t.hero_welcome}</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-white drop-shadow-2xl leading-[1.15]">
            {t.hero_authentic} <br/><span className="text-habesha-gold italic font-light">{t.hero_cuisine}</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 font-light text-habesha-beige max-w-3xl leading-relaxed">
            {t.hero_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
            <a href="#reservations" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-habesha-gold text-habesha-espresso font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-white transition-colors duration-500 shadow-xl">
              {t.hero_reserve}
            </a>
            <a href="#menu" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border border-habesha-gold text-habesha-gold font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-habesha-gold hover:text-habesha-espresso transition-colors duration-500">
              {t.hero_explore}
            </a>
          </div>
        </div>
      </section>

      {/* Intro / Story Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-8 text-habesha-espresso">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-habesha-gold uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4 block">{t.about_heritage}</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 text-habesha-green">{t.about_title}</h2>
          <div className="w-20 md:w-24 h-1 bg-habesha-gold mx-auto mb-8 md:mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl leading-loose font-light text-gray-700 text-justify md:text-center">
            {t.about_desc}
          </p>
        </div>
      </section>

      <MenuSection />
      
      {/* Coffee Ceremony Banner */}
      <section className="relative py-28 md:py-40 bg-habesha-espresso text-habesha-cream flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url("/Habesharestorant/images/foto  (29).jpg")' }}
        />
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 md:px-8">
          <span className="text-habesha-gold uppercase tracking-[0.4em] font-bold text-xs md:text-sm mb-6 block">{t.ceremony_sub}</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">{t.ceremony_title}</h2>
          <div className="w-20 md:w-24 h-1 bg-habesha-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl leading-loose font-light text-habesha-beige/90 mb-10 md:mb-12">
            {t.ceremony_desc}
          </p>
          <a href="#reservations" className="inline-block border-2 border-habesha-gold text-habesha-gold px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-habesha-gold hover:text-habesha-espresso transition-all duration-500 shadow-xl">
            {t.ceremony_btn}
          </a>
        </div>
      </section>

      <LocationsSection />
      
      <ReviewsSection />

      <BookingSection />

      <Footer />
    </main>
  );
}
