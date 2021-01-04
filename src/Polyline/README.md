Polyline 折线组件
===

构造折线对象，支持 `lineString` 和 `MultiLineString`。

```jsx
import { Polyline } from '@uiw/react-amap';
```

### 基本用法

<!--DemoStart,bgWhite,noScroll,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polyline, ToolBarControl } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={3}>
          <Polyline
            visiable={show}
            onHide={(obj) => {
              console.log('obj:', obj);
            }}
            onShow={(obj) => {
              console.log('obj:', obj);
            }}
            onClick={(obj) => {
              console.log('obj:', obj);
            }}
            strokeColor="black"
            strokeOpacity={1}
            path={[
              [116.405289, 39.904987],
              [113.964458, 40.54664],
              [111.47836, 41.135964],
              [108.949297, 41.670904],
              [106.380111, 42.149509],
              [103.774185, 42.56996],
              [101.135432, 42.930601],
              [98.46826, 43.229964],
              [95.777529, 43.466798],
              [93.068486, 43.64009],
              [90.34669, 43.749086],
              [87.61792, 43.793308]
            ]}
          />
          <Polyline
            visiable={show}
            strokeOpacity={1}
            path={[
              [121.099109,31.222311],
              [118.528308,31.989555],
              [117.319812,31.803006],
              [114.353503,30.67583],
              [115.891589,28.979429],
              [112.947253,28.188361],
            ]}
          />
        </Map>
      </div>
    </>
  );
}

ReactDOM.render((
  <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Example />
  </APILoader>
), _mount_);
```
<!--End-->

### 受控组件

<!--DemoStart,bgWhite,noScroll,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polyline, ToolBarControl } from '@uiw/react-amap';

const path1 = [
  [121.099109,31.222311],
  [118.528308,31.989555],
  [117.319812,31.803006],
  [114.353503,30.67583],
  [115.891589,28.979429],
  [112.947253,28.188361],
];

const path2 = [
  [116.405289, 39.904987],
  [113.964458, 40.54664],
  [111.47836, 41.135964],
  [108.949297, 41.670904],
  [106.380111, 42.149509],
  [103.774185, 42.56996],
  [101.135432, 42.930601],
  [98.46826, 43.229964],
  [95.777529, 43.466798],
  [93.068486, 43.64009],
  [90.34669, 43.749086],
  [87.61792, 43.793308],
];

const Example = () => {
  const [show, setShow] = useState(true);
  const [paths, setPaths] = useState(path1);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      {show && (
        <button onClick={() => setPaths(paths.length === 6 ? path2 : path1)}>
          切换路线
        </button>
      )}
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={3}>
          <Polyline
            visiable={show}
            strokeOpacity={1}
            path={paths}
          />
        </Map>
      </div>
    </>
  );
}

ReactDOM.render((
  <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Example />
  </APILoader>
), _mount_);
```
<!--End-->

### Props

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L275-L370)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| path | 路径，支持 lineString 和 MultiLineString。 | `Array<LngLat> | Array<Array<LngLat>>` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L249-L274)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onHide | 隐藏 | (): void; |
| onShow | 显示 | (): void; |
| onMouseOut | 鼠标移出 | (event: MapsEvent): void; |
| onRightClick | 鼠标右键单击事件 | (event: MapsEvent): void; |
| onDblClick | 鼠标左键双击事件 | (event: MapsEvent): void; |
| onMouseOver | 鼠标经过 | (event: MapsEvent): void; |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | (event: MapsEvent): void; |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | (event: MapsEvent): void; |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | (event: MapsEvent): void; |
| onMouseUp | 鼠标抬起 | (event: MapsEvent): void; |
| onMouseDown | 鼠标按下 | (event: MapsEvent): void; |
