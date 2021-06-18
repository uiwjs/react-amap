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
  <a href="https://github.com/uiwjs/react-amap/issues">
    <img src="https://img.shields.io/github/issues/uiwjs/react-amap.svg" alt="Issues">
  </a>
  <a href="https://github.com/uiwjs/react-amap/network">
    <img src="https://img.shields.io/github/forks/uiwjs/react-amap.svg" alt="Forks">
  </a>
  <a href="https://github.com/uiwjs/react-amap/stargazers">
    <img src="https://img.shields.io/github/stars/uiwjs/react-amap.svg" alt="Stars">
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
- 📚 使用 Typescript 编写，集成高德地图 SDK [@type](https://github.com/uiwjs/react-amap/tree/master/src/types) 声明文件（包括中文注释）。
- ⚛️ 支持 React Hook 新增特性（需要 React 16.8+）。
- 💝 不依赖任何第三方组件。

## 安装

> 不依赖 [`uiw`](https://github.com/uiwjs/uiw) 组件库

```bash
npm install @uiw/react-amap --save
```

## 使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useEffect, useRef, Fragment } from 'react';
import { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <Map>
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
    <Map>
      {({ AMap, map, container }) => {
        return;
      }}
    </Map>
  </div>
);
ReactDOM.render((
  <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
), _mount_);
```

## 组件

#### 容器

- [APILoader 组件](https://github.com/uiwjs/react-amap/tree/master/src/APILoader/README.md)
- [Map 组件](https://github.com/uiwjs/react-amap/tree/master/src/Map/README.md)

#### 控件

- [ScaleControl 比例尺控件](https://github.com/uiwjs/react-amap/tree/master/src/ScaleControl/README.md)
- [ToolBarControl 工具条控件](https://github.com/uiwjs/react-amap/tree/master/src/ToolBarControl/README.md)
- [MapTypeControl 工具条控件](https://github.com/uiwjs/react-amap/tree/master/src/MapTypeControl/README.md)
- [ControlBarControl 地图控件](https://github.com/uiwjs/react-amap/tree/master/src/ControlBarControl/README.md)
- [HawkEyeControl 鹰眼控件](https://github.com/uiwjs/react-amap/tree/master/src/HawkEyeControl/README.md)

#### 覆盖物

- [Marker 点标记](https://github.com/uiwjs/react-amap/tree/master/src/Marker/README.md)
- [Text 文本标记](https://github.com/uiwjs/react-amap/tree/master/src/Text/README.md)
- [Polyline 折线](https://github.com/uiwjs/react-amap/tree/master/src/Polyline/README.md)
- [Circle 圆形](https://github.com/uiwjs/react-amap/tree/master/src/Circle/README.md)
- [Ellipse 圆形组件](https://github.com/uiwjs/react-amap/tree/master/src/Ellipse/README.md)
- [Rectangle 矩形](https://github.com/uiwjs/react-amap/tree/master/src/Rectangle/README.md)
- [BesizerCurve 贝塞尔曲线](https://github.com/uiwjs/react-amap/tree/master/src/BesizerCurve/README.md)
- [Polygon 多边形](https://github.com/uiwjs/react-amap/tree/master/src/Polygon/README.md)
- [CircleMarker 圆点标记](https://github.com/uiwjs/react-amap/tree/master/src/CircleMarker/README.md)

#### 信息窗体

- [InfoWindow 信息窗体](https://github.com/uiwjs/react-amap/tree/master/src/InfoWindow/README.md)

#### 右键菜单

- [ContextMenu 右键菜单](https://github.com/uiwjs/react-amap/tree/master/src/ContextMenu/README.md)

#### 服务

- [Weather 天气查询服务](https://github.com/uiwjs/react-amap/tree/master/src/Weather/README.md)
- [Geolocation 定位](https://github.com/uiwjs/react-amap/tree/master/src/Geolocation/README.md)

#### 搜索

- [AutoComplete 输入提示](https://github.com/uiwjs/react-amap/tree/master/src/AutoComplete/README.md)

## 开发

```bash
npm install # 安装依赖

npm run watch # 监听编译输出 js 文件, 监听编译输出 .d.ts 类型文件
npm run start # 文档网站运行
```

## 相关连接

- [@uiw/react-baidu-map](https://github.com/uiwjs/react-baidu-map) 百度地图 React 组件
- [高德拾取坐标系统](https://lbs.amap.com/console/show/picker) 
- [官方示例中心](https://lbs.amap.com/demo-center/jsapi-v2) 
- [高德地图 JSAPI 2.0](https://a.amap.com/jsapi/static/doc/index.html) 
