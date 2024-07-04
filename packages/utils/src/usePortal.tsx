import { PropsWithChildren, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = () => {
  const [container] = useState<HTMLDivElement>(() => document.createElement('div'));
  const Portal = useCallback(
    function Portal({ children }: PropsWithChildren) {
      return createPortal(children, container);
    },
    [container],
  );

  return { Portal, container };
};
