import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BadgeCheck, Snowflake, Globe, Calendar } from 'lucide-react';
import Section from '../ui/Section';

export default function TrustBar() {
  const { t } = useTranslation();

  const features = [
    { icon: <BadgeCheck size={24} />, text: t('home.trust.halal') },
    { icon: <Snowflake size={24} />, text: t('home.trust.coldChain') },
    { icon: <Globe size={24} />, text: t('home.trust.sourced') },
    { icon: <Calendar size={24} />, text: t('home.trust.established') },
  ];

  return (
    <Section className="bg-brand-cream py-8 md:py-12" containerClassName="max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 text-brand-charcoal"
          >
            <div className="text-brand-gold shrink-0">
              {feature.icon}
            </div>
            <span className="font-medium text-sm md:text-base">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
