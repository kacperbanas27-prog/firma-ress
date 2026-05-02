/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, Zap, Recycle,
  Scissors, Shirt, Palette, Printer, Waves, Flag, Ruler
} from 'lucide-react';
import { Logo } from '../components/layout/Logo';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Hero Card */}
          <div className="lg:col-span-2 bg-brand-dark rounded-sm p-8 lg:p-16 flex flex-col justify-center min-h-[500px] relative overflow-hidden text-white">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <span className="bg-white/10 px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] mb-6 inline-block border-l-2 border-white">
                Jakość najwyższej próby
              </span>
              <h1 className="text-5xl lg:text-6xl heading-bold mb-8 max-w-2xl">
                Doświadczenie<br />w każdym detalu.
              </h1>
              <p className="text-gray-400 max-w-md mb-8 leading-relaxed font-medium">
                Produkujemy wysokiej jakości odzież firmową i roboczą od 1972 roku. 
                Tradycja spotyka nowoczesność w każdym szwie.
              </p>
              <NavLink to="/produkty" className="btn-primary w-fit flex items-center gap-4 py-4 px-8">
                Nasze produkty
              </NavLink>
            </motion.div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
          </div>

          {/* Right Column Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-brand-blue text-white p-10 rounded-sm flex flex-col justify-between h-1/2 relative overflow-hidden">
              <div>
                <h2 className="text-5xl heading-bold mb-2 italic">50+ Lat</h2>
                <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest mb-8">
                  Na polskim rynku odzieżowym
                </p>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-90 max-w-[240px]">
                Własna szwalnia w Krakowie to gwarancja terminowości i najwyższego standardu wykonania.
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Logo />
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-10 rounded-sm flex flex-col justify-between h-1/2 group transition-all hover:shadow-lg">
              <div>
                <ShieldCheck className="text-brand-blue mb-4" size={32} strokeWidth={1.5} />
                <h3 className="text-xl heading-bold mb-2">Certyfikowana Jakość</h3>
                <p className="text-slate-500 text-xs font-medium leading-loose">
                  Dbałość o materiały i proces produkcji to nasze DNA. Sprawdź dlaczego nam ufają.
                </p>
              </div>
              <NavLink to="/o-firmie" className="text-brand-blue text-xs font-black uppercase italic tracking-tighter flex items-center gap-2 group-hover:gap-4 transition-all">
                O Firmie <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-white flex items-start gap-6 group hover:border-brand-blue transition-colors">
            <div className="p-3 bg-blue-50 text-brand-blue rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-lg heading-bold mb-2">Szybka Realizacja</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Dzięki własnemu parkowi maszynowemu działamy błyskawicznie.
              </p>
            </div>
          </div>

          <div className="card-white flex items-start gap-6 group hover:border-brand-blue transition-colors">
            <div className="p-3 bg-blue-50 text-brand-blue rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Recycle size={24} />
            </div>
            <div>
              <h4 className="text-lg heading-bold mb-2">Trwałość</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Nasze koszulki wytrzymują setki cykli prania przemysłowego.
              </p>
            </div>
          </div>

          <div 
            onClick={() => navigate('/kontakt')}
            className="bg-brand-blue text-white p-8 rounded-sm flex items-center justify-between group cursor-pointer overflow-hidden relative"
          >
            <div className="relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-1 block">Masz pytania?</span>
              <a 
                href="tel:+48501893106" 
                onClick={(e) => e.stopPropagation()} 
                className="text-xl font-black italic hover:underline decoration-white/20 underline-offset-4"
              >
                +48 501 893 106
              </a>
            </div>
            <div className="bg-white text-brand-blue p-3 rounded-sm group-hover:scale-110 transition-transform relative z-10">
              <ArrowRight size={20} />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-5 scale-150 rotate-[-15deg]">
              <ArrowRight size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-4 mb-20 py-16 border-y border-gray-100">
        <div className="text-center mb-12">
          <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-2 block">Kompleksowe Usługi</span>
          <h2 className="text-3xl md:text-4xl heading-bold">Nasze Możliwości</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-sm border border-gray-50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Scissors size={24} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-tight leading-tight">Własna<br />szwalnia</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-sm border border-gray-50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Shirt size={24} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-tight leading-tight">Produkcja<br />odzieży</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-sm border border-gray-50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Palette size={24} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-tight leading-tight">Haft<br />komputerowy</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-sm border border-gray-50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Printer size={24} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-tight leading-tight">Druk<br />ekosolwentowy</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-sm border border-gray-50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Waves size={24} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-tight leading-tight">Dział<br />sublimacji</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-sm border border-gray-50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Flag size={24} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-tight leading-tight">Polscy<br />producenci</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-sm border border-gray-50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Ruler size={24} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-tight leading-tight">Projekt<br />klienta</p>
          </div>
        </div>
      </section>

      {/* Special Offer (HACCP) */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-brand-dark rounded-sm p-12 lg:p-20 relative overflow-hidden text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">Oferta Specjalna</span>
            <h2 className="text-4xl lg:text-6xl heading-bold mb-8">
              Odzież HACCP<br />dla przemysłu.
            </h2>
            <p className="text-gray-400 font-medium mb-10 leading-relaxed">
              Produkujemy specjalistyczną odzież spełniającą wszystkie normy higieniczne. 
              Bezpieczeństwo i komfort Twoich pracowników to nasz priorytet w każdym sektorze spożywczym.
            </p>
            <NavLink to="/produkty/gastronomia" className="border-2 border-white px-8 py-4 text-xs font-black uppercase italic tracking-widest hover:bg-white hover:text-brand-dark transition-all inline-block">
              Szczegóły oferty
            </NavLink>
          </motion.div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,100 L100,0 L100,100 Z" fill="currentColor" />
              </svg>
          </div>
        </div>
      </section>
    </>
  );
}
