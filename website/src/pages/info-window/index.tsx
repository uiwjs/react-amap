import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/info-window/README.md';
  getMdStr = () => import('@uiw/react-amap-info-window/README.md');
}
