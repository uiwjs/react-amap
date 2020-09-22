import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useControlBarControl from './useControlBarControl';

export interface ControlBarControl extends OverlayProps, AMap.ScaleOptions {}

export default React.forwardRef<ControlBarControl, ControlBarControl>((props, ref) => {
  const { controlBarControl } = useControlBarControl(props);
  useImperativeHandle(ref, () => ({ ...props, controlBarControl }), [controlBarControl]);
  return null;
});
