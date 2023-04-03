BezierCurve 贝塞尔曲线
===

贝塞尔曲线

```jsx
import { BezierCurve } from '@uiw/react-amap';
// 或者单独安装使用
import { BezierCurve } from '@uiw/react-amap-bezier-curve';
```

### 基本用法

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Map, APILoader, BezierCurve } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const path = [// 每个弧线段有两种描述方式
    [116.39, 39.91, 116.37, 39.91],//起点
    // 第一段弧线
    [116.380298, 39.907771, 116.38, 39.90],// 控制点，途经点
    // 第二段弧线
    [116.385298, 39.907771, 116.40, 39.90],// 控制点，途经点// 弧线段有两种描述方式1
    // 第三段弧线
    [// 弧线段有两种描述方式2
      [116.392872, 39.887391],//控制点
      [116.40772, 39.909252],//控制点
      [116.41, 39.89]//途经点
    ],
    // 第四段弧线
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273]
    // 控制点，控制点，途经点，每段最多两个控制点
  ];
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.397637, 39.900001]}>
          <BezierCurve
            visiable={show}
            path={path}
            isOutline={true}
            outlineColor="#ffeeff"
            borderWeight={3}
            strokeColor="#3366FF"
            strokeOpacity={1}
            strokeWeight={6}
            // 线样式还支持 'dashed'
            strokeStyle="solid"
            // strokeStyle是dashed时有效
            strokeDasharray={[10, 10]}
            lineJoin="round"
            lineCap="round"
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/9364fa457dfac8c6ece84802e07358a131b7cad9/src/types/overlay.d.ts#L718-L776)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| path | 贝瑟尔曲线的路径。 | `Array<LngLat>` / `Array<Array<LngLat>>` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/9364fa457dfac8c6ece84802e07358a131b7cad9/src/types/overlay.d.ts#L778-L802)

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