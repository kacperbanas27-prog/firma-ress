/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Zap, Scissors, Palette, MapPin, Phone, Mail, Award, ArrowRight, Shirt } from 'lucide-react';
import { Logo } from '../components/layout/Logo';

export default function About() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Hero Section with Color Accent */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-brand-blue opacity-10 -skew-x-12 translate-x-10 md:translate-x-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-blue text-[10px] uppercase font-black tracking-[0.4em] mb-6 block"
            >
              Since 1972
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-8xl heading-bold mb-8 md:mb-10 tracking-tighter leading-[1.1] text-white"
            >
              Tradycja <br className="hidden sm:block" /> krakowskiego <br className="hidden sm:block" /> <span className="text-brand-blue">rzemiosła.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium"
            >
              Jesteśmy polskim producentem, który od ponad pół wieku łączy krawiecką precyzję z nowoczesną technologią znakowania odzieży.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Narrative Section with Colored Accents */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="flex-1 lg:sticky lg:top-32">
            <h2 className="text-2xl md:text-3xl heading-bold mb-6 md:mb-8 uppercase tracking-tighter border-l-4 border-brand-blue pl-6 text-slate-900">Kim jesteśmy?</h2>
            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                <span className="text-brand-blue font-bold">RESS</span> to rodzinna firma z siedzibą w Krakowie. Nasza historia rozpoczęła się w 1972 roku, a dziś jesteśmy liderem w produkcji wysokiej jakości odzieży firmowej, reklamowej i roboczej.
              </p>
              <p>
                Wszystkie etapy produkcji odbywają się pod jednym dachem w naszej krakowskiej szwalni. Pozwala nam to na pełną kontrolę jakości — od wyboru dzianin od najlepszych polskich producentów, przez precyzyjne krojenie, aż po finalne wykończenie i personalizację.
              </p>
              <p>
                Naszą specjalnością są T-shirty i koszulki polo o sprawdzonym składzie <span className="bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-sm font-bold whitespace-nowrap">50% bawełna / 50% poliester</span>.
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full space-y-8 md:space-y-12 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl hidden md:block" />
            <div className="relative z-10 aspect-[4/3] rounded-sm overflow-hidden bg-slate-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1558231031-645300ba8ed9?q=80&w=2070&auto=format&fit=crop" 
                alt="Szwalnia" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-slate-50 p-6 rounded-sm border-l-4 border-brand-blue">
                <span className="text-3xl md:text-4xl font-black italic text-brand-blue mb-1 block">1972</span>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Rok Założenia</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-sm border-l-4 border-brand-blue">
                <span className="text-3xl md:text-4xl font-black italic text-brand-blue mb-1 block">100% PL</span>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Polska Szwalnia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Colorful Tech Grid */}
      <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-white/60 text-[10px] uppercase font-black tracking-widest mb-4 block">Możliwości Produkcyjne</span>
            <h2 className="text-2xl md:text-5xl heading-bold tracking-tighter text-white">Własny park maszynowy.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Szwalnia", icon: <Scissors className="text-brand-blue" />, desc: "Własna linia produkcyjna w Krakowie." },
              { title: "Haft", icon: <Zap className="text-brand-blue" />, desc: "Eleganckie logowanie komputerowe." },
              { title: "Druk DTG", icon: <Palette className="text-brand-blue" />, desc: "Fotorealistyczne nadruki na tekstyliach." },
              { title: "Sublimacja", icon: <ShieldCheck className="text-brand-blue" />, desc: "Trwałe nadruki na materiałach sztucznych." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-sm shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue/10 rounded-sm flex items-center justify-center mb-6 md:mb-8">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tighter mb-3 md:mb-4 text-slate-900 border-b border-slate-100 pb-3 md:pb-4">{item.title}</h3>
                <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info with Accents - Added Subtle Color and Decoration */}
      <section className="py-16 md:py-24 container mx-auto px-4 bg-slate-50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 relative z-10">
          <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Nasze Rowiązania</span>
          <h2 className="text-3xl md:text-5xl heading-bold mb-6 md:mb-8 tracking-tighter text-slate-900 leading-tight">Kompleksowa oferta odzieży.</h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
            Od codziennych T-shirtów po specjalistyczną odzież roboczą i gastronomiczną. Każdy produkt tworzymy z myślą o trwałości i wizerunku Twojej firmy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 relative z-10">
          {/* T-shirts & Polos */}
          <div className="bg-white p-8 rounded-sm border-b-4 border-brand-blue shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-sm flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
              <Shirt size={24} />
            </div>
            <h4 className="text-lg font-black uppercase tracking-tighter mb-4 text-slate-900 group-hover:text-brand-blue transition-colors uppercase">T-shirty & Polo</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Nasz flagowy produkt. Koszulki o składzie <span className="font-bold text-slate-700 underline decoration-brand-blue/30 underline-offset-4">50% bawełna / 50% poliester</span>. Idealny balans między oddychalnością a trwałością.
            </p>
            <ul className="space-y-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Gramatury od 160g do 210g</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Ponad 30 kolorów</li>
            </ul>
          </div>

          {/* Bluzy & Polary */}
          <div className="bg-white p-8 rounded-sm border-b-4 border-brand-blue shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-sm flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 -rotate-3 group-hover:rotate-0">
              <Zap size={24} />
            </div>
            <h4 className="text-lg font-black uppercase tracking-tighter mb-4 text-slate-900 group-hover:text-brand-blue transition-colors uppercase">Bluzy & Polary</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Ciepła odzież firmowa idealna na chłodniejsze dni. Wykonana z materiałów o wysokiej gramaturze, które zachowują miękkość nawet po wielu praniach.
            </p>
            <ul className="space-y-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Ciepłe bluzy z haftem</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Polary o wysokiej gęstości</li>
            </ul>
          </div>

          {/* Specialized Gastronomy Wear */}
          <div className="bg-white p-8 rounded-sm border-b-4 border-brand-blue shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-sm flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-lg font-black uppercase tracking-tighter mb-4 text-slate-900 group-hover:text-brand-blue transition-colors uppercase">Gastronomia & HACCP</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Specjalistyczna odzież dla branży HoReCa. Fartuchy, zapaski i ubrania robocze spełniające rygorystyczne normy higieny i bezpieczeństwa.
            </p>
            <ul className="space-y-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Normy gastronomiczne</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Wysoka wytrzymałość</li>
            </ul>
          </div>
        </div>

        {/* Premium Competitive Advantages - Refined & Compact */}
        <div className="mt-12 bg-slate-900 text-white rounded-sm overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto shadow-xl">
          <div className="flex-1 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/5 relative group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Scissors size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-brand-blue rounded-sm flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/20">
                <Scissors size={18} className="text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-black italic tracking-tighter mb-3 uppercase">Szycie na miarę <span className="text-brand-blue">Twojej wizji.</span></h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">
                Nie jesteśmy tylko pośrednikiem. Jesteśmy szwalnią. Jeśli Twoja firma potrzebuje unikalnego kroju czy specyficznego wykończenia — przygotujemy prototyp i oszyjemy zamówienie według Twoich wytycznych.
              </p>
              <div className="flex items-center gap-2 text-brand-blue text-[9px] font-black uppercase tracking-[0.3em]">
                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full pulse-animation" />
                Dedykowany Prototyping
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-8 md:p-10 relative group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center mb-6 border border-white/10 shrink-0">
                <Palette size={18} className="text-brand-blue" />
              </div>
              <h4 className="text-xl md:text-2xl font-black italic tracking-tighter mb-3 uppercase">Bezkompromisowa <span className="text-brand-blue">Jakość PL.</span></h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">
                Tania odzież z importu szybko traci fason. My wybieramy inaczej. Korzystamy wyłącznie z materiałów od polskich producentów. To gwarancja, że Twoje logo będzie się prezentować nienagannie przez lata.
              </p>
              <div className="flex items-center gap-2 text-white/60 text-[9px] font-black uppercase tracking-[0.3em]">
                <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                100% Polska Produkcja
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Contact CTA with Gradient */}
      <section className="py-12 md:py-24 container mx-auto px-4 mb-16 md:mb-24">
        <div className="bg-gradient-to-br from-brand-dark to-slate-900 rounded-sm p-8 md:p-12 lg:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-blue opacity-5 pointer-events-none" />
          <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6 block">Kontakt</span>
          <h2 className="text-3xl md:text-6xl heading-bold mb-10 md:mb-12 tracking-tighter">Zapraszamy do współpracy.</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 relative z-10">
            <div className="space-y-2 p-6 md:p-8 bg-white/5 rounded-sm border border-white/10 hover:border-brand-blue transition-colors">
              <p className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Zadzwoń do nas</p>
              <a href="tel:+48501893106" className="text-xl md:text-3xl font-black italic tracking-tighter hover:text-brand-blue transition-colors">+48 501 893 106</a>
            </div>
            <div className="space-y-2 p-6 md:p-8 bg-white/5 rounded-sm border border-white/10 hover:border-brand-blue transition-colors">
              <p className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Napisz wiadomość</p>
              <a href="mailto:biuro@ress.pl" className="text-xl md:text-3xl font-black italic tracking-tighter hover:text-brand-blue transition-colors">biuro@ress.pl</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

