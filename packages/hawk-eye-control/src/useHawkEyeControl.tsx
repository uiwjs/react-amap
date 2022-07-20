import { useEffect, useState } from 'react';
import { useVisiable } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { HawkEyeControlProps } from '.';

export interface UseHawkEyeControl extends HawkEyeControlProps {}

export function useHawkEyeControl(props = {} as UseHawkEyeControl) {
  const [hawkEyeControl, setHawkEyeControl] = useState<AMap.HawkEye>();
  const { offset, visible, ...other } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (map && !hawkEyeControl) {
      let instance: AMap.HawkEye;
      map.plugin(['AMap.HawkEye'], () => {
        instance = new AMap.HawkEye({ offset: offset, ...other });
        map.addControl(instance);
        setHawkEyeControl(instance);
      });

      return () => {
        if (instance && map) {
          map.removeLayer(instance);
          setHawkEyeControl(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(hawkEyeControl! as any, visible);
  return {
    hawkEyeControl,
    setHawkEyeControl,
  };
}
