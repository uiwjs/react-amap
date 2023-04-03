<br /><br />
<p align="center">
  <a href="https://github.com/uiwjs/react-amap">
    <img src="https://uiwjs.github.io/react-amap/logo.svg" height="80px" alt="高德地图 React 组件 logo" />
  </a>
</p>
<h3 align="center">高德地图 React 组件</h3>

<p align="center">
  <a href="https://github.com/uiwjs/react-amap/actions">
    <img src="https://github.com/uiwjs/react-amap/workflows/Build%20and%20Deploy/badge.svg" alt="Build & Deploy">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-amap">
    <img src="https://img.shields.io/npm/dm/@uiw/react-amap.svg?style=flat" alt="Downloads">
  </a>
  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap/file/README.md">
    <img src="https://img.shields.io/badge/Open%20in-unpkg-blue" alt="Open in unpkg">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-amap">
    <img src="https://img.shields.io/npm/v/@uiw/react-amap.svg" alt="npm version">
  </a>
  <a href="https://gitee.com/uiw/react-amap">
    <img src="https://jaywcjlove.github.io/sb/ico/gitee.svg" alt="Gitee Repo">
  </a>
</p>

这是一个基于 React 封装的高德地图组件，帮助你轻松的接入地图到 React 项目中。除了必须引用的 APILoader/Map 组件外，我们目前提供了最常用的地图组件，能满足大部分简单的业务场景；如果你有更复杂的需求，或者觉得默认提供的组件功能不够，可以使用 Map 组件返回的地图实例，完全自定义一个地图组件，然后根据高德原生 API 做高德允许你做的一切事情。

