import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/api-loader',
    component: lazy(() => import('./pages/api-loader')),
  },
  {
    path: '/map',
    component: lazy(() => import('./pages/map')),
  },
  {
    path: '/scale-control',
    component: lazy(() => import('./pages/scale-control')),
  },
  {
    path: '/tool-bar-control',
    component: lazy(() => import('./pages/tool-bar-control')),
  },
  {
    path: '/control-bar-control',
    component: lazy(() => import('./pages/control-bar-control')),
  },
  {
    path: '/map-type-control',
    component: lazy(() => import('./pages/map-type-control')),
  },
  {
    path: '/tile-layer',
    component: lazy(() => import('./pages/tile-layer')),
  },
  {
    path: '/hawk-eye-control',
    component: lazy(() => import('./pages/hawk-eye-control')),
  },
  {
    path: '/polyline',
    component: lazy(() => import('./pages/polyline')),
  },
  {
    path: '/polyline-editor',
    component: lazy(() => import('./pages/polyline-editor')),
  },
  {
    path: '/marker',
    component: lazy(() => import('./pages/marker')),
  },
  {
    path: '/mass-marks',
    component: lazy(() => import('./pages/mass-marks')),
  },
  {
    path: '/label-marker',
    component: lazy(() => import('./pages/label-marker')),
  },
  {
    path: '/text',
    component: lazy(() => import('./pages/text')),
  },
  {
    path: '/circle',
    component: lazy(() => import('./pages/circle')),
  },
  {
    path: '/ellipse',
    component: lazy(() => import('./pages/ellipse')),
  },
  {
    path: '/rectangle',
    component: lazy(() => import('./pages/rectangle')),
  },
  {
    path: '/beizer-curve',
    component: lazy(() => import('./pages/beizer-curve')),
  },
  {
    path: '/poly-editor',
    component: lazy(() => import('./pages/poly-editor')),
  },
  {
    path: '/polygon',
    component: lazy(() => import('./pages/polygon')),
  },
  {
    path: '/polygon-editor',
    component: lazy(() => import('./pages/polygon-editor')),
  },
  {
    path: '/info-window',
    component: lazy(() => import('./pages/info-window')),
  },
  {
    path: '/circle-marker',
    component: lazy(() => import('./pages/circle-marker')),
  },
  {
    path: '/mouse-tool',
    component: lazy(() => import('./pages/mouse-tool')),
  },
  {
    path: '/weather',
    component: lazy(() => import('./pages/weather')),
  },
  {
    path: '/geolocation',
    component: lazy(() => import('./pages/geolocation')),
  },
  {
    path: '/auto-complete',
    component: lazy(() => import('./pages/auto-complete')),
  },
  {
    path: '/context-menu',
    component: lazy(() => import('./pages/context-menu')),
  },
  {
    path: '/require-script',
    component: lazy(() => import('./pages/require-script')),
  },
  {
    path: '/types',
    component: lazy(() => import('./pages/types')),
  },
];

