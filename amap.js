(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["@uiw/react-amap"] = factory(require("react"), require("react-dom"));
	else
		root["@uiw/react-amap"] = factory(root["React"], root["ReactDOM"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 828:
/***/ (function(module) {

(function(m,p){ true?module.exports=p():0})(this,function(){function m(a){var b=[];a.AMapUI&&b.push(p(a.AMapUI));a.Loca&&b.push(r(a.Loca));return Promise.all(b)}function p(a){return new Promise(function(h,c){var f=[];if(a.plugins)for(var e=0;e<a.plugins.length;e+=1)-1==d.AMapUI.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(g.AMapUI===b.failed)c("\u524d\u6b21\u8bf7\u6c42 AMapUI \u5931\u8d25");
else if(g.AMapUI===b.notload){g.AMapUI=b.loading;d.AMapUI.version=a.version||d.AMapUI.version;e=d.AMapUI.version;var l=document.body||document.head,k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/ui/"+e+"/main.js";k.onerror=function(a){g.AMapUI=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25")};k.onload=function(){g.AMapUI=b.loaded;if(f.length)window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=
arguments[a]}for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]()});else for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]()};l.appendChild(k)}else g.AMapUI===b.loaded?a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a]}h()}):h():a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):
n.AMapUI.push(function(a){a?c(a):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a]}h()}):h()})})}function r(a){return new Promise(function(h,c){if(g.Loca===b.failed)c("\u524d\u6b21\u8bf7\u6c42 Loca \u5931\u8d25");else if(g.Loca===b.notload){g.Loca=b.loading;d.Loca.version=a.version||d.Loca.version;var f=d.Loca.version,e=d.AMap.version.startsWith("2"),l=f.startsWith("2");if(e&&!l||!e&&l)c("JSAPI \u4e0e Loca \u7248\u672c\u4e0d\u5bf9\u5e94\uff01\uff01");
else{e=d.key;l=document.body||document.head;var k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/loca?v="+f+"&key="+e;k.onerror=function(a){g.Loca=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25")};k.onload=function(){g.Loca=b.loaded;for(h();n.Loca.length;)n.Loca.splice(0,1)[0]()};l.appendChild(k)}}else g.Loca===b.loaded?a.version&&a.version!==d.Loca.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):h():a.version&&a.version!==d.Loca.version?
c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):n.Loca.push(function(a){a?c(a):c()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var b;(function(a){a.notload="notload";a.loading="loading";a.loaded="loaded";a.failed="failed"})(b||(b={}));var d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},g={AMap:b.notload,AMapUI:b.notload,Loca:b.notload},n={AMap:[],AMapUI:[],Loca:[]},q=[],t=function(a){"function"==typeof a&&
(g.AMap===b.loaded?a(window.AMap):q.push(a))};return{load:function(a){return new Promise(function(h,c){if(g.AMap==b.failed)c("");else if(g.AMap==b.notload){var f=a.key,e=a.version,l=a.plugins;f?(window.AMap&&"lbs.amap.com"!==location.host&&c("\u7981\u6b62\u591a\u79cdAPI\u52a0\u8f7d\u65b9\u5f0f\u6df7\u7528"),d.key=f,d.AMap.version=e||d.AMap.version,d.AMap.plugins=l||d.AMap.plugins,g.AMap=b.loading,e=document.body||document.head,window.___onAPILoaded=function(d){delete window.___onAPILoaded;if(d)g.AMap=
b.failed,c(d);else for(g.AMap=b.loaded,m(a).then(function(){h(window.AMap)})["catch"](c);q.length;)q.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+d.AMap.version+"&key="+f+"&plugin="+d.AMap.plugins.join(","),l.onerror=function(a){g.AMap=b.failed;c(a)},e.appendChild(l)):c("\u8bf7\u586b\u5199key")}else if(g.AMap==b.loaded)if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&
a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else{f=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1)-1==d.AMap.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(f.length)window.AMap.plugin(f,function(){m(a).then(function(){h(window.AMap)})["catch"](c)});else m(a).then(function(){h(window.AMap)})["catch"](c)}else if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");
else{var k=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1)-1==d.AMap.plugins.indexOf(a.plugins[e])&&k.push(a.plugins[e]);t(function(){if(k.length)window.AMap.plugin(k,function(){m(a).then(function(){h(window.AMap)})["catch"](c)});else m(a).then(function(){h(window.AMap)})["catch"](c)})}})},reset:function(){delete window.AMap;delete window.AMapUI;delete window.Loca;d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}};g={AMap:b.notload,AMapUI:b.notload,
Loca:b.notload};n={AMap:[],AMapUI:[],Loca:[]}}}})


/***/ }),

/***/ 31:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(787),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(31);
} else {}


/***/ }),

/***/ 787:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ }),

/***/ 156:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  APILoader: () => (/* reexport */ APILoader),
  AutoComplete: () => (/* reexport */ AutoComplete),
  BezierCurve: () => (/* reexport */ BezierCurve),
  Circle: () => (/* reexport */ Circle),
  CircleMarker: () => (/* reexport */ CircleMarker),
  Context: () => (/* reexport */ Context),
  ContextMenu: () => (/* reexport */ ContextMenu),
  ControlBarControl: () => (/* reexport */ ControlBarControl),
  Ellipse: () => (/* reexport */ Ellipse),
  Geolocation: () => (/* reexport */ Geolocation),
  HawkEyeControl: () => (/* reexport */ HawkEyeControl),
  InfoWindow: () => (/* reexport */ InfoWindow),
  LabelMarker: () => (/* reexport */ LabelMarker),
  Map: () => (/* reexport */ esm_Map),
  MapTypeControl: () => (/* reexport */ MapTypeControl),
  Marker: () => (/* reexport */ Marker),
  MassMarks: () => (/* reexport */ MassMarks),
  MouseTool: () => (/* reexport */ MouseTool),
  MouseToolDrawType: () => (/* reexport */ MouseToolDrawType),
  PolyEditor: () => (/* reexport */ PolyEditor),
  Polygon: () => (/* reexport */ Polygon),
  PolygonEditor: () => (/* reexport */ PolygonEditor),
  Polyline: () => (/* reexport */ Polyline),
  PolylineEditor: () => (/* reexport */ PolylineEditor),
  Provider: () => (/* reexport */ Provider),
  Rectangle: () => (/* reexport */ Rectangle),
  ScaleControl: () => (/* reexport */ ScaleControl),
  Text: () => (/* reexport */ Text),
  TileLayer: () => (/* reexport */ TileLayer),
  TileLayerType: () => (/* reexport */ TileLayerType),
  ToolBarControl: () => (/* reexport */ ToolBarControl),
  Weather: () => (/* reexport */ Weather),
  initialState: () => (/* reexport */ initialState),
  reducer: () => (/* reexport */ reducer),
  requireCss: () => (/* reexport */ requireCss),
  requireScript: () => (/* reexport */ requireScript),
  useAutoComplete: () => (/* reexport */ useAutoComplete),
  useBezierCurve: () => (/* reexport */ useBezierCurve),
  useCircle: () => (/* reexport */ useCircle),
  useCircleMarker: () => (/* reexport */ useCircleMarker),
  useContextMenu: () => (/* reexport */ useContextMenu),
  useControlBarControl: () => (/* reexport */ useControlBarControl),
  useEllipse: () => (/* reexport */ useEllipse),
  useEventProperties: () => (/* reexport */ useEventProperties),
  useGeolocation: () => (/* reexport */ useGeolocation),
  useHawkEyeControl: () => (/* reexport */ useHawkEyeControl),
  useInfoWindow: () => (/* reexport */ useInfoWindow),
  useMap: () => (/* reexport */ useMap),
  useMapContext: () => (/* reexport */ useMapContext),
  useMapTypeControl: () => (/* reexport */ useMapTypeControl),
  useMarker: () => (/* reexport */ useMarker),
  useMassMarks: () => (/* reexport */ useMassMarks),
  usePolygon: () => (/* reexport */ usePolygon),
  usePolyline: () => (/* reexport */ usePolyline),
  usePortal: () => (/* reexport */ usePortal),
  usePrevious: () => (/* reexport */ usePrevious),
  useRectangle: () => (/* reexport */ useRectangle),
  useScaleControl: () => (/* reexport */ useScaleControl),
  useSetStatus: () => (/* reexport */ useSetStatus),
  useSettingProperties: () => (/* reexport */ useSettingProperties),
  useText: () => (/* reexport */ useText),
  useTileLayer: () => (/* reexport */ useTileLayer),
  useToolBarControl: () => (/* reexport */ useToolBarControl),
  useVisiable: () => (/* reexport */ useVisiable),
  useWeather: () => (/* reexport */ useWeather)
});

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../../node_modules/@amap/amap-jsapi-loader/dist/index.js
var dist = __webpack_require__(828);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(310);
;// CONCATENATED MODULE: ../api-loader/esm/index.js

