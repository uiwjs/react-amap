Map 组件
===

Map 组件是其他组件的基础，Map 组件会给所有的子组件注入三个属性 **`map`**，**`container`** 和 **`AMap`**，

⚠️ 注意

> 1. 组件 `<Map>` 必须包裹在 `<APILoader>` 组件内，该组件作用是加载高德地图 SDK。  
> 2. 其他地图组件必须作为 `<Map>` 的子组件使用；

```jsx
import { Map, APILoader } from '@uiw/react-amap';
// 或者单独安装使用
import { Map } from '@uiw/react-amap-map';
```

### 基本用法

Map 的父组件必须具有宽度和高度；

```jsx mdx:preview
import React from 'react';
import ReactDOM from 'react-dom';
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
      <Map />
    </APILoader>
  </div>
);

export default Demo
```

### useMapContext

通过 React 的 Context 提供了一个`无需`为每层组件手动注入 ~~`map`~~，~~`container`~~ 和 ~~`AMap`~~ 三个属性 `props`，就能在组件树间进行传递。

```jsx mdx:preview
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMap, useMapContext, APILoader, Provider } from '@uiw/react-amap';

const Marker = () => {
  const warpper = useRef(null);
  const { map, state } = useMapContext();
  const { setContainer } = useMap({
    container: warpper.current,
    center: [116.397428, 39.90923],
    zoom: 10
  });

  useEffect(() => {
    if (map) {
      const marker = new AMap.Marker({
        icon: new AMap.Icon({
          imageSize: new AMap.Size(25, 34),
          image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
        }),
        position: [116.405285,39.904989],
        offset: new AMap.Pixel(-13, -30)
      });
      // 创建点标记
      const marker1 = new AMap.Marker({
        position: new AMap.LngLat(116.32945,39.939772)
      });
      map.add(marker1);
      marker.setMap(state.map);
    }
  }, [map]);
  
  useEffect(() => {
    if (warpper.current) {
      setContainer(warpper.current);
    }
  }, [warpper.current]);

  return <div ref={warpper} style={{ height: 300 }} />;
}

const Demo = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Provider>
      <Marker />
    </Provider>
  </APILoader>
);

export default Demo
```

```jsx
import { useMapContext, Provider } from '@uiw/react-amap';

const { AMaps, map, container, state, dispatch } = useMapContext();
// => state.AMaps
// => state.map
// => state.container
```

### 参数设置

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { Fragment, useState } from 'react';
import { Map, APILoader } from '@uiw/react-amap';

function Demo() {
  const [dragEnable, setDragEnable] = useState(true);
  const [display, setDisplay] = useState(true);
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState([116.397428, 39.90923]);
  const [viewMode, setViewMode] = useState('3D');
  return (
    <Fragment>
      <button onClick={() => setDragEnable(!dragEnable)}>{dragEnable ? '禁用' : '启用'}拖拽</button>
      <button onClick={() => setDisplay(!display)}>{display ? '卸载' : '加载'}地图</button>
      <button onClick={() => setViewMode(viewMode === '3D' ? '2D' : '3D')}>{viewMode}地图</button>
      <button onClick={() => setZoom(zoom + 1)}>放大 +1 -> ({zoom})</button>
      <button onClick={() => setZoom(zoom - 1)}>缩小 -1 -> ({zoom})</button>
      <button onClick={() => setZoom(zoom - 1)}>缩小 -1 -> ({zoom})</button>
      <button onClick={() => setCenter([121.394147,31.262488])}>上海</button>
      <button onClick={() => setCenter([116.397428, 39.90923])}>北京</button>
      <div style={{ width: '100%', height: 350 }}>
        {display && (
          <Map
            dragEnable={dragEnable}
            zoom={zoom}
            center={center}
            viewMode={viewMode}
            pitch={viewMode === '2D' ? 0 : 70}
          />
        )}
      </div>
    </Fragment>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
);

export default Mount;
```

### Ref

获取地图实例对象。

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useEffect, useRef, Fragment } from 'react';
import { Map, APILoader } from '@uiw/react-amap';

function Demo() {
  const mapRef = useRef();
  useEffect(() => {
    console.log('mapRef:', mapRef)
  }, []);
  return (
    <div style={{ width: '100%', height: 130 }}>
      <Map
        layers={[new AMap.TileLayer.Satellite()]}
        ref={(instance) => {
          if (instance && instance.map) {
            const bounds = instance.map.getBounds();
            console.log('instance', instance);
          }
        }}
      />
      <Map
        layers={[new AMap.TileLayer.Satellite()]}
        ref={mapRef}
      />
    </div>
  );
}

const Mount = () => (
  <div style={{ width: '100%', height: '300px' }}>
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
  </div>
);

export default Mount;
```

### 事件触发

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React from 'react';
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
      <Map
        onComplete={(data, de) => {
          console.log('地图加载完成！', data, de);
        }}
        onClick={() => {
          console.log('点击事件！');
        }}
      />
    </APILoader>
  </div>
);

