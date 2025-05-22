/// <reference types="@uiw/react-amap-types" />
import { forwardRef, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useText } from './useText';

export * from './useText';

export interface TextProps extends OverlayProps, AMap.TextEvents, AMap.TextOptions {
  /** @deprecated use {@link visible} */
  visiable?: boolean;
  /** 覆盖物是否可见 */
  visible?: boolean;
  children?: React.ReactNode;
}
export const Text = forwardRef<Omit<TextProps, 'text'> & { text?: AMap.Text }, TextProps>((props, ref) => {
  const { text, TextPortal } = useText({ ...props });
  useImperativeHandle(ref, () => ({ ...props, text }));
  if (!props.children) return null;
  return <TextPortal>{props.children}</TextPortal>;
});
