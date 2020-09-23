import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, MapTypeControl, useMapTypeControl } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, MapTypeControl, useMapTypeControl, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/MapTypeControl/README.md');
}
