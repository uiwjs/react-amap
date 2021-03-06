import Markdown from '../../components/Markdown';
import { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/README.md';
  dependencies = { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation };
  getMdStr = () => import('../../../README.md');
}
