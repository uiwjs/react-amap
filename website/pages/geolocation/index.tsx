import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Geolocation, useGeolocation } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Geolocation/README.md';
  dependencies = { APILoader, Map, useMap, Geolocation, useGeolocation, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Geolocation/README.md');
}
