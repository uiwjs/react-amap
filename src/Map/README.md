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
  return (
    <Fragment>
      <button onClick={() => setDragEnable(!dragEnable)}>{dragEnable ? '禁用' : '启用'}拖拽</button>
      <button onClick={() => setDisplay(!display)}>{display ? '卸载' : '加载'}地图</button>
      <div style={{ width: '100%', height: '200px' }}>
        {display ? <Map dragEnable={dragEnable} /> : null}
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
    <Fragment>
      <Map ref={(instance) => {
        if (instance && instance.map) {
          console.log('instance', instance);
        }
      }} /> 
      <Map ref={mapRef} /> 
    </Fragment>
  );
}

ReactDOM.render((
  <div style={{ width: '100%', height: '200px' }}>
    <APILoader akay="1c44726c39431f704d3e25cd51381e35">
      <Demo />
    </APILoader>
  </div>
), _mount_);
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| center | 初始中心经纬度 | `[number, number] | LngLat` | - |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| - | - | - |