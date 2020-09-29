Polygon 多边形
===

构造多边形对象，通过 PolygonOptions 指定多边形样式

```jsx
import { Polygon } from '@uiw/react-amap';
```

### 基本用法

<!--DemoStart,bgWhite,noScroll--> 
```jsx
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  // 多边形轮廓线的节点坐标数组
  // const path = [
  //   new AMap.LngLat(116.368904,39.913423),
  //   new AMap.LngLat(116.382122,39.901176),
  //   new AMap.LngLat(116.387271,39.912501),
  //   new AMap.LngLat(116.398258,39.904600)
  // ];
  const path = [
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365]
  ];
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.400274, 39.905812]}>
          {show && (

            <Polygon
              // visiable={show}
              path={path}
              strokeColor="#FF33FF"
              strokeWeight={6}
              strokeOpacity={0.2}
              fillOpacity={0.4}
              fillColor="#1791fc"
              zIndex={50}
            />
          )}
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/8a8c31afdff68e04097c2b140e9a58200b269aee/src/types/overlay.d.ts#L832-L865)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| path | 多边形轮廓线的节点坐标数组，当为“环”多边形时（多边形区域在多边形内显示为“岛”），path为二维数组，数组元素为多边形轮廓线的节点坐标数组, “环”多边形时，要求数组第一个元素为外多边形，其余为“岛”多边形，外多边形需包含“岛”多边形，否则程序不作处理 | `Array<LngLat> | Array<Array<LngLat>>` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/8a8c31afdff68e04097c2b140e9a58200b269aee/src/types/overlay.d.ts#L867-L893)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onDblClick | 鼠标左键双击事件 | `(event:  MapsEvent): void;` |
| onRightClick | 右键单击 | `(event:  MapsEvent): void;` |
| onHide | 隐藏 | `(event: { type: string, target: any }): void;` |
| onShow | 显示 | `(event: { type: string, target: any }): void;` |
| onMouseDown | 鼠标按下 | `(event: MapsEvent): void;` |
| onMouseUp | 鼠标抬起 | `(event: MapsEvent): void;` |
| onMouseOver | 鼠标经过 | `(event: MapsEvent): void;` |
| onMouseOut | 鼠标移出 | `(event: MapsEvent): void;` |
| onChange | 属性发生变化时 | `(): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |