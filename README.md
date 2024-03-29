# 给自己看的总结

## Website

This website is built using [Docusaurus 2](https://www.docusaurus.cn/docs), a modern static website generator.

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```bash
yarn build
```

### 替换原始组件

```bash
yarn swizzle
```

### 要获得可用于 swizzle 的所有主题和组件的概述，请运行：

```bash
yarn swizzle --list
```

### 弹出主题组件是创建原始主题组件副本的过程，您可以完全自定义和覆盖该副本。

```
yarn swizzle [theme name] [component name] --eject
```

> 例子：
>
> `这会将当前<NotFound />组件的实现复制到您站点的src/theme目录中。`
>
> `Docusaurus 现在将使用此<NotFound>组件副本而不是原始组件。`
>
> `然后用自己的替换原始组件`

```
yarn swizzle @docusaurus/theme-classic NotFound --eject
```
