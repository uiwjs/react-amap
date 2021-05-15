import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, ContextMenu, useContextMenu } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/ContextMenu/README.md';
  dependencies = { APILoader, Map, useMap, ContextMenu, useContextMenu, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/ContextMenu/README.md');
}
