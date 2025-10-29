import React from 'react';
import { Megaphone, ShoppingBag, BarChart3 } from 'lucide-react';

const BackgroundIllustrations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft radial accents */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-green-200/30 blur-3xl" />

      {/* Abstract marketing motifs */}
      <Megaphone className="absolute top-24 left-8 h-24 w-24 text-emerald-400/20" />
      <ShoppingBag className="absolute bottom-28 left-1/2 -translate-x-1/2 h-24 w-24 text-emerald-400/20" />
      <BarChart3 className="absolute top-1/3 right-8 h-28 w-28 text-emerald-400/20" />

      {/* Subtle grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-900" />
      </svg>
    </div>
  );
};

export default BackgroundIllustrations;
