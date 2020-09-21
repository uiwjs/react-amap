import React from 'react';
import CodePreview, { ICodePreviewProps } from '@uiw/react-code-preview';

const regxOpts = /^;\{\{\/\*\*(.+?)\*\*\/\}\};/g;

export interface CodeProps {
  language: string;
  value: string;
  dependencies: any;
}

export default function Code({ language, value, dependencies, ...other }: CodeProps) {
  const props: ICodePreviewProps = {};
  let onlyRead: boolean = false;
  if(/\^(js|jsx)/.test(language) || !regxOpts.test(value)) {
    onlyRead = true;
  }
  props.code = value.replace(regxOpts, '');
  const propsStr = value.match(regxOpts);
  if (propsStr && propsStr[0] && RegExp.$1) {
    try {
      const propsArr: ICodePreviewProps[] = JSON.parse(RegExp.$1);
      propsArr.forEach((item) => {
        Object.keys(item).forEach((keyName) => {
          if (keyName === 'codePen') {
            return;
          }
          props[keyName as keyof ICodePreviewProps] = item[keyName as keyof ICodePreviewProps];
        })
      });
    } catch (error) {}
  }
  if (onlyRead) {
    const cls = [
      language ? `language-${language}` : null
    ].filter(item => item).join(' ').trim();
    return (
      <pre className={cls}>
        <code className={cls}>
          {value}
        </code>
      </pre>
    )
  }
  return (
    <CodePreview {...props} language={language} dependencies={dependencies} />
  );
}
