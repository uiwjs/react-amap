import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/rectangle/README.md';
  getMdStr = () => import('@uiw/react-amap-rectangle/README.md');
}
