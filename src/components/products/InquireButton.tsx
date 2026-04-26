import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data';

interface InquireButtonProps {
  productName: string;
}

export default function InquireButton({ productName }: InquireButtonProps) {
  const { t } = useTranslation();
  
  const waNumber = COMPANY.whatsappNumber.replace('+', '');
  const message = encodeURIComponent(
    t('common.whatsappGreetingProduct').replace('{{product}}', productName)
  );
  const waLink = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-brand-oliveDark border border-brand-olive rounded transition-colors hover:bg-brand-olive hover:text-white"
    >
      <MessageCircle size={16} className="me-2" />
      {t('common.inquire')}
    </a>
  );
}
