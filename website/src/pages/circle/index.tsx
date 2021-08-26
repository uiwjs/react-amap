import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Circle, useCircle } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/circle/README.md';
  dependencies = { APILoader, Map, useMap, Circle, useCircle, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-circle/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-circle/README.md');
}
