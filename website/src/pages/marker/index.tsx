import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Marker, useMarker } from '@uiw/react-amap';

export default class Page extends Markdown {
  editorUrl = '/packages/marker/README.md';
  dependencies = { APILoader, Map, useMap, Marker, useMarker, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-marker/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-marker/README.md');
}
