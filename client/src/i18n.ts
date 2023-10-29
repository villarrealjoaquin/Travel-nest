import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN_TRANSLATIONS from './utils/locales/en/en.json';
import ES_TRANSLATIONS from './utils/locales/es/es.json';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
        {
            detection: {
                order: ['querystring', 'navigator'],
                lookupQuerystring: 'lng',
            },
            fallbackLng: 'es',
            debug: false,
            resources: {
                en: {
                    translation: EN_TRANSLATIONS,
                },
                es: {
                    translation: ES_TRANSLATIONS,
                },
            },
            supportedLngs: ['en', 'es'],
            interpolation: {
                escapeValue: false,
            },
        },
        (err, t) => {
            if (err) console.error(err);
        },
    );

export default i18n;
