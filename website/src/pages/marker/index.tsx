import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/marker/README.md';
  getMdStr = () => import('@uiw/react-amap-marker/README.md');
}
