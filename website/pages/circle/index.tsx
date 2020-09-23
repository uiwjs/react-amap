import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Circle, useCircle } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, Circle, useCircle, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Circle/README.md');
}
