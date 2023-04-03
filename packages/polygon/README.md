Polygon 多边形
===

构造多边形对象，通过 PolygonOptions 指定多边形样式

```jsx
import { Polygon } from '@uiw/react-amap';
// 或者单独安装使用
import { Polygon } from '@uiw/react-amap-polygon';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  // 多边形轮廓线的节点坐标数组
  const path2 = [
    new AMap.LngLat(116.368904,39.913423),
    new AMap.LngLat(116.382122,39.901176),
    new AMap.LngLat(116.387271,39.912501),
    new AMap.LngLat(116.398258,39.904600)
  ];
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
          <Polygon
            visiable={show}
            path={path}
            strokeColor="#FF33FF"
            strokeWeight={6}
            strokeOpacity={0.2}
            fillOpacity={0.4}
            fillColor="#1791fc"
            zIndex={50}
            draggable={true}
            onChange={e=>console.log(e)}
            onDragStart={(e)=>{console.log(e)}}
            onDragging={(e)=>{console.log(e)}}
            onDragEnd={(e)=>{console.log(e)}}
          />
          <Polygon
            visiable={show}
            path={path2}
            strokeColor="#FF33FF"
            strokeWeight={6}
            strokeOpacity={0.2}
            fillOpacity={0.4}
            fillColor="#1791fc"
            zIndex={50}
          />
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader  akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Example />
  </APILoader>
);

export default Mount;
```

### 受控组件

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon, ToolBarControl } from '@uiw/react-amap';

const path1 = [
  [116.368904,39.913423],
  [116.382122,39.901176],
  [116.387271,39.912501],
  [116.398258,39.904600]
];

const path2 = [
  [116.403322, 39.920255],
  [116.410703, 39.897555],
  [116.410803, 39.897655],
  [116.402292, 39.892353],
  [116.389846, 39.891365]
];

const path3 = [
  [116.413322, 39.920255],
  [116.420703, 39.897555],
  [116.412292, 39.892353],
  [116.399846, 39.891365]
];

const options1={
  zIndex:2,
  cursor:"text",
  strokeWeight:2,
  strokeOpacity:1,
  strokeColor:"red",
  fillColor:"blue",
  fillOpacity:0.5,
};

const options2={
  zIndex:4,
  cursor:"move",
  strokeWeight:1,
  strokeOpacity:0.5,
  strokeColor:"blue", 
  fillColor:"green",
  fillOpacity:1,
};

const Example = () => {
  const [show, setShow] = useState(true);
  const [paths, setPaths] = useState(path1);
  const [options,setOptions]=useState(options1);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      {show && (
        <>
        <button onClick={() => setPaths(paths.length === 4 ? path2 : path1)}>
          切换路径
        </button>
        <button onClick={() => setOptions(options.strokeColor === "blue" ? options1 : options2)}>
          切换样式
        </button>
        </>
      )}
      <div style={{ width: '100%', height: '600px' }}>
        <Map zoom={14} center={[116.400274, 39.905812]}>
          <Polygon
            akey="1"
            visiable={show}
            strokeOpacity={1}
            path={paths}
            options={options}
          />
          <Polygon
            akey="2"
            zIndex={3}
            visiable={true}
            strokeColor={"yellow"}
            strokeOpacity={1}
            strokeWeight={4}
            path={path3}
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/8a8c31afdff68e04097c2b140e9a58200b269aee/src/types/overlay.d.ts#L832-L865)

[V1.x.xx API](https://lbs.amap.com/api/javascript-api/reference/overlay#polygon)

[V2.x.xx API](https://lbs.amap.com/api/jsapi-v2/documentation#polygon)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| path | 多边形轮廓线的节点坐标数组，当为“环”多边形时（多边形区域在多边形内显示为“岛”），path为二维数组，数组元素为多边形轮廓线的节点坐标数组, “环”多边形时，要求数组第一个元素为外多边形，其余为“岛”多边形，外多边形需包含“岛”多边形，否则程序不作处理 | `Array<LngLat>` / `Array<Array<LngLat>>` | - |
| options | 多边形属性（样式风格，包括组成多边形轮廓线的节点、轮廓线样式等）。 | `PolygonOptions` | - |

### 事件

Polygon v1.4.15 和 v2.0.xx 版本都是支持 drag 相关事件的，虽然官网文档有的写的不全，但经实验都是可以的。
<!--rehype:style=background: #fff3b7;-->

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
| onDragStart | 拖拽开始 | `(event: MapsEvent): void;` |
| onDragging | 拖拽中 | `(event: MapsEvent): void;` |
| onDragEnd | 拖拽结束 | `(event: MapsEvent): void;` |
| onChange | 属性发生变化时 (只支持 v1.4.xx 版本) | `(event: { type: string, target: any }): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |