import React, { lazy } from 'react';

export type Routes = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
}[];

export const routes: Routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')) as unknown as React.ReactNode,
  },
  {
    path: '/api-loader',
    component: lazy(() => import('./pages/api-loader')) as unknown as React.ReactNode,
  },
  {
    path: '/map',
    component: lazy(() => import('./pages/map')) as unknown as React.ReactNode,
  },
  {
    path: '/scale-control',
    component: lazy(() => import('./pages/scale-control')) as unknown as React.ReactNode,
  },
  {
    path: '/tool-bar-control',
    component: lazy(() => import('./pages/tool-bar-control')) as unknown as React.ReactNode,
  },
  {
    path: '/control-bar-control',
    component: lazy(() => import('./pages/control-bar-control')) as unknown as React.ReactNode,
  },
  {
    path: '/map-type-control',
    component: lazy(() => import('./pages/map-type-control')) as unknown as React.ReactNode,
  },
  {
    path: '/hawk-eye-control',
    component: lazy(() => import('./pages/hawk-eye-control')) as unknown as React.ReactNode,
  },
  {
    path: '/polyline',
    component: lazy(() => import('./pages/polyline')) as unknown as React.ReactNode,
  },
  {
    path: '/marker',
    component: lazy(() => import('./pages/marker')) as unknown as React.ReactNode,
  },
  {
    path: '/mass-marks',
    component: lazy(() => import('./pages/mass-marks')) as unknown as React.ReactNode,
  },
  {
    path: '/text',
    component: lazy(() => import('./pages/text')) as unknown as React.ReactNode,
  },
  {
    path: '/circle',
    component: lazy(() => import('./pages/circle')) as unknown as React.ReactNode,
  },
  {
    path: '/ellipse',
    component: lazy(() => import('./pages/ellipse')) as unknown as React.ReactNode,
  },
  {
    path: '/rectangle',
    component: lazy(() => import('./pages/rectangle')) as unknown as React.ReactNode,
  },
  {
    path: '/beizer-curve',
    component: lazy(() => import('./pages/beizer-curve')) as unknown as React.ReactNode,
  },
  {
    path: '/polygon',
    component: lazy(() => import('./pages/polygon')) as unknown as React.ReactNode,
  },
  {
    path: '/polygon-editor',
    component: lazy(() => import('./pages/polygon-editor')) as unknown as React.ReactNode,
  },
  {
    path: '/info-window',
    component: lazy(() => import('./pages/info-window')) as unknown as React.ReactNode,
  },
  {
    path: '/circle-marker',
    component: lazy(() => import('./pages/circle-marker')) as unknown as React.ReactNode,
  },
  {
    path: '/weather',
    component: lazy(() => import('./pages/weather')) as unknown as React.ReactNode,
  },
  {
    path: '/geolocation',
    component: lazy(() => import('./pages/geolocation')) as unknown as React.ReactNode,
  },
  {
    path: '/auto-complete',
    component: lazy(() => import('./pages/auto-complete')) as unknown as React.ReactNode,
  },
  {
    path: '/context-menu',
    component: lazy(() => import('./pages/context-menu')) as unknown as React.ReactNode,
  },
  {
    path: '/require-script',
    component: lazy(() => import('./pages/require-script')) as unknown as React.ReactNode,
  },
  {
    path: '/types',
    component: lazy(() => import('./pages/types')) as unknown as React.ReactNode,
  },
];

export const menus = [
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
