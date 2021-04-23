var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
export var i18nInitialize = function (opts) {
    if (opts === void 0) { opts = {}; }
    i18n
        // detect user language
        // learn more: https://github.com/i18next/i18next-browser-languageDetector
        .use(LanguageDetector)
        // pass the i18n instance to react-i18next.
        .use(initReactI18next)
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init(__assign({
        fallbackLng: "en",
        debug: false,
        returnObjects: true,
        saveMissing: false,
    }, opts, { 
        // compatibilityJSON: 'v1',
        interpolation: {
            escapeValue: false,
        } }));
    return i18n;
};
//# sourceMappingURL=i18n.js.map