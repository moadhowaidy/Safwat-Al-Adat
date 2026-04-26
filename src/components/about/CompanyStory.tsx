import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import GoldDivider from '../ui/GoldDivider';

export default function CompanyStory() {
  const { t } = useTranslation();

  return (
    <Section className="bg-brand-bone" containerClassName="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
          {t('about.title')}
        </h1>
        <GoldDivider className="mb-10" />
        
        <div className="space-y-6 text-lg text-brand-charcoal leading-relaxed">
          {t('about.story').split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
