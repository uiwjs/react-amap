import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useCircle } from './useCircle';
export * from './useCircle';

export interface CircleProps extends OverlayProps, AMap.CircleEvents, AMap.CircleOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}
export const Circle = React.forwardRef<CircleProps, CircleProps>((props, ref) => {
  const { circle } = useCircle(props);
  useImperativeHandle(ref, () => ({ ...props, circle }));
  return null;
});
