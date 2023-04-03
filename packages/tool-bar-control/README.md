ToolBarControl 工具条控件
===

地图操作工具条插件。可支持方向导航、位置定位、视野级别缩放、视野级别选择等操作。继承自 AMap.Control [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)

```jsx
import { ToolBarControl } from '@uiw/react-amap';
// 或者单独安装使用
import { ToolBarControl } from '@uiw/react-amap-tool-bar-control';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, ToolBarControl } from '@uiw/react-amap';

const Demo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <div style={{ width: '100%', height: 600 }}>
        <Map>
          <ToolBarControl visiable={show} offset={[10, 10]} position="RT" />
          {show && (
            <ToolBarControl
              visiable={show}
              offset={[60, 10]}
              position="LT"
            />
          )}
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
);

export default Mount;
```

### Props

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303de813050c7a02bb247930090ce5f162042/src/types/control.d.ts#L54)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| position | 控件停靠位置 `{ top: 5; left: 5; right: 5; bottom: 5 }` 或者 'LT': 左上角, 'RT': 右上角, 'LB': 左下角, 'RB': 右下角。 | `string| object` | - |
| offset | 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为 `AMap.Pixel(10,10)` | `[number, number]` | - |
