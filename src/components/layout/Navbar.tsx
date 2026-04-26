import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/products', label: t('nav.products') },
    { href: '/services', label: t('nav.services') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-bone border-b border-brand-border">
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* TODO: Replace /logo.png with a transparent-background PNG or SVG when available, 
                to support placement on cream and gold backgrounds. Current file has a white BG 
                which only blends correctly on bone (#FAF7F0). */}
            <img 
              src="/logo.png" 
              alt="صفوة العادات | Safwat Al-Adat" 
              className="h-10 w-auto"
              loading="eager"
            />
            <span className="font-bold text-xl text-brand-charcoal">
              {i18n.language === 'ar' ? 'صفوة العادات' : 'Safwat Al-Adat'}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base transition-colors ${
                  location.pathname === link.href
                    ? 'text-brand-gold font-bold'
                    : 'text-brand-charcoal hover:text-brand-goldHover'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-s border-brand-border ps-6 h-6 flex items-center">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-white border-b border-brand-border absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md ${
                  location.pathname === link.href
                    ? 'bg-brand-cream text-brand-gold'
                    : 'text-brand-charcoal hover:bg-brand-bone'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
