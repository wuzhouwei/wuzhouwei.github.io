/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      id: "readMe",
      label: "自述",
    },
    {
      type: "category",
      label: "自我总结",
      collapsible: true, //是否可折叠
      collapsed: false, //是否收缩
      items: [
        "tutorial-zwzj/zwzj_js",
        "tutorial-zwzj/zwzj_react",
        "tutorial-zwzj/zwzj_git",
        "tutorial-zwzj/zwzj_webpack",
        "tutorial-zwzj/zwzj_http_respond",
      ],
    },
    {
      type: "category",
      label: "react部分组件记录",
      collapsible: true,
      collapsed: true,
      items: ["tutorial-react/frame_animation"],
    },
    {
      type: "category",
      label: "js系列",
      collapsible: true,
      collapsed: true,
      items: ["tutorial-js/sjms"],
    },
    {
      type: "category",
      label: "代理配置",
      collapsible: true,
      collapsed: true,
      items: ["tutorial-nginx/nginx", "tutorial-nginx/apache"],
    },
    {
      type: "category",
      label: "其他杂项",
      collapsible: true,
      collapsed: true,
      items: [
        "tutorial-other/naming-notations",
        "tutorial-other/GitHub_automation",
        "tutorial-other/GitHub_automation2",
      ],
    },
    {
      type: "category",
      label: "demo",
      collapsible: true,
      collapsed: true,
      items: ["tutorial-demo/reptile"],
    },
    {
      type: "category",
      label: "模块包",
      collapsible: true,
      collapsed: true,
      items: ["tutorial-package/jsbi"],
    },
    {
      type: "category",
      label: "utils",
      collapsible: true,
      collapsed: false,
      items: ["tutorial-utils/utils"],
    },
  ],
};

module.exports = sidebars;
