import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/require-script/README.md';
  getMdStr = () => import('@uiw/react-amap-require-script/README.md');
}
