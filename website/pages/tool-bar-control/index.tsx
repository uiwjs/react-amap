import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, ToolBarControl, useToolBarControl } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, ToolBarControl, useToolBarControl, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/ToolBarControl/README.md');
}
