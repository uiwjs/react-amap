ToolBarControl 工具条控件
===

地图操作工具条插件。可支持方向导航、位置定位、视野级别缩放、视野级别选择等操作。继承自 AMap.Control [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)

```jsx
import { ToolBarControl } from '@uiw/react-amap';
```

### 基本用法

<!--DemoStart,bgWhite,noScroll--> 
```jsx
import React, { useState, useRef } from 'react';
import { Map, APILoader, ToolBarControl } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map>
          <ToolBarControl
            visiable={show}
            offset={new AMap.Pixel(30, 10)}
            position="RT"
          />
          {show && (
            <ToolBarControl
              visiable={show}
              offset={new AMap.Pixel(10, 10)}
              position="LT"
            />
          )}
        </Map>
      </div>
    </>
  );
}

ReactDOM.render((
  <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
    <Example />
  </APILoader>
), _mount_);
```
<!--End-->


### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| position | 控件停靠位置 `{ top: 5; left: 5; right: 5; bottom: 5 }` 或者 'LT': 左上角, 'RT': 右上角, 'LB': 左下角, 'RB': 右下角。 | `string| object` | - |
| offset | 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为 `AMap.Pixel(10,10)` | `[number, number]` | - |
