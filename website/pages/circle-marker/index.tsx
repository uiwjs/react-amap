import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, CircleMarker, useCircleMarker } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/CircleMarker/README.md';
  dependencies = { APILoader, Map, useMap, CircleMarker, useCircleMarker, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/CircleMarker/README.md');
}
