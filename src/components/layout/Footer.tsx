/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-20 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <NavLink to="/" className="inline-block mb-8">
              <Logo />
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
              Profesjonalna odzież firmowa, reklamowa i robocza. Jakość szyta na miarę od 1972 roku.
            </p>
          </div>

          <div>
            <h5 className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-8">Szybkie Linki</h5>
            <ul className="space-y-4">
              <li><NavLink to="/o-firmie" className="text-xs font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">O Firmie</NavLink></li>
              <li><NavLink to="/produkty/t-shirty" className="text-xs font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">Produkty</NavLink></li>
              <li><NavLink to="/tkaniny" className="text-xs font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">Tkaniny</NavLink></li>
              <li><NavLink to="/rozmiary" className="text-xs font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">Tabela Rozmiarów</NavLink></li>
              <li><NavLink to="/kontakt" className="text-xs font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">Kontakt</NavLink></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-8">Biuro Kraków</h5>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=ul.+Leona+Ślósarczyka+20,+30-898+Kraków" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-blue transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-brand-blue"
                >
                  ul. Leona Ślósarczyka 20<br />30-898 Kraków, Polska
                </a>
              </li>
              <li className="mt-4">
                <a href="tel:+48501893106" className="text-white font-black italic text-xl hover:text-brand-blue transition-colors tracking-tight">+48 501 893 106</a>
              </li>
            </ul>
          </div>

          <div>
            <a href="tel:+48501893106" className="btn-primary w-full py-4 text-xs text-center flex items-center justify-center">Darmowa wycena</a>
            <div className="flex gap-4 mt-8 justify-end">
              <a href="#" className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:scale-110 transition-all text-white/40 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:scale-110 transition-all text-white/40 hover:text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
           <p>© 2024 RESS SP. Z O.O. Wszelkie prawa zastrzeżone.</p>
           <ul className="flex gap-8">
             <li><a href="#" className="hover:text-white">Polityka Prywatności</a></li>
             <li><a href="#" className="hover:text-white">Regulamin</a></li>
           </ul>
        </div>
      </div>
    </footer>
  );
};
