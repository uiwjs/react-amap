import { Component, Fragment } from 'react';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example/markdown';
import type { CodeBlockData } from 'markdown-react-code-preview-loader';
import styled from 'styled-components';
import Footer from '../Footer';

const Wrapper = styled(MarkdownPreviewExample)`
  padding: 20px 26px;
  box-shadow: 0 0 0;
  border-width: 0;
  max-width: 1024px;
  margin: 0 0;
  pre[data-type='rehyp'] {
    overflow: initial;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      display: none;
    }
  }
`;

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
        {this.state.mdStr && <Wrapper source={this.state.mdStr || ''} data={this.state.data!} />}
        <Footer editorUrl={this.editorUrl} />
      </Fragment>
    );
  }
}
