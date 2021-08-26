import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, AutoComplete, useAutoComplete } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/auto-complete/README.md';
  dependencies = { APILoader, Map, useMap, AutoComplete, useAutoComplete, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-auto-complete/README.md');
}
