import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/context-menu/README.md';
  getMdStr = () => import('@uiw/react-amap-context-menu/README.md');
}
