import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, AutoComplete, useAutoComplete } from '../../../';

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, AutoComplete, useAutoComplete, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/AutoComplete/README.md');
}
