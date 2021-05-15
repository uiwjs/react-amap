import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Polygon, usePolygon } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Polygon/README.md';
  dependencies = { APILoader, Map, useMap, Polygon, usePolygon, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Polygon/README.md');
}
