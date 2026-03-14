// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://GourangaDasSamrat.github.io',
  base: '/date-wiz-docs',
  integrations: [
    sitemap(),
    starlight({
      title: 'date-wiz',
      description:
        'A zero-dependency, TypeScript-native date utility library with smart formatting, business logic, and i18n.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/GourangaDasSamrat/date-wiz',
        },
        {
          icon: 'npm',
          label: 'npm',
          href: 'https://www.npmjs.com/package/date-wiz',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/GourangaDasSamrat/date-wiz-docs/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction',    slug: 'guides/introduction' },
            { label: 'Installation',    slug: 'guides/installation' },
            { label: 'Quick Start',     slug: 'guides/quick-start' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'format()',              slug: 'api/format' },
            { label: 'getRelativeTime()',     slug: 'api/relative' },
            { label: 'smartFormat()',         slug: 'api/smart-format' },
            { label: 'parse()',               slug: 'api/parse' },
            { label: 'wiz() — Chainable',     slug: 'api/wiz' },
            { label: 'Arithmetic Utilities',  slug: 'api/arithmetic' },
            { label: 'Business Days',         slug: 'api/business' },
            { label: 'TypeScript Types',      slug: 'api/types' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Internationalization (i18n)', slug: 'guides/i18n' },
            { label: 'Tree-Shaking',                slug: 'guides/tree-shaking' },
            { label: 'Business Day Logic',          slug: 'guides/business-days' },
            { label: 'Error Handling',              slug: 'guides/error-handling' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { label: 'React',       slug: 'examples/react' },
            { label: 'Node.js',     slug: 'examples/nodejs' },
            { label: 'Next.js',     slug: 'examples/nextjs' },
          ],
        },
        {
          label: 'Project',
          items: [
            { label: 'Changelog',      slug: 'guides/changelog' },
            { label: 'Contributing',   slug: 'guides/contributing' },
            { label: 'Architecture',   slug: 'guides/architecture' },
          ],
        },
      ],
    }),
  ],
});
