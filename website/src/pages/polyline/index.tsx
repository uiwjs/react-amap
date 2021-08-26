import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, ToolBarControl, Polyline, usePolyline } from '@uiw/react-amap';

export default class Page extends Markdown {
  editorUrl = '/packages/polyline/README.md';
  dependencies = { APILoader, Map, useMap, ToolBarControl, Polyline, usePolyline, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-polyline/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-polyline/README.md');
}
