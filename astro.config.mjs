import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pakchong-guide.github.io',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en', 'zh', 'es', 'fr', 'it', 'ru'],
  },
});
