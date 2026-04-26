import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import CompanyStory from '../components/about/CompanyStory';
import Values from '../components/about/Values';
import SourcingMap from '../components/about/SourcingMap';

export default function About() {
  const { i18n } = useTranslation();
  const title = i18n.language === 'ar' ? 'صفوة العادات - من نحن' : 'Safwat Al-Adat - About Us';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      
      <CompanyStory />
      <Values />
      <SourcingMap />
    </>
  );
}
