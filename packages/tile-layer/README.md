TileLayer 切片图层
===

切片图层，用户可以用此组件灵活加载各种切片图层。 (AMap API)[https://lbs.amap.com/api/jsapi-v2/documentation#tilelayer]。

```jsx
import { TileLayer } from '@uiw/react-amap';
// 或者单独安装使用
import { TileLayer } from '@uiw/react-amap-tile-layer';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, TileLayer ,TileLayerType} from '@uiw/react-amap';

const Demo = () => {
  const [show, setShow] = useState(true);
  const [type,setType]=useState();
  const [options,setOptions]=useState();
  const TiandituKEY = '9fe0f60cd462f38c726d9a12565e4524';
  const TiandituSatelliteOptions={
    getTileUrl: `http://t{0,1,2,3,4,5,6,7}.tianditu.gov.cn/DataServer?T=img_w&tk=${KEY}&x=[x]&y=[y]&l=[z]`,
    zIndex: 100
  }
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
     <button onClick={() => setType(TileLayerType.SATELLITE)}>
        加载卫星图层
      </button> 
     <button onClick={() => setType(TileLayerType.TRAFFIC)}>
        加载交通图层
      </button> 
     <button onClick={() => setType(TileLayerType.ROADNET)}>
        加载路网图层
      </button> 
     <button onClick={() => setOptions(TiandituSatelliteOptions)}>
        加载天地图卫星图层
      </button> 
      <div style={{ width: '100%', height: '300px' }}>
        <Map>
          <TileLayer
            visiable={show}
            type={type}
            options={options}
            onAdded={()=>{
              console.log("TileLayer has been added!")
            }}
            onRemoved={()=>{
              console.log("TileLayer has been removed!")
            }}
          />
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
);

export default Mount;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| showRoad | 覆盖物是否可见。 | `boolean` | `false` |
| showTraffic | 叠加实时交通图层 默认值：false | `boolean` | `false` |
| defaultType | 初始化默认图层类型。 取值为0：默认底图 取值为1：卫星图 默认值：0 | `number` | `0` |
