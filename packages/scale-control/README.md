ScaleControl 比例尺控件
===

比例尺插件。位于地图右下角，用户可控制其显示与隐藏。继承自 `AMap.Control`

```jsx
import { ScaleControl } from '@uiw/react-amap';
// 或者单独安装使用
import { ScaleControl } from '@uiw/react-amap-scale-control';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Map, APILoader, ScaleControl } from '@uiw/react-amap';

const Demo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={6}>
          <ScaleControl
            visiable={show}
            offset={[60, 10]}
            position="RT"
          />
          {show && (
            <ScaleControl
              visiable={show}
              offset={[20, 10]}
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
| position | 控件停靠位置 `{ top: 5; left: 5; right: 5; bottom: 5 }` 或者 'LT': 左上角, 'RT': 右上角, 'LB': 左下角, 'RB': 右下角。 | `string/object` | - |
| offset | 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为 `AMap.Pixel(10,10)` | `[number, number]` | - |
