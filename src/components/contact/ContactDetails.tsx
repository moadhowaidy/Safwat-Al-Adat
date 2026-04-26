import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data';

export default function ContactDetails() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <div className="bg-brand-charcoal text-brand-bone p-8 md:p-12 h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-brand-gold mb-8">
        {t('contact.detailsTitle')}
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <MessageCircle className="text-brand-gold shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
            <p className="text-brand-taupe mb-2 font-sans" dir="ltr">{COMPANY.whatsappNumberDisplay}</p>
            <a 
              href={`https://wa.me/${COMPANY.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(t('common.whatsappGreetingDefault'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-white transition-colors text-sm font-medium"
            >
              {lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Message us on WhatsApp'} →
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="text-brand-gold shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-lg mb-1">{lang === 'ar' ? 'الهاتف' : 'Phone'}</h3>
            <p className="text-brand-taupe font-sans" dir="ltr">{COMPANY.phoneNumberDisplay}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-brand-gold shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-lg mb-1">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h3>
            <a href={`mailto:${COMPANY.email}`} className="text-brand-taupe hover:text-brand-gold transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-brand-gold shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-lg mb-1">{lang === 'ar' ? 'العنوان' : 'Address'}</h3>
            <p className="text-brand-taupe">
              {COMPANY.country[lang]}
              {/* TODO: add street address here when confirmed */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
