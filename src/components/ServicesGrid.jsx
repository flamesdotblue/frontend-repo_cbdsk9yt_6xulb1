import React from 'react';
import { Megaphone, Share2, Search, Mail, Smartphone, Palette, Lightbulb, Users } from 'lucide-react';

const Card = ({ icon: Icon, title, items }) => (
  <div className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm ring-1 ring-black/0 transition hover:shadow-lg">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700 shadow-inner">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <ul className="mt-4 space-y-2 text-gray-700">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ServicesGrid = () => {
  return (
    <section id="services" className="relative mt-16">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">What We Do</h2>
        <span className="text-sm text-gray-500">Premium, end‑to‑end brand growth</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={Megaphone}
          title="Digital Marketing"
          items={[
            'Digital Marketing',
            'SEO & SEM',
            'Email Marketing',
            'Mobile Marketing',
          ]}
        />
        <Card
          icon={Share2}
          title="Social Media"
          items={[
            'Social Media Strategy',
            'Social Media Management',
            'Integrated Campaigns',
          ]}
        />
        <Card
          icon={Palette}
          title="Branding & Production"
          items={[
            'Branding',
            'Brand Strategy',
            'Brand Activations',
            'Content Creation',
            'Animation',
            'Production',
          ]}
        />
        <Card
          icon={Users}
          title="Talent & Influencers"
          items={[
            'Influencer Marketing',
            'Influencer Management',
            'Talent Management',
            'Consultation',
          ]}
        />
      </div>
    </section>
  );
};

export default ServicesGrid;
