import { render } from 'react-dom';
import { useImperativeHandle, useMemo, useEffect, Fragment, forwardRef } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useMarker } from './useMarker';

export * from './useMarker';

export interface MarkerProps extends OverlayProps, AMap.MarkerEvents, AMap.MarkerOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
  className?: string;
}

export const Marker = forwardRef<MarkerProps & { marker?: AMap.Marker }, MarkerProps>(
  ({ children, className, content, ...props }, ref) => {
    const container: HTMLElement = useMemo(() => document.createElement('div'), []);
    container.className = className || '';
    useEffect(() => render(<Fragment>{children}</Fragment>, container), [children]);
    const { marker } = useMarker({ ...props, content: children ? container : content });
    useImperativeHandle(ref, () => ({ ...props, marker }), [marker]);
    return null;
  },
);
