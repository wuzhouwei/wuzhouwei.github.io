// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsDark");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "御心狐",
  url: "https://wuzhouwei.github.io", //主站域名
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/favicon.ico",
  organizationName: "wuzhouwei", // Usually your GitHub org/user name.
  projectName: "wuzhouwei.github.io", // Usually your repo name.
  deploymentBranch: "main",
  tagline: "记录自己的点点滴滴.",

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["zh", "en"],
        ignoreFiles: /^js.*md$/,
      },
    ],
    ["@docusaurus/theme-live-codeblock", { id: "1" }],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-288395864-1",
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "御心狐",
        logo: {
          alt: "御心狐",
          src: "img/foxSmall.jpeg",
        },
        items: [
          {
            type: "doc",
            docId: "readMe",
            position: "left",
            label: "记录",
          },
          {
            href: "https://github.com/wuzhouwei",
            label: "GitHub",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "个人记录，个人参考，个人总结，react，js, ts，给自己使用的文档。",
        },
        { name: "author", content: "Wu ZhouWei" },

        {
          name: "description",
          content: "Documenting Every Step in Development",
        },

        { name: "twitter:title", content: "御心狐 | 个人记录" },
        {
          name: "twitter:description",
          content: "Documenting Every Step in Development",
        },
        { name: "twitter:url", content: "https://wuzhouwei.github.io" },

        { property: "og:title", content: "御心狐 | 个人记录" },
        {
          property: "og:description",
          content: "Documenting Every Step in Development",
        },
        { property: "og:url", content: "https://wuzhouwei.github.io" },
      ],
      image: "img/fox1.png", //og:image and twitter:image
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;
