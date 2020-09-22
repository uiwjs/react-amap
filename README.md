react-amap
===

[![](https://img.shields.io/github/issues/uiwjs/react-amap.svg)](https://github.com/uiwjs/react-amap/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-amap.svg)](https://github.com/uiwjs/react-amap/network)
[![](https://img.shields.io/github/stars/uiwjs/react-amap.svg)](https://github.com/uiwjs/react-amap/stargazers)
[![](https://img.shields.io/github/release/uiwjs/react-amap)](https://github.com/uiwjs/react-amap/releases)
[![](https://img.shields.io/npm/v/@uiw/react-amap.svg)](https://www.npmjs.com/package/@uiw/react-amap)

这是一个基于 React 封装的高德地图组件，帮助你轻松的接入地图到 React 项目中。

文档实例预览: [Github Web](https://uiwjs.github.io/react-amap/)

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
    <APILoader akay="1c44726c39431f704d3e25cd51381e35">
      <Map />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

**development**

Runs the project in development mode.  

```bash
npm run watch
# Step 3, development mode, listen to compile preview website instance
npm run start
```

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
