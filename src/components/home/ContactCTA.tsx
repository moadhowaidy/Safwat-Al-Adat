import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../ui/Section';

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <Section className="bg-brand-gold py-24" containerClassName="max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-8 leading-tight">
          {t('contact.title')}
        </h2>
        <Button 
          href="/contact" 
          className="bg-brand-charcoal text-brand-bone hover:bg-brand-charcoal/90 text-lg px-8 py-4"
        >
          {t('common.requestQuote')}
        </Button>
      </motion.div>
    </Section>
  );
}
