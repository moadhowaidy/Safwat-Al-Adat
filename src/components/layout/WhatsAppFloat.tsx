import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { COMPANY } from '../../data';

export default function WhatsAppFloat() {
  const { t } = useTranslation();
  
  // Format number for wa.me link (remove +)
  const waNumber = COMPANY.whatsappNumber.replace('+', '');
  const message = encodeURIComponent(t('common.whatsappGreetingDefault'));
  const waLink = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 flex items-center justify-center w-14 h-14 bg-brand-gold text-white rounded-full shadow-lg hover:bg-brand-goldHover hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-goldSoft"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
