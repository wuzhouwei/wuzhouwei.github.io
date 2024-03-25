---
id: zwzj_css
title: css部分
tags:
  - css基础
  - css常用
description: 这是一个css内容中间的页面，总结一些css。
keywords: [ css, css基础 ]
---

----

## 1.css常用方法

**1.清除浮动**

只推荐一种：

```scss
div {
  .clearfix:after { /*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .clearfix {
    *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
  }
}

```

## 2.css方面

### 1.transform，translate和transition之间的区别与作用

1.**transition** 过渡  **例如：**

transition:all 2s; 所有属性从开始到变化结束需要两秒；

2.**transform 和 translate**  变形  **例如：**

- transform：translate(0,100%) 表示从元素的当前位置延y轴方向，向下移动整个元素高度的距离

- transform：translate(-20px,0) 表示从元素的当前位置延x轴方向，向左移动20px

- transform 有很多其它属性值，translate3D（3D变换）,scale（2D缩放）等其他的变换方式

> transform 其他属性

1. translate(x, y)：平移元素，将元素沿着 x 和 y 轴移动指定的距离。例如：translate(10px, 20px)。
2. rotate(angle)：旋转元素，按指定角度顺时针方向旋转元素。例如：rotate(45deg)。
3. scale(x, y)：缩放元素，将元素在 x 和 y 轴上按指定比例进行缩放。例如：scale(1.5, 1)。
4. skew(x-angle, y-angle)：倾斜元素，按指定角度进行 x 和 y 轴的倾斜。例如：skew(30deg, 20deg)。
5. matrix(a, b, c, d, e, f)：使用一个 2x3 矩阵来对元素进行变换。这是一个复合变换，可以同时进行平
   移、旋转、缩放和倾斜。例如：matrix(1, 0, 0, 1, 50, 100)。

### 2.样式居中

```
 //以这个为例
 <div class="box3">
    <div class="box4">box4</div>
 </div>
```

**1.flex方式**

```css
.box3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    border: 1px solid;
}

.box4 {
    width: 200px;
    height: 200px;
    border: 1px solid;
}

```

**2.定位方式**

```css
.box3 {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid;
}

.box4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 1px solid;
}
```

**3.margin(需要具体宽高)**

```css
.box3 {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid;
}

.box4 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    margin-left: -100px;
    margin-top: -100px;
    border: 1px solid;
}
```

**4.grid方式**

```css
.box3 {
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    height: 400px;
    border: 1px solid;
}

.box4 {
    width: 200px;
    height: 200px;
    border: 1px solid;
}

```

**css文字溢出隐藏为三个点…**

> 单行

```css
div {
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*将文本溢出显示为（…）*/
    overflow: hidden; /*溢出隐藏。*/
}
```

> 多行

```css
div {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

```

## grid

| 属性名                   | 说明                                                                            |
|-----------------------|:------------------------------------------------------------------------------|
| grid-template-columns | 定义网格的列和每列的宽度                                                                  |
| grid-template-rows    | 定义网格的行和每行的高度                                                                  |
| row-gap               | 设置行与行之间的间隔（行间距）                                                               |
| column-gap            | 设置列与列之间的间隔（列间隝）                                                               |
| gap                   | 是 column-gap 和 row-gap 的合并简写形式                                                |
| grid-template-areas   | 允许指定网格布局中的区域，每个区域由一个或多个单元格组成                                                  |
| grid-auto-flow        | 设置容器中子元素的排列顺序，默认是 "先行后列"                                                      |
| grid-auto-columns     | 设置隐式网格的列宽度                                                                    |
| grid-auto-rows        | 设置隐式网格的行高度                                                                    |
| justify-items         | 单元格中内容在单元格中水平对齐的方式                                                            |
| align-items           | 单元格中内容在单元格中垂直对齐的方式                                                            |
| place-items           | 是 align-items 属性和 justify-items 属性的合并简写形式                                     |
| justify-content       | 设置整个内容区域在容器中的水平位置                                                             |
| align-content         | 设置整个内容区域在容器中的垂直位置                                                             |
| place-content         | 是 align-content 属性和 justify-content 属性的合并简写形式                                 |
| grid-template         | 是 grid-template-columns、grid-template-rows 和 grid-template-areas 这三个属性的合并简写形式 |

## 背景模糊

```css
div {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
}
```