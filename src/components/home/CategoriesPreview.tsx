import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PackageSearch, Beef, Drumstick, Fish } from 'lucide-react';
import Section from '../ui/Section';
import { CATEGORIES } from '../../data';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  canned: <PackageSearch size={32} className="text-brand-gold" />,
  meat: <Beef size={32} className="text-brand-gold" />,
  poultry: <Drumstick size={32} className="text-brand-gold" />,
  seafood: <Fish size={32} className="text-brand-gold" />,
};

export default function CategoriesPreview() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <Section className="bg-brand-bone">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link 
              to={`/products#${cat.id}`}
              className="group block bg-brand-white border border-brand-border p-8 h-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(31,26,18,0.06)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="mb-6">
                {iconMap[cat.id]}
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{cat.name[lang]}</h3>
              <p className="text-brand-taupe text-sm mb-6 line-clamp-3">
                {cat.description[lang]}
              </p>
              <div className="flex items-center text-brand-oliveDark font-medium text-sm transition-colors group-hover:text-brand-goldHover">
                {t('common.viewProducts')}
                <span className="ms-2 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                  {lang === 'ar' ? '←' : '→'}
                </span>
              </div>
              {/* Animated bottom border */}
              <div className="absolute bottom-0 start-0 h-1 bg-brand-gold w-0 transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
