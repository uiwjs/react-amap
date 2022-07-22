import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/auto-complete/README.md';
  getMdStr = () => import('@uiw/react-amap-auto-complete/README.md');
}
