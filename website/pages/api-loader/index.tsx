import Markdown from '../../components/Markdown';
import { Map, APILoader } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/APILoader/README.md';
  dependencies = { Map, APILoader };
  getMdStr = () => import('../../../src/APILoader/README.md');
}
