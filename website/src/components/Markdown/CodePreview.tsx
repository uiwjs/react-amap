import CodeLayout from 'react-code-preview-layout';
import { getMetaId, CodeBlockData, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import { useEffect, useRef } from 'react';
import { Element, Root } from 'react-markdown/lib/ast-to-react';

interface CodePreviewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  inline?: boolean;
  node: Element | Root;
  data: CodeBlockData;
}

export const CodePreview: any = ({ inline, data, node, ...props }: CodePreviewProps) => {
  const $dom = useRef<HTMLDivElement>(null);
  const { 'data-meta': meta, ...rest } = props as any;

  useEffect(() => {
    if ($dom.current) {
      const parentElement = $dom.current.parentElement;
      if (parentElement && parentElement.parentElement) {
        parentElement.parentElement.replaceChild($dom.current, parentElement);
      }
    }
  }, [$dom]);

  if (inline || !isMeta(meta)) {
    return <code {...props} />;
  }
  const line = node.position?.start.line;
  const metaId = getMetaId(meta) || String(line);
  const Child = data.components[`${metaId}`];
  if (metaId && typeof Child === 'function') {
    const code = data.data[metaId].value || '';
    const param = getURLParameters(meta);
    return (
      <CodeLayout ref={$dom} toolbar={param.title || 'Example'} code={<pre {...rest} />} text={code}>
        <Child />
      </CodeLayout>
    );
  }
  return <code {...rest} />;
};
