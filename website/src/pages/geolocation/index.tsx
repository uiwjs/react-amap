import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Geolocation, useGeolocation } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/geolocation/README.md';
  dependencies = { APILoader, Map, useMap, Geolocation, useGeolocation, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-geolocation/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-geolocation/README.md');
}
