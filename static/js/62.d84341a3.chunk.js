(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[62],{787:function(n,e,t){"use strict";t.r(e),e.default="Rectangle \u5706\u5f62\u7ec4\u4ef6\n===\n\n\u6784\u9020\u5706\u5f62\u5bf9\u8c61\uff0c\u901a\u8fc7 RectangleOptions \u6307\u5b9a\u591a\u8fb9\u5f62\u6837\u5f0f\n\n```jsx\nimport { Rectangle } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { Rectangle } from '@uiw/react-amap-rectangle';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Rectangle } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  const southWest = new AMap.LngLat(108.245573, 39.027206);\n  const northEast = new AMap.LngLat(116.485319, 26.666506);\n  const bounds = new AMap.Bounds(southWest, northEast);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map zoom={4}>\n          <Rectangle\n            visiable={show}\n            bounds={bounds}\n            strokeColor=\"red\"\n            strokeWeight={6}\n            strokeOpacity={0.5}\n            strokeDasharray={[30, 10]}\n            // strokeStyle\u8fd8\u652f\u6301 solid\n            strokeStyle=\"dashed\"\n            fillColor=\"blue\"\n            fillOpacity={0.5}\n            cursor=\"pointer\"\n            zIndex={50}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\n### Props\n\n[\u66f4\u591a\u53c2\u6570\u8bbe\u7f6e](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L619-L652)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| bounds | \u77e9\u5f62\u8986\u76d6\u7269\u7684\u53e0\u52a0\u987a\u5e8f\u3002\u5730\u56fe\u4e0a\u5b58\u5728\u591a\u4e2a\u77e9\u5f62\u8986\u76d6\u7269\u53e0\u52a0\u65f6\uff0c\u901a\u8fc7\u8be5\u5c5e\u6027\u4f7f\u7ea7\u522b\u8f83\u9ad8\u7684\u77e9\u5f62\u8986\u76d6\u7269\u5728\u4e0a\u5c42\u663e\u793a | `Bounds` | `10` |\n\n### \u4e8b\u4ef6\n\n[\u4e8b\u4ef6\u7c7b\u578b\u6587\u6863](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L653-L680)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onClick | \u9f20\u6807\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onDblClick | \u9f20\u6807\u5de6\u952e\u53cc\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onRightClick | \u53f3\u952e\u5355\u51fb | `(event: MapsEvent): void;` |\n| onHide | \u9690\u85cf | `(event: { type: string; target: any }): void;` |\n| onShow | \u663e\u793a | `(event: { type: string; target: any }): void;` |\n| onMouseDown | \u9f20\u6807\u6309\u4e0b | `(event: MapsEvent): void;` |\n| onMouseUp | \u9f20\u6807\u62ac\u8d77 | `(event: MapsEvent): void;` |\n| onMouseOver | \u9f20\u6807\u7ecf\u8fc7 | `(event: MapsEvent): void;` |\n| onMouseOut | \u9f20\u6807\u79fb\u51fa | `(event: MapsEvent): void;` |\n| onChange | \u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6 | `(event: { type: string; target: any }): void;` |\n| onTouchStart | \u89e6\u6478\u5f00\u59cb\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onTouchMove | \u89e6\u6478\u79fb\u52a8\u8fdb\u884c\u4e2d\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onTouchEnd | \u89e6\u6478\u7ed3\u675f\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |"}}]);
//# sourceMappingURL=62.d84341a3.chunk.js.map