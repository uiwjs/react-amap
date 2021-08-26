import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Text, useText } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/text/README.md';
  dependencies = { APILoader, Map, useMap, Text, useText, useRef, useEffect, useState };
  getMdStr = () => import('@uiw/react-amap-text/README.md');
}
