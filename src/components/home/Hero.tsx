import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  return (
    <div className="relative min-h-[85vh] flex items-center bg-brand-bone overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          // TODO: client to replace placeholder
          backgroundImage: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-brand-bone/85 sm:bg-brand-bone/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Logo large for hero */}
          <motion.div variants={itemVariants} className="mb-8 inline-block bg-brand-white/80 p-6 rounded-full shadow-sm backdrop-blur-sm">
            {/* TODO: Replace /logo.png with a transparent-background PNG or SVG when available, 
                to support placement on cream and gold backgrounds. Current file has a white BG 
                which only blends correctly on bone (#FAF7F0). */}
            <img 
              src="/logo.png" 
              alt="صفوة العادات | Safwat Al-Adat" 
              className="h-32 md:h-40 w-auto mx-auto"
              loading="eager"
            />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight mb-6"
          >
            {t('home.heroHeadline')}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-charcoal mb-10 max-w-2xl leading-relaxed"
          >
            {t('home.heroSubhead')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button href="/contact">{t('common.requestQuote')}</Button>
            <Button href="/products" variant="secondary">{t('common.ourProducts')}</Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
