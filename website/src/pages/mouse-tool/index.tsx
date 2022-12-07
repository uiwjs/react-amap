import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/mouse-tool/README.md';
  getMdStr = () => import('@uiw/react-amap-mouse-tool/README.md');
}
