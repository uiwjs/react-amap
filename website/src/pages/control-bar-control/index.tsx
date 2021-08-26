import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, ControlBarControl, useControlBarControl } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/control-bar-control/README.md';
  dependencies = { APILoader, Map, useMap, ControlBarControl, useControlBarControl, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-control-bar-control/README.md');
}
