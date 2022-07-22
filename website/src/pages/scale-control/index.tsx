import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/scale-control/README.md';
  getMdStr = () => import('@uiw/react-amap-scale-control/README.md');
}
