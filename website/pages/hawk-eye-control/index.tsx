import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, HawkEyeControl, useHawkEyeControl } from '../../../';

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, HawkEyeControl, useHawkEyeControl, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/HawkEyeControl/README.md');
}
