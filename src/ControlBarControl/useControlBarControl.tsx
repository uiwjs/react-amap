import { useEffect, useState } from 'react';
import { ControlBarControl } from '.';
import { useVisiable } from '../common/hooks';

export interface UseControlBarControl extends ControlBarControl {}

export default function(props = {} as UseControlBarControl) {
  const [controlBarControl, setControlBarControl] = useState<AMap.ControlBar>();
  const { map, position, visiable, offset } = props;
  useEffect(() => {
    if (map && !controlBarControl) {
      let instance: AMap.ControlBar;
      map.plugin(['AMap.ControlBar', 'AMap.HawkEye'], () => {
        instance = new AMap.ControlBar({
          offset: offset,
          position
        });
        map.addControl(instance);
        setControlBarControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      }
    }
  }, [map]);

  useVisiable(controlBarControl!, visiable);
  return {
    controlBarControl, setControlBarControl,
  };
}