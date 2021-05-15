import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Marker, useMarker } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Marker/README.md';
  dependencies = { APILoader, Map, useMap, Marker, useMarker, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Marker/README.md');
}
