import i18n, { InitOptions } from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const i18nInitialize = (opts: InitOptions = {}): i18n.i18n => {
  i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      ...{
        fallbackLng: "en",

        debug: false,
        returnObjects: true,
        saveMissing: false,
      },
      ...opts,
      // compatibilityJSON: 'v1',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });

  return i18n;
};
