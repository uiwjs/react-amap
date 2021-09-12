import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useScaleControl } from './useScaleControl';

export * from './useScaleControl';

export interface ScaleControlProps extends OverlayProps, AMap.ScaleOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}

export const ScaleControl = React.forwardRef<ScaleControlProps, ScaleControlProps>((props, ref) => {
  const { scaleControl } = useScaleControl(props);
  useImperativeHandle(ref, () => ({ ...props, scaleControl }), [scaleControl]);
  return null;
});
