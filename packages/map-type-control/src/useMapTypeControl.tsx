import { useEffect, useState } from 'react';
import { useVisiable } from '@uiw/react-amap-utils';
import { MapTypeControlProps } from '.';

export interface UseMapTypeControl extends MapTypeControlProps {}

export function useMapTypeControl(props = {} as UseMapTypeControl) {
  const [mapTypeControl, setMapTypeControl] = useState<AMap.MapType>();
  const { map, visiable, defaultType = 0, ...other } = props;
  useEffect(() => {
    if (map && !mapTypeControl) {
      let instance: AMap.MapType;
      map.plugin(['AMap.MapType'], () => {
        instance = new AMap.MapType({ defaultType, ...other });
        map.addControl(instance);
        setMapTypeControl(instance);
      });
      return () => {
        if (instance) {
          map.removeControl(instance);
        }
      };
    }
  }, [map]);

  useVisiable(mapTypeControl!, visiable);
  return {
    mapTypeControl,
    setMapTypeControl,
  };
}
