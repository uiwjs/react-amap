import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, requireScript, Map, useMap, MassMarks, useMassMarks } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/MassMarks/README.md';
  dependencies = { APILoader, requireScript, Map, useMap, MassMarks, useMassMarks, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/MassMarks/README.md');
}
