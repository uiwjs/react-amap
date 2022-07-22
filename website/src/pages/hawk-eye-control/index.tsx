import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/hawk-eye-control/README.md';
  getMdStr = () => import('@uiw/react-amap-hawk-eye-control/README.md');
}
