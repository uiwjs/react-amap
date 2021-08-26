import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Polygon, usePolygon, PolygonEditor } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/polygon-editor/README.md';
  dependencies = { APILoader, Map, useMap, Polygon, PolygonEditor, usePolygon, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-polygon-editor/README.md');
}
