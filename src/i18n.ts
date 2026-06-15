import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';

const resources = {
  en: { translation: enCommon },
  es: { translation: esCommon },
};

i18n.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
  lng: navigator.language.startsWith('es') ? 'es' : 'en',
});

export default i18n;
