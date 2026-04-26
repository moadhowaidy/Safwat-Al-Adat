import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Ship, Snowflake, Truck } from 'lucide-react';
import Section from '../components/ui/Section';
import GoldDivider from '../components/ui/GoldDivider';

export default function Services() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';
  const title = lang === 'ar' ? 'صفوة العادات - خدماتنا' : 'Safwat Al-Adat - Services';

  const services = [
    { id: 'importing', icon: <Ship size={40} /> },
    { id: 'coldChain', icon: <Snowflake size={40} /> },
    { id: 'distribution', icon: <Truck size={40} /> },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      
      <Section className="bg-brand-bone min-h-[80vh]">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
          {t('services.title')}
        </h1>
        <GoldDivider className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-brand-white p-8 border border-brand-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-brand-gold mb-6 bg-brand-cream inline-flex p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
                {t(`services.${service.id}.title`)}
              </h3>
              <p className="text-brand-taupe text-lg leading-relaxed">
                {t(`services.${service.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
