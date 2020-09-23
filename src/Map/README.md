Map 组件
===

Map 组件是其他组件的基础，Map 组件会给所有的子组件注入两个属性 **`map`**，**`container`** 和 **`AMap`**，

⚠️ 注意

> 1. 组件 `<Map>` 必须包裹在 `<APILoader>` 组件内，该组件作用是加载高德地图 SDK。  
> 2. 其他地图组件必须作为 `<Map>` 的子组件使用；

```jsx
import { Map, APILoader } from '@uiw/react-amap';
```

### 基本用法

Map 的父组件必须具有宽度和高度；

<!--DemoStart,bgWhite--> 
```jsx
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="1c44726c39431f704d3e25cd51381e35">
      <Map />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 参数设置

<!--DemoStart,bgWhite--> 
```jsx
import { React, Fragment } from 'react';
import { Map, APILoader } from '@uiw/react-amap';

function Demo() {
  const [dragEnable, setDragEnable] = useState(true);
  const [display, setDisplay] = useState(true);
  const [zoom, setZoom] = useState(15);
  return (
    <Fragment>
      <button onClick={() => setDragEnable(!dragEnable)}>{dragEnable ? '禁用' : '启用'}拖拽</button>
      <button onClick={() => setDisplay(!display)}>{display ? '卸载' : '加载'}地图</button>
      <button onClick={() => setZoom(zoom + 1)}>放大 +1 -> ({zoom})</button>
      <button onClick={() => setZoom(zoom - 1)}>缩小 -1 -> ({zoom})</button>
      <div style={{ width: '100%', height: '200px' }}>
        {display ? <Map dragEnable={dragEnable} zoom={zoom} /> : null}
      </div>
    </Fragment>
  );
}

ReactDOM.render((
  <APILoader akay="1c44726c39431f704d3e25cd51381e35">
    <Demo />
  </APILoader>
), _mount_);
```
<!--End-->

### Ref

获取地图实例对象。

<!--DemoStart,bgWhite--> 
```jsx
import { React, useEffect, Fragment } from 'react';
import { Map, APILoader } from '@uiw/react-amap';

function Demo() {
  const mapRef = useRef();
  useEffect(() => {
    console.log('mapRef:', mapRef);
  }, []);
  return (
    <div style={{ width: '100%', height: 330 }}>
      <div style={{ marginBottom: 10, height: 120 }}>
        <Map ref={mapRef} /> 
      </div>
      <Map ref={(instance) => {
        if (instance && instance.map) {
          console.log('instance', instance);
        }
      }} />
    </div>
  );
}

ReactDOM.render((
  <APILoader akay="1c44726c39431f704d3e25cd51381e35">
    <Demo />
  </APILoader>
), _mount_);
```
<!--End-->

### 事件触发

<!--DemoStart,bgWhite--> 
```jsx
import { Map, APILoader } from '@uiw/react-amap';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="1c44726c39431f704d3e25cd51381e35">
      <Map
        onClick={() => {
          console.log('点击事件！');
        }}
      />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Props

[更多参数设置](https://github.com/uiwjs/react-amap/blob/24df253/src/types/core.d.ts#L461-L537)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| center | 初始中心经纬度 | `[number, number] | LngLat` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/24df253/src/types/core.d.ts#L298-L403)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
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
| onComplete | 地图资源加载完成后触发事件 | - |
| onHotspotClick | 鼠标点击热点时触发 | - |
| onTouchMove | 拖拽地图过程中触发，仅适用移动设备 | - |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | - |
| onResize | 地图容器尺寸改变事件 | - |