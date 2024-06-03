export const prerender = true;
export const trailingSlash = "always";

import { loadTranslations } from '$lib/lang/translation';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
  const { pathname } = url;

  const initLocale = 'en'; // get from cookie, user session, ...

  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {};
}