import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useMarker } from './useMarker';

export * from './useMarker';

export interface MarkerProps extends OverlayProps, AMap.MarkerEvents, AMap.MarkerOptions {}

export const Marker = React.forwardRef<MarkerProps & { marker?: AMap.Marker }, MarkerProps>((props, ref) => {
  const { marker } = useMarker(props);
  useImperativeHandle(ref, () => ({ ...props, marker }));
  return null;
});
