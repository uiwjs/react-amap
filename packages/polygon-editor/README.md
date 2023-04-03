PolygonEditor 编辑器
===

Polygon 多边形编辑器，此组件只支持AMap JS API v2.0 及以上版本。想在低版本 AMap （如 V1.4.15及以下）中使用拆线编辑功能可以查看 [PolyEditor 编辑器](/react-amap#/poly-editor)。[AMap API](https://lbs.amap.com/api/jsapi-v2/documentation#polygoneditor)。

```jsx
import { PolygonEditor } from '@uiw/react-amap';
// 或者单独安装使用
import { PolygonEditor } from '@uiw/react-amap-polygon-editor';
```

### 基本用法

注意，需要加载 `<APILoader plugin="AMap.PolygonEditor">`，需要加载 `AMap.PolygonEditor`<!--rehype:style=background: #ffe3da;color: #ff5722;--> 插件，如果点击进入当前页面，需要 `刷新`<!--rehype:style=background: #e91e63;color: #fff;--> 页面。

```jsx
<APILoader plugin="AMap.PolygonEditor">
```
<!--rehype:style=background: #fff3b7;-->

<!--rehype:-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon, PolygonEditor } from '@uiw/react-amap';

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
            <PolygonEditor
              active={active}
              onEnd={(e) => {
                console.log('onEnd:>>',e.target.getPath());
                setPolygonPath(e.target.getPath())
              }}
              onAdjust={() => {
                console.log('onAdjust:>>')
              }}
              onMove={() => {
                console.log('onMove:>>')
              }}
              onAdd={() => {
                console.log('onAdd:>>')
              }}
              onAddnode={() => {
                console.log('onAddnode:>>')
              }}
              onRemovenode={() => {
                console.log('onRemovenode:>>')
              }}
            />
          </Polygon>
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129" plugin="AMap.PolygonEditor">
    <Example />
  </APILoader>
);

export default Mount;
```

### Props 

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| active | 是否开启编辑功能。 | `boolean` | - |
| onAddnode | 增加一个节点时触发此事件 | `(data :{target: Polygon, lnglat: Lnglat, pixel: Pixel}): void;` |
| onRemovenode | 移除一个节点时触发此事件 | `(data :{target: Polygon, lnglat: Lnglat, pixel: Pixel}): void;` |
| onAdjust | 调整折线上某个点时触发此事件 | `(data :{target: Polygon, lnglat: Lnglat, pixel: Pixel}): void;` |
| onMove | 移动覆盖物时触发此事件 | `(data :{target: Polygon, lnglat: Lnglat, pixel: Pixel}): void;` |
| onAdd | 创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象 | `(data :{target: Polygon}): void;` |
| onEnd | 调用close之后触发该事件，target即为编辑后的覆盖物对象 | `(data :{target: Polygon}): void;` |