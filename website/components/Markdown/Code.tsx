import React from 'react';
import CodePreview, { CodePreviewProps } from '@uiw/react-code-preview';

export interface CodeProps extends CodePreviewProps {
  language: string;
  code: string;
  codePen: boolean;
  dependencies: any;
}

export default function Code({ language, dependencies, codePen, ...other }: CodeProps) {
  const props: CodePreviewProps = { ...other };
  if (codePen) {
    props.codeSandboxOption = {
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
              '@kkt/less-modules': '6.9.0',
              kkt: '6.9.0',
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
  }
  return <CodePreview {...props} language={language} dependencies={dependencies} style={{ marginBottom: 0 }} />;
}
