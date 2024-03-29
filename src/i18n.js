import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ENJSON from '../src/locales/en/trans.json'
import THJSON from '../src/locales/th/trans.json'

const resources = {
    en: {
        translation: ENJSON
    },
    th: {
        translation: THJSON
    }
};
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        supportedLngs: ['en', 'th'],

        debug: true,

    });
export default i18n;