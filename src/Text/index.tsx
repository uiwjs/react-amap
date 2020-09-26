import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useText } from './useText';

export interface TextProps extends OverlayProps, AMap.TextEvents, AMap.TextOptions { };
export const Text = React.forwardRef<TextProps, TextProps>((props, ref) => {
  const { text } = useText(props);
  useImperativeHandle(ref, () => ({ ...props, text }));
  return null;
});
