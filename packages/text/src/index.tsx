import { forwardRef, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useText } from './useText';

export * from './useText';

export interface TextProps extends OverlayProps, AMap.TextEvents, AMap.TextOptions {}
export const Text = forwardRef<Omit<TextProps, 'text'> & { text?: AMap.Text }, TextProps>((props, ref) => {
  const { text } = useText(props);
  useImperativeHandle(ref, () => ({ ...props, text }));
  return null;
});
