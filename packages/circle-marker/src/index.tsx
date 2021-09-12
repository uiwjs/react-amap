import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useCircleMarker } from './useCircleMarker';
export * from './useCircleMarker';

export interface CircleMarkerProps extends OverlayProps, AMap.CircleMarkerEvents, AMap.CircleMarkerOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}
export const CircleMarker = React.forwardRef<CircleMarkerProps, CircleMarkerProps>((props, ref) => {
  const { circleMarker } = useCircleMarker(props);
  useImperativeHandle(ref, () => ({ ...props, circleMarker }));
  return null;
});
