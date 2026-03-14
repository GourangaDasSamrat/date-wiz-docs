export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction',   href: '/' },
      { title: 'Installation',   href: '/docs/installation' },
      { title: 'Quick Start',    href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Core API',
    items: [
      { title: 'format()',          href: '/docs/format' },
      { title: 'getRelativeTime()', href: '/docs/relative-time' },
      { title: 'smartFormat()',     href: '/docs/smart-format' },
      { title: 'parse()',           href: '/docs/parse' },
    ],
  },
  {
    title: 'Arithmetic',
    items: [
      { title: 'add() / subtract()', href: '/docs/arithmetic' },
      { title: 'diff()',             href: '/docs/diff' },
      { title: 'startOf() / endOf()',href: '/docs/start-end' },
      { title: 'Comparisons',        href: '/docs/comparisons' },
    ],
  },
  {
    title: 'Business Logic',
    items: [
      { title: 'addBusinessDays()',       href: '/docs/business-days' },
      { title: 'countBusinessDays()',     href: '/docs/count-business-days' },
      { title: 'isWithinWorkingHours()',  href: '/docs/working-hours' },
    ],
  },
  {
    title: 'Chainable API',
    items: [
      { title: 'wiz() Factory', href: '/docs/wiz' },
      { title: 'Method Chaining', href: '/docs/chaining' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Internationalization', href: '/docs/i18n' },
      { title: 'Tree-Shaking',         href: '/docs/tree-shaking' },
      { title: 'TypeScript Usage',     href: '/docs/typescript' },
      { title: 'Error Handling',       href: '/docs/error-handling' },
    ],
  },
];

export const siteConfig = {
  name: 'date-wiz',
  description: 'A zero-dependency, TypeScript-native date utility library.',
  version: '1.0.0',
  npm: 'https://www.npmjs.com/package/date-wiz',
  github: 'https://github.com/GourangaDasSamrat/date-wiz',
  githubDocs: 'https://github.com/GourangaDasSamrat/date-wiz-docs',
};
