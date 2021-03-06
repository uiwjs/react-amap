import { Fragment, useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, Polyline } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Map/README.md';
  dependencies = { Fragment, useRef, useEffect, useState, Polyline, Map, APILoader };
  getMdStr = () => import('../../../src/Map/README.md');
}
