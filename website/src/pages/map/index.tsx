import ReactDOM from 'react-dom';
import React, { Fragment, useRef, useEffect, useState } from 'react';
import * as map from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/map/README.md';
  dependencies = { React, ReactDOM, Fragment, useRef, useEffect, useState, ...map };
  getMdStr = () => import('@uiw/react-amap-map/README.md');
}
