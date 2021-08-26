import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, requireScript, Map, useMap, MassMarks, useMassMarks } from '@uiw/react-amap';

export default class Page extends Markdown {
  editorUrl = '/packages/mass-marks/README.md';
  dependencies = { APILoader, requireScript, Map, useMap, MassMarks, useMassMarks, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-mass-marks/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-mass-marks/README.md');
}
