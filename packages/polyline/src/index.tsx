import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { usePolyline } from './usePolyline';

export * from './usePolyline';

export interface PolylineProps extends OverlayProps, AMap.PolylineEvents, AMap.PolylineOptions {}
export const Polyline = React.forwardRef<PolylineProps, PolylineProps>((props, ref) => {
  const { polyline } = usePolyline(props);
  useImperativeHandle(ref, () => ({ ...props, polyline }), [polyline]);
  return null;
});
