// @ts-check
import { defineConfig } from 'astro/config';

import cloudflarePagesHeaders from 'astro-cloudflare-pages-headers';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://mcpport.com',
    integrations: [
        react(),
        // cloudflarePagesHeaders(), 
        partytown(),
        sitemap(
            // {
            //     filter: (page) =>
            //         page !== 'https://stargazers.club/secret-vip-lounge-1/' &&
            //         page !== 'https://stargazers.club/secret-vip-lounge-2/' &&
            //         page !== 'https://stargazers.club/secret-vip-lounge-3/' &&
            //         page !== 'https://stargazers.club/secret-vip-lounge-4/',
            //     customPages: [
            //         'https://stargazers.club/external-page',
            //         'https://stargazers.club/external-page2'
            //     ],
            // }
        )],
    vite: {
        // @ts-ignore
        plugins: [tailwindcss()],
    },
});