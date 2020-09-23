import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useCircle } from './useCircle';

export interface CircleProps extends OverlayProps, AMap.CircleEvents, AMap.CircleOptions { }
export const Circle = React.forwardRef<CircleProps, CircleProps>((props, ref) => {
  const { circle } = useCircle(props);
  useImperativeHandle(ref, () => ({ ...props, circle }));
  return null;
});