export default Demo
```

### 特殊使用方法

通过 `Map` 的子组件函数，返回三个对象 **`map`**，**`container`** 和 **`AMap`**，

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useEffect, useRef, Fragment } from 'react';
import { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <Map center={[116.397428, 39.90923]} zoom={12}>
      {({ AMap, map, container }) => {
        console.log('map', map)
        if (map) {
          const marker = new AMap.Marker({
            icon: new AMap.Icon({
              imageSize: new AMap.Size(25, 34),
              image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
            }),
            position: [116.405285,39.904989],
            offset: new AMap.Pixel(-13, -30)
          });
          marker.setMap(map);
        }
        return;
      }}
    </Map>
  </div>
);

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
);

export default Mount;
```

### 将子组件封装到一个组件中

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polyline, ToolBarControl } from '@uiw/react-amap';

const path1 = [ [121.099109,31.222311], [118.528308,31.989555], [117.319812,31.803006], [114.353503,30.67583], [115.891589,28.979429], [112.947253,28.188361], ];
const path2 = [ [116.405289, 39.904987], [113.964458, 40.54664], [111.47836, 41.135964], [108.949297, 41.670904], [106.380111, 42.149509], [103.774185, 42.56996], [101.135432, 42.930601], [98.46826, 43.229964], [95.777529, 43.466798], [93.068486, 43.64009], [90.34669, 43.749086], [87.61792, 43.793308], ];

const ChildComp = (props = {}) => {
  return (
    <div>
      <Polyline {...props} visiable={true} strokeOpacity={1} path={path1} />
      <Polyline {...props} visiable={true} strokeOpacity={1} path={path2} />
    </div>
  )
}

const Demo = () => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Map zoom={3}>
        {(props) => {
          return <ChildComp {...props} />;
        }}
      </Map>
    </div>
  );
}

const Mount = () => (
  <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
);

export default Mount;
```

### Props

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303d/src/types/core.d.ts#L461-L537)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| container | (**默认不需要传递**) 构造一个地图对象，参数 container 中传入地图容器 DIV 对象。<br />注意：地图容器在创建之前必须拥有实际大小，否则可能出现底图无法渲染的问题。 | `HTMLDivElement` | - |
| center | 初始中心经纬度 | `[number, number] \| LngLat` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303d/src/types/core.d.ts#L298-L403)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onComplete | 地图资源加载完成后触发事件 | - |
| onMouseMove | 鼠标在地图上移动时触发 | - |
| onZoomChange | 地图缩放级别更改后触发 | - |
| onMapMove | 地图平移时触发事件 | - |
| onMouseWheel | 鼠标滚轮开始缩放地图时触发 | - |
| onZoomStart | 缩放开始时触发 | - |
| onMouseOver | 鼠标移入地图容器内时触发 | - |
| onMouseOut | 鼠标移出地图容器时触发 | - |
| onDblClick | 鼠标左键双击事件 | - |
| onClick | 鼠标左键单击事件 | - |
| onZoomEnd | 缩放结束时触发 | - |
| onMoveEnd | 地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发 | - |
| onMouseUp | 鼠标在地图上单击抬起时触发 | - |
| onMouseDown | 鼠标在地图上单击按下时触发 | - |
| onRightClick | 鼠标右键单击事件 | - |
| onMoveStart | 地图平移开始时触发 | - |
| onDragStart | 开始拖拽地图时触发 | - |
| onDragging | 拖拽地图过程中触发 | - |
| onDragEnd | 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 | - |
| onHotspotOut | 鼠标移出热点时触发 | - |
| onHotspotOver | 鼠标滑过热点时触发 | - |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | - |
| onHotspotClick | 鼠标点击热点时触发 | - |
| onTouchMove | 拖拽地图过程中触发，仅适用移动设备 | - |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | - |
| onResize | 地图容器尺寸改变事件 | - |
