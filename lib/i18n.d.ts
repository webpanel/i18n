import { I18NextLocalStorageBackend } from 'i18next-localstorage-backend';
import i18n from 'i18next';
interface i18nInitializeOptions {
    fallbackLng?: string;
    debug?: boolean;
    localStorageBackend?: I18NextLocalStorageBackend.BackendOptions;
}
export declare const i18nInitialize: (opts?: i18nInitializeOptions) => i18n.i18n;
export {};
