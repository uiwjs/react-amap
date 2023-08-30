import { useImperativeHandle, forwardRef, createContext } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { usePolygon } from './usePolygon';

export * from './usePolygon';

export const PolygonContext = createContext<AMap.Polygon | undefined>(undefined);

export interface PolygonProps extends OverlayProps, AMap.PolygonEvents, AMap.PolygonOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
  children?: JSX.Element;
}
export const Polygon = forwardRef<PolygonProps, PolygonProps>((props, ref) => {
  const { children } = props;
  const { polygon } = usePolygon(props);
  useImperativeHandle(ref, () => ({ ...props, polygon }), [polygon]);
  return <PolygonContext.Provider value={polygon}>{children}</PolygonContext.Provider>;
});
