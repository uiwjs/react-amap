ControlBarControl 组合了旋转、倾斜、复位在内的地图控件
===

组合了旋转、倾斜、复位在内的地图控件。 [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)

```jsx
import { ControlBarControl } from '@uiw/react-amap';
// 或者单独安装使用
import { ControlBarControl } from '@uiw/react-amap-control-bar-control';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, ControlBarControl } from '@uiw/react-amap';

const Demo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map>
          <ControlBarControl
            visiable={show}
            offset={[30, 10]}
            position="RT"
          />
          {show && (
            <ControlBarControl
              visiable={show}
              offset={[10, 10]}
              position="RB"
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

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| position | 控件停靠位置 `{ top: 5; left: 5; right: 5; bottom: 5 }` 或者 'LT': 左上角, 'RT': 右上角, 'LB': 左下角, 'RB': 右下角。 | `string| object` | - |
| offset | 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为 `AMap.Pixel(10,10)` | `[number, number]` | - |
