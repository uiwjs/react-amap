/// <reference types="@uiw/react-amap-types" />
import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useHawkEyeControl } from './useHawkEyeControl';
export * from './useHawkEyeControl';

export interface HawkEyeControlProps extends OverlayProps, AMap.HawkEyeOptions {
  /** @deprecated use `visible` */
  visiable?: boolean;
  /** 覆盖物是否可见 */
  visible?: boolean;
}

export const HawkEyeControl = React.forwardRef<HawkEyeControlProps, HawkEyeControlProps>((props, ref) => {
  const { hawkEyeControl } = useHawkEyeControl(props);
  useImperativeHandle(ref, () => ({ ...props, hawkEyeControl }), [hawkEyeControl]);
  return null;
});
