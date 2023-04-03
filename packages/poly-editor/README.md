PolyEditor 编辑器
===

折线、多边形[编辑插件](https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.PolyEditor)，用于编辑 Polygon 或 Polyline 对象，支持AMap JS API v1.4.xxx 和 v2.0.xxx。[官方示例](https://lbs.amap.com/demo/javascript-api/example/overlayers/polyline-draw-and-edit)

```jsx
import { PolyEditor } from '@uiw/react-amap';
// 或者单独安装使用
import { PolyEditor } from '@uiw/react-amap-poly-editor';
```

### 基本用法

注意，需要加载 `<APILoader plugin="AMap.PolyEditor">`，需要加载 `AMap.PolyEditor`<!--rehype:style=background: #ffe3da;color: #ff5722;--> 插件，如果点击进入当前页面，需要 `刷新`<!--rehype:style=background: #e91e63;color: #fff;--> 页面。

```jsx
<APILoader plugin="AMap.PolyEditor">
```
<!--rehype:style=background: #fff3b7;-->


### 多边形编辑

<!--rehype:-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon, PolyEditor } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(false);
  // 多边形轮廓线的节点坐标数组
  const path = [
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365],
  ];
    const [polygonPath,setPolygonPath]=useState(path);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <button onClick={() => setActive(!active)}>
        {active ? '结束' : '开始'}编辑
      </button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.400274, 39.905812]}>
          <Polygon
            visiable={show}
            path={polygonPath}
            strokeColor="#FF33FF"
            strokeWeight={6}
            strokeOpacity={0.2}
            fillOpacity={0.4}
            fillColor="#1791fc"
            zIndex={50}
          >
            <PolyEditor
              active={active}
              onEnd={(e) => {
                console.log('onEnd:>>',e.target.getPath());
                setPolygonPath(e.target.getPath())
              }}
              onAdjust={() => {
                console.log('onAdjust:>>')
              }}
              onRemovenode={() => {
                console.log('onRemovenode:>>')
              }}
              onAddnode={() => {
                console.log('onAddnode:>>')
              }}
            />
          </Polygon>
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129" plugin="AMap.PolyEditor">
     <Example />
  </APILoader>
);

export default Mount;
```

### 拆线编辑

<!--rehype:-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polyline, PolyEditor } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(false);
  // 多边形轮廓线的节点坐标数组
  const path = [
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365],
  ];
  const [polylinePath,setPolylinePath]=useState(path);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <button onClick={() => setActive(!active)}>
        {active ? '结束' : '开始'}编辑
      </button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.400274, 39.905812]}>
          <Polyline
            visiable={show}
            path={polylinePath}
            strokeColor="#FF33FF"
            strokeWeight={6}
            strokeOpacity={0.2}
            fillOpacity={0.4}
            fillColor="#1791fc"
            zIndex={50}
          >
            <PolyEditor
              active={active}
               onEnd={(e) => {
                console.log('onEnd:>>',e.target.getPath());
                setPolylinePath(e.target.getPath())
              }}
              onAdjust={() => {
                console.log('onAdjust:>>')
              }}
              onRemovenode={() => {
                console.log('onRemovenode:>>')
              }}
              onAddnode={() => {
                console.log('onAddnode:>>')
              }}
            />
          </Polyline>
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129" plugin="AMap.PolyEditor">
     <Example />
  </APILoader>
);

export default Mount;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| active | 是否开启编辑功能。 | `boolean` | - |
| onAddnode | 通过鼠标在折线上增加一个节点或在多边形上增加一个顶点时触发此事件 | (event: MapsEvent): void; |
| onAdjust | 鼠标调整折线上某个节点或多边形上某个顶点的位置时触发此事件 | (event: MapsEvent): void; |
| onRemovenode | 通过鼠标在折线上删除一个节点或在多边形上删除一个顶点时触发此事件 | (event: MapsEvent): void; |
| onEnd | 在调用close方法时，触发该事件，target即为编辑后的折线/多边形对象 | (event: {type:string,target:Object}): void; |




