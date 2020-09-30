import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useControlBarControl } from './useControlBarControl';

export interface ControlBarControlProps extends OverlayProps, AMap.ControlBarOptions {}

export const ControlBarControl = React.forwardRef<ControlBarControlProps, ControlBarControlProps>((props, ref) => {
  const { controlBarControl } = useControlBarControl(props);
  useImperativeHandle(ref, () => ({ ...props, controlBarControl }), [controlBarControl]);
  return null;
});