var _excluded = ["children"];
/// <reference types="@uiw/react-amap-types" />




/**
 * APILoader 用于加载百度地图依赖
 */
var APILoader = props => {
  var {
      children
    } = props,
    config = _objectWithoutPropertiesLoose(props, _excluded);
  var [loaded, setLoaded] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var [error, setError] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var aKey = config.akey || config.akay || '';
    var plugins = config.plugins || (config.plugin ? config.plugin.split(',') : []);
    (0,dist.load)({
      key: aKey,
      plugins,
      version: config.version || '2.0',
      AMapUI: config.AMapUI,
      Loca: config.Loca
    }).then(() => {
      setError(undefined);
      setLoaded(true);
    }).catch(err => {
      setError(err);
    });
  }, [config.akey, config.akay]);
  if (error) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        color: 'red'
      },
      children: error.message
    });
  } else if (loaded) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
      children: children
    });
  }
  return null;
};
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(156);
;// CONCATENATED MODULE: ../utils/esm/usePortal.js


var usePortal = () => {
  var [container] = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useState(() => {
    var el = document.createElement('div');
    return el;
  });
  var [portal, setPortal] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
    render: () => null,
    remove: () => null
  });
  var ReactCreatePortal = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useCallback(elmm => {
    var Portal = _ref => {
      var {
        children
      } = _ref;
      if (!children) return null;
      return /*#__PURE__*/(0,external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_.createPortal)(children, elmm);
    };
    var remove = elm => {
      elm && (0,external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_.unmountComponentAtNode)(elm);
    };
    return {
      render: Portal,
      remove
    };
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (container) portal.remove();
    var newPortal = ReactCreatePortal(container);
    setPortal(newPortal);
    return () => {
      newPortal.remove(container);
    };
  }, [container]);
  return {
    Portal: portal.render,
    container
  };
};
;// CONCATENATED MODULE: ../utils/esm/index.js

/// <reference types="@uiw/react-amap-types" />



/**
 * 对实例有 setStatus 更改状态的处理
 * @param instance
 * @param props
 * @param propsName
 */
function useSetStatus(instance, props, propsName) {
  if (props === void 0) {
    props = {};
  }
  if (propsName === void 0) {
    propsName = [];
  }
  propsName.forEach(name => {
    var eName = name;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var [state, setState] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props[eName]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
      if (instance && props[eName] !== undefined) {
        if (props[eName] !== state) {
          // map.setStatus({
          //   dragEnable: true,
          //   keyboardEnable: true,
          //   doubleClickZoom: true,
          //   zoomEnable: true,
          //   rotateEnable: true
          // });
          var status = instance.getStatus();
          instance.setStatus(_extends({}, status, {
            [eName]: props[eName]
          }));
          setState(props[eName]);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[eName]]);
  });
}

/**
 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
 * 通过参数 `visiable` 来控制执行 `show()` or `hide()`
 */
function useVisiable(instance, visiable) {
  var [state, setState] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(visiable);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (instance && visiable !== undefined) {
      if (visiable) {
        instance.show && instance.show();
      } else {
        instance.hide && instance.hide();
      }
      if (visiable !== state) {
        setState(visiable);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance, visiable]);
}

/**
 * 获取上一轮的 props 或 state
 * How to get the previous props or state?
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @example
 * ```js
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   return <h1>Now: {count}, before: {prevCount}</h1>;
 * }
 * ```
 */
function usePrevious(value) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}
/**
 * 绑定事件
 * @param instance 实例对象
 * @param props 传递进来的 props
 * @param eventName 事件的名字，如，我们使用 `onClick` 事件，最终被转换成，`click` 绑定到实例中，`onDblClick` => `dblclick`
 *
 * @example
 * ```js
 * useEventProperties<BMap.Marker, UseMarker>(marker!, props, [
 *   'onMouseMove', 'onZoomChange', 'onMapMove', 'onMouseWheel', 'onZoomStart'
 * ]);
 * ```
 */
function useEventProperties(instance, props, eventName, type) {
  if (props === void 0) {
    props = {};
  }
  if (eventName === void 0) {
    eventName = [];
  }
  eventName.forEach(name => {
    var eventName = name;
    var eventHandle = props[eventName];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
      if (!instance) return;
      var eName = name.toLocaleLowerCase().replace(/^on/, '');
      if (eventHandle && eName) {
        instance.on(eName, eventHandle);
      }
      return () => {
        if (eName && eventHandle) {
          instance.off(eName, eventHandle);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[eventName]]);
  });
}

/**
 * 属性受控
 * @param instance 实例对象
 * @param props 属性值
 * @param propsName 多个属性设置的名称
 * @example
 * ```ts
 * useSettingProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
 *    'Path'
 * ]);
 * ```
 */
function useSettingProperties(instance, props, propsName) {
  if (instance === void 0) {
    instance = {};
  }
  if (props === void 0) {
    props = {};
  }
  if (propsName === void 0) {
    propsName = [];
  }
  propsName.forEach(name => {
    var eName = "set" + name;
    var vName = "" + name.charAt(0).toLowerCase() + name.slice(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var [state, setState] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props[vName]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
      if (instance && props[vName] !== undefined) {
        if (props[vName] !== state && instance[eName] && typeof instance[eName] === 'function') {
          instance[eName](props[vName]);
          setState(props[vName]);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[vName]]);
  });
}
;// CONCATENATED MODULE: ../auto-complete/esm/useAutoComplete.js


var useAutoComplete = function useAutoComplete(props) {
  if (props === void 0) {
    props = {};
  }
  var [autoComplete, setAutoComplete] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (AMap && !autoComplete) {
      var instance;
      if (AMap.v) {
        AMap.plugin(['AMap.Autocomplete'], () => {
          instance = new AMap.Autocomplete(props);
          setAutoComplete(instance);
        });
      } else {
        AMap.plugin(['AMap.AutoComplete'], () => {
          instance = new AMap.AutoComplete(props);
          setAutoComplete(instance);
        });
      }
      return () => {
        if (instance) {
          setAutoComplete(undefined);
        }
      };
    }
  }, []);
  useSettingProperties(autoComplete, props, ['Type', 'City', 'CityLimit']);
  useEventProperties(autoComplete, props, ['onChoose', 'onSelect']);
  return {
    autoComplete,
    setAutoComplete
  };
};
;// CONCATENATED MODULE: ../auto-complete/esm/index.js




