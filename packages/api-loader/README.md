APILoader
===

用于加载高德地图 SDK 依赖，加载完成，全局将会有 **`window.AMap`** 对象。

```jsx
import { APILoader } from '@uiw/react-amap';
// 或者单独安装使用
import { APILoader } from '@uiw/react-amap-api-loader';
```

~~`v4`~~ 升级到 `v5`，`APILoader` 主要是对 `APILoader` 做了升级

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

### 基本用法

Map 的父组件必须具有宽度和高度；

```jsx mdx:preview
import React from 'react';
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <APILoader aakey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Map style={{ height: 300 }}/>
  </APILoader>
);

export default Demo
```

### 多个地图

```jsx mdx:preview
import React from 'react';
import ReactDOM from 'react-dom';
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Map style={{ height: 100, marginBottom: 10 }} />
    <div style={{ border: '1px solid red' }}>
      <Map style={{ height: 100 }} />
    </div>
  </APILoader>
);

export default Demo
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| version | SDK 版本 | string | `2.0` |
| ~~akay~~ => `akey` | **`必填`** `disableScripts=true` 时**选填** 您需先[申请密钥（ak）](https://lbs.amap.com/api/javascript-api/guide/abc/prepare)才可使用该服务。⚠️ 注意申请 `Web端(JS API)` | string | - |
| ~~protocol~~ | 协议，默认是根据当前网站协议的 | `http`/`https` | `window.location.protocol` |
| ~~hostAndPath~~ | 请求 SDK 的前半部分 | string | `webapi.amap.com/maps` |
| ~~callbackName~~ | 回调函数 | string | `load_amap_sdk` |
| ~~plugin~~ | 加载一个或者多个插件 `AMap.ToolBar,AMap.Driving` | string | `-` |
| ~~disableScripts~~ | 禁用 `SDK` 加载 | boolean | `-` |

```typescript
import { PropsWithChildren } from 'react';
export type APILoaderConfig = PropsWithChildren<{
  /**
   * key 密钥
   * 您需先[申请密钥(ak)](https://lbs.amap.com/dev/key/app)。开发文档说明地址：https://lbs.amap.com/api/javascript-api/guide/abc/prepare
   *
   * 1. 首先，[注册开发者账号](https://lbs.amap.com/dev/id/newuser)，成为高德开放平台开发者
   * 2. 登陆之后，在进入「应用管理」 页面「创建新应用」
   * 3. 为应用[添加 Key](https://lbs.amap.com/dev/key/app)，「服务平台」一项请选择「 Web 端 ( JSAPI ) 」
   *
   */
  akey?: string;
  /**
   * SDK 包版本，指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
   * @default 1.4.15
   */
  version?: string;
  /**
   * 加载一个或者多个插件
   * @example `['AMap.ToolBar', 'AMap.Driving']`
   */
  plugins?: string[];
  /** 是否加载 AMapUI，缺省不加载 */
  AMapUI?: {
    /** AMapUI 缺省 1.1 */
    version?: string;
    /** 需要加载的 AMapUI ui插件 */
    plugins?: string[];
  };
  /** 是否加载 Loca， 缺省不加载 */
  Loca?: {
    /** Loca 版本，缺省 1.3.2 */
    version?: string;
  };
}>;
export interface APILoaderProps extends APILoaderConfig {
  /**
   * 请使用 `key`
   * @deprecated
   */
  akay?: string;
  /**
   * 请使用 `plugins`
   * @deprecated
   * @example `AMap.ToolBar,AMap.Driving`
   */
  plugin?: string;
}
```