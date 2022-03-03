import { useRef, useEffect, useState } from 'react';
import * as amap from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/bezier-curve/README.md';
  dependencies = { ...amap, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-bezier-curve/README.md');
}
