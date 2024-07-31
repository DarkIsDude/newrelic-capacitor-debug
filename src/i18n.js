import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    defaultNS: 'translation',
    ns: ['translation', 'core', 'common', 'errors'],
    interpolation: {
      escapeValue: false,
      skipOnVariables: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    react: {
      useSuspense: true,
    },
  })
  .then(() => {
    console.info('i18n initialized');
  });

export default i18next;
