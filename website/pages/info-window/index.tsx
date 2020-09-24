import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, InfoWindow, useInfoWindow } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, InfoWindow, useInfoWindow, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/InfoWindow/README.md');
}
