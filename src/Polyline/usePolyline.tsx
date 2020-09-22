import { useEffect, useState } from 'react';
import { PolylineProps } from '.';
import { useVisiable } from '../common/hooks';

export interface UsePolyline extends PolylineProps {}

export default function(props = {} as UsePolyline) {
  const [polyline, setPolyline] = useState<AMap.Polyline>();
  const { map, visiable, ...other } = props;
  useEffect(() => {
    if (map && !polyline) {
      let instance: AMap.Polyline = new AMap.Polyline({ ...other });
      map.add(instance);
      setPolyline(instance);
      return () => {
        if (instance) {
          map.remove(instance);
          setPolyline(undefined);
        }
      }
    }
  }, [map]);
  useVisiable(polyline!, visiable);
  return {
    polyline, setPolyline,
  };
}