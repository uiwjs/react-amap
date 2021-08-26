import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Weather, useWeather } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/weather/README.md';
  dependencies = { APILoader, Map, useMap, Weather, useWeather, useRef, useEffect, useState };
  // getMdStr = () => import('@uiw/react-amap-weather/README.md');
  getMdStr = () => import('../../../node_modules/@uiw/react-amap/node_modules/@uiw/react-amap-weather/README.md');
}
