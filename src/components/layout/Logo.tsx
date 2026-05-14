/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const Logo = ({ size = 24, variant = 'dark' }: { size?: number, variant?: 'light' | 'dark' }) => (
  <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-105" style={{ transform: `scale(${size / 24})`, transformOrigin: 'left center' }}>
    <div className="bg-brand-blue w-8 h-8 flex items-center justify-center rounded-sm font-black text-white italic group-hover:rotate-12 transition-transform">R</div>
    <span className={`font-black italic tracking-tighter text-xl ${variant === 'light' ? 'text-white' : 'text-brand-dark'}`}>RESS.PL</span>
  </div>
);
