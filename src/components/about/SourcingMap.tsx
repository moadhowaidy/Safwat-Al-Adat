import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import Section from '../ui/Section';
import { SOURCE_COUNTRIES } from '../../data';

export default function SourcingMap() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <Section className="bg-brand-cream py-16" containerClassName="max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-charcoal mb-4 flex items-center justify-center gap-3">
          <Globe className="text-brand-gold" size={32} />
          {t('about.sourcingTitle')}
        </h2>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
        <p className="text-brand-taupe max-w-2xl mx-auto">
          {lang === 'ar' 
            ? 'نستورد منتجاتنا من دول رائدة في الإنتاج الغذائي لضمان أعلى مستويات الجودة.'
            : 'We source our products from leading food-producing nations to ensure the highest quality.'}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {SOURCE_COUNTRIES.map((country, idx) => (
          <motion.div
            key={country.code}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="bg-brand-white px-6 py-3 rounded border border-brand-border shadow-sm text-brand-charcoal font-medium"
          >
            {country.name[lang]}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
