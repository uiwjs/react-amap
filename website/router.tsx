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
    divider: true,
    label: '其它',
  },
  {
    label: '高德拾取坐标系统',
    target: '__blank',
    path: 'https://lbs.amap.com/console/show/picker',
  },
  {
    label: '高德地图官方示例中心',
    target: '__blank',
    path: 'https://lbs.amap.com/demo-center/amap-ui',
  },
  {
    label: '高德地图参考手册',
    target: '__blank',
    path: 'https://lbs.amap.com/api/jsapi-v2/documentation',
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
    divider: true,
    label: '相关连接',
  },
  {
    label: '百度地图 React 组件',
    target: '__blank',
    path: 'https://uiwjs.github.io/react-baidu-map/',
  },
]