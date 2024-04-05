"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[905],{905:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t={components:{39:function(){var e,a=(e=n(7804))&&e.__esModule?e:{default:e},t=n(8014);return function(){return a.default.createElement(t.APILoader,{aakey:"a7a90e05a37d3f6bf76d4a9032fc9129"},a.default.createElement(t.Map,{style:{height:300}}))}}(),54:function(){var e=t(n(7804)),a=(t(n(4689)),n(8014));function t(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(a.APILoader,{akey:"a7a90e05a37d3f6bf76d4a9032fc9129"},e.default.createElement(a.Map,{style:{height:100,marginBottom:10}}),e.default.createElement("div",{style:{border:"1px solid red"}},e.default.createElement(a.Map,{style:{height:100}})))}}()},data:{39:{name:39,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    aakey: "a7a90e05a37d3f6bf76d4a9032fc9129"\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    style: {\n      height: 300\n    }\n  }));\n};\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <APILoader aakey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Map style={{ height: 300 }}/>\n  </APILoader>\n);\n\nexport default Demo"},54:{name:54,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactDom = _interopRequireDefault(require("react-dom"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    akey: "a7a90e05a37d3f6bf76d4a9032fc9129"\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    style: {\n      height: 100,\n      marginBottom: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      border: \'1px solid red\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    style: {\n      height: 100\n    }\n  })));\n};\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Map style={{ height: 100, marginBottom: 10 }} />\n    <div style={{ border: '1px solid red' }}>\n      <Map style={{ height: 100 }} />\n    </div>\n  </APILoader>\n);\n\nexport default Demo"}},source:"APILoader\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-amap-api-loader.svg)](https://www.npmjs.com/package/@uiw/react-amap-api-loader)\n[![Downloads](https://img.shields.io/npm/dm/@uiw/react-amap-api-loader.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-amap-api-loader)\n\n\u7528\u4e8e\u52a0\u8f7d\u9ad8\u5fb7\u5730\u56fe SDK \u4f9d\u8d56\uff0c\u52a0\u8f7d\u5b8c\u6210\uff0c\u5168\u5c40\u5c06\u4f1a\u6709 **`window.AMap`** \u5bf9\u8c61\u3002\n\n```jsx\nimport { APILoader } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { APILoader } from '@uiw/react-amap-api-loader';\n```\n\n~~`v4`~~ \u5347\u7ea7\u5230 `v5`\uff0c`APILoader` \u4e3b\u8981\u662f\u5bf9 `APILoader` \u505a\u4e86\u5347\u7ea7\n\n```diff\n<APILoader\n-  akay\n-  protocol\n-  hostAndPath\n-  callbackName\n-  plugin\n-  disableScripts\n+  akey\n+  plugins\n+  AMapUI\n+  Loca\n>\n  <Map style={{ height: 100 }} />\n</APILoader>\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\nMap \u7684\u7236\u7ec4\u4ef6\u5fc5\u987b\u5177\u6709\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff1b\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <APILoader aakey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Map style={{ height: 300 }}/>\n  </APILoader>\n);\n\nexport default Demo\n```\n\n### \u591a\u4e2a\u5730\u56fe\n\n```jsx mdx:preview\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Map style={{ height: 100, marginBottom: 10 }} />\n    <div style={{ border: '1px solid red' }}>\n      <Map style={{ height: 100 }} />\n    </div>\n  </APILoader>\n);\n\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| version | SDK \u7248\u672c | string | `2.0` |\n| ~~akay~~ => `akey` | **`\u5fc5\u586b`** `disableScripts=true` \u65f6**\u9009\u586b** \u60a8\u9700\u5148[\u7533\u8bf7\u5bc6\u94a5\uff08ak\uff09](https://lbs.amap.com/api/javascript-api/guide/abc/prepare)\u624d\u53ef\u4f7f\u7528\u8be5\u670d\u52a1\u3002\u26a0\ufe0f \u6ce8\u610f\u7533\u8bf7 `Web\u7aef(JS API)` | string | - |\n| ~~protocol~~ | \u534f\u8bae\uff0c\u9ed8\u8ba4\u662f\u6839\u636e\u5f53\u524d\u7f51\u7ad9\u534f\u8bae\u7684 | `http`/`https` | `window.location.protocol` |\n| ~~hostAndPath~~ | \u8bf7\u6c42 SDK \u7684\u524d\u534a\u90e8\u5206 | string | `webapi.amap.com/maps` |\n| ~~callbackName~~ | \u56de\u8c03\u51fd\u6570 | string | `load_amap_sdk` |\n| ~~plugin~~ | \u52a0\u8f7d\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u63d2\u4ef6 `AMap.ToolBar,AMap.Driving` | string | `-` |\n| ~~disableScripts~~ | \u7981\u7528 `SDK` \u52a0\u8f7d | boolean | `-` |\n\n```typescript\nimport { PropsWithChildren } from 'react';\nexport type APILoaderConfig = PropsWithChildren<{\n  /**\n   * key \u5bc6\u94a5\n   * \u60a8\u9700\u5148[\u7533\u8bf7\u5bc6\u94a5(ak)](https://lbs.amap.com/dev/key/app)\u3002\u5f00\u53d1\u6587\u6863\u8bf4\u660e\u5730\u5740\uff1ahttps://lbs.amap.com/api/javascript-api/guide/abc/prepare\n   *\n   * 1. \u9996\u5148\uff0c[\u6ce8\u518c\u5f00\u53d1\u8005\u8d26\u53f7](https://lbs.amap.com/dev/id/newuser)\uff0c\u6210\u4e3a\u9ad8\u5fb7\u5f00\u653e\u5e73\u53f0\u5f00\u53d1\u8005\n   * 2. \u767b\u9646\u4e4b\u540e\uff0c\u5728\u8fdb\u5165\u300c\u5e94\u7528\u7ba1\u7406\u300d \u9875\u9762\u300c\u521b\u5efa\u65b0\u5e94\u7528\u300d\n   * 3. \u4e3a\u5e94\u7528[\u6dfb\u52a0 Key](https://lbs.amap.com/dev/key/app)\uff0c\u300c\u670d\u52a1\u5e73\u53f0\u300d\u4e00\u9879\u8bf7\u9009\u62e9\u300c Web \u7aef ( JSAPI ) \u300d\n   *\n   */\n  akey?: string;\n  /**\n   * SDK \u5305\u7248\u672c\uff0c\u6307\u5b9a\u8981\u52a0\u8f7d\u7684 JSAPI \u7684\u7248\u672c\uff0c\u7f3a\u7701\u65f6\u9ed8\u8ba4\u4e3a 1.4.15\n   * @default 1.4.15\n   */\n  version?: string;\n  /**\n   * \u52a0\u8f7d\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u63d2\u4ef6\n   * @example `['AMap.ToolBar', 'AMap.Driving']`\n   */\n  plugins?: string[];\n  /** \u662f\u5426\u52a0\u8f7d AMapUI\uff0c\u7f3a\u7701\u4e0d\u52a0\u8f7d */\n  AMapUI?: {\n    /** AMapUI \u7f3a\u7701 1.1 */\n    version?: string;\n    /** \u9700\u8981\u52a0\u8f7d\u7684 AMapUI ui\u63d2\u4ef6 */\n    plugins?: string[];\n  };\n  /** \u662f\u5426\u52a0\u8f7d Loca\uff0c \u7f3a\u7701\u4e0d\u52a0\u8f7d */\n  Loca?: {\n    /** Loca \u7248\u672c\uff0c\u7f3a\u7701 1.3.2 */\n    version?: string;\n  };\n}>;\nexport interface APILoaderProps extends APILoaderConfig { }\n```",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=905.104b3e89.chunk.js.map