import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/circle/README.md';
  getMdStr = () => import('@uiw/react-amap-circle/README.md');
}
