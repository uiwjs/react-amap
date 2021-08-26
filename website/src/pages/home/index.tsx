import { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '@uiw/react-amap';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/amap/README.md';
  dependencies = { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation };
  getMdStr = () => import('@uiw/react-amap/README.md');
}
