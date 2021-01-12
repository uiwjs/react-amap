import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { usePolygon } from './usePolygon';

export interface PolygonProps extends OverlayProps, AMap.PolygonEvents, AMap.PolygonOptions {}
export const Polygon = React.forwardRef<PolygonProps, PolygonProps>((props, ref) => {
  const { polygon } = usePolygon(props);
  useImperativeHandle(ref, () => ({ ...props, polygon }));
  return null;
});
