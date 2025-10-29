import React from 'react';
import { Phone, Mail, Globe, Instagram, Facebook } from 'lucide-react';

const ContactItem = ({ icon: Icon, children, href }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-gray-800 shadow-sm transition hover:shadow-md"
  >
    <span className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
      <Icon className="h-5 w-5" />
    </span>
    <span className="font-medium">
      {children}
    </span>
  </a>
);

const ContactBar = () => {
  return (
    <section id="contact" className="relative mt-16">
      <div className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <ContactItem icon={Phone} href="tel:+919037257789">
              Call Us +91 90372 57789
            </ContactItem>
            <ContactItem icon={Mail} href="mailto:avionadsdigital@gmail.com">
              avionadsdigital@gmail.com
            </ContactItem>
            <ContactItem icon={Globe} href="https://avionads.com" >
              avionads.com
            </ContactItem>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-emerald-100 bg-white p-2 text-gray-700 shadow-sm transition hover:text-emerald-700 hover:shadow-md">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-emerald-100 bg-white p-2 text-gray-700 shadow-sm transition hover:text-emerald-700 hover:shadow-md">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
