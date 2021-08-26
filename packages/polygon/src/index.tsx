import { useImperativeHandle, forwardRef, isValidElement, cloneElement } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { usePolygon } from './usePolygon';

export * from './usePolygon';
export interface PolygonProps extends OverlayProps, AMap.PolygonEvents, AMap.PolygonOptions {}
export const Polygon = forwardRef<PolygonProps, PolygonProps>((props, ref) => {
  const { children } = props;
  const { polygon } = usePolygon(props);
  useImperativeHandle(ref, () => ({ ...props, polygon }));
  if (children && isValidElement(children)) {
    return cloneElement(children, { ...props, polygon });
  }
  return null;
});
