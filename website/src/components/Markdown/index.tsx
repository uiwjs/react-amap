import { useEffect, useState, useRef, Component } from 'react';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example/markdown';
import type { CodeBlockData } from 'markdown-react-code-preview-loader';
import styled from 'styled-components';
import BackToUp from '@uiw/react-back-to-top';
import Footer from '../Footer';
import { Hyperlink } from './Hyperlink';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MarkdownPreview = styled(MarkdownPreviewExample)`
  max-width: none;
  margin: inherit;
  box-shadow: 0 0 0;
  border: 0;
  pre[data-type='rehyp'] {
    overflow: initial;
  }
`;

const Main = styled.main`
  padding: 20px 30px 120px 30px;
  display: grid;
  grid-template-columns: minmax(0, 3.5fr) 240px;
  grid-template-areas: 'main toc';
  border: 0;
  &::after,
  &::before {
    content: none;
  }
`;

interface MarkdownProps {
  path?: () => Promise<{ default: CodeBlockData }>;
  editorUrl?: string;
}

function MarkdownInstance(props: MarkdownProps) {
  const $dom = useRef<any>(null);
  const [mdStr, setMdStr] = useState('');
  const [data, setData] = useState<CodeBlockData>();
  const path = props.path;
  useEffect(() => {
    if (path) {
      path().then((str) => {
        setMdStr(str.default.source);
        setData(str.default);
      });
    }
  }, [path]);
  return (
    <Wrapper ref={$dom}>
      {mdStr && (
        <Main>
          <MarkdownPreview source={mdStr || ''} data={data!} />
          <Hyperlink dom={$dom.current} mdStr={mdStr} />
        </Main>
      )}
      <BackToUp style={{ float: 'right' }}>Top</BackToUp>
      <Footer editorUrl={props.editorUrl} />
    </Wrapper>
  );
}

export default class Markdown extends Component<MarkdownProps> {
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
    return <MarkdownInstance path={this.getMdStr} editorUrl={this.editorUrl} />;
  }
}
