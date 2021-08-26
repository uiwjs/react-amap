import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useMapTypeControl } from './useMapTypeControl';

export * from './useMapTypeControl';
export interface MapTypeControlProps extends OverlayProps, AMap.MapTypeOptions {}

export const MapTypeControl = React.forwardRef<MapTypeControlProps, MapTypeControlProps>((props, ref) => {
  const { mapTypeControl } = useMapTypeControl(props);
  useImperativeHandle(ref, () => ({ ...props, mapTypeControl }), [mapTypeControl]);
  return null;
});