export const menus = [
  {
    label: '支持一下吧',
    target: '__blank',
    path: 'https://jaywcjlove.github.io/#/sponsor',
  },
  {
    label: '快速开始',
    path: '/',
  },
  {
    label: '国内镜像 🇨🇳',
    target: '__blank',
    path: 'https://uiw.gitee.io/react-amap',
  },
  {
    divider: true,
    label: '容器',
  },
  {
    label: 'APILoader 组件',
    path: '/api-loader',
  },
  {
    label: 'Map 组件',
    path: '/map',
  },
  {
    divider: true,
    label: '控件',
  },
  {
    label: 'ScaleControl 比例尺控件',
    path: '/scale-control',
  },
  {
    label: 'ToolBarControl 缩放工具条',
    path: '/tool-bar-control',
  },
  {
    label: 'MapTypeControl 图层切换',
    path: '/map-type-control',
  },
  {
    label: 'TileLayer 切片图层',
    path: '/tile-layer',
  },
  {
    label: 'ControlBarControl 地图控件',
    path: '/control-bar-control',
  },
  {
    label: 'HawkEyeControl 鹰眼控件',
    path: '/hawk-eye-control',
  },
  {
    divider: true,
    label: '点标记',
  },
  {
    label: 'Marker 点标记',
    path: '/marker',
  },
  {
    label: 'MassMarks 海量点标记',
    path: '/mass-marks',
  },
  {
    label: 'Text 文本标记',
    path: '/text',
  },
  {
    label: 'LabelMarker 标注类',
    path: '/label-marker',
  },
  {
    divider: true,
    label: '矢量图形',
  },
  {
    label: 'Polygon 多边形',
    path: '/polygon',
  },
  {
    label: 'PolygonEditor 编辑器',
    path: '/polygon-editor',
  },
  {
    label: 'Polyline 折线',
    path: '/polyline',
  },
  {
    label: 'PolylineEditor 折线编辑器',
    path: '/polyline-editor',
  },
  {
    label: 'PolyEditor 编辑器',
    path: '/poly-editor',
  },
  {
    label: 'MouseTool 绘制工具',
    path: '/mouse-tool',
  },
  {
    label: 'BesizerCurve 贝塞尔曲线',
    path: '/beizer-curve',
  },
  {
    label: 'Circle 圆形',
    path: '/circle',
  },
  {
    label: 'CircleMarker 圆点标记',
    path: '/circle-marker',
  },
  {
    label: 'Ellipse 圆形组件',
    path: '/ellipse',
  },
  {
    label: 'Rectangle 矩形',
    path: '/rectangle',
  },
  {
    divider: true,
    label: '信息窗体',
  },
  {
    label: 'InfoWindow 信息窗体',
    path: '/info-window',
  },
  {
    divider: true,
    label: '右键菜单',
  },
  {
    label: 'ContextMenu 右键菜单',
    path: '/context-menu',
  },
  {
    divider: true,
    label: '工具',
  },
  {
    label: 'Require Script',
    path: '/require-script',
  },
  {
    divider: true,
    label: '服务',
  },
  {
    label: 'Weather 天气查询服务',
    path: '/weather',
  },
  {
    label: 'Geolocation 定位',
    path: '/geolocation',
  },
  {
    divider: true,
    label: '搜索',
  },
  {
    label: 'AutoComplete 输入提示',
    path: '/auto-complete',
  },
  {
    divider: true,
    label: '其它',
  },
  {
    label: '高德地图 API 类型 types 定义',
    path: '/types',
  },
  {
    label: '高德拾取坐标系统',
    target: '__blank',
    path: 'https://lbs.amap.com/console/show/picker',
  },
  {
    label: '官方示例中心',
    target: '__blank',
    path: 'https://lbs.amap.com/demo-center/jsapi-v2',
  },
  {
    label: '高德地图 JSAPI 2.0',
    target: '__blank',
    path: 'https://a.amap.com/jsapi/static/doc/index.html',
  },
  {
    label: 'AMapUI 组件库',
    target: '__blank',
    path: 'https://lbs.amap.com/api/amap-ui/intro',
  },
  {
    label: '源码 Github 仓库',
    target: '__blank',
    path: 'https://github.com/uiwjs/react-amap',
  },
  {
    label: '源码 Gitee 仓库',
    target: '__blank',
    path: 'https://gitee.com/uiw/react-amap',
  },
  {
    divider: true,
    label: '相关连接',
  },
  {
    label: '百度地图 React 组件',
    target: '__blank',
    path: 'https://uiwjs.github.io/react-baidu-map/',
  },
  {
    label: 'React Web 组件库',
    target: '__blank',
    path: 'https://uiwjs.github.io/',
  },
  {
    label: 'React Native 组件库',
    target: '__blank',
    path: 'https://uimjs.github.io/',
  },
];
