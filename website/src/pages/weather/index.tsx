import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/weather/README.md';
  getMdStr = () => import('@uiw/react-amap-weather/README.md');
}
