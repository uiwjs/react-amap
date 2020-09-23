import { useEffect, useState } from 'react';
import { ToolBarControlProps } from './';
import { useVisiable } from '../common/hooks';

export interface UseToolBarControl extends ToolBarControlProps {}

export function useToolBarControl(props = {} as UseToolBarControl) {
  const [toolBarControl, setToolBarControl] = useState<AMap.ToolBar>();
  const { map, position, visiable, offset } = props;
  useEffect(() => {
    if (map && !toolBarControl) {
      let instance: AMap.Control;
      map.plugin(['AMap.ToolBar'], () => {
        instance = new AMap.ToolBar({
          offset,
          position
        });
        map.addControl(instance);
        setToolBarControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      }
    }
  }, [map]);

  useVisiable(toolBarControl!, visiable);
  return {
    toolBarControl, setToolBarControl,
  };
}