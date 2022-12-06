import React, { isValidElement, useImperativeHandle, cloneElement } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { usePolyline } from './usePolyline';

export * from './usePolyline';

export interface PolylineProps extends OverlayProps, AMap.PolylineEvents, AMap.PolylineOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
  children?: JSX.Element;
}
export const Polyline = React.forwardRef<PolylineProps, PolylineProps>((props, ref) => {
  const { children } = props;
  const { polyline } = usePolyline(props);
  useImperativeHandle(ref, () => ({ ...props, polyline }), [polyline]);
  if (children && isValidElement(children) && polyline) {
    const oProps = { polyElement: polyline, polyline };
    return cloneElement(children, { ...props, ...oProps });
  }
  return null;
});
