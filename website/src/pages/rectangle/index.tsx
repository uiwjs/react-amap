import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Rectangle, useRectangle } from '@uiw/react-amap';

export default class Page extends Markdown {
  editorUrl = '/packages/rectangle/README.md';
  dependencies = { APILoader, Map, useMap, Rectangle, useRectangle, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-rectangle/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-rectangle/README.md');
}
