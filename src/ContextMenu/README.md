ContextMenu 右键菜单
===

地图图面一种特殊的信息窗体，即右键菜单。[AMap.ContextMenu](https://a.amap.com/jsapi/static/doc/index.html#contextmenu) 类提供图面添加右键菜单的方式。具体使用方式如下

```jsx
import { ContextMenu } from '@uiw/react-amap';
```

### 基本用法

地图上右击鼠标，弹出自定义样式的右键菜单

<!--DemoStart,bgWhite,noScroll--> 
```jsx
import React, { useState, useRef } from 'react';
import { Map, APILoader, ContextMenu } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const mapRef = useRef();
  let lnglat = null;

  function handleMenu(type) {
    if (mapRef && mapRef.current && mapRef.current.map) {
      switch(type) {
        case 'zoomIn': mapRef.current.map.zoomIn(); break;
        case 'zoomOut': mapRef.current.map.zoomOut(); break;
        case 'center': mapRef.current.map.setZoomAndCenter(4, [108.946609, 34.262324]); break;
      }
      if (type === 'marker' && lnglat) {
        new AMap.Marker({
            map: mapRef.current.map,
            position: lnglat //基点位置
        });
      }
    }
  }
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Map
        ref={mapRef}
        zoom={14}
        center={[116.397637, 39.900001]}
        scrollWheel={false}
        onRightClick={(e) => {
          lnglat = e.lnglat;
        }}
      >
        <ContextMenu>
          <ContextMenu.Item text="放大一级" onClick={(e) => handleMenu('zoomIn')} />
          <ContextMenu.Item text="缩小一级" onClick={(e) => handleMenu('zoomOut')} />
          <ContextMenu.Item text="缩放至全国范围" onClick={(e) => handleMenu('center')} />
          <ContextMenu.Item text="添加标记" onClick={(e) => handleMenu('marker')} />
        </ContextMenu>
      </Map>
    </div>
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

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| position | 右键菜单显示的位置 | `Vector | LngLat` | - |
| content | 右键菜单内容（针对自定义菜单时，添加菜单内容及功能。可以是HTML要素字符串或者HTML DOM对象。） | `string | HTMLElement` | - |

### 事件

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onOpen | 打开之后触发事件 | `(opts: { type: string }): void;` |
| onClose | 关闭之后触发事件 | `(opts: { type: string }): void;` |