import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake, Shield } from 'lucide-react';
import Section from '../ui/Section';

export default function Values() {
  const { t } = useTranslation();

  const values = [
    { id: 'quality', icon: <ShieldCheck size={32} /> },
    { id: 'safety', icon: <Snowflake size={32} /> },
    { id: 'reliability', icon: <Shield size={32} /> },
  ];

  return (
    <Section className="bg-brand-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
          {t('about.valuesTitle')}
        </h2>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((v, idx) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-cream text-brand-gold mb-6">
              {v.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-4">
              {t(`about.values.${v.id}.title`)}
            </h3>
            <p className="text-brand-taupe leading-relaxed">
              {t(`about.values.${v.id}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
