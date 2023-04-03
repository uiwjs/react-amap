InfoWindow 信息窗体
===

用于在地图上弹出一个详细信息展示窗体，地图上只允许同时展示 `1` 个信息窗体。

```jsx
import { InfoWindow } from '@uiw/react-amap';
// 或者单独安装使用
import { InfoWindow } from '@uiw/react-amap-info-window';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, InfoWindow } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  // 构建信息窗体中显示的内容
  const info = [];
  info.push("<div class='input-card content-window-card'><div><img style=\"float:left;width:67px;height:16px;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div> ");
  info.push("<div style=\"padding:7px 0px 0px 0px;\"><h4>高德软件</h4>");
  info.push("<p class='input-item'>电话 : 010-84107000   邮编 : 100102</p>");
  info.push("<p class='input-item'>地址 :北京市朝阳区望京阜荣街10号首开广场4层</p></div></div>");
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.397637, 39.900001]}>
          <InfoWindow
            visiable={show}
            content={info.join('')}
            // position={[116.397046, 39.915698]}
            onClose={(evn) => {
              console.log('evn', evn);
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

### 支持 ReactNode

通过 `children` 支持 `React` 的方式展现内容，因为窗口信息内容通过 `content` 展示内容，它支持 `string/HTMLElement` 添加事件并不方便。

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, InfoWindow } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const [num, setNum] = useState(1)
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.397637, 39.900001]}>
          <InfoWindow
            visiable={show}
            onClose={(evn) => {
              console.log('evn', evn);
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10 }}>
              <img height={16} src="https://webapi.amap.com/images/autonavi.png"/>
              <h2>
                <span style={{color: 'red'}}>{num}</span> - 高德软件
              </h2>
            </div>
            <p>电话：010-84107000   邮编：100102</p>
            <p>地址：北京市朝阳区望京阜荣街10号首开广场4层</p>
            <button onClick={() => setNum(num + 1)}>
              点击事件 + 1
            </button>
          </InfoWindow>
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

### 设置信息窗体内容

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, InfoWindow } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState('<div>高德软件</div>');
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <input type="text" value={content} onChange={(evn) => setContent(evn.target.value)}/>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} pitch={70} viewMode="3D" center={[116.397637, 39.900001]}>
          <InfoWindow
            visiable={show}
            content={content}
            onClose={(evn) => {
              console.log('evn', evn);
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

### 点标记点弹出信息窗体

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, Marker, APILoader, InfoWindow } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(false);
  const [winPosition, setWinPosition] = useState();
  const [content, setContent] = useState('<div>高德软件</div>');
  return (
    <>
      <input type="text" value={content} onChange={(evn) => setContent(evn.target.value)}/>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={14} center={[116.397637, 39.900001]}>
          <Marker
            title="北京市"
            position={new AMap.LngLat(116.405285,39.904989)}
            onClick={(evn) => {
              if (!show) {
                setWinPosition(new AMap.LngLat(116.405285,39.904989));
                setShow(true);
              } else {
                setWinPosition(new AMap.LngLat(116.405285,39.904989));
              }
            }}
          />
          <Marker
            title="北京市"
            position={new AMap.LngLat(116.415285,39.905589)}
            onClick={(evn) => {
              if (!show) {
                setWinPosition(new AMap.LngLat(116.415285,39.905589));
                setShow(true);
              } else {
                setWinPosition(new AMap.LngLat(116.415285,39.905589));
              }
            }}
          />
          {winPosition && (
            <InfoWindow
              visiable={show}
              position={winPosition}
              offset={{ x: 0, y: -10}}
              content={content}
              onClose={(evn) => {
                // console.log('evn2', evn, show);
              }}
            />
          )}
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

### 点标记点弹出信息窗体 Ref 实现

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, Marker, APILoader, InfoWindow } from '@uiw/react-amap';

const Example = () => {
  const mapRef = useRef();
  const winRef = useRef();
  const [winPosition, setWinPosition] = useState();
  const [content, setContent] = useState('<div>高德软件</div>');
  return (
    <>
      <input type="text" value={content} onChange={(evn) => setContent(evn.target.value)}/>
      <div style={{ width: '100%', height: '300px' }}>
        <Map ref={mapRef} zoom={14} center={[116.397637, 39.900001]}>
          <Marker
            title="北京市"
            position={new AMap.LngLat(116.405285,39.904989)}
            onClick={(evn) => {
              winRef.current.infoWindow.open(mapRef.current.map, new AMap.LngLat(116.405285,39.904989))
            }}
          />
          <Marker
            title="北京市"
            position={new AMap.LngLat(116.415285,39.905589)}
            onClick={(evn) => {
              winRef.current.infoWindow.open(mapRef.current.map, new AMap.LngLat(116.415285,39.905589))
            }}
          />
          <InfoWindow
            ref={winRef}
            offset={{ x: 0, y: -30}}
            content={content}
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

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| position | 信息窗体显示基点位置，默认地图的中间 | `LngLat` | - |
| content | 信息窗体尺寸（isCustom为 `true` 时，该属性无效） | `string/HTMLElement` | - |
| **children** | 替代 `content`，支持 `ReactNode` | `ReactNode` | - |
| offset | 信息窗体显示位置偏移量。默认基准点为信息窗体的底部中心（若设置了anchor，则以anchor值为基准点）。 | `Pixel` | - |
| anchor | 信息窗体锚点 | `top-left`,`top-center`,`top-right`,`middle-left`,`center`,`middle-right`,`bottom-left`,`bottom-center`,`bottom-right` | `bottom-center` |
| autoMove | 是否自动调整窗体到视野内（当信息窗体超出视野范围时，通过该属性设置是否自动平移地图，使信息窗体完全显示） | `boolean` | - |
| size | 信息窗体显示基点位置，默认地图的中间 | `Size` | - |
| closeWhenClickMap | 控制是否在鼠标点击地图后关闭信息窗体，默认 `false`，鼠标点击地图后不关闭信息窗体 | `boolean` | - |
| avoid | `autoMove` 为 `true` 时，自动平移到视野内后的上右下左的避让宽度。默认值： `[20, 20, 20, 20]` | `Array<number>` | - |
| isCustom | 是否自定义窗体。设为 `true` 时，信息窗体外框及内容完全按照 `content` 所设的值添加（默认为false，即在系统默认的信息窗体外框中显示 `content` 内容） | `boolean` | - |

### 事件

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onOpen | 信息窗体打开之后触发事件 | `(opts: { type: string }): void;` |
| onClose | 信息窗体关闭之后触发事件 | `(opts: { type: string }): void;` |