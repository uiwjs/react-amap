APILoader
===

用于加载高德地图 SDK 依赖，加载完成，全局将会有 **`window.AMap`** 对象。

```jsx
import { APILoader } from '@uiw/react-amap';
// 或者单独安装使用
import { APILoader } from '@uiw/react-amap-api-loader';
```

### 基本用法

Map 的父组件必须具有宽度和高度；

<!--rehype:bgWhite=true&codeSandbox=true&codeSandbox=true-->
```jsx
import ReactDOM from 'react-dom';
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

### 多个地图

<!--rehype:bgWhite=true&codeSandbox=true&codeSandbox=true-->
```jsx
import ReactDOM from 'react-dom';
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: 300 }}>
    <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
      <Map style={{ height: 100, marginBottom: 10 }} />
      <div style={{ border: '1px solid red' }}>
        <Map style={{ height: 100 }} />
      </div>
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| akay | **`必填`** 您需先[申请密钥（ak）](https://lbs.amap.com/api/webservice/guide/create-project/get-key)才可使用该服务。⚠️ 注意申请 `Web端(JS API)` | string | - |
| version | SDK 版本 | string | `2.0` |
| protocol | 协议，默认是根据当前网站协议的 | `http`/`https` | `window.location.protocol` |
| hostAndPath | 请求 SDK 的前半部分 | string | `webapi.amap.com/maps` |
| callbackName | 回调函数 | string | `load_amap_sdk` |
| plugin | 加载一个或者多个插件 `AMap.ToolBar,AMap.Driving` | string | `-` |