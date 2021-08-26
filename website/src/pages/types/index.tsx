import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/types/README.md';
  dependencies = {};
  getMdStr = () => import('@uiw/react-amap-types/README.md');
}
