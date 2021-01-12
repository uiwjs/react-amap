import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useRectangle } from './useRectangle';

export interface RectangleProps extends OverlayProps, AMap.RectangleEvents, AMap.RectangleOptions {}
export const Rectangle = React.forwardRef<RectangleProps, RectangleProps>((props, ref) => {
  const { rectangle } = useRectangle(props);
  useImperativeHandle(ref, () => ({ ...props, rectangle }));
  return null;
});