var AutoComplete = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    autoComplete
  } = useAutoComplete(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    autoComplete
  }));
  return null;
});
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
;// CONCATENATED MODULE: ../map/esm/context.js



var initialState = {
  map: undefined,
  AMap: undefined,
  container: undefined
};
var reducer = (state, action) => {
  return _extends({}, state, action);
};
var Context = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext({
  state: initialState,
  dispatch: () => null
});
function useMapContext() {
  var {
    state,
    dispatch
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(Context);
  return _extends({}, state, {
    state,
    dispatch
  });
}
;// CONCATENATED MODULE: ../map/esm/useMap.js






/**
 * 此类型是 `<Map>` 组件传递给子组件(如 `<Marker>`)的两个 props
 */

var useMap = function useMap(props) {
  if (props === void 0) {
    props = {};
  }
  var other = _extends({}, (_objectDestructuringEmpty(props), props));
  var [map, setMap] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var [zoom, setZoom] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.zoom || 15);
  var [container, setContainer] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.container);
  var {
    dispatch
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(Context);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (container && !map && AMap) {
      container.className = container.className + ' react-amap-wapper';
      var instance = new AMap.Map(container, _extends({
        zoom
      }, other));
      setMap(instance);
    }
    return () => {
      if (map) {
        map.clearInfoWindow();
        map.clearLimitBounds();
        map.clearMap();
        map.destroy();
        setMap(undefined);
      }
    };
  }, [container, map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && container) {
      dispatch({
        map,
        container,
        AMap
      });
    }
    return () => {
      dispatch({
        map: undefined,
        container: undefined,
        AMap: undefined
      });
    };
  }, [map, container]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (map && typeof props.zoom === 'number' && zoom !== props.zoom && props.zoom >= 2 && props.zoom <= 20) {
      setZoom(props.zoom);
      map.setZoom(props.zoom);
    }
  }, [zoom, props.zoom]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (props.center && map) {
      map.setCenter(props.center);
    }
  }, [map, props.center]);
  useSetStatus(map, props, ['dragEnable', 'zoomEnable', 'jogEnable', 'pitchEnable', 'rotateEnable', 'animateEnable', 'keyboardEnable']);
  // setStatus, setZoomAndCenter, setFitView
  // 'Center',
  useSettingProperties(map, props, ['Zoom', 'LabelzIndex', 'Layers', 'City', 'Bounds', 'LimitBounds', 'Lang', 'Rotation', 'DefaultCursor', 'MapStyle', 'Features', 'DefaultLayer', 'Pitch']);
  useEventProperties(map, props, ['onMouseMove', 'onZoomChange', 'onMapMove', 'onMouseWheel', 'onZoomStart', 'onMouseOver', 'onMouseOut', 'onDblClick', 'onClick', 'onZoomEnd', 'onMoveEnd', 'onMouseUp', 'onMouseDown', 'onRightClick', 'onMoveStart', 'onDragStart', 'onDragging', 'onDragEnd', 'onHotspotOut', 'onHotspotOver', 'onTouchStart', 'onComplete', 'onHotspotClick', 'onTouchMove', 'onTouchEnd', 'onResize']);
  return {
    map,
    setMap,
    zoom,
    setZoom,
    container,
    setContainer
  };
};
;// CONCATENATED MODULE: ../map/esm/index.js


var esm_excluded = ["className", "children"];
/// <reference types="@uiw/react-amap-types" />







var Provider = props => {
  var [state, dispatch] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(reducer, initialState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider, {
    value: _extends({}, state, {
      state,
      dispatch
    }),
    children: props.children
  });
};
var esm_Map = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((_ref, ref) => {
  var {
      className,
      children
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, esm_excluded);
  var AMap = window.AMap;
  var [state, dispatch] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(reducer, initialState);
  var elmRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var {
    setContainer,
    container,
    map
  } = useMap(_extends({
    container: props.container || elmRef.current
  }, props));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setContainer(elmRef.current), [elmRef.current]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    map,
    AMap,
    container: props.container || elmRef.current
  }), [map]);
  var childs = external_root_React_commonjs2_react_commonjs_react_amd_react_.Children.toArray(children);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map) {
      dispatch({
        map,
        container: elmRef.current,
        AMap
      });
    }
  }, [map]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Context.Provider, {
    value: _extends({}, state, {
      state,
      dispatch
    }),
    children: [!props.container && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: elmRef,
      className: className,
      style: _extends({
        fontSize: 1,
        width: '100%',
        height: '100%'
      }, props.style)
    }), AMap && map && typeof children === 'function' && children({
      AMap,
      map,
      container
    }), AMap && map && childs.map((child, key) => {
      if (! /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.isValidElement)(child)) return null;
      if (typeof child === 'string') {
        return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)( /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
          children: child
        }), {
          key
        });
      }
      if (child.type && typeof child.type === 'string') {
        return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(child, {
          key
        });
      }
      return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(child, _extends({}, child.props, {
        AMap,
        map,
        container,
        key
      }));
    })]
  });
});
;// CONCATENATED MODULE: ../bezier-curve/esm/useBezierCurve.js


var useBezierCurve_excluded = ["visiable"];



var useBezierCurve = function useBezierCurve(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useBezierCurve_excluded);
  var {
    map
  } = useMapContext();
  var [bezierCurve, setBezierCurve] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (AMap && map && !bezierCurve) {
      var instance = new AMap.BezierCurve(_extends({}, other));
      map.add(instance);
      setBezierCurve(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setBezierCurve(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(bezierCurve, visiable);
  useSettingProperties(bezierCurve, props, ['Options', 'Path', 'ExtData', 'ExtData']);
  useEventProperties(bezierCurve, props, ['onHide', 'onShow', 'onDblClick', 'onMouseOver', 'onMouseUp', 'onMouseDown', 'onclick', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onRightClick', 'onMouseOut']);
  return {
    bezierCurve,
    setBezierCurve
  };
};
;// CONCATENATED MODULE: ../bezier-curve/esm/index.js




var BezierCurve = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    bezierCurve
  } = useBezierCurve(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    bezierCurve
  }));
  return null;
});
;// CONCATENATED MODULE: ../circle/esm/useCircle.js


var useCircle_excluded = ["visiable"];



