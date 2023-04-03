CircleMarker 圆点标记
===

构造一个圆形覆盖物。可直接满足创建圆形标注的需要。

AMap.CircleMarker 类与 AMap.Circle 类均为在地图上绘制圆形覆盖物的方法。这两类的根本不同在于 AMap.Circle 为矢量图形类，随地图的缩放会改变大小；而 AMap.CircleMarker 类则不会随图面缩放而改变。

```jsx
import { CircleMarker } from '@uiw/react-amap';
// 或者单独安装使用
import { CircleMarker } from '@uiw/react-amap-circle-marker';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, CircleMarker } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
   <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '400px' }}>
        <Map zoom={4} center={[116.400274, 39.905812]}>
          <CircleMarker
            center={new AMap.LngLat(116.407394, 39.904211)}
            visiable={show}
            radius={10+Math.random()*10}
            strokeColor="#fff"
            strokeWeight={2}
            strokeOpacity={0.5}
            fillColor='rgba(0,0,255,1)'
            fillOpacity={0.5}
            zIndex={10}
            bubble={true}
            cursor='pointer'
            clickable= {true}
          />
           <CircleMarker
            center={new AMap.LngLat(113.26641, 23.132324)}
            visiable={show}
            radius={10+Math.random()*10}
            strokeColor="#fff"
            strokeWeight={2}
            strokeOpacity={0.5}
            fillColor='rgba(0,0,255,1)'
            fillOpacity={0.5}
            zIndex={10}
            bubble={true}
            cursor='pointer'
            clickable= {true}
          />
           <CircleMarker
            center={new AMap.LngLat(112.562678, 37.873499)}
            visiable={show}
            radius={10+Math.random()*10}
            strokeColor="#fff"
            strokeWeight={2}
            strokeOpacity={0.5}
            fillColor='rgba(0,0,255,1)'
            fillOpacity={0.5}
            zIndex={10}
            bubble={true}
            cursor='pointer'
            clickable= {true}
          />
           <CircleMarker
            center={new AMap.LngLat(121.473662, 31.230372)}
            visiable={show}
            radius={10+Math.random()*10}
            strokeColor="#fff"
            strokeWeight={2}
            strokeOpacity={0.5}
            fillColor='rgba(0,0,255,1)'
            fillOpacity={0.5}
            zIndex={10}
            bubble={true}
            cursor='pointer'
            clickable= {true}
          />
           <CircleMarker
            center={new AMap.LngLat(117.329949, 31.733806)}
            visiable={show}
            radius={10+Math.random()*10}
            strokeColor="#fff"
            strokeWeight={2}
            strokeOpacity={0.5}
            fillColor='rgba(0,0,255,1)'
            fillOpacity={0.5}
            zIndex={10}
            bubble={true}
            cursor='pointer'
            clickable= {true}
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/92eee3a6038b062352939d71aafc15b541c144ef/src/types/overlay.d.ts#L529-L555)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| center | 圆心位置 | `LngLat` | - |
| radius | 圆半径，单位:px 最大值64 | `number` | - |
| zIndex | 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示 | `number` | 10 |
| bubble | 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增） | `boolean` | false |
| cursor | 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor | `string` | - |
| strokeColor | 轮廓线颜色，使用16进制颜色代码赋值 | `string` | #00D3FC |
| strokeOpacity | 轮廓线透明度，取值范围 [0,1] | `number` | 0.9 |
| strokeWeight | 轮廓线宽度 | `number` | - |
| fillColor | 多边形填充颜色，使用16进制颜色代码赋值 | `string` | #00B2D5 |
| fillOpacity | 多边形填充透明度，取值范围 [0,1] | `number` | 0.5 |
| draggable | 设置多边形是否可拖拽移动 | `boolean` | false |
| extData | 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 | `any` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/92eee3a6038b062352939d71aafc15b541c144ef/src/types/overlay.d.ts#L503-L527)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onHide | 隐藏 | `(): void;` |
| onShow | 显示 | `(): void;` |
| onMouseover | 鼠标经过 | `(event: MapsEvent): void;` |
| onTouchend | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onTouchmove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onRightclick | 鼠标右键单击事件 | `(event: MapsEvent): void;` |
| onMouseup | 鼠标抬起 | `(event: MapsEvent): void;` |
| onMouseout | 鼠标移出 | `(event: MapsEvent): void;` |
| onTouchstart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onMousedown | 鼠标按下 | `(event: MapsEvent): void;` |
| onDblclick | 鼠标左键双击事件 | `(event: MapsEvent): void;` |