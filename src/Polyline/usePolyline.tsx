import { useEffect, useState } from 'react';
import { PolylineProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UsePolyline extends PolylineProps {}

export function usePolyline(props = {} as UsePolyline) {
  const [polyline, setPolyline] = useState<AMap.Polyline>();
  const { map, visiable, ...other } = props;
  useEffect(() => {
    if (map && !polyline) {
      let instance: AMap.Polyline = new AMap.Polyline({ ...other });
      map.add(instance);
      setPolyline(instance);
      return () => {
        if (instance) {
          map && map.removeLayer(instance);
          setPolyline(undefined);
        }
      }
    }
  }, [map]);

  useVisiable(polyline!, visiable);
  useSettingProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
    'Path', 'Options', 'Map', 'ExtData'
  ]);
  useEventProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
    'onHide', 'onShow', 'onMouseOut', 'onChange', 'onRightClick', 'onDblClick', 'onMouseDown',
    'onClick', 'onMouseOver', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onMouseUp'
  ]);
  return {
    polyline, setPolyline,
  };
}
