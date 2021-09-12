import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useMapTypeControl } from './useMapTypeControl';

export * from './useMapTypeControl';
export interface MapTypeControlProps extends OverlayProps, AMap.MapTypeOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}

export const MapTypeControl = React.forwardRef<MapTypeControlProps, MapTypeControlProps>((props, ref) => {
  const { mapTypeControl } = useMapTypeControl(props);
  useImperativeHandle(ref, () => ({ ...props, mapTypeControl }), [mapTypeControl]);
  return null;
});