var useCircle = function useCircle(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useCircle_excluded);
  var {
    map
  } = useMapContext();
  var [circle, setCircle] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (AMap && map && !circle) {
      var instance = new AMap.Circle(_extends({}, other));
      map.add(instance);
      setCircle(instance);
    }
    return () => {
      setCircle(circle => {
        if (circle) {
          map && map.remove(circle);
        }
        return undefined;
      });
    };
  }, [map]);
  useVisiable(circle, visiable);
  useSettingProperties(circle, props, ['Center', 'Raius', 'Options', 'ExtData']);
  useEventProperties(circle, props, ['onHide', 'onShow', 'onRightClick', 'onClick', 'onTouchEnd', 'onDblClick', 'onTouchMove', 'onTouchStart', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseDown']);
  return {
    circle,
    setCircle
  };
};
;// CONCATENATED MODULE: ../circle/esm/index.js




var Circle = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    circle
  } = useCircle(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    circle
  }));
  return null;
});
;// CONCATENATED MODULE: ../circle-marker/esm/useCircleMarker.js


var useCircleMarker_excluded = ["visiable"];



var useCircleMarker = function useCircleMarker(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useCircleMarker_excluded);
  var {
    map
  } = useMapContext();
  var [circleMarker, setCircleMarker] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!circleMarker) {
      var instance = new AMap.CircleMarker(_extends({}, other));
      map.add(instance);
      setCircleMarker(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setCircleMarker(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(circleMarker, visiable);
  useSettingProperties(circleMarker, props, ['Center', 'Raius', 'zIndex', 'Bubble', 'Cursor', 'StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'FillColor', 'FillOpacity', 'Draggable', 'ExtData']);
  useEventProperties(circleMarker, props, ['onHide', 'onShow', 'onMouseover', 'onTouchend', 'onClick', 'onTouchmove', 'onRightclick', 'onMouseup', 'onMouseout', 'onTouchstart', 'onMousedown', 'onDblclick']);
  return {
    circleMarker,
    setCircleMarker
  };
};
;// CONCATENATED MODULE: ../circle-marker/esm/index.js




var CircleMarker = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    circleMarker
  } = useCircleMarker(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    circleMarker
  }));
  return null;
});
;// CONCATENATED MODULE: ../context-menu/esm/useContextMenu.js


var useContextMenu_excluded = ["position"];



var useContextMenu = function useContextMenu(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      position
    } = props,
    other = _objectWithoutPropertiesLoose(props, useContextMenu_excluded);
  var {
    map
  } = useMapContext();
  var [contextMenu, setContextMenu] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!contextMenu) {
      var instance = new AMap.ContextMenu(_extends({}, other));
      setContextMenu(instance);
      var rightclick = e => instance.open(map, position || e.lnglat);
      map.on('rightclick', rightclick);
      return () => {
        if (instance) {
          instance.close();
          map.off('rightclick', rightclick);
          setContextMenu(undefined);
        }
      };
    }
  }, [map]);
  useEventProperties(contextMenu, props, ['onOpen', 'onClose']);
  return {
    contextMenu,
    setContextMenu
  };
};
;// CONCATENATED MODULE: ../context-menu/esm/Item.js

var noop = function noop() {};
/* harmony default export */ const Item = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
    text = '',
    onClick = noop
  } = props;
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (props.contextMenu) {
      props.contextMenu.addItem(text, onClick, 1);
    }
    return () => {
      if (props.contextMenu) {
        props.contextMenu.removeItem(text, onClick);
      }
    };
  }, [props.contextMenu, props.text, props.onClick]);
  return null;
});
;// CONCATENATED MODULE: ../context-menu/esm/index.js







var ContextMenu = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    contextMenu
  } = useContextMenu(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    contextMenu
  }));
  var childs = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(props.children);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
    children: AMap && contextMenu && childs.map((child, key) => {
      if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) return null;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, _extends({}, child.props, {
        AMap,
        map: props.map,
        contextMenu,
        key
      }));
    })
  });
});
ContextMenu.Item = Item;
;// CONCATENATED MODULE: ../control-bar-control/esm/useControlBarControl.js



function useControlBarControl(props) {
  if (props === void 0) {
    props = {};
  }
  var {
    position,
    visiable,
    offset
  } = props;
  var [controlBarControl, setControlBarControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !controlBarControl) {
      var instance;
      map.plugin(['AMap.ControlBar', 'AMap.HawkEye'], () => {
        instance = new AMap.ControlBar({
          offset: offset,
          position
        });
        map.addControl(instance);
        setControlBarControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      };
    }
  }, [map]);
  useVisiable(controlBarControl, visiable);
  return {
    controlBarControl,
    setControlBarControl
  };
}
;// CONCATENATED MODULE: ../control-bar-control/esm/index.js




var ControlBarControl = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    controlBarControl
  } = useControlBarControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    controlBarControl
  }), [controlBarControl]);
  return null;
});
;// CONCATENATED MODULE: ../ellipse/esm/useEllipse.js


var useEllipse_excluded = ["visiable"];



var useEllipse = function useEllipse(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useEllipse_excluded);
  var {
    map
  } = useMapContext();
  var [ellipse, setEllipse] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!ellipse) {
      var instance = new AMap.Ellipse(_extends({}, other));
      map.add(instance);
      setEllipse(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setEllipse(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(ellipse, visiable);
  useSettingProperties(ellipse, props, ['Center', 'Radius', 'Options', 'ExtData']);
  useEventProperties(ellipse, props, ['onHide', 'onShow', 'onClick', 'onDblClick', 'onRightClick', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseDown', 'onTouchEnd', 'onTouchMove', 'onTouchStart']);
  return {
    ellipse,
    setEllipse
  };
};
;// CONCATENATED MODULE: ../ellipse/esm/index.js




var Ellipse = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    ellipse
  } = useEllipse(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    ellipse
  }));
  return null;
});
;// CONCATENATED MODULE: ../geolocation/esm/useGeolocation.js


var useGeolocation_excluded = ["type", "onComplete", "onError"];


var useGeolocation = function useGeolocation(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      type = 'position',
      onComplete,
      onError
    } = props,
    other = _objectWithoutPropertiesLoose(props, useGeolocation_excluded);
  var [geolocation, setGeolocation] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (AMap && !geolocation) {
      var instance;
      AMap.plugin(['AMap.Geolocation'], () => {
        instance = new AMap.Geolocation(_extends({}, other));
        setGeolocation(instance);
      });
      return () => {
        if (instance) {
          setGeolocation(undefined);
        }
      };
    }
  }, [AMap]);
  function callback(status, result) {
    if (status === 'complete' && onComplete) {
      onComplete(result);
    } else if (onError) {
      onError(result);
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (!/^(position|cityInfo)$/.test(type)) return;
    var funName = type === 'position' ? 'getCurrentPosition' : 'getCityInfo';
    if (geolocation && map) {
      geolocation[funName](callback);
      map.addControl(geolocation);
    } else if (geolocation) {
      geolocation[funName](callback);
    }
  }, [geolocation]);
  return {
    geolocation,
    setGeolocation
  };
};
;// CONCATENATED MODULE: ../geolocation/esm/index.js




var Geolocation = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    geolocation
  } = useGeolocation(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    geolocation
  }));
  return null;
});
;// CONCATENATED MODULE: ../hawk-eye-control/esm/useHawkEyeControl.js


var useHawkEyeControl_excluded = ["offset", "visiable"];



