import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useBezierCurve } from './useBezierCurve';
export * from './useBezierCurve';

export interface BezierCurveProps extends OverlayProps, AMap.BezierCurveEvents, AMap.BezierCurveOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}
export const BezierCurve = React.forwardRef<BezierCurveProps, BezierCurveProps>((props, ref) => {
  const { bezierCurve } = useBezierCurve(props);
  useImperativeHandle(ref, () => ({ ...props, bezierCurve }));
  return null;
});
