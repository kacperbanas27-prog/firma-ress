/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, Zap, Recycle,
  Scissors, Shirt, Palette, Printer, Waves, Flag, Ruler,
  MapPin, Phone, Mail, Clock
} from 'lucide-react';
import { Logo } from '../components/layout/Logo';

export default function Home() {
  const navigate = useNavigate();
  const HERO_IMAGES = [
    {
      src: "https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/refs/heads/main/T-shirty/M%C4%99skie/t-shirt-krotki-rekaw.png.png",
      alt: "T-shirt Męski"
    },
    {
      src: "https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/RESS_tshirt_bialy_damski.png",
      alt: "T-shirt Damski"
    },
    {
      src: "https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/refs/heads/main/T-shirty/M%C4%99skie/longsleeve-meski.png.png",
      alt: "Longsleeve Męski"
    },
    {
      src: "https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/RESS_tshirtdamski_dlrekaw_bialy.png",
      alt: "Longsleeve Damski"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [HERO_IMAGES.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-[calc(100vh-80px)] lg:h-screen relative overflow-hidden bg-white flex items-center px-4 md:px-12 lg:px-24 py-12 lg:py-0">
        {/* Very subtle background element */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50/50 -skew-x-6 translate-x-20 hidden lg:block" />
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-12 lg:pt-0">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl mx-auto lg:mx-0"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="h-px w-8 bg-brand-blue" />
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-brand-blue">Est. 1972 • Kraków</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl heading-bold mb-6 leading-[1.1] md:leading-[1.05] tracking-tighter text-slate-900">
                  Odzież firmowa na <br className="hidden md:block" /> miarę Twoich potrzeb
                </h1>
                
                <p className="text-slate-500 mb-8 text-sm md:text-base lg:text-lg leading-relaxed max-w-[480px] font-medium mx-auto lg:mx-0">
                  Tworzymy profesjonalną odzież, która wyraża charakter firmy. Od t-shirtów po specjalistyczne ubrania, każdy element jest wykonany z dbałością o detale.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <NavLink to="/produkty" className="w-full sm:w-auto bg-black border-2 border-black hover:bg-slate-800 hover:border-slate-800 text-white px-8 lg:px-10 py-4 text-[10px] font-black uppercase tracking-widest transition-all text-center">
                    Poznaj ofertę
                  </NavLink>
                  <NavLink to="/kontakt" className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-black text-slate-800 px-8 lg:px-10 py-4 text-[10px] font-black uppercase tracking-widest transition-all text-center">
                    Napisz do nas
                  </NavLink>
                </div>
              </motion.div>
            </div>

            {/* Right Image Column - Stack Swapping Animation */}
            <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center perspective-[2500px]">
              <div className="relative w-full max-w-[320px] sm:max-w-[500px] aspect-square">
                {HERO_IMAGES.map((image, index) => {
                  const isCurrent = index === currentIndex;
                  const isNext = index === (currentIndex + 1) % HERO_IMAGES.length;
                  const isPrev = index === (currentIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{ 
                        width: isCurrent ? "100%" : (isNext ? "80%" : "60%"),
                        height: isCurrent ? "100%" : (isNext ? "80%" : "60%"),
                        left: isCurrent ? "0%" : (isNext ? "25%" : (isPrev ? "-10%" : "35%")),
                        top: isCurrent ? "0%" : (isNext ? "10%" : "20%"),
                        zIndex: isCurrent ? 10 : (isNext ? 5 : 0),
                        opacity: isCurrent ? 1 : (isNext ? 0.4 : 0),
                        scale: isCurrent ? 1 : 0.85,
                        rotateY: isCurrent ? 0 : (isNext ? 15 : 20),
                        x: isCurrent ? 0 : (isNext ? 40 : 80),
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 90, 
                        damping: 20, 
                        mass: 0.8 
                      }}
                      className="absolute rounded-sm overflow-hidden pointer-events-none"
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                      {!isCurrent && (
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
                      )}
                    </motion.div>
                  );
                })}

                {/* Decorative Badge Accent */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-2 sm:-right-4 top-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg z-20"
                >
                   <Logo size={window.innerWidth < 640 ? 30 : 40} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Social Proof Section - Infinite Marquee Redesign */}
      <section className="py-12 mb-32 bg-slate-900 relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        
        <div className="text-center mb-8 relative z-10 px-4">
          <span className="text-brand-blue text-[9px] font-black uppercase tracking-[0.5em] mb-3 block">Zaufanie i Partnerstwo</span>
          <h2 className="text-2xl md:text-3xl heading-bold text-white tracking-tighter">Wspieramy liderów rynku.</h2>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex flex-col gap-3 py-4">
          {/* Row 1: Left to Right */}
          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: [0, -1920] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-10 md:gap-20 whitespace-nowrap px-8"
            >
              {[
                'Logitech', 'Siemens', 'Bayer', 'Shell', 'Alstom', 'ABB', 'Bosch', 'DHL', 'FedEx', 'Volvo',
                'Logitech', 'Siemens', 'Bayer', 'Shell', 'Alstom', 'ABB', 'Bosch', 'DHL', 'FedEx', 'Volvo'
              ].map((name, i) => (
                <span key={i} className="text-xl md:text-2xl font-black italic tracking-tighter text-white/5 hover:text-brand-blue/40 transition-colors uppercase cursor-default select-none">
                  {name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: [-1920, 0] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-10 md:gap-20 whitespace-nowrap px-8"
            >
              {[
                'Scania', 'General Electric', 'Oracle', 'Airbus', 'Volkswagen', 'Toyota', 'MAN', 'Nestle', 'Coca-Cola', 'Pepsi',
                'Scania', 'General Electric', 'Oracle', 'Airbus', 'Volkswagen', 'Toyota', 'MAN', 'Nestle', 'Coca-Cola', 'Pepsi'
              ].map((name, i) => (
                <span key={i} className="text-xl md:text-2xl font-black italic tracking-tighter text-white/5 hover:text-brand-blue/40 transition-colors uppercase cursor-default select-none">
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-white/5">
             <div className="flex items-center justify-center gap-4 group">
               <p className="text-3xl font-black italic text-brand-blue tracking-tighter">50+</p>
               <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Lat Tradycji</p>
             </div>
             <div className="flex items-center justify-center gap-4 group">
               <p className="text-3xl font-black italic text-brand-blue tracking-tighter">500+</p>
               <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Stałych Klientów</p>
             </div>
             <div className="flex items-center justify-center gap-4 group">
               <p className="text-3xl font-black italic text-brand-blue tracking-tighter">1M+</p>
               <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Uszytych Produktów</p>
             </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Re-imagined Visuals with Color */}
      <section className="py-24 mb-32 relative overflow-hidden bg-slate-50">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.03] -skew-x-12 translate-x-20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Fundamenty Marki</span>
              <h2 className="text-4xl md:text-6xl heading-bold text-slate-900 tracking-tighter leading-tight">
                Dlaczego <span className="text-brand-blue italic">my?</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: "Polskie Tkaniny",
                desc: "Współpracujemy wyłącznie z polskimi producentami dzianin, zapewniając najwyższą jakość bazy.",
                number: "01"
              },
              {
                icon: <Zap size={28} />,
                title: "Szybka Dostawa",
                desc: "Lokalna produkcja w Krakowie pozwala nam na błyskawiczną reakcję i realizację projektów.",
                number: "02"
              },
              {
                icon: <Recycle size={28} />,
                title: "Personalizacja",
                desc: "Od modelu koszulki po rodzaj haftu — każdy element dopasujemy do specyfiki Twojej branży.",
                number: "03"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative p-10 bg-white border border-slate-100 rounded-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
              >
                {/* Card Background Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none">
                  <span className="text-8xl font-black italic tracking-tighter leading-none text-slate-900">{item.number}</span>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-sm flex items-center justify-center mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-700 rotate-3 group-hover:rotate-0">
                    <div className="text-brand-blue group-hover:text-white transition-colors duration-700">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4 group-hover:text-brand-blue transition-colors duration-500">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  
                  <div className="h-0.5 w-10 bg-slate-100 group-hover:w-full group-hover:bg-brand-blue transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Wear Categories ShowCase - Enhanced with Contrast */}
      <section className="relative py-24 mb-32 bg-white">
        {/* Subtle background strip */}
        <div className="absolute top-1/2 left-0 w-full h-[60%] bg-slate-50 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Specjalizacje</span>
              <h2 className="text-4xl md:text-5xl heading-bold text-slate-900 leading-tight">Rozwiązania dla <br />każdej branży.</h2>
            </div>
            <NavLink to="/produkty" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-blue pb-2 hover:text-brand-blue transition-all mb-2">
              Zobacz wszystkie kategorie
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <NavLink to="/produkty/polary" className="group relative h-[300px] sm:h-[400px] overflow-hidden rounded-sm cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1541888941255-276f956f103f?q=80&w=2070&auto=format&fit=crop" 
              alt="Polary firmowe" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">Polary</h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Ciepło & Wytrzymałość</p>
            </div>
          </NavLink>

          <NavLink to="/produkty/t-shirty" className="group relative h-[300px] sm:h-[400px] overflow-hidden rounded-sm cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2070&auto=format&fit=crop" 
              alt="T-shirty reklamowe" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">T-shirty</h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Bawełna Premium</p>
            </div>
          </NavLink>

          <NavLink to="/produkty/bluzy" className="group relative h-[300px] sm:h-[400px] overflow-hidden rounded-sm cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop" 
              alt="Bluzy z nadrukiem" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">Bluzy</h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Kaptur & Klasyk</p>
            </div>
          </NavLink>

          <NavLink to="/produkty/koszulki-polo" className="group relative h-[300px] sm:h-[400px] overflow-hidden rounded-sm cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop" 
              alt="Koszulki Polo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">Polo</h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Elegancja & Komfort</p>
            </div>
          </NavLink>

          <NavLink to="/produkty/gastronomia" className="group relative h-[300px] sm:h-[400px] overflow-hidden rounded-sm cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop" 
              alt="Odzież gastronomiczna" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">Gastronomia</h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Fartuchy & Zapaski</p>
            </div>
          </NavLink>
        </div>
      </div>
    </section>

      {/* The Process Section - Refined */}
      <section className="bg-slate-900 border-y border-slate-800 py-32 mb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">Workflow</span>
            <h2 className="text-4xl md:text-5xl heading-bold text-white">Prosty proces współpracy.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative px-4 lg:px-20">
            {/* Connecting Line */}
            <div className="absolute top-12 left-20 right-20 h-px bg-slate-800 hidden md:block" />
            
            {[
              { id: "01", title: "Zapytanie", desc: "Przesyłasz logo i wybierasz bazy produktowe.", icon: <Mail size={20} />, bgColor: 'bg-blue-500/10' },
              { id: "02", title: "Weryfikacja", desc: "Przygotowujemy darmową wizualizację i wycenę.", icon: <ShieldCheck size={20} />, bgColor: 'bg-indigo-500/10' },
              { id: "03", title: "Produkcja", desc: "Uruchamiamy park maszynowy i kontrolę jakości.", icon: <Zap size={20} />, bgColor: 'bg-brand-blue/10' },
              { id: "04", title: "Dostawa", desc: "Bezpieczna paczka ląduje u Ciebie w 7-10 dni.", icon: <ArrowRight size={20} />, bgColor: 'bg-cyan-500/10' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 sm:w-24 sm:h-24 ${step.bgColor} border border-white/5 rounded-full flex items-center justify-center mb-6 sm:mb-10 relative z-10 transition-all duration-700 group-hover:scale-110`}>
                   <div className="absolute inset-0 bg-brand-blue rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 opacity-20 blur-xl" />
                   <span className="text-3xl font-black italic text-brand-blue drop-shadow-[0_0_15px_rgba(4,131,241,0.3)]">{step.id}</span>
                </div>
                <h4 className="text-xl heading-bold mb-4 text-white group-hover:text-brand-blue transition-colors">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[180px] font-medium">
                  {step.desc}
                </p>
                <div className="mt-8 p-3 bg-white/5 rounded-full text-brand-blue opacity-40 group-hover:opacity-100 group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:rotate-12">
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute -top-64 -left-64 w-128 h-128 bg-brand-blue/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-64 -right-64 w-128 h-128 bg-indigo-500/10 rounded-full blur-[150px]" />
      </section>

      {/* Capabilities Section - Redesigned with Sticky Layout */}
      <section className="bg-white py-24 mb-24 relative border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            {/* Sticky Content */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                <span className="text-brand-blue text-[10px] uppercase font-black tracking-[0.4em]">Ekspertyza Techniczna</span>
              </div>
              <h2 className="text-5xl md:text-6xl heading-bold text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                Produkcja<br />bez limitów.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-sm">
                Od rzemieślniczego krawiectwa po masową produkcję znakowaną cyfrowo. Dysponujemy parkiem maszynowym, który zaspokoi każde zapotrzebowanie.
              </p>
              
              <div className="p-8 bg-slate-50 border-l-4 border-brand-blue rounded-r-sm">
                <p className="text-slate-800 font-bold italic text-lg mb-2">"Nie ma dla nas nakładów zbyt małych ani wyzwań zbyt dużych."</p>
                <p className="text-[10px] uppercase font-bold text-slate-400">Dział Techniczny RESS</p>
              </div>
            </div>

            {/* Scrolling Capabilities Grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { icon: <Scissors size={32} />, title: "Własna Szwalnia", desc: "Kompletny proces od wykroju po wykończenie. Unikalne wzornictwo i pełna powtarzalność rozmiarów.", stat: "50+ maszyn" },
                  { icon: <Printer size={32} />, title: "Druk Cyfrowy", desc: "Wysokiej jakości nadruki DTF i ekosolwentowe. Idealne odwzorowanie kolorów Twojej marki.", stat: "2440 DPI" },
                  { icon: <Palette size={32} />, title: "Haft Komputerowy", desc: "Ekskluzywna metoda znakowania. Wykorzystujemy nici o podwyższonej odporności na ścieranie.", stat: "15 kolorów" },
                  { icon: <Waves size={32} />, title: "Sublimacja", desc: "Niezniszczalne nadruki wtopione w strukturę materiału. Niezastąpione w odzieży sportowej.", stat: "Full Print" },
                  { icon: <Shirt size={32} />, title: "Nasze Katalogi", desc: "Szeroka gama wzorów z naszej krakowskiej produkcji, dostępnych od ręki do personalizacji.", stat: "100% Polska" },
                  { icon: <Flag size={32} />, title: "Polska Produkcja", desc: "Wszystkie etapy produkcji odbywają się pod naszym okiem w Krakowie. Jakość gwarantowana.", stat: "Od 1972" },
                  { icon: <Ruler size={32} />, title: "Projekty Szyte", desc: "Konstrukcja odzieży od zera. Tworzymy formy idealnie dopasowane do specyfiki Twojej branży.", stat: "Custom Fit" },
                  { icon: <ShieldCheck size={32} />, title: "Standardy BHP", desc: "Każdy produkt przechodzi wielostopniową kontrolę jakości, spełniając normy bezpieczeństwa.", stat: "100% Quality" },
                ].map((cap, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group border-b border-slate-100 pb-12 hover:border-brand-blue transition-colors"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-brand-blue group-hover:scale-110 transition-transform duration-500">
                        {cap.icon}
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 group-hover:text-brand-blue transition-colors">{cap.stat}</span>
                    </div>
                    <h4 className="text-xl heading-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">{cap.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {cap.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer (HACCP) */}
      <section className="container mx-auto px-4 mb-16">
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

      {/* Contact Section */}
      <section className="bg-slate-50/50 py-24 mb-16 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">Kontakt</span>
            <h2 className="text-5xl lg:text-7xl heading-bold text-slate-900 tracking-tighter">
              Zapytaj o<br /><span className="text-brand-blue italic">wycenę</span> projektu.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
            <div className="lg:col-span-2 bg-white p-6 sm:p-12 rounded-sm shadow-2xl shadow-slate-200/50 border border-slate-100">
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
                <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-blue/20">
                  Wyślij zapytanie
                </button>
             </form>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-dark text-white p-10 rounded-sm text-left">
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
      </div>
    </section>
    </>
  );
}
