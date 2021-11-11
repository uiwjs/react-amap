(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[56],{775:function(n,e,o){"use strict";o.r(e),e.default="Map \u7ec4\u4ef6\n===\n\nMap \u7ec4\u4ef6\u662f\u5176\u4ed6\u7ec4\u4ef6\u7684\u57fa\u7840\uff0cMap \u7ec4\u4ef6\u4f1a\u7ed9\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u6ce8\u5165\u4e09\u4e2a\u5c5e\u6027 **`map`**\uff0c**`container`** \u548c **`AMap`**\uff0c\n\n\u26a0\ufe0f \u6ce8\u610f\n\n> 1. \u7ec4\u4ef6 `<Map>` \u5fc5\u987b\u5305\u88f9\u5728 `<APILoader>` \u7ec4\u4ef6\u5185\uff0c\u8be5\u7ec4\u4ef6\u4f5c\u7528\u662f\u52a0\u8f7d\u9ad8\u5fb7\u5730\u56fe SDK\u3002  \n> 2. \u5176\u4ed6\u5730\u56fe\u7ec4\u4ef6\u5fc5\u987b\u4f5c\u4e3a `<Map>` \u7684\u5b50\u7ec4\u4ef6\u4f7f\u7528\uff1b\n\n```jsx\nimport { Map, APILoader } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { Map } from '@uiw/react-amap-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\nMap \u7684\u7236\u7ec4\u4ef6\u5fc5\u987b\u5177\u6709\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff1b\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n      <Map />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u53c2\u6570\u8bbe\u7f6e\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { Fragment, useState } from 'react';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nfunction Demo() {\n  const [dragEnable, setDragEnable] = useState(true);\n  const [display, setDisplay] = useState(true);\n  const [zoom, setZoom] = useState(15);\n  const [viewMode, setViewMode] = useState('3D');\n  return (\n    <Fragment>\n      <button onClick={() => setDragEnable(!dragEnable)}>{dragEnable ? '\u7981\u7528' : '\u542f\u7528'}\u62d6\u62fd</button>\n      <button onClick={() => setDisplay(!display)}>{display ? '\u5378\u8f7d' : '\u52a0\u8f7d'}\u5730\u56fe</button>\n      <button onClick={() => setViewMode(viewMode === '3D' ? '2D' : '3D')}>{viewMode}\u5730\u56fe</button>\n      <button onClick={() => setZoom(zoom + 1)}>\u653e\u5927 +1 -> ({zoom})</button>\n      <button onClick={() => setZoom(zoom - 1)}>\u7f29\u5c0f -1 -> ({zoom})</button>\n      <div style={{ width: '100%', height: 350 }}>\n        {display && (\n          <Map\n            dragEnable={dragEnable}\n            zoom={zoom}\n            viewMode={viewMode}\n            pitch={viewMode === '2D' ? 0 : 70}\n          />\n        )}\n      </div>\n    </Fragment>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Demo />\n  </APILoader>\n), _mount_);\n```\n\n### Ref\n\n\u83b7\u53d6\u5730\u56fe\u5b9e\u4f8b\u5bf9\u8c61\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useEffect, useRef, Fragment } from 'react';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nfunction Demo() {\n  const mapRef = useRef();\n  useEffect(() => {\n    console.log('mapRef:', mapRef)\n  }, []);\n  return (\n    <div style={{ width: '100%', height: 330 }}>\n      <Map\n        layers={[new AMap.TileLayer.Satellite()]}\n        ref={(instance) => {\n          if (instance && instance.map) {\n            const bounds = instance.map.getBounds();\n            console.log('instance', instance);\n          }\n        }}\n      />\n      <Map\n        layers={[new AMap.TileLayer.Satellite()]}\n        ref={mapRef}\n      />\n    </div>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Demo />\n  </APILoader>\n), _mount_);\n```\n\n### \u4e8b\u4ef6\u89e6\u53d1\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React from 'react';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n      <Map\n        onComplete={(data, de) => {\n          console.log('\u5730\u56fe\u52a0\u8f7d\u5b8c\u6210\uff01', data, de);\n        }}\n        onClick={() => {\n          console.log('\u70b9\u51fb\u4e8b\u4ef6\uff01');\n        }}\n      />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u7279\u6b8a\u4f7f\u7528\u65b9\u6cd5\n\n\u901a\u8fc7 `Map` \u7684\u5b50\u7ec4\u4ef6\u51fd\u6570\uff0c\u8fd4\u56de\u4e09\u4e2a\u5bf9\u8c61 **`map`**\uff0c**`container`** \u548c **`AMap`**\uff0c\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useEffect, useRef, Fragment } from 'react';\nimport { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <Map center={[116.397428, 39.90923]} zoom={12}>\n      {({ AMap, map, container }) => {\n        console.log('map', map)\n        if (map) {\n          const marker = new AMap.Marker({\n            icon: new AMap.Icon({\n              imageSize: new AMap.Size(25, 34),\n              image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'\n            }),\n            position: [116.405285,39.904989],\n            offset: new AMap.Pixel(-13, -30)\n          });\n          marker.setMap(map);\n        }\n        return;\n      }}\n    </Map>\n  </div>\n);\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Demo />\n  </APILoader>\n), _mount_);\n```\n\n### \u5c06\u5b50\u7ec4\u4ef6\u5c01\u88c5\u5230\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Polyline, ToolBarControl } from '@uiw/react-amap';\n\nconst path1 = [ [121.099109,31.222311], [118.528308,31.989555], [117.319812,31.803006], [114.353503,30.67583], [115.891589,28.979429], [112.947253,28.188361], ];\nconst path2 = [ [116.405289, 39.904987], [113.964458, 40.54664], [111.47836, 41.135964], [108.949297, 41.670904], [106.380111, 42.149509], [103.774185, 42.56996], [101.135432, 42.930601], [98.46826, 43.229964], [95.777529, 43.466798], [93.068486, 43.64009], [90.34669, 43.749086], [87.61792, 43.793308], ];\n\nconst ChildComp = (props = {}) => {\n  return (\n    <div>\n      <Polyline {...props} visiable={true} strokeOpacity={1} path={path1} />\n      <Polyline {...props} visiable={true} strokeOpacity={1} path={path2} />\n    </div>\n  )\n}\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <div style={{ width: '100%', height: '300px' }}>\n      <Map zoom={3}>\n        {(props) => {\n          return <ChildComp {...props} />;\n        }}\n      </Map>\n    </div>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\n### Props\n\n[\u66f4\u591a\u53c2\u6570\u8bbe\u7f6e](https://github.com/uiwjs/react-amap/blob/268303d/src/types/core.d.ts#L461-L537)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| center | \u521d\u59cb\u4e2d\u5fc3\u7ecf\u7eac\u5ea6 | `[number, number] | LngLat` | - |\n\n### \u4e8b\u4ef6\n\n[\u4e8b\u4ef6\u7c7b\u578b\u6587\u6863](https://github.com/uiwjs/react-amap/blob/268303d/src/types/core.d.ts#L298-L403)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onComplete | \u5730\u56fe\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6210\u540e\u89e6\u53d1\u4e8b\u4ef6 | - |\n| onMouseMove | \u9f20\u6807\u5728\u5730\u56fe\u4e0a\u79fb\u52a8\u65f6\u89e6\u53d1 | - |\n| onZoomChange | \u5730\u56fe\u7f29\u653e\u7ea7\u522b\u66f4\u6539\u540e\u89e6\u53d1 | - |\n| onMapMove | \u5730\u56fe\u5e73\u79fb\u65f6\u89e6\u53d1\u4e8b\u4ef6 | - |\n| onMouseWheel | \u9f20\u6807\u6eda\u8f6e\u5f00\u59cb\u7f29\u653e\u5730\u56fe\u65f6\u89e6\u53d1 | - |\n| onZoomStart | \u7f29\u653e\u5f00\u59cb\u65f6\u89e6\u53d1 | - |\n| onMouseOver | \u9f20\u6807\u79fb\u5165\u5730\u56fe\u5bb9\u5668\u5185\u65f6\u89e6\u53d1 | - |\n| onMouseOut | \u9f20\u6807\u79fb\u51fa\u5730\u56fe\u5bb9\u5668\u65f6\u89e6\u53d1 | - |\n| onDblClick | \u9f20\u6807\u5de6\u952e\u53cc\u51fb\u4e8b\u4ef6 | - |\n| onClick | \u9f20\u6807\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 | - |\n| onZoomEnd | \u7f29\u653e\u7ed3\u675f\u65f6\u89e6\u53d1 | - |\n| onMoveEnd | \u5730\u56fe\u79fb\u52a8\u7ed3\u675f\u540e\u89e6\u53d1\uff0c\u5305\u62ec\u5e73\u79fb\uff0c\u4ee5\u53ca\u4e2d\u5fc3\u70b9\u53d8\u5316\u7684\u7f29\u653e\u3002\u5982\u5730\u56fe\u6709\u62d6\u62fd\u7f13\u52a8\u6548\u679c\uff0c\u5219\u5728\u7f13\u52a8\u7ed3\u675f\u540e\u89e6\u53d1 | - |\n| onMouseUp | \u9f20\u6807\u5728\u5730\u56fe\u4e0a\u5355\u51fb\u62ac\u8d77\u65f6\u89e6\u53d1 | - |\n| onMouseDown | \u9f20\u6807\u5728\u5730\u56fe\u4e0a\u5355\u51fb\u6309\u4e0b\u65f6\u89e6\u53d1 | - |\n| onRightClick | \u9f20\u6807\u53f3\u952e\u5355\u51fb\u4e8b\u4ef6 | - |\n| onMoveStart | \u5730\u56fe\u5e73\u79fb\u5f00\u59cb\u65f6\u89e6\u53d1 | - |\n| onDragStart | \u5f00\u59cb\u62d6\u62fd\u5730\u56fe\u65f6\u89e6\u53d1 | - |\n| onDragging | \u62d6\u62fd\u5730\u56fe\u8fc7\u7a0b\u4e2d\u89e6\u53d1 | - |\n| onDragEnd | \u505c\u6b62\u62d6\u62fd\u5730\u56fe\u65f6\u89e6\u53d1\u3002\u5982\u5730\u56fe\u6709\u62d6\u62fd\u7f13\u52a8\u6548\u679c\uff0c\u5219\u5728\u62fd\u505c\u6b62\uff0c\u7f13\u52a8\u5f00\u59cb\u524d\u89e6\u53d1 | - |\n| onHotspotOut | \u9f20\u6807\u79fb\u51fa\u70ed\u70b9\u65f6\u89e6\u53d1 | - |\n| onHotspotOver | \u9f20\u6807\u6ed1\u8fc7\u70ed\u70b9\u65f6\u89e6\u53d1 | - |\n| onTouchStart | \u89e6\u6478\u5f00\u59cb\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | - |\n| onHotspotClick | \u9f20\u6807\u70b9\u51fb\u70ed\u70b9\u65f6\u89e6\u53d1 | - |\n| onTouchMove | \u62d6\u62fd\u5730\u56fe\u8fc7\u7a0b\u4e2d\u89e6\u53d1\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | - |\n| onTouchEnd | \u89e6\u6478\u7ed3\u675f\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | - |\n| onResize | \u5730\u56fe\u5bb9\u5668\u5c3a\u5bf8\u6539\u53d8\u4e8b\u4ef6 | - |"}}]);
//# sourceMappingURL=56.8ee98040.chunk.js.map