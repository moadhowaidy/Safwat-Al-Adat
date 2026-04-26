import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../data/translations/en';
import arTranslations from '../data/translations/ar';

const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
