import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, ToolBarControl, useToolBarControl } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/tool-bar-control/README.md';
  dependencies = { APILoader, Map, useMap, ToolBarControl, useToolBarControl, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-tool-bar-control/README.md');
}
