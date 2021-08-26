import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, HawkEyeControl, useHawkEyeControl } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/hawk-eye-control/README.md';
  dependencies = { APILoader, Map, useMap, HawkEyeControl, useHawkEyeControl, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-hawk-eye-control/README.md');
}
