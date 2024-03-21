import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import ukTranslation from './uk.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    uk: {
      translation: ukTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-xhr-backend';

// i18n
//   .use(Backend)
//   .use(initReactI18next)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//         loadPath: 'http://localhost:5173/byte-my-water-app/',
//     },
//   });

// export default i18n;
