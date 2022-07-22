import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/geolocation/README.md';
  getMdStr = () => import('@uiw/react-amap-geolocation/README.md');
}
