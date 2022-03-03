import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import * as map from '@uiw/react-amap';

export default class Page extends Markdown {
  editorUrl = '/packages/marker/README.md';
  dependencies = { ...map, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-marker/README.md');
}
