"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5569],{5569:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o={components:{26:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}(n=t(4689))&&n.__esModule;var n,o=function(n,t){if(!t&&n&&n.__esModule)return n;if(null===n||"object"!=e(n)&&"function"!=typeof n)return{default:n};var o=a(t);if(o&&o.has(n))return o.get(n);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if("default"!==i&&{}.hasOwnProperty.call(n,i)){var u=l?Object.getOwnPropertyDescriptor(n,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=n[i]}return r.default=n,o&&o.set(n,r),r}(t(7804)),r=t(8014);function a(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,a,l,i=[],u=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(o=a.call(t)).done)&&(i.push(o.value),i.length!==n);u=!0);}catch(e){c=!0,r=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw r}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var u=function(){var e=l((0,o.useState)(!0),2),n=e[0],t=e[1],a=l((0,o.useState)(!1),2),i=a[0],u=a[1],c=l((0,o.useState)([[116.403322,39.920255],[116.410703,39.897555],[116.402292,39.892353],[116.389846,39.891365]]),2),d=c[0],s=c[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{onClick:function(){return t(!n)}},n?"\u9690\u85cf":"\u663e\u793a"),o.default.createElement("button",{onClick:function(){return u(!i)}},i?"\u7ed3\u675f":"\u5f00\u59cb","\u7f16\u8f91"),o.default.createElement("div",{style:{width:"100%",height:"500px"}},o.default.createElement(r.Map,{zoom:14,center:[116.400274,39.905812]},o.default.createElement(r.Polyline,{visiable:n,path:d,strokeColor:"#FF33FF",strokeWeight:6,strokeOpacity:.2,fillOpacity:.4,fillColor:"#1791fc",zIndex:50},o.default.createElement(r.PolylineEditor,{active:i,onEnd:function(e){console.log("onEnd:>>",e.target.getPath()),s(e.target.getPath())},onAdjust:function(){console.log("onAdjust:>>")},onAdd:function(){console.log("onAdd:>>")},onAddnode:function(){console.log("onAddnode:>>")},onRemovenode:function(){console.log("onRemovenode:>>")}})))))};return function(){return o.default.createElement(r.APILoader,{akey:"a7a90e05a37d3f6bf76d4a9032fc9129",plugin:"AMap.PolylineEditor"},o.default.createElement(u,null))}}()},data:{26:{name:26,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _reactDom = _interopRequireDefault(require("react-dom"));\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar Example = function Example() {\n  // \u591a\u8fb9\u5f62\u8f6e\u5ed3\u7ebf\u7684\u8282\u70b9\u5750\u6807\u6570\u7ec4\n  var path = [[116.403322, 39.920255], [116.410703, 39.897555], [116.402292, 39.892353], [116.389846, 39.891365]];\n  var _useState = (0, _react.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    show = _useState2[0],\n    setShow = _useState2[1];\n  var _useState3 = (0, _react.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    active = _useState4[0],\n    setActive = _useState4[1];\n  var _useState5 = (0, _react.useState)(path),\n    _useState6 = _slicedToArray(_useState5, 2),\n    polylinePath = _useState6[0],\n    setPolylinePath = _useState6[1];\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setShow(!show);\n    }\n  }, show ? \'\u9690\u85cf\' : \'\u663e\u793a\'), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setActive(!active);\n    }\n  }, active ? \'\u7ed3\u675f\' : \'\u5f00\u59cb\', "\\u7F16\\u8F91"), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\',\n      height: \'500px\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    zoom: 14,\n    center: [116.400274, 39.905812]\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Polyline, {\n    visiable: show,\n    path: polylinePath,\n    strokeColor: "#FF33FF",\n    strokeWeight: 6,\n    strokeOpacity: 0.2,\n    fillOpacity: 0.4,\n    fillColor: "#1791fc",\n    zIndex: 50\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.PolylineEditor, {\n    active: active,\n    onEnd: function onEnd(e) {\n      console.log(\'onEnd:>>\', e.target.getPath());\n      setPolylinePath(e.target.getPath());\n    },\n    onAdjust: function onAdjust() {\n      console.log(\'onAdjust:>>\');\n    },\n    onAdd: function onAdd() {\n      console.log(\'onAdd:>>\');\n    },\n    onAddnode: function onAddnode() {\n      console.log(\'onAddnode:>>\');\n    },\n    onRemovenode: function onRemovenode() {\n      console.log(\'onRemovenode:>>\');\n    }\n  })))));\n};\nvar Mount = function Mount() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    akey: "a7a90e05a37d3f6bf76d4a9032fc9129",\n    plugin: "AMap.PolylineEditor"\n  }, /*#__PURE__*/_react["default"].createElement(Example, null));\n};\nreturn Mount;',language:"jsx",value:"import ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Polyline, PolylineEditor } from '@uiw/react-amap';\n\nconst Example = () => {\n  // \u591a\u8fb9\u5f62\u8f6e\u5ed3\u7ebf\u7684\u8282\u70b9\u5750\u6807\u6570\u7ec4\n  const path = [\n    [116.403322, 39.920255],\n    [116.410703, 39.897555],\n    [116.402292, 39.892353],\n    [116.389846, 39.891365],\n  ];\n  const [show, setShow] = useState(true);\n  const [active, setActive] = useState(false);\n  const [polylinePath,setPolylinePath]=useState(path);\n  \n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <button onClick={() => setActive(!active)}>\n        {active ? '\u7ed3\u675f' : '\u5f00\u59cb'}\u7f16\u8f91\n      </button>\n      <div style={{ width: '100%', height: '500px' }}>\n        <Map zoom={14} center={[116.400274, 39.905812]}>\n          <Polyline\n            visiable={show}\n            path={polylinePath}\n            strokeColor=\"#FF33FF\"\n            strokeWeight={6}\n            strokeOpacity={0.2}\n            fillOpacity={0.4}\n            fillColor=\"#1791fc\"\n            zIndex={50}\n          >\n            <PolylineEditor\n              active={active}\n              onEnd={(e) => {\n                console.log('onEnd:>>',e.target.getPath());\n                setPolylinePath(e.target.getPath())\n              }}\n              onAdjust={() => {\n                console.log('onAdjust:>>')\n              }}\n              onAdd={() => {\n                console.log('onAdd:>>')\n              }}\n              onAddnode={() => {\n                console.log('onAddnode:>>')\n              }}\n              onRemovenode={() => {\n                console.log('onRemovenode:>>')\n              }}\n            />\n          </Polyline>\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\" plugin=\"AMap.PolylineEditor\">\n    <Example />\n  </APILoader>\n);\n\nexport default Mount;"}},source:"PolylineEditor \u7f16\u8f91\u5668\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polyline-editor.svg)](https://www.npmjs.com/package/@uiw/react-amap-polyline-editor)\n[![Downloads](https://img.shields.io/npm/dm/@uiw/react-amap-polyline-editor.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-amap-polyline-editor)\n\nPolyline \u7f16\u8f91\u5668\uff0c\u6b64\u7ec4\u4ef6\u53ea\u652f\u6301AMap JS API v2.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002\u60f3\u5728\u4f4e\u7248\u672c AMap \uff08\u5982 V1.4.15\u53ca\u4ee5\u4e0b\uff09\u4e2d\u4f7f\u7528\u62c6\u7ebf\u7f16\u8f91\u529f\u80fd\u53ef\u4ee5\u67e5\u770b [PolyEditor \u7f16\u8f91\u5668](/react-amap#/poly-editor)\u3002[AMap API](https://lbs.amap.com/api/jsapi-v2/documentation#polylineeditor)\u3002\n\n```jsx\nimport { PolylineEditor } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { PolylineEditor } from '@uiw/react-amap-polyline-editor';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u6ce8\u610f\uff0c\u9700\u8981\u52a0\u8f7d `<APILoader plugin=\"AMap.PolylineEditor\">`\uff0c\u9700\u8981\u52a0\u8f7d `AMap.PolylineEditor`\x3c!--rehype:style=background: #ffe3da;color: #ff5722;--\x3e \u63d2\u4ef6\uff0c\u5982\u679c\u70b9\u51fb\u8fdb\u5165\u5f53\u524d\u9875\u9762\uff0c\u9700\u8981 `\u5237\u65b0`\x3c!--rehype:style=background: #e91e63;color: #fff;--\x3e \u9875\u9762\u3002\n\n```jsx\n<APILoader plugin=\"AMap.PolylineEditor\">\n```\n\x3c!--rehype:style=background: #fff3b7;--\x3e\n\n\x3c!--rehype:--\x3e\n```jsx mdx:preview\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Polyline, PolylineEditor } from '@uiw/react-amap';\n\nconst Example = () => {\n  // \u591a\u8fb9\u5f62\u8f6e\u5ed3\u7ebf\u7684\u8282\u70b9\u5750\u6807\u6570\u7ec4\n  const path = [\n    [116.403322, 39.920255],\n    [116.410703, 39.897555],\n    [116.402292, 39.892353],\n    [116.389846, 39.891365],\n  ];\n  const [show, setShow] = useState(true);\n  const [active, setActive] = useState(false);\n  const [polylinePath,setPolylinePath]=useState(path);\n  \n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <button onClick={() => setActive(!active)}>\n        {active ? '\u7ed3\u675f' : '\u5f00\u59cb'}\u7f16\u8f91\n      </button>\n      <div style={{ width: '100%', height: '500px' }}>\n        <Map zoom={14} center={[116.400274, 39.905812]}>\n          <Polyline\n            visiable={show}\n            path={polylinePath}\n            strokeColor=\"#FF33FF\"\n            strokeWeight={6}\n            strokeOpacity={0.2}\n            fillOpacity={0.4}\n            fillColor=\"#1791fc\"\n            zIndex={50}\n          >\n            <PolylineEditor\n              active={active}\n              onEnd={(e) => {\n                console.log('onEnd:>>',e.target.getPath());\n                setPolylinePath(e.target.getPath())\n              }}\n              onAdjust={() => {\n                console.log('onAdjust:>>')\n              }}\n              onAdd={() => {\n                console.log('onAdd:>>')\n              }}\n              onAddnode={() => {\n                console.log('onAddnode:>>')\n              }}\n              onRemovenode={() => {\n                console.log('onRemovenode:>>')\n              }}\n            />\n          </Polyline>\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\" plugin=\"AMap.PolylineEditor\">\n    <Example />\n  </APILoader>\n);\n\nexport default Mount;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| active | \u662f\u5426\u5f00\u542f\u7f16\u8f91\u529f\u80fd\u3002 | `boolean` | - |\n| onAddnode | \u589e\u52a0\u4e00\u4e2a\u8282\u70b9\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | `(data :{target: Polyline, lnglat: Lnglat, pixel: Pixel}): void;` |\n| onRemovenode | \u79fb\u9664\u4e00\u4e2a\u8282\u70b9\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | `(data :{target: Polyline, lnglat: Lnglat, pixel: Pixel}): void;` |\n| onAdjust | \u8c03\u6574\u6298\u7ebf\u4e0a\u67d0\u4e2a\u70b9\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | `(data :{target: Polyline, lnglat: Lnglat, pixel: Pixel}): void;` |\n| onAdd | \u521b\u5efa\u4e00\u4e2a\u8986\u76d6\u7269\u4e4b\u540e\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0ctarget\u5373\u4e3a\u521b\u5efa\u5bf9\u8c61\u3002\u5f53editor\u7f16\u8f91\u5bf9\u8c61\u4e3a\u7a7a\u65f6\uff0c\u8c03\u7528open\u63a5\u53e3\uff0c\u518d\u70b9\u51fb\u4e00\u6b21\u5c4f\u5e55\u5c31\u4f1a\u521b\u5efa\u65b0\u7684\u8986\u76d6\u7269\u5bf9\u8c61 | `(data :{target: Polyline}): void;` |\n| onEnd | \u8c03\u7528close\u4e4b\u540e\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0ctarget\u5373\u4e3a\u7f16\u8f91\u540e\u7684\u8986\u76d6\u7269\u5bf9\u8c61 | `(data :{target: Polyline}): void;` |",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=5569.b16357a8.chunk.js.map