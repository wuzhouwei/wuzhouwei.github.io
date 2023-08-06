---
id: naming-notations
title: 命名规范
description: 这是一个关于网站命名规范的记录。
keywords: [html, css, html命名规范]
tags:
- html命名规范
---

----

## 网页内容类

| 名称      | className | 
| :---     |    :----:  |
| 标题      | title     |
| 摘要      | summary   |
| 箭头      | arrow   |
| 商标      | label   |
| 网站标志   | logo   |
| 转角/圆角  | corner   |
| 横幅广告   | banner   |
| 子菜单     | subMenu   |
| 搜索框     | search   |
| 登录      | login   |
| 登录条     | loginbar   |
| 工具条     | toolbar   |
| 下拉      | drop   |
| 标签页     | tab   |
| 当前的     | current   |
| 列表      | list   |
| 滚动      | scroll   |
| 服务      | service   |
| 提示信息   | msg   |
| 热点      | hot   |
| 新闻      | news   |
| 小技巧     | tips   |
| 下载      | download   |
| 栏目标题   | title   |
| 热点      | hot   |
| 加入      | joins   |
| 注册      | register   |
| 指南      | guide   |
| 友情链接   | friendlink   |
| 状态      | status   |
| 版权      | copyright   |
| 按钮      | btn   |
| 合作伙伴   | partner   |
| 投票      | vote   |
| 左右中     | left right center   |



## 注释的写法:

```html
/* Footer */
内容区
/* End Footer */
```


## id的命名:

### 页面结构

```html
容器: container
页头：header
内容：content/container
页面主体：main
页尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体布局宽度：wrapper
左右中：left right center
```


### 导航

```html
导航：nav
主导航：mainbav
子导航：subnav
顶导航：topnav
边导航：sidebar
左导航：leftsidebar
右导航：rightsidebar
菜单：menu
子菜单：submenu
标题: title
摘要: summary
```

### 功能

```html
标志：logo
广告：banner
登陆：login
登录条：loginbar
注册：regsiter
搜索：search
功能区：shop
标题：title
加入：joinus
状态：status
按钮：btn
滚动：scroll
标签页：tab
文章列表：list
提示信息：msg
当前的: current
小技巧：tips
图标: icon
注释：note
指南：guild
服务：service
热点：hot
新闻：news
下载：download
投票：vote
合作伙伴：partner
友情链接：link
版权：copyright
```

### class的命名

#### 颜色:使用颜色的名称或者16进制代码,如

```css
.red { color: red; }
.f60 { color: #f60; }
.ff8600 { color: #ff8600; }
```

#### 字体大小,直接使用"font+字体大小"作为名称,如

```css
.font12px { font-size: 12px; }
.font9pt {font-size: 9pt; }
```

#### 对齐样式,使用对齐目标的英文名称,如

```css
.left { float:left; }
.bottom { float:bottom; }
```

#### 标题栏样式,使用"类别+功能"的方式命名,如

```css
.barnews { }
.barproduct { }
```

>**注意事项:**

1. 所有书写均在英文半角状态下的小写；
2. id，class必须以字母开头；
3. 所有标签必须闭合；
4. html标签用tab键缩进；
5. 属性值必须带引号；
6. `<!-- html注释 -->`
7. `/* css注释 */`
8. ul,li/ol,li/dl,dt,dd拥有父子级关系的标签；
9. p,dt,h标签  里面不能嵌套块属性标签；
10. a标签不能嵌套a；
11. 内联元素不能嵌套块；（a除外）
12. h1标签只用于网站logo

**推荐的 CSS 书写顺序**

| 显示属性     | 自身属性      |     文本属性     |
| :---        |    :---     |       :---      |
|  display    |   width     |   color         |
|  list-style |   height    |   font          |
|  position   |   margin    | text-decoration |
|  float      |   padding   |   text-align    |
|  clear      |   border    |   vertical-align|
|             | background  |   white-space   |
|             |             |   other text    |
|             |             |   content       |
