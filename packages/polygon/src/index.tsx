import { useImperativeHandle, forwardRef } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { usePolygon } from './usePolygon';

export * from './usePolygon';
export interface PolygonProps extends OverlayProps, AMap.PolygonEvents, AMap.PolygonOptions {}
export const Polygon = forwardRef<PolygonProps, PolygonProps>((props, ref) => {
  const { polygon } = usePolygon(props);
  useImperativeHandle(ref, () => ({ ...props, polygon }));
  return null;
});
