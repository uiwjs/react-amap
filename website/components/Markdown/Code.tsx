import React from 'react';
import CodePreview, { CodePreviewProps } from '@uiw/react-code-preview';

const regxOpts = /^;\{\{\/\*\*(.+?)\*\*\/\}\};/g;

export interface CodeProps {
  language: string;
  value: string;
  dependencies: any;
}

export default function Code({ language, value, dependencies, ...other }: CodeProps) {
  const props: CodePreviewProps = {};
  let onlyRead: boolean = false;
  if (/\^(js|jsx)/.test(language) || !regxOpts.test(value)) {
    onlyRead = true;
  }
  props.code = value.replace(regxOpts, '');
  const propsStr = value.match(regxOpts);
  if (propsStr && propsStr[0] && RegExp.$1) {
    try {
      const propsArr: CodePreviewProps[] = JSON.parse(RegExp.$1);
      propsArr.forEach((item) => {
        Object.keys(item).forEach((keyName) => {
          if (keyName === 'codeSandbox') {
            props['codeSandboxOption'] = {
              files: {
                'sandbox.config.json': {
                  content: `{
                "template": "node",
                "container": {
                  "startScript": "start",
                  "node": "14"
                }
              }`,
                },
                'public/index.html': {
                  content: `<div id="container"></div>`,
                },
                'src/index.js': {
                  content: props.code!.replace('_mount_', 'document.getElementById("container")'),
                },
                '.kktrc.js': {
                  content: `import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};`,
                },
                'package.json': {
                  content: {
                    name: 'react-amap-demo',
                    description: `高德地图 React 组件 - demo`,
                    dependencies: {
                      react: 'latest',
                      'react-dom': 'latest',
                      '@uiw/react-amap': 'latest',
                    },
                    devDependencies: {
                      '@kkt/less-modules': '6.0.x',
                      kkt: '6.0.11',
                      typescript: '4.1.3',
                    },
                    license: 'MIT',
                    scripts: {
                      start: 'kkt start',
                      build: 'kkt build',
                      test: 'kkt test --env=jsdom',
                    },
                    browserslist: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all'],
                  },
                },
              },
            };
            return;
          }
          if (keyName === 'codePen') {
            return;
          }
          props[keyName as keyof CodePreviewProps] = item[keyName as keyof CodePreviewProps];
        });
      });
    } catch (error) {}
  }
  if (onlyRead) {
    const cls = [language ? `language-${language}` : null].filter(Boolean).join(' ').trim();
    return (
      <pre className={cls}>
        <code className={cls}>{value}</code>
      </pre>
    );
  }
  return <CodePreview {...props} language={language} dependencies={dependencies} />;
}
