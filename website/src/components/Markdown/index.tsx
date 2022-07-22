import { Component, Fragment } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Footer from '../Footer';
import { CodePreview } from './CodePreview';
import styles from './index.module.less';
import { CodeBlockData } from 'markdown-react-code-preview-loader';

interface MarkdownProps {}
interface MarkdownState {
  mdStr: string;
  data?: CodeBlockData;
}

export default class Markdown extends Component<MarkdownProps, MarkdownState> {
  constructor(props: MarkdownProps) {
    super(props);
    this.state = {
      mdStr: '',
    };
  }
  editorUrl?: string;
  getMdStr?: () => Promise<{ default: CodeBlockData }>;
  componentDidMount() {
    if (this.getMdStr) {
      this.getMdStr().then((str) => {
        this.setState({
          data: str.default,
          mdStr: str.default.source,
        });
      });
    }
  }
  render() {
    return (
      <Fragment>
        <MarkdownPreview
          style={{ padding: '20px 26px' }}
          source={this.state.mdStr}
          className={styles.markdown}
          disableCopy={true}
          components={{
            code: (props) => {
              return <CodePreview {...props} data={this.state.data} />;
            },
          }}
        />
        <Footer editorUrl={this.editorUrl} />
      </Fragment>
    );
  }
}
