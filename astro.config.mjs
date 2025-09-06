import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://blacklabs.sk',
  trailingSlash: 'always', // alebo 'never'
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});