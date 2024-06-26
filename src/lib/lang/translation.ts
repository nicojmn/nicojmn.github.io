import i18n, { type Config } from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config: Config = ({
  loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (await import('./en.json')).default,
    },
    {
        locale: 'fr',
        key: '',
        loader: async () => (await import('./fr.json')).default,
    },
    {
        locale: 'es',
        key: '',
        loader: async () => (await import('./es.json')).default,
    },
  ],
  fallbackLocale: 'en',
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);