import Backend from 'i18next-chained-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import xhr from 'i18next-xhr-backend';
export var i18nInitialize = function () {
    i18n
        // load translation using xhr -> see /public/locales
        // learn more: https://github.com/i18next/i18next-xhr-backend
        .use(Backend)
        // detect user language
        // learn more: https://github.com/i18next/i18next-browser-languageDetector
        .use(LanguageDetector)
        // pass the i18n instance to react-i18next.
        .use(initReactI18next)
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
        fallbackLng: 'en',
        debug: true,
        returnObjects: true,
        saveMissing: false,
        // compatibilityJSON: 'v1',
        backend: {
            backends: [
                LocalStorageBackend,
                xhr // fallback
            ],
            backendOptions: [
                {
                /* below options */
                },
                {
                // loadPath: '/locales/{{lng}}/{{ns}}.json' // xhr load path for my own fallback
                }
            ]
        },
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });
    return i18n;
};
//# sourceMappingURL=i18n.js.map