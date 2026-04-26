import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../ui/Container';
import { COMPANY } from '../../data';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-bone py-12 border-t-4 border-brand-gold">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-brand-white p-2 rounded-lg inline-flex items-center justify-center">
                {/* TODO: Replace /logo.png with a transparent-background PNG or SVG when available, 
                    to support placement on cream and gold backgrounds. Current file has a white BG 
                    which only blends correctly on bone (#FAF7F0). */}
                <img 
                  src="/logo.png" 
                  alt="صفوة العادات | Safwat Al-Adat" 
                  className="h-9 w-auto opacity-90"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-lg">
                {i18n.language === 'ar' ? 'صفوة العادات' : 'Safwat Al-Adat'}
              </span>
            </Link>
            <p className="text-brand-taupe text-sm max-w-sm">
              {t('home.heroSubhead')}
            </p>
            <div className="inline-flex items-center gap-2 bg-brand-oliveDark/30 px-3 py-1.5 rounded border border-brand-olive/30 mt-4">
              <span className="text-brand-gold text-sm font-semibold">100% Halal-certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-brand-gold text-lg">{t('nav.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-brand-bone hover:text-brand-gold transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-bone hover:text-brand-gold transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-bone hover:text-brand-gold transition-colors">{t('nav.products')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-bone hover:text-brand-gold transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-brand-gold text-lg">{t('contact.detailsTitle')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={20} />
                <span className="text-brand-bone">
                  {COMPANY.location.fullAddress[i18n.language as 'en' | 'ar']}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <span className="text-brand-bone" dir="ltr">{COMPANY.phoneNumberDisplay}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold shrink-0" size={20} />
                <a href={`mailto:${COMPANY.email}`} className="text-brand-bone hover:text-brand-gold transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-brand-charcoal/50 text-center text-brand-taupe text-sm">
          <p className="mb-2 italic">
            {i18n.language === 'en' 
              ? 'Product images are illustrative. Actual product appearance may vary by supplier and shipment.' 
              : 'الصور لأغراض التوضيح. قد يختلف شكل المنتج الفعلي حسب المورّد والشحنة.'}
          </p>
          <p>© {year} {i18n.language === 'ar' ? 'صفوة العادات لاستيراد المواد الغذائية. جميع الحقوق محفوظة.' : 'Safwat Al-Adat for Food Products Import. All rights reserved.'}</p>
        </div>
      </Container>
    </footer>
  );
}
