"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[188],{10188:(e,r,n)=>{n.r(r),n.d(r,{default:()=>t});const t={components:{20:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}(r=n(94689))&&r.__esModule;var r,t=function(r,n){if(!n&&r&&r.__esModule)return r;if(null===r||"object"!=e(r)&&"function"!=typeof r)return{default:r};var t=o(n);if(t&&t.has(r))return t.get(r);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in r)if("default"!==l&&{}.hasOwnProperty.call(r,l)){var c=i?Object.getOwnPropertyDescriptor(r,l):null;c&&(c.get||c.set)?Object.defineProperty(a,l,c):a[l]=r[l]}return a.default=r,t&&t.set(r,a),a}(n(87804)),a=n(78014);function o(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:r})(e)}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=o.call(n)).done)&&(l.push(t.value),l.length!==r);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return l(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}var c=function(){var e=i((0,t.useState)(!0),2),r=e[0],n=e[1];return t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{onClick:function(){return n(!r)}},r?"\u9690\u85cf":"\u663e\u793a"),t.default.createElement("div",{style:{width:"100%",height:"400px"}},t.default.createElement(a.Map,{zoom:4,center:[116.400274,39.905812]},t.default.createElement(a.CircleMarker,{center:new AMap.LngLat(116.407394,39.904211),visible:r,radius:10+10*Math.random(),strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5,zIndex:10,bubble:!0,cursor:"pointer",clickable:!0}),t.default.createElement(a.CircleMarker,{center:new AMap.LngLat(113.26641,23.132324),visible:r,radius:10+10*Math.random(),strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5,zIndex:10,bubble:!0,cursor:"pointer",clickable:!0}),t.default.createElement(a.CircleMarker,{center:new AMap.LngLat(112.562678,37.873499),visible:r,radius:10+10*Math.random(),strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5,zIndex:10,bubble:!0,cursor:"pointer",clickable:!0}),t.default.createElement(a.CircleMarker,{center:new AMap.LngLat(121.473662,31.230372),visible:r,radius:10+10*Math.random(),strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5,zIndex:10,bubble:!0,cursor:"pointer",clickable:!0}),t.default.createElement(a.CircleMarker,{center:new AMap.LngLat(117.329949,31.733806),visible:r,radius:10+10*Math.random(),strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5,zIndex:10,bubble:!0,cursor:"pointer",clickable:!0}))))};return function(){return t.default.createElement(a.APILoader,{akey:"a7a90e05a37d3f6bf76d4a9032fc9129"},t.default.createElement(c,null))}}()},data:{20:{name:20,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _reactDom = _interopRequireDefault(require("react-dom"));\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar Example = function Example() {\n  var _useState = (0, _react.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    show = _useState2[0],\n    setShow = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setShow(!show);\n    }\n  }, show ? \'\u9690\u85cf\' : \'\u663e\u793a\'), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\',\n      height: \'400px\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    zoom: 4,\n    center: [116.400274, 39.905812]\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.CircleMarker, {\n    center: new AMap.LngLat(116.407394, 39.904211),\n    visible: show,\n    radius: 10 + Math.random() * 10,\n    strokeColor: "#fff",\n    strokeWeight: 2,\n    strokeOpacity: 0.5,\n    fillColor: "rgba(0,0,255,1)",\n    fillOpacity: 0.5,\n    zIndex: 10,\n    bubble: true,\n    cursor: "pointer",\n    clickable: true\n  }), /*#__PURE__*/_react["default"].createElement(_reactAmap.CircleMarker, {\n    center: new AMap.LngLat(113.26641, 23.132324),\n    visible: show,\n    radius: 10 + Math.random() * 10,\n    strokeColor: "#fff",\n    strokeWeight: 2,\n    strokeOpacity: 0.5,\n    fillColor: "rgba(0,0,255,1)",\n    fillOpacity: 0.5,\n    zIndex: 10,\n    bubble: true,\n    cursor: "pointer",\n    clickable: true\n  }), /*#__PURE__*/_react["default"].createElement(_reactAmap.CircleMarker, {\n    center: new AMap.LngLat(112.562678, 37.873499),\n    visible: show,\n    radius: 10 + Math.random() * 10,\n    strokeColor: "#fff",\n    strokeWeight: 2,\n    strokeOpacity: 0.5,\n    fillColor: "rgba(0,0,255,1)",\n    fillOpacity: 0.5,\n    zIndex: 10,\n    bubble: true,\n    cursor: "pointer",\n    clickable: true\n  }), /*#__PURE__*/_react["default"].createElement(_reactAmap.CircleMarker, {\n    center: new AMap.LngLat(121.473662, 31.230372),\n    visible: show,\n    radius: 10 + Math.random() * 10,\n    strokeColor: "#fff",\n    strokeWeight: 2,\n    strokeOpacity: 0.5,\n    fillColor: "rgba(0,0,255,1)",\n    fillOpacity: 0.5,\n    zIndex: 10,\n    bubble: true,\n    cursor: "pointer",\n    clickable: true\n  }), /*#__PURE__*/_react["default"].createElement(_reactAmap.CircleMarker, {\n    center: new AMap.LngLat(117.329949, 31.733806),\n    visible: show,\n    radius: 10 + Math.random() * 10,\n    strokeColor: "#fff",\n    strokeWeight: 2,\n    strokeOpacity: 0.5,\n    fillColor: "rgba(0,0,255,1)",\n    fillOpacity: 0.5,\n    zIndex: 10,\n    bubble: true,\n    cursor: "pointer",\n    clickable: true\n  }))));\n};\nvar Mount = function Mount() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    akey: "a7a90e05a37d3f6bf76d4a9032fc9129"\n  }, /*#__PURE__*/_react["default"].createElement(Example, null));\n};\nreturn Mount;',language:"jsx",value:"import ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, CircleMarker } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n   <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '400px' }}>\n        <Map zoom={4} center={[116.400274, 39.905812]}>\n          <CircleMarker\n            center={new AMap.LngLat(116.407394, 39.904211)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(113.26641, 23.132324)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(112.562678, 37.873499)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(121.473662, 31.230372)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(117.329949, 31.733806)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n);\n\nexport default Mount;"}},source:"CircleMarker \u5706\u70b9\u6807\u8bb0\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-amap-circle-marker.svg)](https://www.npmjs.com/package/@uiw/react-amap-circle-marker)\n[![Downloads](https://img.shields.io/npm/dm/@uiw/react-amap-circle-marker.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-amap-circle-marker)\n\n\u6784\u9020\u4e00\u4e2a\u5706\u5f62\u8986\u76d6\u7269\u3002\u53ef\u76f4\u63a5\u6ee1\u8db3\u521b\u5efa\u5706\u5f62\u6807\u6ce8\u7684\u9700\u8981\u3002\n\nAMap.CircleMarker \u7c7b\u4e0e AMap.Circle \u7c7b\u5747\u4e3a\u5728\u5730\u56fe\u4e0a\u7ed8\u5236\u5706\u5f62\u8986\u76d6\u7269\u7684\u65b9\u6cd5\u3002\u8fd9\u4e24\u7c7b\u7684\u6839\u672c\u4e0d\u540c\u5728\u4e8e AMap.Circle \u4e3a\u77e2\u91cf\u56fe\u5f62\u7c7b\uff0c\u968f\u5730\u56fe\u7684\u7f29\u653e\u4f1a\u6539\u53d8\u5927\u5c0f\uff1b\u800c AMap.CircleMarker \u7c7b\u5219\u4e0d\u4f1a\u968f\u56fe\u9762\u7f29\u653e\u800c\u6539\u53d8\u3002\n\n```jsx\nimport { CircleMarker } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { CircleMarker } from '@uiw/react-amap-circle-marker';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, CircleMarker } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n   <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '400px' }}>\n        <Map zoom={4} center={[116.400274, 39.905812]}>\n          <CircleMarker\n            center={new AMap.LngLat(116.407394, 39.904211)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(113.26641, 23.132324)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(112.562678, 37.873499)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(121.473662, 31.230372)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n           <CircleMarker\n            center={new AMap.LngLat(117.329949, 31.733806)}\n            visible={show}\n            radius={10+Math.random()*10}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            strokeOpacity={0.5}\n            fillColor='rgba(0,0,255,1)'\n            fillOpacity={0.5}\n            zIndex={10}\n            bubble={true}\n            cursor='pointer'\n            clickable= {true}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n);\n\nexport default Mount;\n```\n\n### Props\n\n[\u66f4\u591a\u53c2\u6570\u8bbe\u7f6e](https://github.com/uiwjs/react-amap/blob/92eee3a6038b062352939d71aafc15b541c144ef/src/types/overlay.d.ts#L529-L555)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| visible | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| center | \u5706\u5fc3\u4f4d\u7f6e | `LngLat` | - |\n| radius | \u5706\u534a\u5f84\uff0c\u5355\u4f4d:px \u6700\u5927\u503c64 | `number` | - |\n| zIndex | \u591a\u8fb9\u5f62\u8986\u76d6\u7269\u7684\u53e0\u52a0\u987a\u5e8f\u3002\u5730\u56fe\u4e0a\u5b58\u5728\u591a\u4e2a\u591a\u8fb9\u5f62\u8986\u76d6\u7269\u53e0\u52a0\u65f6\uff0c\u901a\u8fc7\u8be5\u5c5e\u6027\u4f7f\u7ea7\u522b\u8f83\u9ad8\u7684\u591a\u8fb9\u5f62\u8986\u76d6\u7269\u5728\u4e0a\u5c42\u663e\u793a | `number` | 10 |\n| bubble | \u662f\u5426\u5c06\u8986\u76d6\u7269\u7684\u9f20\u6807\u6216touch\u7b49\u4e8b\u4ef6\u5192\u6ce1\u5230\u5730\u56fe\u4e0a\uff08\u81eav1.3 \u65b0\u589e\uff09 | `boolean` | false |\n| cursor | \u6307\u5b9a\u9f20\u6807\u60ac\u505c\u65f6\u7684\u9f20\u6807\u6837\u5f0f\uff0c\u81ea\u5b9a\u4e49cursor\uff0cIE\u4ec5\u652f\u6301cur/ani/ico\u683c\u5f0f\uff0cOpera\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49cursor | `string` | - |\n| strokeColor | \u8f6e\u5ed3\u7ebf\u989c\u8272\uff0c\u4f7f\u752816\u8fdb\u5236\u989c\u8272\u4ee3\u7801\u8d4b\u503c | `string` | #00D3FC |\n| strokeOpacity | \u8f6e\u5ed3\u7ebf\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f4 [0,1] | `number` | 0.9 |\n| strokeWeight | \u8f6e\u5ed3\u7ebf\u5bbd\u5ea6 | `number` | - |\n| fillColor | \u591a\u8fb9\u5f62\u586b\u5145\u989c\u8272\uff0c\u4f7f\u752816\u8fdb\u5236\u989c\u8272\u4ee3\u7801\u8d4b\u503c | `string` | #00B2D5 |\n| fillOpacity | \u591a\u8fb9\u5f62\u586b\u5145\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f4 [0,1] | `number` | 0.5 |\n| draggable | \u8bbe\u7f6e\u591a\u8fb9\u5f62\u662f\u5426\u53ef\u62d6\u62fd\u79fb\u52a8 | `boolean` | false |\n| extData | \u7528\u6237\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u652f\u6301JavaScript API\u4efb\u610f\u6570\u636e\u7c7b\u578b\uff0c\u5982Polygon\u7684id\u7b49 | `any` | - |\n\n### \u4e8b\u4ef6\n\n[\u4e8b\u4ef6\u7c7b\u578b\u6587\u6863](https://github.com/uiwjs/react-amap/blob/92eee3a6038b062352939d71aafc15b541c144ef/src/types/overlay.d.ts#L503-L527)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onHide | \u9690\u85cf | `(): void;` |\n| onShow | \u663e\u793a | `(): void;` |\n| onMouseover | \u9f20\u6807\u7ecf\u8fc7 | `(event: MapsEvent): void;` |\n| onTouchend | \u89e6\u6478\u7ed3\u675f\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onClick | \u9f20\u6807\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onTouchmove | \u89e6\u6478\u79fb\u52a8\u8fdb\u884c\u4e2d\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onRightclick | \u9f20\u6807\u53f3\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onMouseup | \u9f20\u6807\u62ac\u8d77 | `(event: MapsEvent): void;` |\n| onMouseout | \u9f20\u6807\u79fb\u51fa | `(event: MapsEvent): void;` |\n| onTouchstart | \u89e6\u6478\u5f00\u59cb\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onMousedown | \u9f20\u6807\u6309\u4e0b | `(event: MapsEvent): void;` |\n| onDblclick | \u9f20\u6807\u5de6\u952e\u53cc\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=188.f599edc1.chunk.js.map