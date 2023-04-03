@uiw/react-amap-require-script
===

用于加载高德地图其它 SDK 依赖，官方示例中的 css, js加载。

```jsx
import { APILoader } from '@uiw/react-amap';
// 或者单独安装使用
import { APILoader } from '@uiw/react-amap-require-script';
```

### 基本用法

```jsx mdx:preview
import React, { useState, useRef, useEffect } from 'react';
import { Map, APILoader, MassMarks, requireScript } from '@uiw/react-amap';

const Example = (props) => {
  const [show, setShow] = useState(true);
  const [points, setPoints] = useState([]);
  const map = useRef()
  const marker = useRef()
  useEffect(() => {
    if(points.length === 0) {
      requireScript('https://a.amap.com/jsapi_demos/static/citys.js', 'citys_id').then(() => {
        if(citys && Array.isArray(citys)) {
          setPoints(citys);
        }
      });
    }
  });
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={4}>
          <MassMarks
            visiable={show}
            data={points}
            onMouseMove={(evn) => {
              if (!map.current) {
                map.current = evn.target.getMap();
                if (!marker.current) {
                  marker.current = new AMap.Marker({ content: ' ', map: map.current });
                }
              }
              if (marker.current) {
                marker.current.setPosition(evn.data.lnglat);
                marker.current.setLabel({content: evn.data.name})
              }
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

### API

```typescript
/**
 * load SDK by css tag
 */
export declare function requireCss(src: string): Promise<void>;
/**
 * load SDK by script tag
 */
export declare function requireScript(src: string, id?: string): Promise<void>;
```
