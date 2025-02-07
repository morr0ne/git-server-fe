import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import solidJs from '@astrojs/solid-js';
import node from '@astrojs/node';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [solidJs()],
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'solid',
      }),
    ],
  },
});
