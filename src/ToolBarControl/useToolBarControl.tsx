import { useEffect, useState } from 'react';
import { ToolBarControlProps } from './';
import { useVisiable } from '../common/hooks';

export interface UseToolBarControl extends ToolBarControlProps {}

export default function(props = {} as UseToolBarControl) {
  const [toolBarControl, setToolBarControl] = useState<AMap.ToolBar>();
  const { map, position, offset } = props;
  useEffect(() => {
    if (map && !toolBarControl) {
      let instance: AMap.Control;
      map.plugin(['AMap.ToolBar'], () => {
        instance = new AMap.ToolBar({
          offset: offset,
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

  useVisiable(toolBarControl!, props);
  return {
    toolBarControl, setToolBarControl,
  };
}