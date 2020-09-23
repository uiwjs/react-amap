import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useControlBarControl from './useControlBarControl';

export interface ControlBarControlProps extends OverlayProps, AMap.ScaleOptions {}

export default React.forwardRef<ControlBarControlProps, ControlBarControlProps>((props, ref) => {
  const { controlBarControl } = useControlBarControl(props);
  useImperativeHandle(ref, () => ({ ...props, controlBarControl }), [controlBarControl]);
  return null;
});
