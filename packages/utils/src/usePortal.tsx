import React, { useState, useEffect, ReactPortal, useRef } from 'react';
import { createPortal } from 'react-dom';
import { createRoot, Root } from 'react-dom/client';

interface State {
  render: (props: { children: React.ReactNode }) => ReactPortal | null;
  remove: (elm?: HTMLElement) => void;
}

export const usePortal = () => {
  const ref = useRef<Root>();
  const [container] = React.useState<HTMLDivElement>(() => {
    const el = document.createElement('div');
    ref.current = createRoot(el);
    return el;
  });
  const [portal, setPortal] = useState<State>({
    render: () => null,
    remove: () => null,
  });

  const ReactCreatePortal = React.useCallback<(elmm: HTMLDivElement) => State>((elmm) => {
    const Portal: State['render'] = ({ children }) => {
      if (!children) return null;
      return createPortal(children, elmm);
    };
    const remove: State['remove'] = (elm) => {
      elm && ref.current?.unmount();
    };
    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (container) portal.remove();
    const newPortal = ReactCreatePortal(container);
    setPortal(newPortal);
    return () => {
      newPortal.remove(container);
    };
  }, [container]);

  return { Portal: portal.render, container };
};
