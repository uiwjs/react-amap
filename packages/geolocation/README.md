Geolocation 定位
===

鹰眼控件，用于显示缩略地图，显示于地图右下角，可以随主图的视口变化而变化，也可以配置成固定位置实现类似于南海附图的效果。

```jsx
import { Geolocation } from '@uiw/react-amap';
// 或者单独安装使用
import { Geolocation } from '@uiw/react-amap-geolocation';
```

### 地图定位控件

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import { APILoader, Map, Geolocation } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  return (
    <>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={4}>
          <Geolocation
            // 是否使用高精度定位，默认:true
            enableHighAccuracy={true}
            // 超过10秒后停止定位，默认：5s
            timeout={10000}
            // 定位按钮的停靠位置
            // 官方 v2 不再支持
            // buttonPosition="RB"

            // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            // 官方 v2 不再支持
            // buttonOffset={new AMap.Pixel(10, 20)}
            
            // 定位成功后是否自动调整地图视野到定位点
            zoomToAccuracy={true}
            onComplete={(data) => {
              console.log('返回数据：', setData, data);
              setData(data);
            }}
            onError={(data) => {
              console.log('错误返回数据：', data);
              setData(data);
            }}
          />
        </Map>
      </div>
      <pre style={{ padding: 10, marginTop: 10 }}>
        {data ? JSON.stringify(data, null, 2) : '{正在获取}'}
      </pre>
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

### 只获取定位经纬度

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import { APILoader, Geolocation } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  return (
    <>
      <div style={{ width: '100%' }}>
        <Geolocation
          // 是否使用高精度定位，默认:true
          enableHighAccuracy={true}
          // 超过10秒后停止定位，默认：5s
          timeout={10000}
          // 定位按钮的停靠位置
          buttonPosition="RB"
          // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset={new AMap.Pixel(10, 20)}
          // 定位成功后是否自动调整地图视野到定位点
          zoomToAccuracy={true}
          onComplete={(data) => {
            console.log('返回数据：', data);
            setData(data);
          }}
          onError={(data) => {
            console.log('错误返回数据：', data);
            setData(data);
          }}
        />
        <pre style={{ padding: 10, marginTop: 10 }}>
          {data ? JSON.stringify(data, null, 2) : '{正在获取}'}
        </pre>
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

### 只获取定位地址信息

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import { APILoader, Geolocation } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  return (
    <>
      <div style={{ width: '100%' }}>
        <Geolocation
          type="cityInfo"
          // 是否使用高精度定位，默认:true
          enableHighAccuracy={true}
          // 超过10秒后停止定位，默认：5s
          timeout={10000}
          // 定位按钮的停靠位置
          buttonPosition="RT"
          // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset={new AMap.Pixel(10, 20)}
          // 定位成功后是否自动调整地图视野到定位点
          zoomToAccuracy={true}
          onComplete={(data) => {
            console.log('返回数据：', data);
            setData(data);
          }}
          onError={(data) => {
            console.log('错误返回数据：', data);
            setData(data);
          }}
        />
        <pre style={{ padding: 10, marginTop: 10 }}>
          {data ? JSON.stringify(data, null, 2) : '{正在获取}'}
        </pre>
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

### 不使用组件

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useEffect, useState, useRef } from 'react';
import { APILoader, Geolocation } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  useEffect(() => {
    AMap.plugin(['AMap.Geolocation'], () => {
      const instance = new AMap.Geolocation({});
      instance.getCityInfo((status, result) => {
        console.log('>>>>', status, result)
        if(status === 'complete'){
          setData(result);
        } else if (onError) {
          setData(result);
        }
      });
    });
  }, []);
  return (
    <>
      <div style={{ width: '100%' }}>
        <pre style={{ padding: 10, marginTop: 10 }}>
          {data ? JSON.stringify(data, null, 2) : '{正在获取}'}
        </pre>
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
| type | 获取 `position`: "获取 用户的精确位置，有失败几率" 或 `cityInfo`: "根据用户 IP 获取 用户所在城市信息" | `position\|cityInfo` | `position` |

[更多 API 参考](https://github.com/uiwjs/react-amap/blob/bb001782e6daa9c28923dcffa131e15885d15fe0/packages/types/src/services.d.ts#L90-L143)

### 事件

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onComplete | 数据请求完成时触发事件。 | `(data: GeolocationLiveResult \| GeolocationForecastResult): void;` |
| onError | 数据请求错误时触发事件。 | `(err): void;` |