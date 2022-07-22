import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/amap/README.md';
  getMdStr = () => import('@uiw/react-amap/README.md');
}
