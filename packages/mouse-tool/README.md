MouseTool 绘制工具
===

MouseTool 绘制工具，可以支持绘制 Marker、Circle、Rectangle、Polyline、Polygon 等。支持AMap JS API v1.4.xxx 和 v2.0.xxx。
参考 [AMap API](https://a.amap.com/jsapi/static/doc/20220913/index.html?v=2#mousetoolmarker)。
```jsx
import { MouseTool } from '@uiw/react-amap';
// 或者单独安装使用
import { MouseTool } from '@uiw/react-amap-mouse-tool';
```

### 基本用法

注意，需要加载 `<APILoader plugin="AMap.MouseTool">`，需要加载 `AMap.MouseTool`<!--rehype:style=background: #ffe3da;color: #ff5722;--> 插件，如果点击进入当前页面，需要 `刷新`<!--rehype:style=background: #e91e63;color: #fff;--> 页面。

```jsx
<APILoader plugin="AMap.MouseTool">
```
<!--rehype:style=background: #fff3b7;-->


### 绘制

利用 `AMap.MouseTool` 绘制折线、弧线、多边形、矩形、圆形等 [官方示例](https://lbs.amap.com/demo/jsapi-v2/example/overlayers/overlay-draw)

> ⚠️ 注意：需要加载 `AMap.MouseTool`<!--rehype:style=background: #ffe3da;color: #ff5722;--> 插件，如果点击进入当前页面，需要 `刷新`<!--rehype:style=background: #e91e63;color: #fff;--> 页面

<!--rehype:-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader,  MouseTool,MouseToolDrawType } from '@uiw/react-amap';

const Example = () => {
  const [active, setActive] = useState(false);
  const [type,setType]=useState();
  const handleDraw=(type)=>{
    setType(type);
    setActive(true);
  }
  return (
    <>
      <button onClick={() => handleDraw(MouseToolDrawType.MARKER)}>
        绘制 Marker
      </button>
      <button onClick={() => handleDraw(MouseToolDrawType.POLYLINE)}>
        绘制 Polyline
      </button>
      <button onClick={() => handleDraw(MouseToolDrawType.POLYGON)}>
        绘制 Polygon
      </button>
       <button onClick={() => handleDraw(MouseToolDrawType.CIRCLE)}>
        绘制圆形 Circle
      </button>
       <button onClick={() => handleDraw(MouseToolDrawType.RECTANGLE)}>
        绘制矩形 Rectangle
      </button>
       <button onClick={() => handleDraw(MouseToolDrawType.MEASUREAREA)}>
        绘制 MeasureArea
      </button>
       <button onClick={() => handleDraw(MouseToolDrawType.RULE)}>
        绘制 Rule
      </button>
       <button onClick={() => handleDraw(MouseToolDrawType.RECTZOOMIN)}>
        绘制 RectZoomIn
      </button>
     <button onClick={() => handleDraw(MouseToolDrawType.RECTZOOMOUT)}>
        绘制 RectZoomOut
      </button> 
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.400274, 39.905812]} dragEnable={false}>
            <MouseTool
              active={active}
              type={type}
              onDraw={(e) => {
                setActive(false);
                console.log('onDraw:>>',e)
              }}
            />
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129" plugin="AMap.MouseTool">
     <Example />
  </APILoader>
);

export default Mount;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| active | 是否开启编辑功能。 | `boolean` | - |
| type | 绘制类型 | `MouseToolDrawType` | - |
| drawElementOptions | 绘制元素的参数 | `AMap.PolygonOptions | AMap.PolylineOptions | AMap.MarkerOptions | AMap.CircleOptions` | {} |
| onDraw | 绘制结束的回调函数 | `(event:  MouseToolDrawedEvent): void;` |
| ifClear | 鼠标操作关闭的同时清除地图上绘制的所有覆盖物对象 | `false` |
