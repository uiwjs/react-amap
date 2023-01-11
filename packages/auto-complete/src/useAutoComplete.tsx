import { useState, useEffect } from 'react';
import { useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { AutoCompleteProps } from './';

export interface UseAutoComplete extends AutoCompleteProps {}
export const useAutoComplete = (props = {} as UseAutoComplete) => {
  const [autoComplete, setAutoComplete] = useState<AMap.AutoComplete>();
  useEffect(() => {
    if (AMap && !autoComplete) {
      let instance: AMap.AutoComplete;

      if (AMap.v) {
        AMap.plugin(['AMap.Autocomplete'], () => {
          instance = new AMap.Autocomplete(props);
          setAutoComplete(instance);
        });
      } else {
        AMap.plugin(['AMap.AutoComplete'], () => {
          instance = new AMap.AutoComplete(props);
          setAutoComplete(instance);
        });
      }

      return () => {
        if (instance) {
          setAutoComplete(undefined);
        }
      };
    }
  }, []);
  useSettingProperties<AMap.AutoComplete, UseAutoComplete>(autoComplete!, props, ['Type', 'City', 'CityLimit']);
  useEventProperties<AMap.AutoComplete, UseAutoComplete>(autoComplete!, props, ['onChoose', 'onSelect']);
  return {
    autoComplete,
    setAutoComplete,
  };
};
