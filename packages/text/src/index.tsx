import { render } from 'react-dom';
import { useMemo, useEffect, Fragment, forwardRef, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useText } from './useText';

export * from './useText';

export interface TextProps extends OverlayProps, AMap.TextEvents, AMap.TextOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}
export const Text = forwardRef<Omit<TextProps, 'text'> & { text?: AMap.Text }, TextProps>((props, ref) => {
  const { children, ...other } = props;
  const textDom: HTMLElement = useMemo(() => document.createElement('div'), []);
  useEffect(() => render(<Fragment>{children}</Fragment>, textDom), [children]);

  const labels = children ? textDom.innerHTML : props.text;
  const { text } = useText({ ...other, text: labels });

  useEffect(() => {
    if (children && text) {
      text.setText(labels || '');
    }
  }, [children, text]);

  useImperativeHandle(ref, () => ({ ...other, text: text }));
  return null;
});
