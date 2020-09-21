import React, { Component } from 'react';
import MarkdownPreview, { MarkdownAbstractSyntaxTree, NodeType } from '@uiw/react-markdown-preview';
import Code from './Code';

interface MarkdownProps { }
interface MarkdownState {
  mdStr: string;
}

/**
 * 代码注释参数
 * 
 * ```md
 * <!--DemoStart,bgWhite,noCode,noPreview,noScroll,codePen-->
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
};

export default class Markdown extends Component<MarkdownProps, MarkdownState> {
  constructor(props:MarkdownProps) {
    super(props);
    this.state = {
      mdStr: '',
    };
  }
  getMdStr?: any;
  dependencies?: any;
  componentDidMount() {
    if(this.getMdStr) {
      this.getMdStr().then((str: any ) => {
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
        className="markdown"
        escapeHtml={false}
        allowNode={(node: MarkdownAbstractSyntaxTree, index: number, parent: NodeType) => {
          if(node.type === 'code') {
            const preIdx = index - 1;
            const nextIdx = index + 1;
            const childs: MarkdownAbstractSyntaxTree[] = (parent as any).children;
            /**
             * 将参数放入代码的前面注释
             */
            if (
              childs && childs.length > 0
              && childs[preIdx] && childs[preIdx].type === 'html'
              && /^<!--DemoStart\s?(.*)-->/.test((childs[preIdx] && childs[preIdx].value) || '')
              && childs[nextIdx] && childs[nextIdx].type === 'html'
              && childs[nextIdx] && childs[nextIdx].value === '<!--End-->'
            ) {
              const preValue = (childs[preIdx] && childs[preIdx].value) || '';
              let options = {} as OptionsMarkdown;
              preValue.replace(/<!--\s?DemoStart\s?(.*)-->/g, (match: string, parame: any, code: any, offset: any) => {
                options = parame.replace(/^(,)/, '').split(',').map((val: string) => {
                  if (val && val.includes('=') && val.split('=').length === 2) {
                    return {
                      [`${val.split('=')[0]}`]: val.split('=')[1],
                    }
                  }
                  return { [`${val}`]: true };
                });
                return '';
              });
              node.value = `;{{/**${JSON.stringify(options)}**/}};${node.value}`;
            };
          }
          return true;
        }}
        renderers={{
          code: (props) => {
            return <Code {...props} dependencies={this.dependencies} />
          },
        }}
      />
    );
  }
}