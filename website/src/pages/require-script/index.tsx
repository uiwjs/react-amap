import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import * as amap from '@uiw/react-amap';

export default class Page extends Markdown {
  editorUrl = '/packages/require-script/README.md';
  dependencies = { ...amap, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-require-script/README.md');
}
