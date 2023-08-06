// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '御心狐',
  url: 'https://wuzhouwei.github.io', //主站域名
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wuzhouwei', // Usually your GitHub org/user name.
  projectName: 'wuzhouwei.github.io', // Usually your repo name.
  deploymentBranch:'main',
  scripts:[ //百度统计
    {src: 'https://hm.baidu.com/hm.js?e70978813ac95003240f0f04122779fa',  async: true}
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        ignoreFiles:/^js.*md$/,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Youth',
        logo: {
          alt: 'youth Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'readMe',
            position: 'left',
            label: '记录',
          },
         /* {
            href: 'http://139.198.117.53:3081',
            label: '图片demo',
            position: 'left',
          },
          {
            href: 'http://139.198.117.53:3082',
            label: 'blog',
            position: 'left',
          },*/
          {
            href: 'https://github.com/wuzhouwei',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      metadata: [
        {name: 'keywords', content: '个人参考，个人总结，react，js, ts，给自己使用的文档。'},
        {name: 'author', content: 'wzw'}
      ],
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()}吴某人个人记录. <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2021040479号-1</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
