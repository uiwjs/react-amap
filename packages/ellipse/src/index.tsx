/// <reference types="@uiw/react-amap-types" />
import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useEllipse } from './useEllipse';
export * from './useEllipse';

export interface EllipseProps extends OverlayProps, AMap.EllipseEvents, AMap.EllipseOptions {
  /** @deprecated use `visible` */
  visiable?: boolean;
  /** 覆盖物是否可见 */
  visible?: boolean;
}
export const Ellipse = React.forwardRef<EllipseProps, EllipseProps>((props, ref) => {
  const { ellipse } = useEllipse(props);
  useImperativeHandle(ref, () => ({ ...props, ellipse }));
  return null;
});
