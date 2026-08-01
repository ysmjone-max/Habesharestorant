"use client";
import React from 'react';
import reviewsData from '../data/reviews.json';
import { useTranslation } from '../app/TranslationContext';

export default function ReviewsSection() {
    const { t, lang } = useTranslation();
    return (
      <section className="py-24 md:py-32 bg-habesha-espresso text-habesha-cream px-6 md:px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16 md:mb-20">
                  <span className="text-habesha-gold uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4 block">{t.rev_subtitle}</span>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{t.rev_title}</h2>
                  <div className="flex flex-col items-center justify-center gap-2 mb-4">
                      <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-white">4.8</span>
                          <div className="flex text-habesha-gold text-2xl tracking-widest">★★★★★</div>
                      </div>
                      <span className="text-habesha-beige/80 text-base md:text-lg font-light mt-2">{t.rev_desc}</span>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                  {reviewsData.map((review) => (
                      <div key={review.id} className="bg-[#46352B] p-8 md:p-10 rounded-sm border-t-4 border-habesha-gold shadow-2xl relative">
                          <div className="text-habesha-gold text-xl tracking-widest mb-6">★★★★★</div>
                          <p className="text-base md:text-lg font-light leading-loose mb-8 italic text-gray-200">&quot;{review[`text_${lang}` as keyof typeof review]}&quot;</p>
                        <div className="flex justify-between items-center text-xs md:text-sm text-habesha-beige/80 pt-6 border-t border-white/10">
                            <span className="font-bold uppercase tracking-wider text-white">{review.author}</span>
                            <span className="font-light">{review.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 md:mt-16 text-center">
                <a href="https://maps.app.goo.gl/1pVh442eR49Vkaxi7" target="_blank" rel="noreferrer" className="inline-block border-b-2 border-habesha-gold text-habesha-gold pb-1 font-semibold hover:text-white transition-colors uppercase tracking-widest text-xs md:text-sm">{t.rev_more}</a>
            </div>
        </div>
    </section>
  );
}
