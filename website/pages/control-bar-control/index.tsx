import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, ControlBarControl, useControlBarControl } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/ControlBarControl/README.md';
  dependencies = { APILoader, Map, useMap, ControlBarControl, useControlBarControl, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/ControlBarControl/README.md');
}
