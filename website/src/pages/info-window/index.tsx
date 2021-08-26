import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, InfoWindow, Marker, useInfoWindow } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/info-window/README.md';
  dependencies = { APILoader, Map, useMap, InfoWindow, useInfoWindow, Marker, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-info-window/README.md');
}
