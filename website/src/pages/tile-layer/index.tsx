import Markdown from '../../components/Markdown';
import './index.css';

export default class Page extends Markdown {
  editorUrl = '/packages/tile-layer/README.md';
  getMdStr = () => import('@uiw/react-amap-tile-layer/README.md');
}
