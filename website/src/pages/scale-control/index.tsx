import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, ScaleControl, useScaleControl } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/scale-control/README.md';
  dependencies = { APILoader, Map, useMap, ScaleControl, useScaleControl, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-scale-control/README.md');
}
