import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/text/README.md';
  getMdStr = () => import('@uiw/react-amap-text/README.md');
}
