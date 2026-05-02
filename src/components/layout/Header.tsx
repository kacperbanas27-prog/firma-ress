/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'O Firmie', path: '/o-firmie' },
    { name: 'Produkty', path: '/produkty/t-shirty', subItems: [
      { name: 'T-Shirty', path: '/produkty/t-shirty' },
      { name: 'Polary', path: '/produkty/polary' },
      { name: 'Koszulki Polo', path: '/produkty/koszulki-polo' },
      { name: 'Bluzy', path: '/produkty/bluzy' },
      { name: 'Gastronomia', path: '/produkty/gastronomia' },
    ]},
    { name: 'Rozmiary', path: '/rozmiary' },
    { name: 'Tkaniny', path: '/tkaniny', subItems: [
      { name: 'Gastronomia', path: '/tkaniny#gastronomia' },
      { name: 'Standardowe', path: '/tkaniny#standardowe' },
      { name: 'Na Polary', path: '/tkaniny#polary' },
    ]},
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between lg:justify-start lg:gap-16">
          <NavLink to="/" className="group shrink-0">
            <Logo />
          </NavLink>
          
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => `
                    text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-1 relative px-5 py-4 whitespace-nowrap
                    ${isActive ? 'text-brand-blue' : 'text-brand-dark hover:text-brand-blue'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {item.subItems && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />}
                      {isActive && (
                        <motion.div 
                          layoutId="nav-underline"
                          className="absolute bottom-2 left-5 right-5 h-1 bg-brand-blue"
                        />
                      )}
                    </>
                  )}
                </NavLink>

                {item.subItems && (
                  <div className="absolute top-[80%] left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-brand-dark text-white p-4 rounded-sm shadow-xl min-w-[200px] border-t-2 border-brand-blue">
                      {item.subItems.map(sub => (
                        <NavLink 
                          key={sub.name} 
                          to={sub.path}
                          className="block py-2 px-4 -mx-4 text-[10px] font-black uppercase tracking-widest hover:text-brand-blue hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center justify-end flex-1 lg:flex-initial lg:static">
            <div className="hidden lg:block">
              <a href="tel:+48501893106" className="bg-brand-blue text-white px-6 py-3 rounded-sm text-xs font-black uppercase italic tracking-widest hover:bg-brand-blue-hover transition-colors whitespace-nowrap">
                Zapytaj o wycenę
              </a>
            </div>
            <button className="lg:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-dark z-50 lg:hidden flex flex-col items-center justify-center gap-8 p-8"
          >
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <Logo />
            </NavLink>
            <nav className="flex flex-col items-center gap-6 overflow-y-auto max-h-[60vh] w-full px-8">
              {navItems.map((item) => (
                <div key={item.name} className="w-full text-center">
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => `
                      text-2xl font-black italic uppercase tracking-tighter transition-colors block py-2
                      ${isActive ? 'text-brand-blue' : 'text-white hover:text-brand-blue'}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                  {item.subItems && (
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
                       {item.subItems.map(sub => (
                         <NavLink 
                           key={sub.name} 
                           to={sub.path}
                           className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-brand-blue transition-colors"
                           onClick={() => setIsMenuOpen(false)}
                         >
                           {sub.name}
                         </NavLink>
                       ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <a href="tel:+48501893106" className="btn-primary w-full py-4 text-center">Zapytaj o wycenę</a>
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
