import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <defs>
        <linearGradient id="aGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      <path d="M8 52L28 12c2-4 6-4 8 0l20 40c1 2-1 4-3 4h-8c-2 0-3-1-4-3l-3-6H26l-3 6c-1 2-2 3-4 3h-8c-2 0-4-2-3-4zM30 34h12l-6-12-6 12z" fill="url(#aGrad)" />
      <path d="M46 10c6 2 9 5 10 8-6-2-12-1-18 3 2-6 4-9 8-11z" fill="#ef4444" />
    </svg>
    <span className="text-xl font-semibold tracking-wide text-gray-900">AvionAds</span>
  </div>
);

const HeaderHero = () => {
  return (
    <header className="relative">
      <div className="flex justify-between items-start">
        <div className="pt-6" />
        <div className="pt-6">
          <Logo />
        </div>
      </div>

      <div className="relative mt-10">
        <h1 className="leading-tight">
          <span className="block text-emerald-700/90 font-serif italic text-2xl sm:text-3xl">We are Creative</span>
          <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            DIGITAL MARKETING EXPERT
          </span>
        </h1>
        <p className="mt-4 inline-flex items-center gap-2 text-gray-700 text-base sm:text-lg">
          We will help to grow your business quickly
          <ArrowUpRight className="h-5 w-5 text-emerald-600" />
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700">
            Get in touch
          </a>
          <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white px-5 py-3 text-emerald-700 shadow-sm hover:border-emerald-300">
            What we do
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