function useHawkEyeControl(props) {
  if (props === void 0) {
    props = {};
  }
  var [hawkEyeControl, setHawkEyeControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
      offset,
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useHawkEyeControl_excluded);
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !hawkEyeControl) {
      var instance;
      map.plugin(['AMap.HawkEye'], () => {
        instance = new AMap.HawkEye(_extends({
          offset: offset
        }, other));
        map.addControl(instance);
        setHawkEyeControl(instance);
      });
      return () => {
        if (instance && map) {
          map && map.removeControl(instance);
          setHawkEyeControl(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(hawkEyeControl, visiable);
  return {
    hawkEyeControl,
    setHawkEyeControl
  };
}
;// CONCATENATED MODULE: ../hawk-eye-control/esm/index.js




var HawkEyeControl = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    hawkEyeControl
  } = useHawkEyeControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    hawkEyeControl
  }), [hawkEyeControl]);
  return null;
});
;// CONCATENATED MODULE: ../info-window/esm/useInfoWindow.js


var useInfoWindow_excluded = ["visiable", "position"];



var useInfoWindow = function useInfoWindow(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable,
      position
    } = props,
    other = _objectWithoutPropertiesLoose(props, useInfoWindow_excluded);
  var {
    map
  } = useMapContext();
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(visiable);
  var [infoWindow, setInfoWindow] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    container,
    Portal
  } = usePortal();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!infoWindow) {
      var positionCenter = map.getCenter();
      if (props.children) {
        other.content = container;
      }
      var instance = new AMap.InfoWindow(_extends({}, other, {
        position: position || positionCenter
      }));
      setInfoWindow(instance);
      if (isOpen) {
        instance.open(map, position || positionCenter);
      }
      return () => {
        if (instance) {
          map && map.remove(instance);
          setInfoWindow(undefined);
        }
      };
    }
  }, [map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (infoWindow) {
      infoWindow.setContent(props.children ? container : other.content || '');
    }
  }, [props.children, container, other.content, infoWindow]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (isOpen !== visiable && infoWindow && map) {
      setIsOpen(visiable);
      if (visiable) {
        var positionCenter = map.getCenter();
        infoWindow.open(map, position || positionCenter);
      } else {
        infoWindow.close();
      }
    }
  }, [visiable, infoWindow]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!map || !infoWindow || !visiable) return;
    var positionCenter = map.getCenter();
    infoWindow.open(map, position || positionCenter);
  }, [position]);
  useSettingProperties(infoWindow, props, ['Content', 'Anchor', 'Size']);
  useEventProperties(infoWindow, props, ['onOpen', 'onClose', 'onChange']);
  return {
    isOpen,
    setIsOpen,
    infoWindow,
    setInfoWindow,
    InfoWindowPortal: Portal
  };
};
;// CONCATENATED MODULE: ../info-window/esm/index.js





var InfoWindow = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    infoWindow,
    InfoWindowPortal
  } = useInfoWindow(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    infoWindow
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InfoWindowPortal, {
    children: props.children
  });
});
;// CONCATENATED MODULE: ../map-type-control/esm/useMapTypeControl.js


var useMapTypeControl_excluded = ["visiable", "defaultType"];



function useMapTypeControl(props) {
  if (props === void 0) {
    props = {};
  }
  var [mapTypeControl, setMapTypeControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
      visiable,
      defaultType = 0
    } = props,
    other = _objectWithoutPropertiesLoose(props, useMapTypeControl_excluded);
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !mapTypeControl) {
      var instance;
      map.plugin(['AMap.MapType'], () => {
        instance = new AMap.MapType(_extends({
          defaultType
        }, other));
        map.addControl(instance);
        setMapTypeControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      };
    }
  }, [map]);
  useVisiable(mapTypeControl, visiable);
  return {
    mapTypeControl,
    setMapTypeControl
  };
}
;// CONCATENATED MODULE: ../map-type-control/esm/index.js




var MapTypeControl = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    mapTypeControl
  } = useMapTypeControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    mapTypeControl
  }), [mapTypeControl]);
  return null;
});
;// CONCATENATED MODULE: ../tile-layer/esm/useTileLayer.js




function useTileLayer(props) {
  if (props === void 0) {
    props = {};
  }
  var [tileLayer, setTileLayer] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    visiable,
    type,
    options
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map) {
      var instance = null;
      if (type) {
        switch (type) {
          case TileLayerType.ROADNET:
            instance = new AMap.TileLayer.RoadNet({});
            break;
          case TileLayerType.SATELLITE:
            instance = new AMap.TileLayer.Satellite({});
            break;
          case TileLayerType.TRAFFIC:
            instance = new AMap.TileLayer.Traffic({});
            break;
        }
      }
      if (options) {
        instance = new AMap.TileLayer(options);
      }
      if (!!instance) {
        // 暂不使用这个 API，这个不兼容 v1.4.xx
        // map.addLayer(instance);
        map.add(instance);
        props.onAdded && props.onAdded();
        setTileLayer(instance);
      }
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setTileLayer(null);
          props.onRemoved && props.onRemoved();
        }
      };
    }
  }, [map, type, options]);
  useVisiable(tileLayer, visiable);
  return {
    tileLayer,
    setTileLayer
  };
}
;// CONCATENATED MODULE: ../tile-layer/esm/index.js




var TileLayerType = /*#__PURE__*/function (TileLayerType) {
  TileLayerType["SATELLITE"] = "satellite";
  TileLayerType["TRAFFIC"] = "traffic";
  TileLayerType["ROADNET"] = "roadnet";
  return TileLayerType;
}({});
var TileLayer = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    tileLayer
  } = useTileLayer(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    tileLayer
  }), [tileLayer]);
  return null;
});
;// CONCATENATED MODULE: ../marker/esm/useMarker.js


var useMarker_excluded = ["visiable", "children"];



var useMarker = function useMarker(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useMarker_excluded);
  var {
    map
  } = useMapContext();
  var [marker, setMarker] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    container,
    Portal
  } = usePortal();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!marker && map) {
      if (props.children) {
        other.content = container;
      }
      var instance = new AMap.Marker(_extends({}, other));
      map.add(instance);
      setMarker(instance);
    }
    return () => {
      if (marker) {
        // @fix [244] https://github.com/uiwjs/react-amap/issues/244
        // typeof marker.remove === 'function' && marker.remove();
        marker.setMap(null);
        setMarker(undefined);
      }
    };
  }, [map, marker]);
  useVisiable(marker, visiable);
  useSettingProperties(marker, props, ['Path', 'Anchor', 'Offset', 'Animation', 'Clickable', 'Position', 'Angle', 'Label', 'zIndex', 'Icon', 'Draggable', 'Cursor', 'Content', 'Map', 'Title', 'Top', 'Shadow', 'Shape', 'ExtData']);
  useEventProperties(marker, props, ['onClick', 'onDblClick', 'onRightClick', 'onMouseMove', 'onMouseOver', 'onMouseOut', 'onMouseDown', 'onMouseUp', 'onDragStart', 'onDragging', 'onDragEnd', 'onMoving', 'onMoveEnd', 'onMoveAlong', 'onTouchStart', 'onTouchMove', 'onTouchEnd']);
  return {
    marker,
    setMarker,
    MarkerPortal: Portal
  };
};
;// CONCATENATED MODULE: ../marker/esm/index.js





