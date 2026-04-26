import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import CategoriesPreview from '../components/home/CategoriesPreview';
import TrustBar from '../components/home/TrustBar';
import AboutPreview from '../components/home/AboutPreview';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  const { i18n } = useTranslation();
  const title = i18n.language === 'ar' ? 'صفوة العادات - الرئيسية' : 'Safwat Al-Adat - Home';
  const desc = i18n.language === 'ar' ? 'استيراد المواد الغذائية بأعلى معايير الجودة.' : 'Premium food imports, trusted across Libya.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="alternate" hrefLang="ar" href="/" />
        <link rel="alternate" hrefLang="en" href="/" />
      </Helmet>
      
      <Hero />
      <CategoriesPreview />
      <TrustBar />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
