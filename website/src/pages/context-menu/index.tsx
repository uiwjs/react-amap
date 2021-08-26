import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, ContextMenu, useContextMenu } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/context-menu/README.md';
  dependencies = { APILoader, Map, useMap, ContextMenu, useContextMenu, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-context-menu/README.md');
}
