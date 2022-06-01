import React, { useState, useEffect, ReactPortal } from 'react';
import { createPortal, unmountComponentAtNode } from 'react-dom';

interface State {
  render: (props: { children: React.ReactNode }) => ReactPortal | null;
  remove: (elm?: HTMLElement) => void;
}

export const usePortal = () => {
  const [container] = React.useState<HTMLDivElement>(() => {
    const el = document.createElement('div');
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
      elm && unmountComponentAtNode(elm);
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
