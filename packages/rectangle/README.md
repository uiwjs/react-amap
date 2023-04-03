Rectangle 圆形组件
===

构造圆形对象，通过 RectangleOptions 指定多边形样式

```jsx
import { Rectangle } from '@uiw/react-amap';
// 或者单独安装使用
import { Rectangle } from '@uiw/react-amap-rectangle';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Rectangle } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const southWest = new AMap.LngLat(108.245573, 39.027206);
  const northEast = new AMap.LngLat(116.485319, 26.666506);
  const bounds = new AMap.Bounds(southWest, northEast);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={4}>
          <Rectangle
            visiable={show}
            bounds={bounds}
            strokeColor="red"
            strokeWeight={6}
            strokeOpacity={0.5}
            strokeDasharray={[30, 10]}
            // strokeStyle还支持 solid
            strokeStyle="dashed"
            fillColor="blue"
            fillOpacity={0.5}
            cursor="pointer"
            zIndex={50}
          />
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Example />
  </APILoader>
);

export default Mount;
```

### Props

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L619-L652)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| bounds | 矩形覆盖物的叠加顺序。地图上存在多个矩形覆盖物叠加时，通过该属性使级别较高的矩形覆盖物在上层显示 | `Bounds` | `10` |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L653-L680)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onDblClick | 鼠标左键双击事件 | `(event: MapsEvent): void;` |
| onRightClick | 右键单击 | `(event: MapsEvent): void;` |
| onHide | 隐藏 | `(event: { type: string; target: any }): void;` |
| onShow | 显示 | `(event: { type: string; target: any }): void;` |
| onMouseDown | 鼠标按下 | `(event: MapsEvent): void;` |
| onMouseUp | 鼠标抬起 | `(event: MapsEvent): void;` |
| onMouseOver | 鼠标经过 | `(event: MapsEvent): void;` |
| onMouseOut | 鼠标移出 | `(event: MapsEvent): void;` |
| onChange | 属性发生变化时 | `(event: { type: string; target: any }): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |