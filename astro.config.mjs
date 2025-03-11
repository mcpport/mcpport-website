// @ts-check
import { defineConfig } from 'astro/config';

import cloudflarePagesHeaders from 'astro-cloudflare-pages-headers';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import compressor from 'astro-compressor';
import playformCompress from '@playform/compress';
import purgecss from 'astro-purgecss';
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
    site: 'https://mcpport.com',
    integrations: [
        cloudflarePagesHeaders(),
        react(),
        partytown(),
        webmanifest({
            name: 'MCPPort',
            icon: 'public/favicon.svg',
            short_name: 'MCPPort',
            description: 'MCP and API AllinOne',
            start_url: '/',
            theme_color: '#3367D6',
            background_color: '#3367D6',
            display: 'standalone',
        }),
        purgecss(),
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
            // i18n: {
            //     defaultLocale: 'en', // 所有不包含 `es` 或 `fr` 的链接都将被视为默认语言环境，即 `en`
            //     locales: {
            //     en: 'en-US', // `defaultLocale` 的值必须在 `locales` 键中存在
            //     es: 'es-ES',
            //     fr: 'fr-CA',
            //     },
            // },
            // }
        ),
        playformCompress(),
        compressor(),
    ],
    vite: {
        // @ts-ignore
        plugins: [tailwindcss()],
    },
});