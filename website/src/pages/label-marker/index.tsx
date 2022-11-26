import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/label-marker/README.md';
  getMdStr = () => import('@uiw/react-amap-label-marker/README.md');
}
