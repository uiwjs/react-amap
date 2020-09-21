import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, ScaleControl, useScaleControl } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, ScaleControl, useScaleControl, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/ScaleControl/README.md');
}
