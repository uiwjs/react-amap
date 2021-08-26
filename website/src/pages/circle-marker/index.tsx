import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, CircleMarker, useCircleMarker } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/circle-marker/README.md';
  dependencies = { APILoader, Map, useMap, CircleMarker, useCircleMarker, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-circle-marker/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-circle-marker/README.md');
}
