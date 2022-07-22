import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/polyline/README.md';
  getMdStr = () => import('@uiw/react-amap-polyline/README.md');
}