文档实例预览: [Github Web](https://uiwjs.github.io/react-amap/) | [Gitee Web](https://uiw.gitee.io/react-amap)

### 特性

- ♻️ 自动加载高德地图 SDK（通过创建 Script 标签的形式加载），包括第三方 SDK。
- 📚 使用 Typescript 编写，集成高德地图 SDK [@type](https://github.com/uiwjs/react-amap/tree/master/packages/types) 声明文件（包括中文注释）。
- ⚛️ 支持 React Hook 新增特性（需要 React 16.8+）。
- 💝 不依赖任何第三方组件。
- 📦 拆分成多个包，按需使用包。

### 安装

> 不依赖 [`uiw`](https://github.com/uiwjs/uiw) 组件库

```bash
# 集成了所有依赖包
npm install @uiw/react-amap --save

# 或者按需安装包
npm install @uiw/react-amap-map @uiw/react-amap-api-loader --save
```

`v4` 升级到 `v5`，`APILoader` 主要是对 `APILoader` 做了升级

```diff
<APILoader
-  akay
-  protocol
-  hostAndPath
-  callbackName
-  plugin
-  disableScripts
+  akey
+  plugins
+  AMapUI
+  Loca
>
  <Map style={{ height: 100 }} />
</APILoader>
```

### 使用

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-amap-example-y0n6c-y0n6c?fontsize=14&hidenavigation=1&theme=dark)

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useEffect, useRef, Fragment } from 'react';
import { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '@uiw/react-amap';

const Demo = () => (
  <div>
    <Map style={{ height: 300 }}>
      <ScaleControl offset={[16, 30]} position="LB" />
      <ToolBarControl offset={[16, 10]} position="RB" />
      <ControlBarControl offset={[16, 180]} position="RB" />
      <Geolocation
        maximumAge={100000}
        borderRadius="5px"
        position="RB"
        offset={[16, 80]}
        zoomToAccuracy={true}
        showCircle={true}
      />
    </Map>
    <Map style={{ height: 300 }}>
      {({ AMap, map, container }) => {
        return;
      }}
    </Map>
  </div>
);

const Mount = () => (
  <APILoader version="2.0.5" akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
)
export default Mount
```

### 容器组件

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-amap`](https://uiwjs.github.io/react-amap/) 集成所有包 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap.svg)](https://www.npmjs.com/package/@uiw/react-amap) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap/file/README.md)
[`@uiw/react-amap-api-loader`](https://uiwjs.github.io/react-amap/#/api-loader) 加载 SDK (必须) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-api-loader?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-api-loader) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-api-loader?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-api-loader) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-api-loader.svg)](https://www.npmjs.com/package/@uiw/react-amap-api-loader) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-api-loader/file/README.md)
[`@uiw/react-amap-map`](https://uiwjs.github.io/react-amap/#/map) 加载地图(容器) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-map?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-map) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-map?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-map) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-map.svg)](https://www.npmjs.com/package/@uiw/react-amap-map) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-map/file/README.md)

### 控件组件

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-amap-scale-control`](https://uiwjs.github.io/react-amap/#/scale-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-scale-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-scale-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-scale-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-scale-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-scale-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-scale-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-scale-control/file/README.md)
[`@uiw/react-amap-control-bar-control`](https://uiwjs.github.io/react-amap/#/control-bar-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-control-bar-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-control-bar-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-control-bar-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-control-bar-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-control-bar-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-control-bar-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-control-bar-control/file/README.md)
[`@uiw/react-amap-hawk-eye-control`](https://uiwjs.github.io/react-amap/#/hawk-eye-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-hawk-eye-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-hawk-eye-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-hawk-eye-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-hawk-eye-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-hawk-eye-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-hawk-eye-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-hawk-eye-control/file/README.md)
[`@uiw/react-amap-map-type-control`](https://uiwjs.github.io/react-amap/#/map-type-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-map-type-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-map-type-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-map-type-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-map-type-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-map-type-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-map-type-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-map-type-control/file/README.md)
[`@uiw/react-amap-tool-bar-control`](https://uiwjs.github.io/react-amap/#/tool-bar-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-tool-bar-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-tool-bar-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-tool-bar-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-tool-bar-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-tool-bar-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-tool-bar-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-tool-bar-control/file/README.md)

### 覆盖物

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-amap-marker`](https://uiwjs.github.io/react-amap/#/marker) 点标记 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-marker?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-marker) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-marker?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-marker) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-marker.svg)](https://www.npmjs.com/package/@uiw/react-amap-marker) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-marker/file/README.md)
[`@uiw/react-amap-label-marker`](https://uiwjs.github.io/react-amap/#/label-marker) 点标记 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-label-marker?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-label-marker) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-label-marker?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-label-marker) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-label-marker.svg)](https://www.npmjs.com/package/@uiw/react-amap-label-marker) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-label-marker/file/README.md)
[`@uiw/react-amap-text`](https://uiwjs.github.io/react-amap/#/text) 文本标记 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-text?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-text) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-text?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-text) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-text.svg)](https://www.npmjs.com/package/@uiw/react-amap-text) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-text/file/README.md)
[`@uiw/react-amap-tile-layer`](https://uiwjs.github.io/react-amap/#/tile-layer) 文本标记 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-tile-layer?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-tile-layer) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-tile-layer?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-tile-layer) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-tile-layer.svg)](https://www.npmjs.com/package/@uiw/react-amap-tile-layer) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-tile-layer/file/README.md)
[`@uiw/react-amap-polyline`](https://uiwjs.github.io/react-amap/#/polyline) 折线 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polyline?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polyline?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polyline.svg)](https://www.npmjs.com/package/@uiw/react-amap-polyline) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polyline/file/README.md)
[`@uiw/react-amap-polyline-editor`](https://uiwjs.github.io/react-amap/#/polyline-editor) 折线编辑器 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polyline-editor?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline-editor) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polyline-editor?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline-editor) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polyline-editor.svg)](https://www.npmjs.com/package/@uiw/react-amap-polyline-editor) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polyline-editor/file/README.md)
[`@uiw/react-amap-poly-editor`](https://uiwjs.github.io/react-amap/#/poly-editor) 折线编辑器 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-poly-editor?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-poly-editor) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-poly-editor?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-poly-editor) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-poly-editor.svg)](https://www.npmjs.com/package/@uiw/react-amap-poly-editor) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-poly-editor/file/README.md)
[`@uiw/react-amap-circle`](https://uiwjs.github.io/react-amap/#/circle) 圆形 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-circle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-circle?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-circle.svg)](https://www.npmjs.com/package/@uiw/react-amap-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-circle/file/README.md)
[`@uiw/react-amap-circle-marker`](https://uiwjs.github.io/react-amap/#/circle-marker) 圆点标记 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-circle-marker?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle-marker) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-circle-marker?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle-marker) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-circle-marker.svg)](https://www.npmjs.com/package/@uiw/react-amap-circle-marker) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-circle-marker/file/README.md)
[`@uiw/react-amap-ellipse`](https://uiwjs.github.io/react-amap/#/ellipse) 圆形组件 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-ellipse?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-ellipse) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-ellipse?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-ellipse) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-ellipse.svg)](https://www.npmjs.com/package/@uiw/react-amap-ellipse) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-ellipse/file/README.md)
[`@uiw/react-amap-rectangle`](https://uiwjs.github.io/react-amap/#/rectangle) 矩形 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-rectangle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-rectangle) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-rectangle?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-rectangle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-rectangle.svg)](https://www.npmjs.com/package/@uiw/react-amap-rectangle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-rectangle/file/README.md)
[`@uiw/react-amap-bezier-curve`](https://uiwjs.github.io/react-amap/#/bezier-curve) 贝塞尔曲线 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-bezier-curve?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-bezier-curve) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-bezier-curve?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-bezier-curve) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-bezier-curve.svg)](https://www.npmjs.com/package/@uiw/react-amap-bezier-curve) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-bezier-curve/file/README.md)
[`@uiw/react-amap-polygon`](https://uiwjs.github.io/react-amap/#/polygon) 多边形 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polygon?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polygon?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polygon.svg)](https://www.npmjs.com/package/@uiw/react-amap-polygon) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polygon/file/README.md)
[`@uiw/react-amap-polygon-editor`](https://uiwjs.github.io/react-amap/#/polygon-editor) 多边形 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polygon-editor?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon-editor) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polygon-editor?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon-editor) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polygon-editor.svg)](https://www.npmjs.com/package/@uiw/react-amap-polygon-editor) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polygon-editor/file/README.md)
[`@uiw/react-amap-mass-marks`](https://uiwjs.github.io/react-amap/#/mass-marks) 海量点 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-mass-marks?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-mass-marks) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-mass-marks?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-mass-marks) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-mass-marks.svg)](https://www.npmjs.com/package/@uiw/react-amap-mass-marks) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-mass-marks/file/README.md)
[`@uiw/react-amap-mouse-tool`](https://uiwjs.github.io/react-amap/#/mouse-tool) 绘制工具 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-mouse-tool?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-mouse-tool) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-mouse-tool?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-mouse-tool) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-mouse-tool.svg)](https://www.npmjs.com/package/@uiw/react-amap-mouse-tool) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-mouse-tool/file/README.md)

### 信息窗体 & 右键菜单

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-amap-info-window`](https://uiwjs.github.io/react-amap/#/info-window) 信息窗体 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-info-window?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-info-window) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-info-window?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-info-window) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-info-window.svg)](https://www.npmjs.com/package/@uiw/react-amap-info-window) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-info-window/file/README.md)
[`@uiw/react-amap-context-menu`](https://uiwjs.github.io/react-amap/#/context-menu) 右键菜单 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-context-menu?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-context-menu) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-context-menu?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-context-menu) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-context-menu.svg)](https://www.npmjs.com/package/@uiw/react-amap-context-menu) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-context-menu/file/README.md)

### 服务

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-amap-geolocation`](https://uiwjs.github.io/react-amap/#/geolocation) 定位 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-geolocation?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-geolocation) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-geolocation?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-geolocation) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-geolocation.svg)](https://www.npmjs.com/package/@uiw/react-amap-geolocation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-geolocation/file/README.md)
[`@uiw/react-amap-weather`](https://uiwjs.github.io/react-amap/#/weather) 天气查询服务 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-weather?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-weather) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-weather?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-weather) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-weather.svg)](https://www.npmjs.com/package/@uiw/react-amap-weather) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-weather/file/README.md)
[`@uiw/react-amap-auto-complete`](https://uiwjs.github.io/react-amap/#/auto-complete) 输入提示 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-auto-complete?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-auto-complete) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-auto-complete?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-auto-complete) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-auto-complete.svg)](https://www.npmjs.com/package/@uiw/react-amap-auto-complete) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-auto-complete/file/README.md)

### 其它

Package | Bundle size(gzip) | Version/unpkg
----- | ----- | ----
[`@uiw/react-amap-require-script`](https://uiwjs.github.io/react-amap/#/require-script) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-require-script?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-require-script) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-require-script?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-require-script) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-require-script.svg)](https://www.npmjs.com/package/@uiw/react-amap-require-script) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-require-script/file/README.md)
[`@uiw/react-amap-types`](https://uiwjs.github.io/react-amap/#/types) 类型定义 | [![](https://img.shields.io/npm/types/@uiw/react-amap-types)](https://www.npmjs.com/package/@uiw/react-amap-types) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-types.svg)](https://www.npmjs.com/package/@uiw/react-amap-types) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-types/file/README.md)
[`@uiw/react-amap-utils`](https://uiwjs.github.io/react-amap/#/utils) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-utils?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-utils) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-utils?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-utils) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-utils.svg)](https://www.npmjs.com/package/@uiw/react-amap-utils) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-utils/file/README.md)


## 开发

```bash
npm install         # Step 1: 安装依赖
npm run build       # Step 2: 编译所有包

npm run start       # 文档网站运行
npm run watch:amap  # 监听编译输出 js 文件, 监听编译输出 .d.ts 类型文件
```

## 相关连接

- [@uiw/react-baidu-map](https://github.com/uiwjs/react-baidu-map) 百度地图 React 组件
- [高德拾取坐标系统](https://lbs.amap.com/console/show/picker) 
- [官方示例中心](https://lbs.amap.com/demo-center/jsapi-v2) 
- [高德地图 JSAPI 2.0](https://a.amap.com/jsapi/static/doc/index.html) 

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-amap/graphs/contributors">
  <img src="https://uiwjs.github.io/react-amap/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.