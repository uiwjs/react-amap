import { useImperativeHandle, forwardRef, isValidElement, cloneElement } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { usePolygon } from './usePolygon';

export * from './usePolygon';
export interface PolygonProps extends OverlayProps, AMap.PolygonEvents, AMap.PolygonOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
  children?: JSX.Element;
}
export const Polygon = forwardRef<PolygonProps, PolygonProps>((props, ref) => {
  const { children } = props;
  const { polygon } = usePolygon(props);
  useImperativeHandle(ref, () => ({ ...props, polygon }), [polygon]);
  if (children && isValidElement(children) && polygon) {
    const oProps = { polygon, polyElement: polygon };
    return cloneElement(children, { ...props, ...oProps });
  }
  return null;
});
