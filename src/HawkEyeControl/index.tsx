import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useHawkEyeControl } from './useHawkEyeControl';

export interface HawkEyeControlProps extends OverlayProps, AMap.HawkEyeOptions {}

export const HawkEyeControl = React.forwardRef<HawkEyeControlProps, HawkEyeControlProps>((props, ref) => {
  const { hawkEyeControl } = useHawkEyeControl(props);
  useImperativeHandle(ref, () => ({ ...props, hawkEyeControl }), [hawkEyeControl]);
  return null;
});
