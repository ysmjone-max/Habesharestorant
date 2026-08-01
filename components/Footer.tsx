"use client";
import React from 'react';
import { useTranslation } from '../app/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#2B1F18] text-habesha-cream pt-16 md:pt-20 pb-8 md:pb-10 border-t-8 border-habesha-gold">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-16">
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                    <span className="font-serif text-3xl md:text-4xl text-habesha-gold font-bold tracking-widest uppercase mb-4 md:mb-6 block">Habesha</span>
                    <p className="text-habesha-beige/60 max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed font-light text-base md:text-lg">
                        {t.foot_desc}
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-sans text-xs md:text-sm font-bold text-habesha-gold uppercase tracking-[0.2em] mb-4 md:mb-6">{t.foot_links}</h3>
                    <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-habesha-beige/80 font-light">
                        <li><a href="#about" className="hover:text-habesha-gold transition-colors">{t.nav_story}</a></li>
                        <li><a href="#menu" className="hover:text-habesha-gold transition-colors">{t.nav_menu}</a></li>
                        <li><a href="#locations" className="hover:text-habesha-gold transition-colors">{t.nav_locations}</a></li>
                        <li><a href="#reservations" className="hover:text-habesha-gold transition-colors">{t.nav_book}</a></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-sans text-xs md:text-sm font-bold text-habesha-gold uppercase tracking-[0.2em] mb-4 md:mb-6">{t.foot_follow}</h3>
                    <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-habesha-beige/80 font-light">
                        <li><a href="#" className="hover:text-habesha-gold transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-habesha-gold transition-colors">Facebook</a></li>
                        <li><a href="https://maps.app.goo.gl/1pVh442eR49Vkaxi7" target="_blank" rel="noreferrer" className="hover:text-habesha-gold transition-colors">Google Reviews</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-habesha-beige/40 font-light text-center md:text-left gap-4 md:gap-0">
                <p>&copy; {new Date().getFullYear()} Habesha Restaurant Bologna. {t.foot_rights}</p>
                <div className="space-x-4 md:space-x-8">
                    <a href="#" className="hover:text-habesha-gold transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-habesha-gold transition-colors">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
