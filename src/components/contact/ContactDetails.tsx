import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
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
            <h3 className="font-semibold text-lg mb-1">{t('contact.addressLabel')}</h3>
            <p className="text-brand-taupe">
              {COMPANY.location.fullAddress[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* Embedded map */}
      <div className="mt-8">
        <div className="rounded-lg overflow-hidden border border-brand-bone/20 shadow-sm">
          <iframe
            src={COMPANY.location.googleMapsEmbedUrl}
            title={t('contact.mapAriaLabel')}
            aria-label={t('contact.mapAriaLabel')}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      {/* Directions buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={COMPANY.location.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold text-brand-charcoal rounded-md text-sm font-medium hover:bg-brand-goldHover transition-colors"
        >
          <Navigation className="h-4 w-4 shrink-0" />
          {t('contact.openInGoogleMaps')}
        </a>

        <a
          href={COMPANY.location.wazeDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-brand-olive text-brand-bone rounded-md text-sm font-medium hover:bg-brand-olive transition-colors"
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          {t('contact.openInWaze')}
        </a>

        <a
          href={COMPANY.location.appleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-brand-olive text-brand-bone rounded-md text-sm font-medium hover:bg-brand-olive transition-colors"
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          {t('contact.openInAppleMaps')}
        </a>
      </div>
    </div>
  );
}
