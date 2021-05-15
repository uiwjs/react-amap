import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, InfoWindow, Marker, useInfoWindow } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/InfoWindow/README.md';
  dependencies = { APILoader, Map, useMap, InfoWindow, useInfoWindow, Marker, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/InfoWindow/README.md');
}
