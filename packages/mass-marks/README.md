MassMarks 海量点
===

在地图上加载海量点，适合需要显示大量 `Marker` 的场景。

```jsx
import { MassMarks } from '@uiw/react-amap';
// 或者单独安装使用
import { MassMarks } from '@uiw/react-amap-mass-marks';
```

### 基本用法

[官方示例](https://lbs.amap.com/demo/jsapi-v2/example/mass-markers/massmarks)

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef, useEffect } from 'react';
import { Map, APILoader, MassMarks, requireScript } from '@uiw/react-amap';

const Example = (props) => {
  const [show, setShow] = useState(true);
  const [points, setPoints] = useState([]);
  const map = useRef()
  const marker = useRef()
  useEffect(() => {
    if(points.length === 0) {
      requireScript('https://a.amap.com/jsapi_demos/static/citys.js', 'citys_id').then(() => {
        if(citys && Array.isArray(citys)) {
          setPoints(citys);
        }
      });
    }
  });
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={4}>
          <MassMarks
            visiable={show}
            data={points}
            onMouseMove={(evn) => {
              if (!map.current) {
                map.current = evn.target.getMap();
                if (!marker.current) {
                  marker.current = new AMap.Marker({ content: ' ', map: map.current });
                }
              }
              if (marker.current) {
                marker.current.setPosition(evn.data.lnglat);
                marker.current.setLabel({content: evn.data.name})
              }
            }}
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/492a57aa6831f9c34fcb6bbafcbd90e7ad9fa61c/src/MassMarks/index.tsx#L5-L7)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| data | 海量点数据参数 | `Array<MassMarkersDataOptions>` | - |
| zIndex | 图标叠加层级，值越大层级越高 | `number` | - |
| opacity | 图标显示透明度。 | `number` | `1` |
| zooms | 海量点显示层级范围，范围外不显示。 | `Vector` | `[2, 20]` |
| style | 点标记显示位置偏移量。 | `MassMarkersStyleOptions` | `Array<MassMarkersStyleOptions>` | - |

### 事件

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onDblClick | 鼠标左键双击事件 | `(event: MapsEvent): void;` |
| onMouseMove | 鼠标移动 | `(event: MapsEvent): void;` |
| onMouseOut | 鼠标移出点标记时触发事件 | `(event: MapsEvent): void;` |
| onMouseUp | 鼠标在点标记上按下后抬起时触发事件 | `(event: MapsEvent): void;` |
| onMouseDown | 鼠标在点标记上按下时触发事件 | `(event: MapsEvent): void;` |
| onMouseOver | 鼠标移近点标记时触发事件 | `(event: MapsEvent): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
