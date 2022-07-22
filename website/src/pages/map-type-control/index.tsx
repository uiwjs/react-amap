import Markdown from '../../components/Markdown';
import './index.css';

export default class Page extends Markdown {
  editorUrl = '/packages/map-type-control/README.md';
  getMdStr = () => import('@uiw/react-amap-map-type-control/README.md');
}
