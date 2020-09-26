import React from 'react';
import loadable from "@loadable/component";

const options = {
  fallback: <div>loading</div>
}

export type Routes = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
}[];

export const routes: Routes = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import('./pages/home'), options),
  },
  {
    path: "/api-loader",
    component: loadable(() => import('./pages/api-loader'), options),
  },
  {
    path: "/map",
    component: loadable(() => import('./pages/map'), options),
  },
  {
    path: "/scale-control",
    component: loadable(() => import('./pages/scale-control'), options),
  },
  {
    path: "/tool-bar-control",
    component: loadable(() => import('./pages/tool-bar-control'), options),
  },
  {
    path: "/control-bar-control",
    component: loadable(() => import('./pages/control-bar-control'), options),
  },
  {
    path: "/map-type-control",
    component: loadable(() => import('./pages/map-type-control'), options),
  },
  {
    path: "/hawk-eye-control",
    component: loadable(() => import('./pages/hawk-eye-control'), options),
  },
  {
    path: "/polyline",
    component: loadable(() => import('./pages/polyline'), options),
  },
  {
    path: "/marker",
    component: loadable(() => import('./pages/marker'), options),
  },
  {
    path: "/text",
    component: loadable(() => import('./pages/text'), options),
  },
  {
    path: "/circle",
    component: loadable(() => import('./pages/circle'), options),
  },
  {
    path: "/ellipse",
    component: loadable(() => import('./pages/ellipse'), options),
  },
  {
    path: "/rectangle",
    component: loadable(() => import('./pages/rectangle'), options),
  },
  {
    path: "/beizer-curve",
    component: loadable(() => import('./pages/beizer-curve'), options),
  },
  {
    path: "/polygon",
    component: loadable(() => import('./pages/polygon'), options),
  },
  {
    path: "/info-window",
    component: loadable(() => import('./pages/info-window'), options),
  },
  {
    path: "/circle-marker",
    component: loadable(() => import('./pages/circle-marker'), options),
  },
  {
    path: "/weather",
    component: loadable(() => import('./pages/weather'), options),
  },
  {
    path: "/geolocation",
    component: loadable(() => import('./pages/geolocation'), options),
  },
  {
    path: "/auto-complete",
    component: loadable(() => import('./pages/auto-complete'), options),
  },
];


export const menus = [
  {
    label: '快速开始',
    path: '/',
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
    label: 'ToolBarControl 工具条控件',
    path: '/tool-bar-control',
  },
  {
    label: 'MapTypeControl 工具条控件',
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
    label: '覆盖物',
  },
  {
    label: 'Marker 点标记',
    path: '/marker',
  },
  {
    label: 'Text 文本标记',
    path: '/text',
  },
  {
    label: 'Polyline 折线',
    path: '/polyline',
  },
  {
    label: 'Circle 圆形',
    path: '/circle',
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
    label: 'BesizerCurve 贝塞尔曲线',
    path: '/beizer-curve',
  },
  {
    label: 'Polygon 多边形',
    path: '/polygon',
  },
  {
    label: 'CircleMarker 圆点标记',
    path: '/circle-marker',
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
    label: '国内镜像 🇨🇳',
    target: '__blank',
    path: 'https://uiw.gitee.io/react-amap',
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
]