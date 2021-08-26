import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Ellipse, useEllipse } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/ellipse/README.md';
  dependencies = { APILoader, Map, useMap, Ellipse, useEllipse, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-ellipse/README.md');
}
