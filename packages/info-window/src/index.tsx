import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useInfoWindow } from './useInfoWindow';

export * from './useInfoWindow';
export interface InfoWindowProps extends OverlayProps, AMap.InforWindowEvents, AMap.InforWindowOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}
export const InfoWindow = React.forwardRef<InfoWindowProps, InfoWindowProps>((props, ref) => {
  const { infoWindow } = useInfoWindow(props);
  useImperativeHandle(ref, () => ({ ...props, infoWindow }));
  return null;
});
