react-amap
===

[![](https://img.shields.io/github/issues/uiwjs/react-amap.svg)](https://github.com/uiwjs/react-amap/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-amap.svg)](https://github.com/uiwjs/react-amap/network)
[![](https://img.shields.io/github/stars/uiwjs/react-amap.svg)](https://github.com/uiwjs/react-amap/stargazers)
[![](https://img.shields.io/github/release/uiwjs/react-amap)](https://github.com/uiwjs/react-amap/releases)
[![](https://img.shields.io/npm/v/@uiw/react-amap.svg)](https://www.npmjs.com/package/@uiw/react-amap)
[![](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://gitee.com/uiw/react-amap)

这是一个基于 React 封装的高德地图组件，帮助你轻松的接入地图到 React 项目中。除了必须引用的 APILoader/Map 组件外，我们目前提供了最常用的地图组件，能满足大部分简单的业务场景；如果你有更复杂的需求，或者觉得默认提供的组件功能不够，可以使用 Map 组件返回的地图实例，完全自定义一个地图组件，然后根据高德原生 API 做高德允许你做的一切事情。

文档实例预览: [Github Web](https://uiwjs.github.io/react-amap/) | [Gitee Web](https://uiw.gitee.io/react-amap)

### 特性

- ♻️ 自动加载高德地图 SDK（通过创建 Script 标签的形式加载），包括第三方 SDK。
- 📚 使用 Typescript 编写，集成高德地图 SDK [@type](src/types) 声明文件（包括中文注释）。
- ⚛️ 支持 React Hook 新增特性（需要 React 16.8+）。
- 💝 不依赖任何第三方组件。

## 安装

> 不依赖 [`uiw`](https://github.com/uiwjs/uiw) 组件库

```bash
npm install @uiw/react-amap --save
```

## 使用

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
      <Map />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## 开发

```bash
npm install # 安装依赖

npm run watch # 监听编译输出 js 文件, 监听编译输出 .d.ts 类型文件
npm run start # 文档网站运行
```
