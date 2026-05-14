/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { FULL_PALETTE_COTTON, FULL_PALETTE_ELANOCOTTON } from '../data/colorPalette';

interface ColorPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMaterial: 'cotton' | 'elanocotton';
  setSelectedMaterial: (material: 'cotton' | 'elanocotton') => void;
  isLongsleeve?: boolean;
}

export default function ColorPaletteModal({ 
  isOpen, 
  onClose, 
  selectedMaterial, 
  setSelectedMaterial,
  isLongsleeve = false
}: ColorPaletteModalProps) {
  const palette = selectedMaterial === 'cotton' ? FULL_PALETTE_COTTON : FULL_PALETTE_ELANOCOTTON;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 lg:p-12"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 lg:inset-12 bg-white z-[101] shadow-2xl overflow-hidden flex flex-col rounded-sm"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-3xl font-black italic uppercase tracking-tighter text-brand-dark mb-1">Pełna Paleta Kolorów</h2>
                <div className="w-12 h-1 bg-brand-blue" />
              </div>
              
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-brand-dark transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Material Selector */}
            <div className="px-8 py-6 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Wybierz materiał:</span>
              <div className="flex bg-white p-1 border border-slate-200 rounded-sm shadow-sm scale-90 origin-left">
                <button
                  onClick={() => !isLongsleeve && setSelectedMaterial('cotton')}
                  disabled={isLongsleeve}
                  className={`px-6 py-3 text-[10px] font-black uppercase italic tracking-widest transition-all relative ${
                    selectedMaterial === 'cotton' 
                      ? 'bg-brand-dark text-white shadow-lg' 
                      : 'text-slate-400 hover:text-brand-blue'
                  } ${isLongsleeve ? 'opacity-40 grayscale cursor-not-allowed' : ''}`}
                >
                  <span className={isLongsleeve ? 'line-through decoration-brand-dark decoration-2' : ''}>
                    Bawełna 100%
                  </span>
                </button>
                <button
                  onClick={() => setSelectedMaterial('elanocotton')}
                  className={`px-6 py-3 text-[10px] font-black uppercase italic tracking-widest transition-all ${
                    selectedMaterial === 'elanocotton' 
                      ? 'bg-brand-dark text-white shadow-lg' 
                      : 'text-slate-400 hover:text-brand-blue'
                  }`}
                >
                  Elanobawełna
                </button>
              </div>
              <div className="ml-auto text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Dostępnych kolorów: <span className="text-brand-blue">{palette.length}</span>
              </div>
            </div>

            {/* Color Grid */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-12 bg-slate-200/50">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-10 max-w-7xl mx-auto">
                {palette.map((color) => (
                  <motion.div
                    key={color.code}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3 group"
                  >
                    <div 
                      className="aspect-[2/1] rounded-2xl border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                      style={{ backgroundColor: color.hex }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                    </div>
                    <div className="text-center">
                      <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase">
                        {color.code}
                      </span>
                      {color.name && (
                        <p className="text-[10px] font-bold text-slate-400 mt-0.5">{color.name}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 text-center bg-white">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
                Kolory widoczne na ekranie mają charakter orientacyjny i mogą różnić się od rzeczywistych odcieni dzianin.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
