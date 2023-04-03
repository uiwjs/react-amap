AutoComplete 输入提示
===

通常情况下，开发者需要根据表单控件相关事件的触发来执行 `AMap.AutoComplete` 的 search 方法，并将返回结果绘制成DOM显示到页面上。除此之外，高德JS API还提供了一套默认的UI来帮助开发者节省时间、提升效率，自动在页面相应的表单控件上监听输入并显示匹配结果。

```jsx
import { AutoComplete } from '@uiw/react-amap';
// 或者单独安装使用
import { AutoComplete } from '@uiw/react-amap-auto-complete';
```

### 基本用法

```jsx mdx:preview
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { APILoader, AutoComplete } from '@uiw/react-amap';

const Example = () => {
  const mapRef = useRef();
  const [data, setData] = useState();
  const [city, setCity] = useState('上海市');
  const [input, setInput] = useState();
  useEffect(() => {
    setInput(mapRef.current);
  }, []);
  return (
    <>
      <input type="text" ref={mapRef} />
      <div style={{ width: '100%' }}>
        {input && (
          <AutoComplete
            input={input}
            onSelect={(opts) => {
              setData(opts);
              console.log('@@@@', opts)
            }}
          />
        )}
        <pre style={{ padding: 10, marginTop: 10 }}>
          {data ? JSON.stringify(data, null, 2) : '{请在输入框输入内容，下拉列表选择...}'}
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
| type | 输入提示时限定POI类型，多个类型用 `\|` 分隔，目前只支持Poi类型编码如“050000” 默认值：所有类别 | `string` | - |
| city | 输入提示时限定城市。可选值：城市名（中文或中文全拼）、citycode、adcode；默认值：“全国” | `string` | - |
| datatype | 返回的数据类型。可选值：all-返回所有数据类型、poi-返回POI数据类型、bus-返回公交站点数据类型、busline-返回公交线路数据类型目前暂时不支持多种类型 | string | - |
| citylimit | 是否强制限制在设置的城市内搜索,默认值为：false，true：强制限制设定城市，false：不强制限制设定城市 | boolean | - |
| input | 可选参数，用来指定一个input输入框，设定之后，在input输入文字将自动生成下拉选择列表。支持传入输入框DOM对象的id值，或直接传入输入框的DOM对象。 | string/HTMLInputElement | - |
| output | 可选参数，指定一个现有的div的id或者元素，作为展示提示结果的容器，当指定了input的时候有效，缺省的时候将自动创建一个显示结果面板 | string/HTMLDivElement | - |
| outPutDirAuto | 默认为true，表示是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡 | boolean | - |
| closeResultOnScroll | 页面滚动时关闭搜索结果列表，默认 true | boolean | - |
| lang | 设置检索语言类型，默认中文 'zh_cn' | string | - |

### 事件

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onChoose | 鼠标或者键盘上下键选择POI信息时触发此事件 | `(event: AutoCompleteEventsCallback): void;` |
| onSelect | 鼠标点击或者回车选中某个POI信息时触发此事件 | `(event: AutoCompleteEventsCallback): void;` |