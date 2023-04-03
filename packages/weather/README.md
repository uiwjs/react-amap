Weather 天气查询服务
===

天气查询服务，根据城市名称或区域编码返回城市天气预报信息，包括实时天气信息和四天天气预报。

```jsx
import { Weather } from '@uiw/react-amap';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { APILoader, Weather } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState('上海市');
  return (
    <>
      <button onClick={() => setCity('上海市')}>
        上海市
      </button>
      <button onClick={() => setCity('北京市')}>
        北京市
      </button>
      <button onClick={() => setCity('黄冈市')}>
        黄冈市
      </button>
      <div style={{ width: '100%' }}>
        <Weather
          city={city}
          onComplete={(data) => {
            console.log('返回数据：', data);
            setData(data);
          }}
        />
        <pre style={{ padding: 10, marginTop: 10 }}>
          {data ? JSON.stringify(data, null, 2) : '{}'}
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

### 查询四天预报天气

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { APILoader, Weather } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState('上海市');
  return (
    <>
      <button onClick={() => setCity('上海市')}>
        上海市
      </button>
      <button onClick={() => setCity('北京市')}>
        北京市
      </button>
      <button onClick={() => setCity('黄冈市')}>
        黄冈市
      </button>
      <div style={{
        width: '100%', height: '300px', overflow: 'auto'
      }}>
        <Weather
          city={city}
          type="forecast"
          onComplete={(data) => {
            console.log('返回数据：', data);
            setData(data);
          }}
        />
        <pre style={{ padding: 10, marginTop: 10 }}>
          {data ? JSON.stringify(data, null, 2) : '{}'}
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

### 切换类型

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { APILoader, Weather } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  const [type, setType] = useState('live');
  return (
    <>
      <button onClick={() => setType('live')}>
        实时天气信息:live
      </button>
      <button onClick={() => setType('forecast')}>
        四天预报天气:forecast
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Weather
          city="上海市"
          type={type}
          onComplete={(data) => {
            console.log('返回数据：', type, data);
            setData(data);
          }}
        />
        <pre style={{ padding: 10, marginTop: 10 }}>
          {data ? JSON.stringify(data, null, 2) : '{}'}
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
import { APILoader } from '@uiw/react-amap';

const Example = () => {
  const [data, setData] = useState();
  useEffect(() => {
    AMap.plugin(['AMap.Weather'], () => {
      const instance = new AMap.Weather({});
      instance.getForecast('上海市', (status, result) => {
        if(status === 'complete'){
          setData(result);
        } else {
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
| city | 城市名称/区域编码(如：“杭州市”/“330100”) | `string` | - |
| type | 获取 `查询实时天气信息` 或 `查询四天预报天气` | `live|forecast` | `live` |

### 事件

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onComplete | 数据请求完成时触发事件。 | `(data: WeatherLiveResult | WeatherForecastResult): void;` |
| onError | 数据请求错误时触发事件。 | `(err): void;` |