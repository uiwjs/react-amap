import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Polygon, usePolygon } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/polygon/README.md';
  dependencies = { APILoader, Map, useMap, Polygon, usePolygon, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-polygon/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-polygon/README.md');
}
