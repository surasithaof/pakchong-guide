import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en', 'zh', 'es', 'fr', 'it', 'ru'],
  },
});
