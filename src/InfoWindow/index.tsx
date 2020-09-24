import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useInfoWindow } from './useInfoWindow';

export interface InfoWindowProps extends OverlayProps, AMap.InforWindowEvents, AMap.InforWindowOptions { }
export const InfoWindow = React.forwardRef<InfoWindowProps, InfoWindowProps>((props, ref) => {
  const { infoWindow } = useInfoWindow(props);
  useImperativeHandle(ref, () => ({ ...props, infoWindow }));
  return null;
});
