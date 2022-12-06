import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/poly-editor/README.md';
  getMdStr = () => import('@uiw/react-amap-poly-editor/README.md');
}
