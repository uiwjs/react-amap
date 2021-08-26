import { Map, APILoader } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/api-loader/README.md';
  dependencies = { Map, APILoader };
  getMdStr = () => import('@uiw/react-amap-api-loader/README.md');
}
