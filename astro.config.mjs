// @ts-check
import { defineConfig } from 'astro/config';

import cloudflarePagesHeaders from 'astro-cloudflare-pages-headers';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [cloudflarePagesHeaders(), tailwindcss()]
});