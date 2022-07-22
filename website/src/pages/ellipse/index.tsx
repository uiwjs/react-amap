import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/ellipse/README.md';
  getMdStr = () => import('@uiw/react-amap-ellipse/README.md');
}
