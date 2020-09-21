import { Fragment, useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { Fragment, useRef, useEffect, useState, Map, APILoader };
  getMdStr = () => import('../../../src/Map/README.md');
}
