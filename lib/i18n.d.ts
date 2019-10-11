import { I18NextLocalStorageBackend } from 'i18next-localstorage-backend';
import i18n, { InitOptions } from 'i18next';
interface i18nInitializeOptions extends InitOptions {
    localStorageBackend?: I18NextLocalStorageBackend.BackendOptions;
}
export declare const i18nInitialize: (opts?: i18nInitializeOptions) => i18n.i18n;
export {};
