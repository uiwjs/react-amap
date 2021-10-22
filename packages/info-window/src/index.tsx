import { render } from 'react-dom';
import React, { useEffect, useImperativeHandle, useMemo } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useInfoWindow } from './useInfoWindow';

export * from './useInfoWindow';
export interface InfoWindowProps extends OverlayProps, AMap.InforWindowEvents, AMap.InforWindowOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}
export const InfoWindow = React.forwardRef<InfoWindowProps, InfoWindowProps>((props, ref) => {
  const { children } = props;
  const container = useMemo(() => document.createElement('div'), []);
  useEffect(() => render(<div>{children}</div>, container), [children]);
  const { infoWindow } = useInfoWindow({ ...props, content: children ? container : props.content });
  useImperativeHandle(ref, () => ({ ...props, infoWindow }));
  return null;
});
