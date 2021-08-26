import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, MapTypeControl, useMapTypeControl } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/map-type-control/README.md';
  dependencies = { APILoader, Map, useMap, MapTypeControl, useMapTypeControl, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-map-type-control/README.md');
  getMdStr = () =>
    import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-map-type-control/README.md');
}
