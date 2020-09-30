import { useState, useMemo, useEffect } from 'react';
import { GeolocationProps } from '.';

export interface UseGeolocation extends GeolocationProps {}
export const useGeolocation = (props = {} as UseGeolocation) => {
  const { map, type = 'position', onComplete, onError, ...other } = props;
  const [geolocation, setGeolocation] = useState<AMap.Geolocation>();
  useEffect(() => {
    if (AMap && !geolocation) {
      let instance: AMap.Geolocation;
      AMap.plugin(['AMap.Geolocation'], () => {
        instance = new AMap.Geolocation({ ...other });
        setGeolocation(instance);
      });
      return () => {
        if (instance) {
          setGeolocation(undefined);
        }
      }
    }
  }, [AMap]);

  function callback(status: 'error' | 'complete', result: AMap.GeolocationResult) {
    if(status === 'complete' && onComplete){
      onComplete(result);
    } else if (onError) {
      onError(result);
    }
  }

  useMemo(() => {
    if (!/^(position|cityInfo)$/.test(type)) return;
    const funName = type === 'position' ? 'getCurrentPosition' : 'getCityInfo';
    if (geolocation && map) {
      geolocation[funName](callback);
      map.addControl(geolocation);
    } else if (geolocation) {
      geolocation[funName](callback);
    }
  }, [geolocation]);

  return {
    geolocation, setGeolocation,
  }
}