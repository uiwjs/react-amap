import { useEffect, useState } from 'react';
import { HawkEyeControlProps } from '.';
import { useVisiable } from '../common/hooks';

export interface UseHawkEyeControl extends HawkEyeControlProps {}

export default function(props = {} as UseHawkEyeControl) {
  const [hawkEyeControl, setHawkEyeControl] = useState<AMap.HawkEye>();
  const { map, offset, ...other } = props;
  useEffect(() => {
    if (map && !hawkEyeControl) {
      let instance: AMap.HawkEye;
      map.plugin(['AMap.HawkEye'], () => {
        instance = new AMap.HawkEye({ offset: offset, ...other });
        map.addControl(instance);
        setHawkEyeControl(instance);
      });

      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      }
    }
  }, [map]);

  useVisiable(hawkEyeControl! as any, props);
  return {
    hawkEyeControl, setHawkEyeControl,
  };
}