var Marker = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    marker,
    MarkerPortal
  } = useMarker(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    marker
  }), [marker]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MarkerPortal, {
    children: props.children
  });
});
;// CONCATENATED MODULE: ../label-marker/esm/useLabelMarker.js


var useLabelMarker_excluded = ["visiable", "children", "text", "icon"];



var useLabelMarker = function useLabelMarker(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable,
      text,
      icon
    } = props,
    other = _objectWithoutPropertiesLoose(props, useLabelMarker_excluded);
  var {
    map,
    AMap
  } = useMapContext();
  var [labelMarker, setLabelMarker] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  // const { container, Portal } = usePortal();

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!labelMarker && map) {
      var _v;
      var initText = text;
      if (!text) {
        initText = {
          // 要展示的文字内容
          content: '',
          // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
          direction: 'right',
          // 在 direction 基础上的偏移量
          offset: [-20, -5],
          // 文字样式
          style: {
            // 字体大小
            fontSize: 12,
            // 字体颜色
            fillColor: '#22886f',
            // 描边颜色
            strokeColor: '#fff',
            // 描边宽度
            strokeWidth: 2
          }
        };
      }
      var initIcon = icon;
      if (!initIcon) {
        initIcon = {
          // 图标类型，现阶段只支持 image 类型
          // 图片 url
          image: 'http://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png',
          // 图片尺寸
          size: [19, 32],
          // 图片相对 position 的锚点，默认为 bottom-center
          anchor: 'center'
        };
      }

      // if (props.children) {
      //   other.content = container;
      // }
      var instance = new AMap.LabelMarker(_extends({
        style: initIcon,
        icon: initIcon,
        text: initText
      }, other));
      setLabelMarker(instance);

      //  issue #259  兼容 v1.4.xxx 版本
      if ((AMap == null ? void 0 : (_v = AMap.v) == null ? void 0 : _v.indexOf('1.4')) === 0) {
        var labelMarkersLayer;
        if (map.labelMarkersLayer) {
          labelMarkersLayer = map.labelMarkersLayer;
        } else {
          map.labelMarkersLayer = labelMarkersLayer = new AMap.LabelsLayer({
            zooms: [3, 20],
            zIndex: 101,
            collision: true,
            animation: true
          });
          map.add(labelMarkersLayer);
        }
        labelMarkersLayer.add(instance);
      }
      map.add(instance);
    }
    return () => {
      if (labelMarker) {
        var _v2;
        //  issue #259  兼容 v1.4.xxx 版本
        if ((AMap == null ? void 0 : (_v2 = AMap.v) == null ? void 0 : _v2.indexOf('1.4')) === 0) {
          var _labelMarkersLayer;
          map == null ? void 0 : (_labelMarkersLayer = map.labelMarkersLayer) == null ? void 0 : _labelMarkersLayer.remove(labelMarker);
        }
        setLabelMarker(undefined);
      }
    };
  }, [labelMarker, map]);
  useVisiable(labelMarker, visiable);
  useSettingProperties(labelMarker, props, ['Name', 'Position', 'Zooms', 'Opacity', 'zIndex', 'Rank', 'Text', 'Icon', 'ExtData', 'Top']);
  useEventProperties(labelMarker, props, ['onMousedown', 'onMouseup', 'onTouchstart', 'onTouchmove', 'onTouchend', 'onClick', 'onMousemove', 'onMouseover', 'onMouseout']);
  return {
    labelMarker,
    setLabelMarker
  };
};
;// CONCATENATED MODULE: ../label-marker/esm/index.js



var LabelMarker = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    labelMarker
  } = useLabelMarker(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    labelMarker
  }), [labelMarker]);
  return null;
});
;// CONCATENATED MODULE: ../mass-marks/esm/useMassMarks.js

var useMassMarks_excluded = ["visiable"];



var useMassMarks = function useMassMarks(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useMassMarks_excluded);
  var {
    map
  } = useMapContext();
  var {
    opacity = 0.8,
    zIndex = 1111,
    style,
    data
  } = other || {};
  var [massMarks, setMassMarks] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!massMarks) {
      var initStyle = style;
      if (!initStyle) {
        // JSAPI 2.0 支持显示设置 zIndex, zIndex 越大约靠前，默认按顺序排列
        initStyle = [{
          url: 'https://webapi.amap.com/images/mass/mass0.png',
          anchor: new AMap.Pixel(6, 6),
          size: new AMap.Size(11, 11),
          zIndex: 3
        }, {
          url: 'https://webapi.amap.com/images/mass/mass1.png',
          anchor: new AMap.Pixel(4, 4),
          size: new AMap.Size(7, 7),
          zIndex: 2
        }, {
          url: 'https://webapi.amap.com/images/mass/mass2.png',
          anchor: new AMap.Pixel(3, 3),
          size: new AMap.Size(5, 5),
          zIndex: 1
        }];
      }
      var instance = new AMap.MassMarks(data || [], {
        opacity,
        zIndex,
        style: initStyle
      });
      // 将海量点实例添加到地图上
      // map.add(instance);
      setMassMarks(instance);
      instance.setMap(map);
      return () => {
        if (instance) {
          instance.clear();
          setMassMarks(undefined);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  useVisiable(massMarks, visiable);
  useSettingProperties(massMarks, props, ['Map', 'Data', 'Style', 'Opacity', 'zIndex', 'Zooms']);
  useEventProperties(massMarks, props, [
  // 'onRightClick',
  // 'onDragStart',
  // 'onDragging',
  // 'onDragEnd',
  // 'onMoving',
  // 'onMoveEnd',
  // 'onMoveAlong',
  'onClick', 'onDblClick', 'onMouseMove', 'onMouseOut', 'onMouseUp', 'onMouseDown', 'onMouseOver', 'onTouchStart', 'onTouchEnd']);
  return {
    massMarks,
    setMassMarks
  };
};
;// CONCATENATED MODULE: ../mass-marks/esm/index.js




var MassMarks = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    massMarks
  } = useMassMarks(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    massMarks
  }), [massMarks, props]);
  return null;
});
;// CONCATENATED MODULE: ../polygon/esm/usePolygon.js


var usePolygon_excluded = ["visiable"];



var usePolygon = function usePolygon(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, usePolygon_excluded);
  var {
    map
  } = useMapContext();
  var [polygon, setPolygon] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!polygon) {
      var instance = new AMap.Polygon(_extends({}, other));
      map.add(instance);
      setPolygon(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setPolygon(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(polygon, visiable);
  useSettingProperties(polygon, props, ['Path', 'Options', 'Map', 'ExtData', 'Draggable']);
  useEventProperties(polygon, props, ['onClick', 'onDblClick', 'onRightClick', 'onHide', 'onShow', 'onMouseDown', 'onMouseUp', 'onMouseOver', 'onMouseOut', 'onChange', 'onDragStart', 'onDragging', 'onDragEnd', 'onTouchStart', 'onTouchMove', 'onTouchEnd']);
  return {
    polygon,
    setPolygon
  };
};
;// CONCATENATED MODULE: ../polygon/esm/index.js




var Polygon = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    children
  } = props;
  var {
    polygon
  } = usePolygon(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    polygon
  }), [polygon]);
  if (children && /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.isValidElement)(children) && polygon) {
    var oProps = {
      polygon,
      polyElement: polygon
    };
    return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(children, _extends({}, props, oProps));
  }
  return null;
});
;// CONCATENATED MODULE: ../polygon-editor/esm/index.js




