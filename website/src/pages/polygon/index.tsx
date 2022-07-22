import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/polygon/README.md';
  getMdStr = () => import('@uiw/react-amap-polygon/README.md');
}
