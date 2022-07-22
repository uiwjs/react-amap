import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/control-bar-control/README.md';
  getMdStr = () => import('@uiw/react-amap-control-bar-control/README.md');
}
