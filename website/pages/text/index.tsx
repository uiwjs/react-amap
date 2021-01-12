import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Text, useText } from '../../../';

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, Text, useText, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Text/README.md');
}
