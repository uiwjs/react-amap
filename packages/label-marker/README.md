LabelMarker 海量标注 
===

当需要在地图添加千级以上的点标记时，LabelMarker 是代替 Marker 的更好选择。不同于 MassMarks ，LabelMarker 不仅可以绘制图标，还可以为图标添加文字信息，且万级以上数据也具有较好性能，配置也更加灵活。

另外，LabelMarker 之间还支持避让功能，JSAPI 2.0 版本还支持地图标注避让 LabelMarker，可以让您的 marker 更加明显。

```jsx
import { LabelMarker } from '@uiw/react-amap';
// 或者单独安装使用
import { LabelMarker } from '@uiw/react-amap-marker';
```

### 基本用法

```jsx mdx:preview
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, LabelMarker } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={4}>
          <LabelMarker visiable={show} name= "标注2" position={[116.466994, 39.984904]} />
          <LabelMarker visiable={show} name= "标注1" position={[116.466994, 39.984904]} />
          <LabelMarker visiable={show} name= "标注3" position={new AMap.LngLat(119.306239,26.075302)} />

          
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

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L1308-L1337)

| 参数     | 说明                                                                                       | 类型                                  | 默认值    |
| -------- | ------------------------------------------------------------------------------------------ | ------------------------------------- | --------- |
| visiable | 覆盖物是否可见。                                                                           | `boolean`                             | -         |
| name     | 标注名称，作为标注标识，显示文字内容请设置 opts.text.content                               | `string`                              | -         |
| position | 点标记在地图上显示的位置，默认为地图中心点                                                 | `(Vector                              | LngLat)`  | - |
| zooms    | 海量点显示层级范围，范围外不显示。                                                         | `Vector`                              | `[2, 20]` |
| opacity  | 标注透明度                                                                                 | `number`                              | 1         |
| rank     | 避让优先级，获取标注的优先级，该优先级用于labelsLayer支持避让时，rank 大的值避让低的标注。 | `number`                              | 1         |
| extData  | 用户自定义类型数据，可将自定义数据保存在该属性上，方便后续操作使用                         | `any`                                 | -         |
| icon     | 标注图标设置                                                                               | `LabelMarkerOptions.TextStyleOptions` | -         |
| text     | 标注文本设置                                                                               | `AMap.IconOptions`                    | -         |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L1339-L377)

| 参数         | 说明                                     | 类型                        |
| ------------ | ---------------------------------------- | --------------------------- |
| onMouseDown  | 鼠标在点标记上按下时触发事件             | `(event: MapsEvent): void;` |
| onMouseUp    | 鼠标在点标记上按下后抬起时触发事件       | `(event: MapsEvent): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备       | `(event: MapsEvent): void;` |
| onTouchMove  | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchEnd   | 触摸结束时触发事件，仅适用移动设备       | `(event: MapsEvent): void;` |
| onClick      | 鼠标左键单击事件                         | `(event: MapsEvent): void;` |
| onMouseMove  | 鼠标移动                                 | `(event: MapsEvent): void;` |
| onMouseOver  | 鼠标移近点标记时触发事件                 | `(event: MapsEvent): void;` |
| onMouseOut   | 鼠标移出点标记时触发事件                 | `(event: MapsEvent): void;` |