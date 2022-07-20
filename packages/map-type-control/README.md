MapTypeControl 类型切换
===

地图类型切换插件。用户通过该插件进行地图切换。

```jsx
import { MapTypeControl } from '@uiw/react-amap';
// 或者单独安装使用
import { MapTypeControl } from '@uiw/react-amap-map-type-control';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, MapTypeControl } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map>
          <MapTypeControl
            visible={show}
            offset={[30, 10]}
            position="RT"
          />
          {show && (
            <MapTypeControl
              visible={show}
              offset={[10, 10]}
              position="RB"
            />
          )}
        </Map>
      </div>
    </>
  );
}

ReactDOM.render((
  <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Example />
  </APILoader>
), _mount_);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visible | 覆盖物是否可见。 | `boolean` | - |
| showRoad | 覆盖物是否可见。 | `boolean` | `false` |
| showTraffic | 叠加实时交通图层 默认值：false | `boolean` | `false` |
| defaultType | 初始化默认图层类型。 取值为0：默认底图 取值为1：卫星图 默认值：0 | `number` | `0` |
