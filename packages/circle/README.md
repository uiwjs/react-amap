Circle 圆形组件
===

构造圆形对象，通过 CircleOptions 指定多边形样式

```jsx
import { Circle } from '@uiw/react-amap';
// 或者单独安装使用
import { Circle } from '@uiw/react-amap-circle';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Map, APILoader, Circle } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={14} center={[116.400274, 39.905812]}>
          <Circle
            visiable={show}
            radius={1000}
            strokeColor="#fff"
            strokeWeight={2}
            center={new AMap.LngLat(116.39,39.9)}
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303de813050c7a02bb247930090ce5f162042/src/types/overlay.d.ts#L425-L475)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| radius | 圆半径，单位:米 | `number` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303de813050c7a02bb247930090ce5f162042/src/types/overlay.d.ts#L399-L424)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onHide | 隐藏 | `(): void;` |
| onShow | 显示 | `(): void;` |
| onRightClick | 鼠标右键单击事件 | `(event: MapsEvent): void;` |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onTouchEnd | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onDblClick | 鼠标左键双击事件 | `(event: MapsEvent): void;` |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onMouseOut | 鼠标移出 | `(event: MapsEvent): void;` |
| onMouseOver | 鼠标经过 | `(event: MapsEvent): void;` |
| onMouseUp | 鼠标抬起 | `(event: MapsEvent): void;` |
| onMouseDown | 鼠标按下 | `(event: MapsEvent): void;` |