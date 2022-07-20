import { useEffect, useState } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { PolylineProps } from '.';

export interface UsePolyline extends PolylineProps {}

export function usePolyline(props = {} as UsePolyline) {
  const [polyline, setPolyline] = useState<AMap.Polyline>();
  const { visible, ...other } = props;
  const { map } = useMapContext();
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
      };
    }
  }, [map]);

  useVisiable(polyline!, visible);
  useSettingProperties<AMap.Polyline, UsePolyline>(polyline!, props, ['Path', 'Options', 'Map', 'ExtData']);
  useEventProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
    'onHide',
    'onShow',
    'onMouseOut',
    'onChange',
    'onRightClick',
    'onDblClick',
    'onMouseDown',
    'onClick',
    'onMouseOver',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onMouseUp',
  ]);
  return {
    polyline,
    setPolyline,
  };
}
