// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://vorgoron.ru',
	i18n: {
		defaultLocale: 'ru',
		locales: ['ru', 'udm', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [mdx(), sitemap()],
});
