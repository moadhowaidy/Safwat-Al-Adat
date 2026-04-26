import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import GoldDivider from '../ui/GoldDivider';

export default function AboutPreview() {
  const { t, i18n } = useTranslation();

  return (
    <Section className="bg-brand-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">
              {t('about.title')}
            </h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
              <path d="M12 22C12 22 12 14 12 12C12 10 16 7 16 7C16 7 13 8 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C12 22 12 14 12 12C12 10 8 7 8 7C8 7 11 8 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12C12 12 17 9 20 12C20 12 17 14 12 12Z" fill="currentColor" />
              <path d="M12 12C12 12 7 9 4 12C4 12 7 14 12 12Z" fill="currentColor" />
            </svg>
          </div>
          <GoldDivider className="mb-8" />
          <div className="prose prose-lg text-brand-charcoal max-w-none">
            {/* Split story to just show first paragraph */}
            <p className="leading-relaxed">
              {t('about.story').split('\n\n')[0]}
            </p>
          </div>
          <div className="mt-8">
            <Link 
              to="/about"
              className="inline-flex items-center text-brand-oliveDark font-medium hover:text-brand-goldHover transition-colors"
            >
              {t('common.readMore')}
              <span className="ms-2 rtl:rotate-180">→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-[4/3] bg-brand-bone rounded-sm overflow-hidden border border-brand-border"
        >
          {/* TODO: replace placeholder with real image */}
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1548" 
            alt="About Safwat Al-Adat" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </Section>
  );
}
