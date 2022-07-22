import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/polygon-editor/README.md';
  getMdStr = () => import('@uiw/react-amap-polygon-editor/README.md');
}
