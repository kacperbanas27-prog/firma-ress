/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="container mx-auto px-4 mb-24">
      <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">Kontakt</span>
      <h2 className="text-5xl lg:text-7xl heading-bold mb-16 text-slate-800">
        Zapytaj o<br />wycenę.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white p-12 rounded-sm shadow-xl">
           <h3 className="text-2xl heading-bold mb-10 text-slate-800">Formularz Kontaktowy</h3>
           <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Imię i Nazwisko</label>
                  <input type="text" className="w-full border-b-2 border-slate-100 focus:border-brand-blue outline-none py-3 transition-colors bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Email</label>
                  <input type="email" className="w-full border-b-2 border-slate-100 focus:border-brand-blue outline-none py-3 transition-colors bg-transparent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Wiadomość</label>
                <textarea rows={4} className="w-full border-b-2 border-slate-100 focus:border-brand-blue outline-none py-3 transition-colors bg-transparent resize-none"></textarea>
              </div>
              <button className="btn-primary py-4 px-12">Wyślij zapytanie</button>
           </form>
        </div>

        <div className="space-y-6">
          <div className="bg-brand-dark text-white p-10 rounded-sm">
            <h4 className="text-brand-blue text-[10px] uppercase font-black mb-6 tracking-widest">Informacje</h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                 <MapPin className="text-slate-500 shrink-0" size={20} />
                 <div>
                   <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Lokalizacja</p>
                   <a 
                     href="https://www.google.com/maps/search/?api=1&query=ul.+Leona+Ślósarczyka+20,+30-898+Kraków" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-sm font-bold hover:text-brand-blue transition-colors cursor-pointer block underline underline-offset-4 decoration-slate-700 hover:decoration-brand-blue"
                   >
                     ul. Leona Ślósarczyka 20, 30-898 Kraków
                   </a>
                 </div>
              </div>
              <div className="flex gap-4">
                 <Phone className="text-slate-500 shrink-0" size={20} />
                 <div>
                   <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Infolinia</p>
                   <a href="tel:+48501893106" className="text-xl font-black italic hover:text-brand-blue transition-colors block">+48 501 893 106</a>
                 </div>
              </div>
              <div className="flex gap-4">
                 <Mail className="text-slate-500 shrink-0" size={20} />
                 <div>
                   <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Email</p>
                   <a href="mailto:biuro@ress.pl" className="text-sm font-bold border-b border-brand-blue underline-offset-4 hover:text-brand-blue transition-colors">biuro@ress.pl</a>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm flex flex-col items-center justify-center text-center shadow-sm border border-slate-100">
             <Clock className="text-brand-blue mb-4" size={32} />
             <h4 className="text-lg heading-bold mb-2 text-slate-800">Godziny pracy</h4>
             <p className="text-slate-500 text-sm font-medium">Pon - Pt: 08:00 - 16:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
