import React from 'react';
import HeaderHero from './components/HeaderHero';
import ServicesGrid from './components/ServicesGrid';
import ContactBar from './components/ContactBar';
import BackgroundIllustrations from './components/BackgroundIllustrations';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <BackgroundIllustrations />
      <main className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:pb-28 sm:pt-14">
          <HeaderHero />
          <ServicesGrid />
          <ContactBar />
        </div>
      </main>
      <footer className="border-t border-emerald-100/80 bg-white/70 py-6 text-center text-sm text-gray-500 backdrop-blur">
        © {new Date().getFullYear()} AvionAds. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
