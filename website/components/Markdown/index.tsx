import React, { Component } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import rehypeAttr from 'rehype-attr';
import Code, { CodeProps } from './Code';
import styles from './index.module.less';

interface MarkdownProps {}
interface MarkdownState {
  mdStr: string;
}

const getCodeStr = (data: any[] = [], code: string = '') => {
  data.forEach((node) => {
    if (node.type === 'text') {
      code += node.value;
    } else if (node.children && Array.isArray(node.children)) {
      code += getCodeStr(node.children);
    }
  });
  return code;
};

/**
 * 代码注释参数
 *
 * ```md
 * <!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
 * ```
 * 参数用英文逗号隔开
 *
 * - `bgWhite` 设置代码预览背景白色，否则为格子背景。
 * - `noCode` 不显示代码编辑器。
 * - `noPreview` 不显示代码预览效果。
 * - `noScroll` 预览区域不显示滚动条。
 * - `codePen` 显示 Codepen 按钮，要特别注意 `包导入的问题`，实例中的 `import` 主要用于 Codepen 使用。
 */
export interface OptionsMarkdown {
  bgWhite?: boolean;
  noCode?: boolean;
  noPreview?: boolean;
  noScroll?: boolean;
  codePen?: boolean;
}

export default class Markdown extends Component<MarkdownProps, MarkdownState> {
  constructor(props: MarkdownProps) {
    super(props);
    this.state = {
      mdStr: '',
    };
  }
  getMdStr?: any;
  dependencies?: any;
  componentDidMount() {
    if (this.getMdStr) {
      this.getMdStr().then((str: any) => {
        this.setState({
          mdStr: str.default || str,
        });
      });
    }
  }
  render() {
    return (
      <MarkdownPreview
        style={{ padding: '20px 26px' }}
        source={this.state.mdStr}
        className={styles.markdown}
        rehypePlugins={[rehypeAttr]}
        components={{
          /**
           * bgWhite 设置代码预览背景白色，否则为格子背景。
           * noCode 不显示代码编辑器。
           * noPreview 不显示代码预览效果。
           * noScroll 预览区域不显示滚动条。
           * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
           */
          code: ({ 'data-config': config, inline, node, ...props }) => {
            if (inline) {
              return <code {...props} />;
            }
            if (config) {
              const { noPreview, noScroll, bgWhite, noCode, codePen } = config as CodeProps;
              return (
                <Code
                  code={getCodeStr(node.children)}
                  dependencies={this.dependencies}
                  language={(props.className || '').replace(/^language-/, '')}
                  {...{ noPreview, noScroll, bgWhite, noCode, codePen }}
                />
              );
            }
            return <code {...props} />;
          },
        }}
      />
    );
  }
}
