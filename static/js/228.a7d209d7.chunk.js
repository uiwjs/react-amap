"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[228],{40228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={components:{18:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var r=o(n);if(r&&r.has(t))return r.get(t);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&{}.hasOwnProperty.call(t,i)){var l=u?Object.getOwnPropertyDescriptor(t,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=t[i]}return a.default=t,r&&r.set(t,a),a}(n(87804)),a=((t=n(94689))&&t.__esModule,n(78014));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,u,i=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l=function(){var e=(0,r.useRef)(),t=u((0,r.useState)(),2),n=t[0],o=t[1],i=u((0,r.useState)("\u4e0a\u6d77\u5e02"),2),l=(i[0],i[1],u((0,r.useState)(),2)),c=l[0],f=l[1];return(0,r.useEffect)((function(){f(e.current)}),[]),r.default.createElement(r.default.Fragment,null,r.default.createElement("input",{type:"text",ref:e}),r.default.createElement("div",{style:{width:"100%"}},c&&r.default.createElement(a.AutoComplete,{input:c,onSelect:function(e){o(e),console.log("@@@@",e)}}),r.default.createElement("pre",{style:{padding:10,marginTop:10}},n?JSON.stringify(n,null,2):"{\u8bf7\u5728\u8f93\u5165\u6846\u8f93\u5165\u5185\u5bb9\uff0c\u4e0b\u62c9\u5217\u8868\u9009\u62e9...}")))};return function(){return r.default.createElement(a.APILoader,{akey:"a7a90e05a37d3f6bf76d4a9032fc9129"},r.default.createElement(l,null))}}()},data:{18:{name:18,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactDom = _interopRequireDefault(require("react-dom"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar Example = function Example() {\n  var mapRef = (0, _react.useRef)();\n  var _useState = (0, _react.useState)(),\n    _useState2 = _slicedToArray(_useState, 2),\n    data = _useState2[0],\n    setData = _useState2[1];\n  var _useState3 = (0, _react.useState)(\'\u4e0a\u6d77\u5e02\'),\n    _useState4 = _slicedToArray(_useState3, 2),\n    city = _useState4[0],\n    setCity = _useState4[1];\n  var _useState5 = (0, _react.useState)(),\n    _useState6 = _slicedToArray(_useState5, 2),\n    input = _useState6[0],\n    setInput = _useState6[1];\n  (0, _react.useEffect)(function () {\n    setInput(mapRef.current);\n  }, []);\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {\n    type: "text",\n    ref: mapRef\n  }), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\'\n    }\n  }, input && /*#__PURE__*/_react["default"].createElement(_reactAmap.AutoComplete, {\n    input: input,\n    onSelect: function onSelect(opts) {\n      setData(opts);\n      console.log(\'@@@@\', opts);\n    }\n  }), /*#__PURE__*/_react["default"].createElement("pre", {\n    style: {\n      padding: 10,\n      marginTop: 10\n    }\n  }, data ? JSON.stringify(data, null, 2) : \'{\u8bf7\u5728\u8f93\u5165\u6846\u8f93\u5165\u5185\u5bb9\uff0c\u4e0b\u62c9\u5217\u8868\u9009\u62e9...}\')));\n};\nvar Mount = function Mount() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    akey: "a7a90e05a37d3f6bf76d4a9032fc9129"\n  }, /*#__PURE__*/_react["default"].createElement(Example, null));\n};\nreturn Mount;',language:"jsx",value:"import React, { useState, useEffect, useRef } from 'react';\nimport ReactDOM from 'react-dom';\nimport { APILoader, AutoComplete } from '@uiw/react-amap';\n\nconst Example = () => {\n  const mapRef = useRef();\n  const [data, setData] = useState();\n  const [city, setCity] = useState('\u4e0a\u6d77\u5e02');\n  const [input, setInput] = useState();\n  useEffect(() => {\n    setInput(mapRef.current);\n  }, []);\n  return (\n    <>\n      <input type=\"text\" ref={mapRef} />\n      <div style={{ width: '100%' }}>\n        {input && (\n          <AutoComplete\n            input={input}\n            onSelect={(opts) => {\n              setData(opts);\n              console.log('@@@@', opts)\n            }}\n          />\n        )}\n        <pre style={{ padding: 10, marginTop: 10 }}>\n          {data ? JSON.stringify(data, null, 2) : '{\u8bf7\u5728\u8f93\u5165\u6846\u8f93\u5165\u5185\u5bb9\uff0c\u4e0b\u62c9\u5217\u8868\u9009\u62e9...}'}\n        </pre>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n);\n\nexport default Mount;"}},source:"AutoComplete \u8f93\u5165\u63d0\u793a\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-amap-auto-complete.svg)](https://www.npmjs.com/package/@uiw/react-amap-auto-complete)\n[![Downloads](https://img.shields.io/npm/dm/@uiw/react-amap-auto-complete.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-amap-auto-complete)\n\n\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u9700\u8981\u6839\u636e\u8868\u5355\u63a7\u4ef6\u76f8\u5173\u4e8b\u4ef6\u7684\u89e6\u53d1\u6765\u6267\u884c `AMap.AutoComplete` \u7684 search \u65b9\u6cd5\uff0c\u5e76\u5c06\u8fd4\u56de\u7ed3\u679c\u7ed8\u5236\u6210DOM\u663e\u793a\u5230\u9875\u9762\u4e0a\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u9ad8\u5fb7JS API\u8fd8\u63d0\u4f9b\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684UI\u6765\u5e2e\u52a9\u5f00\u53d1\u8005\u8282\u7701\u65f6\u95f4\u3001\u63d0\u5347\u6548\u7387\uff0c\u81ea\u52a8\u5728\u9875\u9762\u76f8\u5e94\u7684\u8868\u5355\u63a7\u4ef6\u4e0a\u76d1\u542c\u8f93\u5165\u5e76\u663e\u793a\u5339\u914d\u7ed3\u679c\u3002\n\n```jsx\nimport { AutoComplete } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { AutoComplete } from '@uiw/react-amap-auto-complete';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview\nimport React, { useState, useEffect, useRef } from 'react';\nimport ReactDOM from 'react-dom';\nimport { APILoader, AutoComplete } from '@uiw/react-amap';\n\nconst Example = () => {\n  const mapRef = useRef();\n  const [data, setData] = useState();\n  const [city, setCity] = useState('\u4e0a\u6d77\u5e02');\n  const [input, setInput] = useState();\n  useEffect(() => {\n    setInput(mapRef.current);\n  }, []);\n  return (\n    <>\n      <input type=\"text\" ref={mapRef} />\n      <div style={{ width: '100%' }}>\n        {input && (\n          <AutoComplete\n            input={input}\n            onSelect={(opts) => {\n              setData(opts);\n              console.log('@@@@', opts)\n            }}\n          />\n        )}\n        <pre style={{ padding: 10, marginTop: 10 }}>\n          {data ? JSON.stringify(data, null, 2) : '{\u8bf7\u5728\u8f93\u5165\u6846\u8f93\u5165\u5185\u5bb9\uff0c\u4e0b\u62c9\u5217\u8868\u9009\u62e9...}'}\n        </pre>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n);\n\nexport default Mount;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| type | \u8f93\u5165\u63d0\u793a\u65f6\u9650\u5b9aPOI\u7c7b\u578b\uff0c\u591a\u4e2a\u7c7b\u578b\u7528 `\\|` \u5206\u9694\uff0c\u76ee\u524d\u53ea\u652f\u6301Poi\u7c7b\u578b\u7f16\u7801\u5982\u201c050000\u201d \u9ed8\u8ba4\u503c\uff1a\u6240\u6709\u7c7b\u522b | `string` | - |\n| city | \u8f93\u5165\u63d0\u793a\u65f6\u9650\u5b9a\u57ce\u5e02\u3002\u53ef\u9009\u503c\uff1a\u57ce\u5e02\u540d\uff08\u4e2d\u6587\u6216\u4e2d\u6587\u5168\u62fc\uff09\u3001citycode\u3001adcode\uff1b\u9ed8\u8ba4\u503c\uff1a\u201c\u5168\u56fd\u201d | `string` | - |\n| datatype | \u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u3002\u53ef\u9009\u503c\uff1aall-\u8fd4\u56de\u6240\u6709\u6570\u636e\u7c7b\u578b\u3001poi-\u8fd4\u56dePOI\u6570\u636e\u7c7b\u578b\u3001bus-\u8fd4\u56de\u516c\u4ea4\u7ad9\u70b9\u6570\u636e\u7c7b\u578b\u3001busline-\u8fd4\u56de\u516c\u4ea4\u7ebf\u8def\u6570\u636e\u7c7b\u578b\u76ee\u524d\u6682\u65f6\u4e0d\u652f\u6301\u591a\u79cd\u7c7b\u578b | string | - |\n| citylimit | \u662f\u5426\u5f3a\u5236\u9650\u5236\u5728\u8bbe\u7f6e\u7684\u57ce\u5e02\u5185\u641c\u7d22,\u9ed8\u8ba4\u503c\u4e3a\uff1afalse\uff0ctrue\uff1a\u5f3a\u5236\u9650\u5236\u8bbe\u5b9a\u57ce\u5e02\uff0cfalse\uff1a\u4e0d\u5f3a\u5236\u9650\u5236\u8bbe\u5b9a\u57ce\u5e02 | boolean | - |\n| input | \u53ef\u9009\u53c2\u6570\uff0c\u7528\u6765\u6307\u5b9a\u4e00\u4e2ainput\u8f93\u5165\u6846\uff0c\u8bbe\u5b9a\u4e4b\u540e\uff0c\u5728input\u8f93\u5165\u6587\u5b57\u5c06\u81ea\u52a8\u751f\u6210\u4e0b\u62c9\u9009\u62e9\u5217\u8868\u3002\u652f\u6301\u4f20\u5165\u8f93\u5165\u6846DOM\u5bf9\u8c61\u7684id\u503c\uff0c\u6216\u76f4\u63a5\u4f20\u5165\u8f93\u5165\u6846\u7684DOM\u5bf9\u8c61\u3002 | string/HTMLInputElement | - |\n| output | \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u4e00\u4e2a\u73b0\u6709\u7684div\u7684id\u6216\u8005\u5143\u7d20\uff0c\u4f5c\u4e3a\u5c55\u793a\u63d0\u793a\u7ed3\u679c\u7684\u5bb9\u5668\uff0c\u5f53\u6307\u5b9a\u4e86input\u7684\u65f6\u5019\u6709\u6548\uff0c\u7f3a\u7701\u7684\u65f6\u5019\u5c06\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u663e\u793a\u7ed3\u679c\u9762\u677f | string/HTMLDivElement | - |\n| outPutDirAuto | \u9ed8\u8ba4\u4e3atrue\uff0c\u8868\u793a\u662f\u5426\u5728input\u4f4d\u4e8e\u9875\u9762\u8f83\u4e0b\u65b9\u7684\u65f6\u5019\u81ea\u52a8\u5c06\u8f93\u5165\u9762\u677f\u663e\u793a\u5728input\u4e0a\u65b9\u4ee5\u907f\u514d\u88ab\u906e\u6321 | boolean | - |\n| closeResultOnScroll | \u9875\u9762\u6eda\u52a8\u65f6\u5173\u95ed\u641c\u7d22\u7ed3\u679c\u5217\u8868\uff0c\u9ed8\u8ba4 true | boolean | - |\n| lang | \u8bbe\u7f6e\u68c0\u7d22\u8bed\u8a00\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e2d\u6587 'zh_cn' | string | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onChoose | \u9f20\u6807\u6216\u8005\u952e\u76d8\u4e0a\u4e0b\u952e\u9009\u62e9POI\u4fe1\u606f\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | `(event: AutoCompleteEventsCallback): void;` |\n| onSelect | \u9f20\u6807\u70b9\u51fb\u6216\u8005\u56de\u8f66\u9009\u4e2d\u67d0\u4e2aPOI\u4fe1\u606f\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | `(event: AutoCompleteEventsCallback): void;` |",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=228.a7d209d7.chunk.js.map