var PolygonEditor = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    active,
    polygon
  } = props;
  var {
    map
  } = useMapContext();
  var [visiable, setVisiable] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(true);
  var [polyEditor, setPolyEditor] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    polyEditor
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (polygon && map && !polyEditor && AMap && AMap.PolygonEditor) {
      var instance = new AMap.PolygonEditor(map, polygon);
      polygon.on('hide', () => setVisiable(false));
      polygon.on('show', () => setVisiable(true));
      setPolyEditor(instance);
    }
  }, [polygon]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!polyEditor) {
      return;
    }
    if (visiable && !active) {
      polyEditor.close();
      props.onEnd && props.onEnd({
        target: props.polygon
      });
    } else if (visiable && active) {
      polyEditor.open();
      props.onAdd && props.onAdd({
        target: props.polygon
      });
    } else if (!visiable && active) {
      polyEditor.close();
      props.onEnd && props.onEnd({
        target: props.polygon
      });
    }
  }, [active, visiable]);
  useEventProperties(polyEditor, props, ['onEnd', 'onAddnode', 'onRemovenode', 'onAdjust', 'onMove', 'onAdd']);
  return null;
});
;// CONCATENATED MODULE: ../poly-editor/esm/index.js




var PolyEditor = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    active,
    polyElement
  } = props;
  var {
    map
  } = useMapContext();
  var [visiable, setVisiable] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(true);
  var [polyEditor, setPolyEditor] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    polyEditor
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (polyElement && map && !polyEditor && AMap && AMap.PolyEditor) {
      var instance = new AMap.PolyEditor(map, polyElement);
      polyElement.on('hide', () => setVisiable(false));
      polyElement.on('show', () => setVisiable(true));
      setPolyEditor(instance);
    }
  }, [polyElement]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!polyEditor) {
      return;
    }
    if (visiable && !active) {
      polyEditor.close();
      props.onEnd && props.onEnd({
        type: 'end',
        target: props.polyElement
      });
    } else if (visiable && active) {
      polyEditor.open();
    } else if (!visiable && active) {
      polyEditor.close();
      props.onEnd && props.onEnd({
        type: 'end',
        target: props.polyElement
      });
    }
  }, [active, visiable]);
  useEventProperties(polyEditor, props, ['onEnd', 'onAddnode', 'onAdjust', 'onRemovenode']);
  return null;
});
;// CONCATENATED MODULE: ../polyline/esm/usePolyline.js


var usePolyline_excluded = ["visiable"];



function usePolyline(props) {
  if (props === void 0) {
    props = {};
  }
  var [polyline, setPolyline] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, usePolyline_excluded);
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !polyline) {
      var instance = new AMap.Polyline(_extends({}, other));
      map.add(instance);
      setPolyline(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setPolyline(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(polyline, visiable);
  useSettingProperties(polyline, props, ['Path', 'Options', 'Map', 'ExtData', 'Draggable']);
  useEventProperties(polyline, props, ['onHide', 'onShow', 'onMouseOut', 'onChange', 'onDragStart', 'onDragging', 'onDragEnd', 'onRightClick', 'onDblClick', 'onMouseDown', 'onClick', 'onMouseOver', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onMouseUp']);
  return {
    polyline,
    setPolyline
  };
}
;// CONCATENATED MODULE: ../polyline/esm/index.js




var Polyline = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    children
  } = props;
  var {
    polyline
  } = usePolyline(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    polyline
  }), [polyline]);
  if (children && /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.isValidElement)(children) && polyline) {
    var oProps = {
      polyElement: polyline,
      polyline
    };
    return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(children, _extends({}, props, oProps));
  }
  return null;
});
;// CONCATENATED MODULE: ../polyline-editor/esm/index.js




var PolylineEditor = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    active,
    polyline
  } = props;
  var {
    map
  } = useMapContext();
  var [visiable, setVisiable] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(true);
  var [polyEditor, setPolyEditor] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    polyEditor
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (polyline && map && !polyEditor && AMap && AMap.PolylineEditor) {
      var instance = new AMap.PolylineEditor(map, polyline);
      polyline.on('hide', () => setVisiable(false));
      polyline.on('show', () => setVisiable(true));
      setPolyEditor(instance);
    }
  }, [polyline]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!polyEditor) {
      return;
    }
    if (visiable && !active) {
      polyEditor.close();
      props.onEnd && props.onEnd({
        target: props.polyline
      });
    } else if (visiable && active) {
      polyEditor.open();
      props.onAdd && props.onAdd({
        target: props.polyline
      });
    } else if (!visiable && active) {
      polyEditor.close();
      props.onEnd && props.onEnd({
        target: props.polyline
      });
    }
  }, [active, visiable, polyEditor]);
  useEventProperties(polyEditor, props, ['onEnd', 'onAddnode', 'onRemovenode', 'onAdjust', 'onAdd']);
  return null;
});
;// CONCATENATED MODULE: ../mouse-tool/esm/index.js




var MouseToolDrawType = /*#__PURE__*/function (MouseToolDrawType) {
  MouseToolDrawType[MouseToolDrawType["MARKER"] = 0] = "MARKER";
  MouseToolDrawType[MouseToolDrawType["POLYLINE"] = 1] = "POLYLINE";
  MouseToolDrawType[MouseToolDrawType["POLYGON"] = 2] = "POLYGON";
  MouseToolDrawType[MouseToolDrawType["CIRCLE"] = 3] = "CIRCLE";
  MouseToolDrawType[MouseToolDrawType["RECTANGLE"] = 4] = "RECTANGLE";
  MouseToolDrawType[MouseToolDrawType["MEASUREAREA"] = 5] = "MEASUREAREA";
  MouseToolDrawType[MouseToolDrawType["RULE"] = 6] = "RULE";
  MouseToolDrawType[MouseToolDrawType["RECTZOOMIN"] = 7] = "RECTZOOMIN";
  MouseToolDrawType[MouseToolDrawType["RECTZOOMOUT"] = 8] = "RECTZOOMOUT";
  return MouseToolDrawType;
}({});
var MouseTool = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    active,
    type,
    drawElementOptions,
    ifClear
  } = props;
  var {
    map
  } = useMapContext();
  var [mouseTool, setMouseTool] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    mouseTool: mouseTool
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !mouseTool && AMap && AMap.MouseTool) {
      var instance = new AMap.MouseTool(map);
      setMouseTool(instance);
    }
  }, [map, Map, AMap.MouseTool]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!mouseTool) {
      return;
    }
    if (!active) {
      mouseTool.close(ifClear);
    } else {
      switch (type) {
        case MouseToolDrawType.MARKER:
          mouseTool.marker(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.POLYLINE:
          mouseTool.polyline(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.POLYGON:
          mouseTool.polygon(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.CIRCLE:
          mouseTool.circle(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.RECTANGLE:
          mouseTool.rectangle(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.MEASUREAREA:
          mouseTool.measureArea(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.RULE:
          mouseTool.rule(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.RECTZOOMIN:
          mouseTool.rectZoomIn(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.RECTZOOMOUT:
          mouseTool.rectZoomOut(drawElementOptions ? drawElementOptions : {});
          break;
      }
    }
  }, [active, ifClear]);
  useEventProperties(mouseTool, props, ['onDraw']);
  return null;
});
;// CONCATENATED MODULE: ../rectangle/esm/useRectangle.js


var useRectangle_excluded = ["visiable"];



var useRectangle = function useRectangle(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useRectangle_excluded);
  var {
    map
  } = useMapContext();
  var [rectangle, setRectangle] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!rectangle) {
      var instance = new AMap.Rectangle(_extends({}, other));
      map.add(instance);
      setRectangle(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setRectangle(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(rectangle, visiable);
  useSettingProperties(rectangle, props, ['Bounds', 'Options', 'Map', 'ExtData']);
  useEventProperties(rectangle, props, ['onHide', 'onShow', 'onClick', 'onDblClick', 'onRightClick', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseDown', 'onTouchEnd', 'onTouchMove', 'onTouchStart']);
  return {
    rectangle,
    setRectangle
  };
};
;// CONCATENATED MODULE: ../rectangle/esm/index.js




var Rectangle = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    rectangle
  } = useRectangle(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    rectangle
  }));
  return null;
});
;// CONCATENATED MODULE: ../require-script/esm/index.js
var _importedScript = {};

/**
 * load dependency by css tag
 */
function requireCss(src, id) {
  if (id === void 0) {
    id = '_react_amap_css';
  }
  var headElement = document && (document.head || document.getElementsByTagName('head')[0]);
  var dom = document.getElementById(id);
  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript || dom) {
      resolve();
      return;
    }
    var script = document.createElement('link');
    script.type = 'text/css';
    script.rel = 'stylesheet';
    script.id = id;
    script.href = src;
    script.onerror = err => {
      headElement.removeChild(script);
      reject(new URIError("The css " + src + " is no accessible."));
    };
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };
    headElement.appendChild(script);
  });
}

