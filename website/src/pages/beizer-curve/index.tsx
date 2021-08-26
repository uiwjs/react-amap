import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, BezierCurve, useBezierCurve } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/bezier-curve/README.md';
  dependencies = { APILoader, Map, useMap, BezierCurve, useBezierCurve, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-bezier-curve/README.md');
}
