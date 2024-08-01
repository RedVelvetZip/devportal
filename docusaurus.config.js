// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import 'dotenv/config';

import {themes as prismThemes} from 'prism-react-renderer';
import {createNavItems} from './src/_utils/utils.js';

const mainNavItems = createNavItems('./docs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  noIndex: false, // set to false to enable search engine indexing
  trailingSlash: true,
  title: 'Rootstock Developers Portal',
  tagline: 'Welcome to Rootstock',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://dev-rootstock.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  customFields: {
    keys : {
      mendable : process.env.MENDABLE_KEY
    },
    homePage: {
      editUrl: 'https://github.com/zgraya-digital/devportal-rootstock/tree/main/',
    },
    moreLinks : {
      changelog : {
        title: 'Changelog',
        url : '/changelog',
      },
      joinCommunity : {
        title: 'Join the Community',
        url : 'http://discord.gg/rootstock',
      },
      reportIssue : {
        title: 'Report an Issue',
        url : 'https://github.com/rsksmart/rsksmart.github.io/issues',
      },
    }
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rsksmart', // Usually your GitHub org/user name.
  projectName: 'devportal', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        blogTitle: 'Changelog',
        blogDescription:
          'Additions and updates to Rootstock Products and Tools.',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Changelog',
        showReadingTime: false,
        /**
         * Required for any multi-instance plugin
         */
        id: 'changelog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'changelog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './changelog',
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/zgraya-digital/devportal-rootstock/tree/main/'
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          blogTitle: 'Changelog',
          blogDescription:
            'View important product updates to the Rootstock platform',
        },

        theme: {
          customCss: ['./src/scss/app.scss'],
          // customCss: ['./src/css/custom.css']
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        googleTagManager: {
          containerId: process.env.GTM_CONTAINER_ID || 'GTM-12345',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/og.jpg',
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Rootstock Devportal',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            activeBaseRegex: '^/$',
            label: 'Home',
          },
          ...mainNavItems,
          {
            href: 'https://github.com/rsksmart/devportal',
            label: 'GitHub',
            position: 'right',
            icon: 'github',
          },
          {
            href: 'http://discord.gg/rootstock',
            label: 'Discord',
            position: 'right',
            icon: 'discord',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'WHITEPAPER',
            items: [
              {
                label: 'Original Whitepaper',
                href: 'https://rootstock.io/rsk_white_paper-original.pdf',
              },
              {
                label: 'Updated Whitepaper',
                href: 'https://rootstock.io/static/a79b27d4889409602174df4710102056/RS-whitepaper.pdf',
              },
              {
                label: 'RIF Whitepaper',
                href: 'https://rootstock.io/static/add903ce229a6f45a606cd78b028cf9e/RIF-whitepaper-V2.pdf',
              },
            ],
          },
          {
            title: 'RESOURCES',
            items: [
              {
                label: 'Merged Mining',
                href: 'https://rootstock.io/mine-btc-with-rootstock/',
              },
              {
                label: 'Rootstock Explorer',
                href: 'https://explorer.rootstock.io/',
              },
              {
                label: 'About RootstockLabs',
                href: 'https://www.rootstocklabs.com/about-us/',
              },
              {
                label: 'Blog',
                href: 'https://blog.rootstock.io/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}. RootstockLabs. All rights reserved`
      },
      socials: {
        discord: 'http://discord.gg/rootstock',
        x: 'https://twitter.com/rootstock_io',
        telegram: 'https://t.me/rskofficialcommunity'
      },
      tagline: {
        text1: 'Build',
        text2: 'Together',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: ['powershell', 'bash', 'javascript'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'WAFPQL14PU',

        // Public API key: it is safe to commit it
        apiKey: '4da8ccafcd04d9c5efd1601a60658bce',

        indexName: 'dev-rootstock',

        // Optional: see doc section below
        contextualSearch: false,

      },
    }),
};

export default config;
