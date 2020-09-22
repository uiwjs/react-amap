Polyline 折线组件
===

构造折线对象，支持 `lineString` 和 `MultiLineString`。

```jsx
import { Polyline } from '@uiw/react-amap';
```

### 基本用法

<!--DemoStart,bgWhite,noScroll--> 
```jsx
import React, { useState, useRef } from 'react';
import { Map, APILoader, Polyline, ToolBarControl } from '@uiw/react-amap';

const randomPath = () => ({
  lng: 60 + Math.random() * 50,
  lat: 10 + Math.random() * 40,
});

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={3}>
          <Polyline
            visiable={show}
            strokeColor="black"
            strokeOpacity={1}
            path={[
              [116.405289, 39.904987],
              [113.964458, 40.54664],
              [111.47836, 41.135964],
              [108.949297, 41.670904],
              [106.380111, 42.149509],
              [103.774185, 42.56996],
              [101.135432, 42.930601],
              [98.46826, 43.229964],
              [95.777529, 43.466798],
              [93.068486, 43.64009],
              [90.34669, 43.749086],
              [87.61792, 43.793308]
            ]}
          />
        </Map>
      </div>
    </>
  );
}

ReactDOM.render((
  <APILoader akay="1c44726c39431f704d3e25cd51381e35">
    <Example />
  </APILoader>
), _mount_);
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
