import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { usePolyline } from './usePolyline';

export interface PolylineProps extends OverlayProps, AMap.PolylineOptions {};
export const Polyline = React.forwardRef<PolylineProps, PolylineProps>((props, ref) => {
  const { polyline } = usePolyline(props);
  useImperativeHandle(ref, () => ({ ...props, polyline }), [polyline]);
  return null;
});
