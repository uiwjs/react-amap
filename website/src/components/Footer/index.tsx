import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 23px 60px 23px;
  a {
    color: #ced1d4;
    text-decoration: none;
    transition: color 0.3s;
    margin: 0 3px;
    &:hover {
      color: black;
    }
    & + a {
      margin-left: 10px;
    }
    &::after {
      content: ' ';
      height: 13px;
      width: 1px;
      margin-left: 10px;
      display: inline-block;
      vertical-align: middle;
      background-color: #e5e9ec;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

type FooterProps = {
  editorUrl?: string;
};

const Footer = (props: FooterProps) => {
  const { editorUrl } = props || {};
  return (
    <Wrapper>
      {editorUrl && (
        <a
          title="Editor Current Page"
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/uiwjs/react-amap/edit/master${editorUrl}`}
        >
          编辑当前页面
        </a>
      )}
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/react-amap/issues/new">
        提交 Bug
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/react-amap">
        GitHub
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt">
        kkt
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw">
        uiwjs
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/react-baidu-map">
        百度地图 React 版本
      </a>
    </Wrapper>
  );
};

export default Footer;
