import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useToolBarControl } from './useToolBarControl';

export * from './useToolBarControl';

export interface ToolBarControlProps extends OverlayProps, AMap.ToolBarOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}

export const ToolBarControl = React.forwardRef<ToolBarControlProps, ToolBarControlProps>((props, ref) => {
  const { toolBarControl } = useToolBarControl(props);
  useImperativeHandle(ref, () => ({ ...props, toolBarControl }), [toolBarControl]);
  return null;
});
