Ellipse 椭圆组件
===

构造椭圆圆形对象，通过 EllipseOptions 指定多边形样式

```jsx
import { Ellipse } from '@uiw/react-amap';
// 或者单独安装使用
import { Ellipse } from '@uiw/react-amap-ellipse';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Ellipse } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <Map zoom={4} style={{ height: 300 }}>
        <Ellipse
          visiable={show}
          radius={[1000000, 200000]}
          borderWeight={3}
          strokeColor="#FF33FF"
          strokeOpacity={1}
          strokeWeight={6}
          strokeOpacity={0.2}
          fillOpacity={0.4}
          // 线样式还支持 'dashed'
          strokeStyle="dashed"
          strokeDasharray={[10, 10]}
          fillColor="#1791fc"
          zIndex={50}
          center={new AMap.LngLat(116.433322, 39.900255)}
        />
      </Map>
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303de813050c7a02bb247930090ce5f162042/src/types/overlay.d.ts#L507-L567)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| center | 	椭圆圆心 | `LngLatLike` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303de813050c7a02bb247930090ce5f162042/src/types/overlay.d.ts#L569-L593)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onHide | 隐藏 | `(data: { type: string, target: any }): void;` |
| onShow | 显示 | `(data: { type: string, target: any }): void;` |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onDblClick | 鼠标左键双击事件 | `(event: MapsEvent): void;` |
| onRightClick | 鼠标右键单击事件 | `(event: MapsEvent): void;` |
| onMouseOver | 鼠标经过 | `(event: MapsEvent): void;` |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onMouseOut | 鼠标移出 | `(event: MapsEvent): void;` |
| onMouseUp | 鼠标抬起 | `(event: MapsEvent): void;` |
| onMouseDown | 鼠标按下 | `(event: MapsEvent): void;` |