"use client";
import React, { useState } from 'react';
import { useTranslation } from '../app/TranslationContext';

export default function BookingSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ branch: 'Habesha 1 (Via Ferrarese)', name: '', date: '', time: '', guests: '2', specialRequests: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let phone = formData.branch.includes('Ferrarese') ? '390514852332' : '390512849753';
    const text = `Hello Habesha Restaurant! I would like to book a table:%0A*Location:* ${formData.branch}%0A*Name:* ${formData.name}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Guests:* ${formData.guests}%0A${formData.specialRequests ? `*Special Requests:* ${formData.specialRequests}` : ''}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="reservations" className="py-24 md:py-32 bg-[#2B1F18] text-habesha-cream px-6 md:px-8 relative overflow-hidden">
        {/* Traditional Pattern Background */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay" 
          style={{ 
            backgroundImage: 'url("/Habesharestorant/images/pattern.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '300px'
          }} 
        />
        <div className="max-w-4xl mx-auto relative z-10 bg-habesha-espresso p-8 md:p-16 rounded-sm shadow-2xl border-2 border-habesha-gold">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-habesha-gold">{t.book_title}</h2>
                <p className="text-habesha-beige/80 text-base md:text-lg font-light">{t.book_desc}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-habesha-beige">{t.book_loc}</label>
                        <select value={formData.branch} onChange={e => setFormData({...formData, branch: e.target.value})} className="w-full bg-[#46352B] border-b-2 border-habesha-gold/50 rounded-none px-4 py-3 md:py-4 text-white focus:outline-none focus:border-habesha-gold transition-colors text-sm md:text-base">
                            <option value="Habesha 1 (Via Ferrarese)">Habesha 1 (Via Ferrarese)</option>
                            <option value="Habesha 2 (Via Petroni)">Habesha 2 (Via Petroni)</option>
                        </select>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-habesha-beige">{t.book_name}</label>
                        <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#46352B] border-b-2 border-habesha-gold/50 rounded-none px-4 py-3 md:py-4 text-white focus:outline-none focus:border-habesha-gold transition-colors text-sm md:text-base" placeholder="e.g. Marco Rossi" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-habesha-beige">{t.book_date}</label>
                        <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-[#46352B] border-b-2 border-habesha-gold/50 rounded-none px-4 py-3 md:py-4 text-white focus:outline-none focus:border-habesha-gold transition-colors [color-scheme:dark] text-sm md:text-base" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2 md:space-y-3">
                            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-habesha-beige">{t.book_time}</label>
                            <input required type="time" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full bg-[#46352B] border-b-2 border-habesha-gold/50 rounded-none px-4 py-3 md:py-4 text-white focus:outline-none focus:border-habesha-gold transition-colors [color-scheme:dark] text-sm md:text-base" />
                        </div>
                        <div className="space-y-2 md:space-y-3">
                            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-habesha-beige">{t.book_guests}</label>
                            <input required type="number" min="1" max="20" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full bg-[#46352B] border-b-2 border-habesha-gold/50 rounded-none px-4 py-3 md:py-4 text-white focus:outline-none focus:border-habesha-gold transition-colors text-sm md:text-base" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-habesha-beige">{t.book_req}</label>
                    <textarea value={formData.specialRequests} onChange={e => setFormData({...formData, specialRequests: e.target.value})} rows={3} className="w-full bg-[#46352B] border-b-2 border-habesha-gold/50 rounded-none px-4 py-3 md:py-4 text-white focus:outline-none focus:border-habesha-gold resize-none transition-colors text-sm md:text-base" placeholder="" />
                </div>
                <button type="submit" className="w-full bg-habesha-gold text-habesha-espresso font-bold py-4 md:py-5 rounded-sm text-base md:text-lg uppercase tracking-[0.2em] hover:bg-yellow-500 transition-colors mt-6 md:mt-8 flex items-center justify-center gap-3">
                    {t.book_btn}
                </button>
            </form>
        </div>
    </section>
  );
}
