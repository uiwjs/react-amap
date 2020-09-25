import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useAutoComplete } from './useAutoComplete';

export interface AutoCompleteProps extends OverlayProps, AMap.AutoCompleteOptions {
};
export const AutoComplete = React.forwardRef<AutoCompleteProps, AutoCompleteProps>((props, ref) => {
  const { autoComplete } = useAutoComplete(props);
  useImperativeHandle(ref, () => ({ ...props, autoComplete }));
  return null;
});
