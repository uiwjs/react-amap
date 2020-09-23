import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useEllipse } from './useEllipse';

export interface EllipseProps extends OverlayProps, AMap.EllipseEvents, AMap.EllipseOptions { }
export const Ellipse = React.forwardRef<EllipseProps, EllipseProps>((props, ref) => {
  const { ellipse } = useEllipse(props);
  useImperativeHandle(ref, () => ({ ...props, ellipse }));
  return null;
});
