module.exports = {
  title: 'Editor GTFS',
  tagline: 'Editor GTFS',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/Markdown-test/docsaurius/build/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'hubros', // Usually your GitHub org/user name.
  projectName: 'shape editor', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Editor GTFS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentos',
          position: 'left',
        },
        {
          href: 'https://github.com/jeancahu/GTFS_shapes_editor_JS',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentos',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GTFS Editor, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
