import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePrevious } from './';

export interface UseCreatePortal {
  /**
   * 自定义 DOM 元素。
   */
  children?: React.ReactNode;
}

export function useCreatePortal(props = {} as UseCreatePortal) {
  const [div, setDiv] = useState<HTMLDivElement>(document.createElement('div'));
  const [portal, setPortal] = useState<React.ReactPortal>();
  const [count, setCount] = useState(0);
  const [children, setChildren] = useState(props.children);
  useMemo(() => {
    if (!portal) {
      const portalInstance = ReactDOM.createPortal(children, div);
      setCount(count + 1);
      setPortal(portalInstance);
    }
  }, [children, count, div, portal]);

  const prevCount = usePrevious(count);
  useMemo(() => {
    if (div && children && count === prevCount && count > 0) {
      const portalInstance = ReactDOM.createPortal(children, div);
      setCount(count + 1);
      setPortal(portalInstance);
    }
    return () => {
      if (div) {
        // setDiv(undefined);
      }
    };
  }, [children, count, div, prevCount]);

  return {
    div,
    setDiv,
    portal,
    setPortal,
    children,
    setChildren,
  };
}
