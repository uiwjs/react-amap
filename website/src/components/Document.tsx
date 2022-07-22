import { useEffect, PropsWithChildren, Fragment } from 'react';

export interface DocumentTitleProps {
  title?: string;
}

export const DocumentTitle: React.FC<PropsWithChildren<DocumentTitleProps>> = (props) => {
  useEffect(() => {
    if (props.title && document) {
      const dom = document.querySelector('title');
      if (dom) {
        dom!.innerHTML = props.title || '';
      }
    }
  }, [props.title]);
  return <Fragment>{props.children}</Fragment>;
};
