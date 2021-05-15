import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, BezierCurve, useBezierCurve } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/BezierCurve/README.md';
  dependencies = { APILoader, Map, useMap, BezierCurve, useBezierCurve, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/BezierCurve/README.md');
}
