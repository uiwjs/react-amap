import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useAutoComplete } from './useAutoComplete';
export * from './useAutoComplete';

export interface AutoCompleteProps extends OverlayProps, AMap.AutoCompleteOptions, AMap.AutoCompleteEvents {}
export const AutoComplete = React.forwardRef<AutoCompleteProps, AutoCompleteProps>((props, ref) => {
  const { autoComplete } = useAutoComplete(props);
  useImperativeHandle(ref, () => ({ ...props, autoComplete }));
  return null;
});