/**
 * load dependency by script tag
 */
function requireScript(src, id) {
  if (id === void 0) {
    id = '_react_amap_plugin';
  }
  var headElement = document && (document.head || document.getElementsByTagName('head')[0]);
  var dom = document.getElementById(id);
  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript || dom) {
      resolve();
      return;
    }
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = id;
    script.async = true;
    script.defer = true;
    script.src = src;
    script.onerror = err => {
      headElement.removeChild(script);
      reject(new URIError("The Script " + src + " is no accessible."));
    };
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };
    headElement.appendChild(script);
  });
}
;// CONCATENATED MODULE: ../scale-control/esm/useScaleControl.js



function useScaleControl(props) {
  if (props === void 0) {
    props = {};
  }
  var [scaleControl, setScaleControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    position,
    visiable,
    offset
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !scaleControl) {
      var instance;
      map.plugin(['AMap.Scale'], () => {
        instance = new AMap.Scale({
          offset: offset,
          position
        });
        map.addControl(instance);
        setScaleControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      };
    }
  }, [map]);
  useVisiable(scaleControl, visiable);
  return {
    scaleControl,
    setScaleControl
  };
}
;// CONCATENATED MODULE: ../scale-control/esm/index.js




var ScaleControl = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    scaleControl
  } = useScaleControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    scaleControl
  }), [scaleControl]);
  return null;
});
;// CONCATENATED MODULE: ../text/esm/useText.js


var useText_excluded = ["visiable"];



var useText = function useText(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      visiable
    } = props,
    other = _objectWithoutPropertiesLoose(props, useText_excluded);
  var [text, setText] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    map
  } = useMapContext();
  var {
    container,
    Portal
  } = usePortal();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!AMap || !map) return;
    if (!text) {
      if (props.children) {
        other.text = container.innerHTML;
      }
      var instance = new AMap.Text(_extends({}, other));
      map.add(instance);
      setText(instance);
      return () => {
        if (instance) {
          instance.remove();
          setText(undefined);
        }
      };
    }
  }, [map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (text) {
      text.setText(props.children ? container.innerHTML : props.text || '');
    }
  }, [props.children, props.text, container, text]);
  useVisiable(text, visiable);
  useSettingProperties(text, props, ['Style', 'Title', 'Clickable', 'Draggable', 'Map', 'Position', 'Offset', 'Angle', 'zIndex', 'Top', 'Cursor', 'ExtData']);
  useEventProperties(text, props, ['onMoving', 'onTouchMove', 'onTouchEnd', 'onMoveaLong', 'onTouchStart', 'onMoveEnd', 'onClick', 'onDblClick', 'onRightClick', 'onMouseMove', 'onMouseOver', 'onMouseOut', 'onMouseDown', 'onMouseUp', 'onDragStart', 'onDragEnd', 'onDragging']);
  return {
    text,
    setText,
    TextPortal: Portal
  };
};
;// CONCATENATED MODULE: ../text/esm/index.js





var Text = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, ref) => {
  var {
    text,
    TextPortal
  } = useText(_extends({}, props));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    text
  }));
  if (!props.children) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TextPortal, {
    children: props.children
  });
});
;// CONCATENATED MODULE: ../tool-bar-control/esm/useToolBarControl.js



function useToolBarControl(props) {
  if (props === void 0) {
    props = {};
  }
  var [toolBarControl, setToolBarControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    position,
    visiable,
    offset
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !toolBarControl) {
      var instance;
      map.plugin(['AMap.ToolBar'], () => {
        instance = new AMap.ToolBar({
          offset,
          position
        });
        map.addControl(instance);
        setToolBarControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      };
    }
  }, [map]);
  useVisiable(toolBarControl, visiable);
  return {
    toolBarControl,
    setToolBarControl
  };
}
;// CONCATENATED MODULE: ../tool-bar-control/esm/index.js




var ToolBarControl = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    toolBarControl
  } = useToolBarControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    toolBarControl
  }), [toolBarControl]);
  return null;
});
;// CONCATENATED MODULE: ../weather/esm/useWeather.js

var useWeather = function useWeather(props) {
  if (props === void 0) {
    props = {};
  }
  var {
    city = '',
    type = 'live',
    onComplete,
    onError
  } = props;
  var [weather, setWeather] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var funName = type === 'live' ? 'getLive' : 'getForecast';
  function getData(instance) {
    if (type && city && /^(live|forecast)$/.test(type)) {
      instance[funName](city, (err, data) => {
        if (err && onError) {
          onError(err);
        } else if (data && onComplete) {
          onComplete(data);
        }
      });
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (AMap && !weather) {
      var instance;
      AMap.plugin(['AMap.Weather'], () => {
        instance = new AMap.Weather();
        setWeather(instance);
      });
      return () => {
        if (instance) {
          setWeather(undefined);
        }
      };
    }
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (weather && city && type) {
      getData(weather);
    }
  }, [weather, city, type]);
  return {
    weather,
    setWeather
  };
};
;// CONCATENATED MODULE: ../weather/esm/index.js




var Weather = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    weather
  } = useWeather(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    weather
  }));
  return null;
});
;// CONCATENATED MODULE: ./src/index.tsx
/// <reference types="@uiw/react-amap-types" />

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});