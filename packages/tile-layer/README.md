TileLayer 切片图层
===

切片图层，用户可以用此组件灵活加载各种切片图层。 [AMap API](https://lbs.amap.com/api/jsapi-v2/documentation#tilelayer)

```jsx
import { TileLayer } from '@uiw/react-amap';
// 或者单独安装使用
import { TileLayer } from '@uiw/react-amap-tile-layer';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, Marker,TileLayer ,TileLayerType} from '@uiw/react-amap';

const GPS = {
  PI: 3.14159265358979324,
  x_pi: (3.14159265358979324 * 3000.0) / 180.0,
  delta: function (lat, lon) {
    // Krasovsky 1940
    //
    // a = 6378245.0, 1/f = 298.3
    // b = a * (1 - f)
    // ee = (a^2 - b^2) / a^2;
    let a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
    let ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
    let dLat = this.transformLat(lon - 105.0, lat - 35.0);
    let dLon = this.transformLon(lon - 105.0, lat - 35.0);
    let radLat = (lat / 180.0) * this.PI;
    let magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    let sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * this.PI);
    dLon = (dLon * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * this.PI);
    return { lat: dLat, lon: dLon };
  },

  //WGS-84 to GCJ-02
  WGS_84toGCJ_02: function (wgsLat, wgsLon) {
    if (this.outOfChina(wgsLat, wgsLon)) return { lat: wgsLat, lon: wgsLon };

    let d = this.delta(wgsLat, wgsLon);
    return [ wgsLon + d.lon ,wgsLat + d.lat];
  },
  //GCJ-02 to WGS-84
  GCJ_02toWGS_84: function (gcjLat, gcjLon) {
    if (this.outOfChina(gcjLat, gcjLon)) return [gcjLon, gcjLat];

    let d = this.delta(gcjLat, gcjLon);
    return [gcjLon - d.lon, gcjLat - d.lat];
  },
  //GCJ-02 to WGS-84 exactly
  GCJ_02toWGS_84Exactly: function (gcjLat, gcjLon) {
    let initDelta = 0.01;
    let threshold = 0.000000001;
    let dLat = initDelta,
      dLon = initDelta;
    let mLat = gcjLat - dLat,
      mLon = gcjLon - dLon;
    let pLat = gcjLat + dLat,
      pLon = gcjLon + dLon;
    let wgsLat,
      wgsLon,
      i = 0;
    while (1) {
      wgsLat = (mLat + pLat) / 2;
      wgsLon = (mLon + pLon) / 2;
      let tmp = this.GCJ_02toWGS_84(wgsLat, wgsLon);
      dLat = tmp[0] - gcjLat;
      dLon = tmp[1] - gcjLon;
      if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold) break;

      if (dLat > 0) pLat = wgsLat;
      else mLat = wgsLat;
      if (dLon > 0) pLon = wgsLon;
      else mLon = wgsLon;

      if (++i > 10000) break;
    }
    //console.log(i);
    return { lat: wgsLat, lon: wgsLon };
  },
  //GCJ-02 to BD-09
  GCJ_02toBD_09: function (gcjLat, gcjLon) {
    let x = gcjLon,
      y = gcjLat;
    let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
    let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
    let bdLon = z * Math.cos(theta) + 0.0065;
    let bdLat = z * Math.sin(theta) + 0.006;
    return { lat: bdLat, lon: bdLon };
  },
  //BD-09 to GCJ-02
  BD_09toGCJ_02: function (bdLat, bdLon) {
    let x = bdLon - 0.0065,
      y = bdLat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
    let gcjLon = z * Math.cos(theta);
    let gcjLat = z * Math.sin(theta);
    return { lat: gcjLat, lon: gcjLon };
  },
  //WGS-84 to Web mercator
  //mercatorLat -> y mercatorLon -> x
  WGS_84toWebMercator: function (wgsLat, wgsLon) {
    let x = (wgsLon * 20037508.34) / 180;
    let y =
      Math.log(Math.tan(((90 + wgsLat) * this.PI) / 360)) / (this.PI / 180);
    y = (y * 20037508.34) / 180;
    return { lat: y, lon: x };
    /* 
          if ((Math.abs(wgsLon) > 180 || Math.abs(wgsLat) > 90)) 
              return null; 
          let x = 6378137.0 * wgsLon * 0.017453292519943295; 
          let a = wgsLat * 0.017453292519943295; 
          let y = 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a))); 
          return {'lat' : y, 'lon' : x}; 
          //*/
  },
  // Web mercator to WGS-84
  // mercatorLat -> y mercatorLon -> x
  WebMercatorToWGS_84: function (mercatorLat, mercatorLon) {
    let x = (mercatorLon / 20037508.34) * 180;
    let y = (mercatorLat / 20037508.34) * 180;
    y =
      (180 / this.PI) *
      (2 * Math.atan(Math.exp((y * this.PI) / 180)) - this.PI / 2);
    return { lat: y, lon: x };
    /* 
          if (Math.abs(mercatorLon) < 180 && Math.abs(mercatorLat) < 90) 
              return null; 
          if ((Math.abs(mercatorLon) > 20037508.3427892) || (Math.abs(mercatorLat) > 20037508.3427892)) 
              return null; 
          let a = mercatorLon / 6378137.0 * 57.295779513082323; 
          let x = a - (Math.floor(((a + 180.0) / 360.0)) * 360.0); 
          let y = (1.5707963267948966 - (2.0 * Math.atan(Math.exp((-1.0 * mercatorLat) / 6378137.0)))) * 57.295779513082323; 
          return {'lat' : y, 'lon' : x}; 
          //*/
  },
  // two point's distance
  distance: function (latA, lonA, latB, lonB) {
    let earthR = 6371000;
    let x =
      Math.cos((latA * this.PI) / 180) *
      Math.cos((latB * this.PI) / 180) *
      Math.cos(((lonA - lonB) * this.PI) / 180);
    let y = Math.sin((latA * this.PI) / 180) * Math.sin((latB * this.PI) / 180);
    let s = x + y;
    if (s > 1) s = 1;
    if (s < -1) s = -1;
    let alpha = Math.acos(s);
    let distance = alpha * earthR;
    return distance;
  },
  outOfChina: function (lat, lon) {
    if (lon < 72.004 || lon > 137.8347) return true;
    if (lat < 0.8293 || lat > 55.8271) return true;
    return false;
  },
  transformLat: function (x, y) {
    let ret =
      -100.0 +
      2.0 * x +
      3.0 * y +
      0.2 * y * y +
      0.1 * x * y +
      0.2 * Math.sqrt(Math.abs(x));
    ret +=
      ((20.0 * Math.sin(6.0 * x * this.PI) +
        20.0 * Math.sin(2.0 * x * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin((y / 3.0) * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((160.0 * Math.sin((y / 12.0) * this.PI) +
        320 * Math.sin((y * this.PI) / 30.0)) *
        2.0) /
      3.0;
    return ret;
  },
  transformLon: function (x, y) {
    let ret =
      300.0 +
      x +
      2.0 * y +
      0.1 * x * x +
      0.1 * x * y +
      0.1 * Math.sqrt(Math.abs(x));
    ret +=
      ((20.0 * Math.sin(6.0 * x * this.PI) +
        20.0 * Math.sin(2.0 * x * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin((x / 3.0) * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((150.0 * Math.sin((x / 12.0) * this.PI) +
        300.0 * Math.sin((x / 30.0) * this.PI)) *
        2.0) /
      3.0;
    return ret;
  },
};

const Demo = () => {
  const [show, setShow] = useState(true);
  const [showTDT,setShowTDT]=useState(false);
  const [type,setType]=useState();
  const [options,setOptions]=useState(); // lng lat
  const TiandituKEY = '9fe0f60cd462f38c726d9a12565e4524';
  const [markerPosition,setMarkerPosition]=useState([116.405285,39.904989])
  const TiandituSatelliteOptions={
    getTileUrl: `http://t{0,1,2,3,4,5,6,7}.tianditu.gov.cn/DataServer?T=vec_w&tk=${TiandituKEY}&x=[x]&y=[y]&l=[z]`,
    zIndex: 100
  }
  const TiandituSatelliteOptions2={
    getTileUrl: `http://t{0,1,2,3,4,5,6,7}.tianditu.gov.cn/DataServer?T=cva_w&tk=${TiandituKEY}&x=[x]&y=[y]&l=[z]`,
    opacity:0.7,
    zIndex: 101
  }
  const handleChangeTileLayer=(chgType,chgOptions)=>{
    if(chgType===type){
      return;
    }
    if(chgType!=="tianditu"){
      if(type==="tianditu"){
        let position=GPS.WGS_84toGCJ_02(markerPosition[1], markerPosition[0])
        setMarkerPosition(position); 
      }
      setType(chgType);
      setOptions(undefined);
      setShowTDT(false);
    }else{
       let position=GPS.GCJ_02toWGS_84(markerPosition[1], markerPosition[0])
      setMarkerPosition(position);
      setShowTDT(true);
      setType(chgType);
      setOptions(chgOptions);
     
    }
  }
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
     <button onClick={() => handleChangeTileLayer(TileLayerType.SATELLITE)}>
        加载卫星图层
      </button> 
     <button onClick={() => handleChangeTileLayer(TileLayerType.TRAFFIC)}>
        加载交通图层
      </button> 
     <button onClick={() => handleChangeTileLayer(TileLayerType.ROADNET)}>
        加载路网图层
      </button> 
     <button onClick={() => handleChangeTileLayer("tianditu",TiandituSatelliteOptions)}>
        加载天地图卫星图层
      </button> 
      <div style={{ width: '100%', height: '300px' }}>
        <Map center={new AMap.LngLat(116.405285,39.904989)}>
          <TileLayer
            akey="1"
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
          <TileLayer
            akey="2"
            visiable={showTDT}
            type={type}
            options={TiandituSatelliteOptions2}
            onAdded={()=>{
              console.log("TileLayer has been added!")
            }}
            onRemoved={()=>{
              console.log("TileLayer has been removed!")
            }}
          />
          <Marker title="北京市" position={markerPosition} />
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader  akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Demo />
  </APILoader>
);

export default Mount;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| type | 切片图层类型 | TileLayerType | - |
| options | 切片图层的配置 | TileLayerOptions | - |
| onAdded | 图层添加后的回调，可以用来处理不同坐标系图层切换时覆盖物的坐标转换 | (): void; |
| onRemoved | 图层移除后的回调，可以用来处理不同坐标系图层切换时覆盖物的坐标转换 | (): void; |
