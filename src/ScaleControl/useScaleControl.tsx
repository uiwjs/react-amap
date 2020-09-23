import { useEffect, useState } from 'react';
import { ScaleControlProps } from './';
import { useVisiable } from '../common/hooks';

export interface UseScaleControl extends ScaleControlProps {}

export function useScaleControl(props = {} as UseScaleControl) {
  const [scaleControl, setScaleControl] = useState<AMap.Scale>();
  const { map, position, visiable, offset } = props;
  useEffect(() => {
    if (map && !scaleControl) {
      let instance: AMap.Control;
      map.plugin(['AMap.Scale'], () => {
        instance = new AMap.Scale({
          offset: offset,
          position
        });
        map.addControl(instance);
        setScaleControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      }
    }
  }, [map]);

  useVisiable(scaleControl!, visiable);
  return {
    scaleControl, setScaleControl,
  };
}