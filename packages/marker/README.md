Marker 点标记组件
===

点标记是用来标示某个位置点信息的一种地图要素，本章介绍如何在地图图面使用点标记。

```jsx
import { Marker } from '@uiw/react-amap';
// 或者单独安装使用
import { Marker } from '@uiw/react-amap-marker';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Marker } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={4}>
          <Marker visiable={show} title="北京市" position={new AMap.LngLat(116.405285,39.904989)} />
          <Marker visiable={show} title="天津市" position={new AMap.LngLat(117.190182,39.125596)} />
          <Marker visiable={show} title="河北省" position={new AMap.LngLat(114.502461,38.045474)} />
          <Marker visiable={show} title="山西省" position={new AMap.LngLat(112.549248,37.857014)} />
          <Marker visiable={show} title="内蒙古自治区" position={new AMap.LngLat(111.670801,40.818311)} />
          <Marker visiable={show} title="辽宁省" position={new AMap.LngLat(123.429096,41.796767)} />
          <Marker visiable={show} title="吉林省" position={new AMap.LngLat(125.3245,43.886841)} />
          <Marker visiable={show} title="黑龙江省" position={new AMap.LngLat(126.642464,45.756967)} />
          <Marker visiable={show} title="上海市" position={new AMap.LngLat(121.472644,31.231706)} />
          <Marker visiable={show} title="江苏省" position={new AMap.LngLat(118.767413,32.041544)} />
          <Marker visiable={show} title="浙江省" position={new AMap.LngLat(120.153576,30.287459)} />
          <Marker visiable={show} title="安徽省" position={new AMap.LngLat(117.283042,31.86119)} />
          <Marker visiable={show} title="福建省" position={new AMap.LngLat(119.306239,26.075302)} />
          <Marker visiable={show} title="江西省" position={new AMap.LngLat(115.892151,28.676493)} />
          <Marker visiable={show} title="山东省" position={new AMap.LngLat(117.000923,36.675807)} />
          <Marker visiable={show} title="河南省" position={new AMap.LngLat(113.665412,34.757975)} />
          <Marker visiable={show} title="湖北省" position={new AMap.LngLat(114.298572,30.584355)} />
          <Marker visiable={show} title="湖南省" position={new AMap.LngLat(112.982279,28.19409)} />
          <Marker visiable={show} title="广东省" position={new AMap.LngLat(113.280637,23.125178)} />
          <Marker visiable={show} title="广西壮族自治区" position={new AMap.LngLat(108.320004,22.82402)} />
          <Marker visiable={show} title="海南省" position={new AMap.LngLat(110.33119,20.031971)} />
          <Marker visiable={show} title="重庆市" position={new AMap.LngLat(106.504962,29.533155)} />
          <Marker visiable={show} title="四川省" position={new AMap.LngLat(104.065735,30.659462)} />
          <Marker visiable={show} title="贵州省" position={new AMap.LngLat(106.713478,26.578343)} />
          <Marker visiable={show} title="云南省" position={new AMap.LngLat(102.712251,25.040609)} />
          <Marker visiable={show} title="西藏自治区" position={new AMap.LngLat(91.132212,29.660361)} />
          <Marker visiable={show} title="陕西省" position={new AMap.LngLat(108.948024,34.263161)} />
          <Marker visiable={show} title="甘肃省" position={new AMap.LngLat(103.823557,36.058039)} />
          <Marker visiable={show} title="青海省" position={new AMap.LngLat(101.778916,36.623178)} />
          <Marker visiable={show} title="宁夏回族自治区" position={new AMap.LngLat(106.278179,38.46637)} />
          <Marker visiable={show} title="新疆维吾尔自治区" position={new AMap.LngLat(87.617733,43.792818)} />
          <Marker visiable={show} title="台湾省" position={new AMap.LngLat(121.509062,25.044332)} />
          <Marker visiable={show} title="香港特別行政區" position={new AMap.LngLat(114.173355,22.320048)} />
          <Marker visiable={show} title="澳門特別行政區" position={new AMap.LngLat(113.54909,22.198951)} />
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

### 点标注的文本标签

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Map, APILoader, Marker } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(1);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={4}>
          <Marker
            visiable={show}
            title="北京市"
            // offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              // offset: new AMap.Pixel(20, 20),
              // 设置文本标注内容
              content: "<div class='info'>我是 marker 的 label 标签</div>",
              // 设置文本标注方位
              direction: 'right'
            }}
            position={new AMap.LngLat(117.283042,31.86119)}
          />
          <Marker
            visiable={show}
            title="北京市"
            label={{
              // 设置文本标注内容
              content: "<div class='info'>我是 marker 222的 label 标签</div>",
              // 设置文本标注方位
              direction: 'right'
            }}
            draggable
            bubble={true}
            // content="<div>我是 marker 的 label 标签</div>"
            position={new AMap.LngLat(113.280637,23.125178)}
          >
            <div
              style={{
                height: '32px',
                width: '23px',
                margin: '-31px 0 0 -10px',
                background: 'url(https://amap.com/assets/img/poi-marker.png) 437px 267px',
                backgroundSize: '437px 267px',
                backgroundPosition: '-9px -3px'
              }}
            />
            <div>
              我是 marker 的 {count} label 标签
              <button onClick={() => setCount(count + 1)}>
                {count} 点击 + 1
              </button>
            </div>
          </Marker>
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

### 自适应显示多个点标记

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Marker } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const [map, setMap] = useState();
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <button onClick={() => {
        if (map) {
          map.setFitView(null, false, [150, 60, 100, 60]);
        }
      }}>
        地图自适应显示到合适的范围
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map
          zoom={13}
          center={[116.397428, 39.90923]}
          ref={(instance) => {
            if (instance && instance.map && !map) {
              setMap(instance.map);
            }
          }}
        >
          <Marker
            visiable={show}
            icon={new AMap.Icon({
              imageSize: new AMap.Size(25, 34),
              image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png'
            })}
            offset={new AMap.Pixel(-13, -30)}
            position={new AMap.LngLat(116.205467, 39.907761)}
          />
          <Marker
            visiable={show}
            icon={new AMap.Icon({
              imageSize: new AMap.Size(25, 34),
              image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png'
            })}
            offset={new AMap.Pixel(-13, -30)}
            position={[116.368904, 39.913423]}
          />
          <Marker
            visiable={show}
            icon={new AMap.Icon({
              imageSize: new AMap.Size(25, 34),
              image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png'
            })}
            offset={new AMap.Pixel(-13, -30)}
            position={[116.305467, 39.807761]}
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

### 自定义标记

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Marker } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const [map, setMap] = useState();
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <button onClick={() => {
        if (map) {
          map.setFitView(null, false, [150, 60, 100, 60]);
        }
      }}>
        地图自适应显示到合适的范围
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map
          zoom={10}
          center={[116.397428, 39.90923]}
          ref={(instance) => {
            if (instance && instance.map && !map) {
              setMap(instance.map);
            }
          }}
        >
          <Marker
            visiable={show}
            offset={new AMap.Pixel(-13, -30)}
            position={new AMap.LngLat(116.205467, 39.907761)}
          >
            <div style={{ background: 'red', color: '#fff' }}>
              我是 Marker
            </div>
          </Marker>
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L8-L111)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| map | 要显示该marker的地图对象 | `Map` | - |
| position | 点标记在地图上显示的位置，默认为地图中心点 | `LngLat` | - |
| offset | 点标记显示位置偏移量，默认值为 `Pixel(-10,-34)`。 | `Pixel` | - |
| content | 点标记显示内容。可以是 `HTML` 要素字符串或者 `HTML DOM` 对象。`icon` 属性将被覆盖。 | `ReactNode` | - |
| children | 点标记显示内容。`children`有效时，`icon` 属性将被覆盖。 | `ReactNode` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L112-L182)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onDblClick | 鼠标左键双击事件 | `(event: MapsEvent): void;` |
| onRightClick | 鼠标右键单击事件 | `(event: MapsEvent): void;` |
| onMouseMove | 鼠标移动 | `(event: MapsEvent): void;` |
| onMouseOver | 鼠标移近点标记时触发事件 | `(event: MapsEvent): void;` |
| onMouseOut | 鼠标移出点标记时触发事件 | `(event: MapsEvent): void;` |
| onMouseDown | 鼠标在点标记上按下时触发事件 | `(event: MapsEvent): void;` |
| onMouseUp | 鼠标在点标记上按下后抬起时触发事件 | `(event: MapsEvent): void;` |
| onDragStart | 开始拖拽点标记时触发事件 | `(event: MapsEvent): void;` |
| onDragging | 鼠标拖拽移动点标记时触发事件 | `(event: MapsEvent): void;` |
| onDragEnd | 点标记拖拽移动结束触发事件 | `(event: MapsEvent): void;` |
| onMoving | 点标记在执行 | `(obj: { passedPath:Array<LngLat> }): void;` |
| onMoveEnd | 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发 | `(): void;` |
| onMoveAlong | 点标记执行moveAlong动画一次后触发事件 | `(): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |