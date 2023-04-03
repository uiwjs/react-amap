HawkEyeControl 鹰眼控件
===

鹰眼控件，用于显示缩略地图，显示于地图右下角，可以随主图的视口变化而变化，也可以配置成固定位置实现类似于南海附图的效果。

```jsx
import { HawkEyeControl } from '@uiw/react-amap';
// 或者单独安装使用
import { HawkEyeControl } from '@uiw/react-amap-hawk-eye-control';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, HawkEyeControl } from '@uiw/react-amap';

const Demo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}鹰眼控件
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={6} ref={(instance) => {
          if (instance && instance.map) {
            // 可以通过如下方法添加 鹰眼控件
            // const overView = new AMap.HawkEye({
            // });
            // instance.map.addControl(overView);
          }
        }}>
          <HawkEyeControl
            visiable={show}
            offset={[50, 10]}
          />
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303d/src/types/control.d.ts#L102-L143)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| offset | 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为 `AMap.Pixel(10,10)` | `[number, number]` | - |
| autoMove | 是否随主图视口变化移动 | boolean | - |
| showRectangle | 是否显示视口矩形 | boolean | - |
| showButton | 是否显示打开关闭的按钮 | boolean | - |
| isOpen | 默认是否展开 | boolean | `true` |
| mapStyle | 缩略图要显示的地图自定义样式，如 `amap://styles/dark` | string | - |
| layers | 缩略图要显示的图层类型，默认为普通矢量地图 | array | - |
| width | 缩略图的宽度，同CSS，如 `200px` | string | - |
| height | 缩略图的高度，同CSS，如 `200px` | string | - |
| borderStyle | 缩略图的边框样式，同CSS，如 "double solid solid double" | string | - |
| borderColor | 缩略图的高度，同CSS，如 `silver` | string | - |
| borderRadius | 缩略图的高度，同CSS，如 `5px` | string | - |
| borderWidth | 缩略图的高度，同CSS，如 `2px` | string | - |
| buttonSize | 箭头按钮的像素尺寸，同CSS，如 `12px` | string | - |
