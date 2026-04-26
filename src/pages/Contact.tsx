import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';

export default function Contact() {
  const { i18n } = useTranslation();
  const title = i18n.language === 'ar' ? 'صفوة العادات - اتصل بنا' : 'Safwat Al-Adat - Contact Us';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      
      <Section className="bg-brand-bone min-h-[85vh] flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 bg-brand-white border border-brand-border rounded-sm overflow-hidden shadow-xl">
            <div className="lg:col-span-2">
              <ContactDetails />
            </div>
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-s border-brand-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
