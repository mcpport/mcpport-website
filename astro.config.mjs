// @ts-check
import { defineConfig } from 'astro/config';

import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import cloudflarePagesHeaders from 'astro-cloudflare-pages-headers';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import compressor from 'astro-compressor';
import playformCompress from '@playform/compress';
import purgecss from 'astro-purgecss';
import webmanifest from 'astro-webmanifest';
import Font from 'vite-plugin-font';

const defaultLocale = 'en';
const locales = {
    en: 'en-US',
    zh: 'zh-CN',
}

// https://astro.build/config
export default defineConfig({
    site: 'https://mcpport.com',
    trailingSlash: "always",
    build: {
        format: "directory",
    },
    integrations: [
        i18n({
            locales,
            defaultLocale,
            exclude: ["pages/robots.txt.js", "pages/**/*.{js,ts,jsx,tsx,md,mdx,html}"],
        }),
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
            lang: 'en-US',
            locales: {
                zh: {
                    name: 'MCPPort',
                    lang: 'zh-CN',
                    short_name: 'MCPPort',
                    description: 'MCP和API一站式解决方案',
                    start_url: '/zh/',
                    theme_color: '#3367D6',
                    background_color: '#3367D6',
                    display: 'standalone',
                }
            }
        }),
        purgecss(),
        sitemap(
            {
                i18n: {
                    locales,
                    defaultLocale,
                },
                filter: filterSitemapByDefaultLocale({ defaultLocale }),
                //     filter: (page) =>
                //         page !== 'https://stargazers.club/secret-vip-lounge-1/' &&
                //         page !== 'https://stargazers.club/secret-vip-lounge-2/' &&
                //         page !== 'https://stargazers.club/secret-vip-lounge-3/' &&
                //         page !== 'https://stargazers.club/secret-vip-lounge-4/',
                //     customPages: [
                //         'https://stargazers.club/external-page',
                //         'https://stargazers.club/external-page2'
                //     ],
            }
        ),
        playformCompress(),
        compressor(),
    ],
    vite: {
        // @ts-ignore
        plugins: [tailwindcss(), Font.vite({
            scanFiles: {
                // ?subsets 将会匹配 default
                default: ['src/**/*.{json,js,jsx,ts,tsx,astro}'],
                // import { css } from 'public/font.ttf?subsets&key=subset-1';
                'subset-1': ['example/**/*.{json,js,jsx,ts,tsx,astro}'],
            },
        })],
    },
});