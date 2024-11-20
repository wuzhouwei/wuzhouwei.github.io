import React from "react";

import EmailIcon from "@site/static/media/media/gmail.svg";
import GithubIcon from "@site/static/media/media/github.svg";
import FacebookIcon from "@site/static/media/media/facebook.svg";
import TwitterIcon from "@site/static/media/media/twitter.svg";
import CartoonIcon from "@site/static/media/cartoon/cartoon.svg";
import Cartoon2Icon from "@site/static/media/cartoon/cartoon2.svg";
import Cartoon3Icon from "@site/static/media/cartoon/cartoon3.svg";
import Cartoon4Icon from "@site/static/media/cartoon/cartoon4.svg";
import ComicIcon from "@site/static/media/hobby/comic.svg";
import MusicIcon from "@site/static/media/hobby/music.svg";
import WzryIcon from "@site/static/media/hobby/wzry.svg";
import HyldIcon from "@site/static/media/hobby/hyld.svg";

import CssIcon from "@site/static/media/skill/css.svg";
import GitIcon from "@site/static/media/skill/git.svg";
import JsIcon from "@site/static/media/skill/js.svg";
import LinuxIcon from "@site/static/media/skill/linux.svg";
import MdIcon from "@site/static/media/skill/md.svg";
import NextJsIcon from "@site/static/media/skill/nextjs.svg";
import NodeJsIcon from "@site/static/media/skill/nodejs.svg";
import PostmanIcon from "@site/static/media/skill/postman.svg";
import PsIcon from "@site/static/media/skill/ps.svg";
import ReactIcon from "@site/static/media/skill/react.svg";
import SqlIcon from "@site/static/media/skill/sql.svg";
import TsIcon from "@site/static/media/skill/ts.svg";
import AntdIcon from "@site/static/media/skill/antd.svg";
import HtmlIcon from "@site/static/media/skill/html.svg";
import SvelteIcon from "@site/static/media/skill/svelte.svg";
import StyledComponentIcon from "@site/static/media/skill/styledCop.svg";
import MaterialUiIcon from "@site/static/media/skill/material-ui.svg";

export const mediums: {
  href: string;
  isBlank: "_blank" | "self";
  component: React.ComponentType<any>;
}[] = [
  {
    href: "https://github.com/wuzhouwei",
    isBlank: "_blank",
    component: GithubIcon,
  },
  {
    href: "mailto:wzw1561628221@gmail.com",
    isBlank: "self",
    component: EmailIcon,
  },
  {
    href: "https://x.com/wuzhouwei",
    isBlank: "_blank",
    component: TwitterIcon,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61555952052639",
    isBlank: "_blank",
    component: FacebookIcon,
  },
];

export const hobby: {
  value: string;
  component: React.ComponentType<any>;
}[] = [
  {
    value: "看动漫",
    component: ComicIcon,
  },
  {
    value: "听音乐",
    component: MusicIcon,
  },
  {
    value: "王者荣耀",
    component: WzryIcon,
  },
  {
    value: "荒野乱斗",
    component: HyldIcon,
  },
];

export const skill: {
  title: string;
  component: React.ComponentType<any>;
}[] = [
  {
    title: "React js",
    component: ReactIcon,
  },
  {
    title: "Next js",
    component: NextJsIcon,
  },
  {
    title: "svelte",
    component: SvelteIcon,
  },
  {
    title: "typescript",
    component: TsIcon,
  },
  {
    title: "Node js",
    component: NodeJsIcon,
  },
  {
    title: "javascript",
    component: JsIcon,
  },
  {
    title: "html",
    component: HtmlIcon,
  },
  {
    title: "css",
    component: CssIcon,
  },
  {
    title: "Ant design",
    component: AntdIcon,
  },
  {
    title: "material-ui",
    component: MaterialUiIcon,
  },
  {
    title: "styled-components",
    component: StyledComponentIcon,
  },
  {
    title: "git",
    component: GitIcon,
  },
  {
    title: "Linux",
    component: LinuxIcon,
  },
  {
    title: "mysql",
    component: SqlIcon,
  },
  {
    title: "Postman",
    component: PostmanIcon,
  },
  {
    title: "markdown",
    component: MdIcon,
  },
  {
    title: "photoshop",
    component: PsIcon,
  },
];

export const introduce: {
  id: number;
  keys: string;
  value: string;
  component: React.ComponentType<any>;
}[] = [
  {
    id: 1,
    keys: "职位",
    value: "前端",
    component: CartoonIcon,
  },
  {
    id: 2,
    keys: "年龄",
    value: `${new Date().getFullYear() - 1995}`,
    component: Cartoon2Icon,
  },
  {
    id: 3,
    keys: "码龄",
    value: `5年`,
    component: Cartoon3Icon,
  },
  {
    id: 4,
    keys: "代号",
    value: "「御心狐」",
    component: Cartoon4Icon,
  },
];

export const articleList: { title: string; href: string }[] = [
  {
    title: "这是关于js的部分总结",
    href: "/docs/tutorial-zwzj/zwzj_js",
  },
  {
    title: "这是关于css的部分总结",
    href: "/docs/tutorial-zwzj/zwzj_css",
  },
  {
    title: "这是关于react的部分总结",
    href: "/docs/tutorial-zwzj/zwzj_react",
  },
  {
    title: "这是关于ts的部分总结",
    href: "/docs/tutorial-zwzj/zwzj_ts",
  },
  {
    title: "这是关于git的部分总结",
    href: "/docs/tutorial-zwzj/zwzj_git",
  },
];

export const point: string[] = [
  "无人扶我青云志，我自踏雪至山巅。",
  "我自横刀向天笑，去留肝胆两昆仑。",
];
