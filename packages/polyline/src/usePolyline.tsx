import { useEffect, useState } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { PolylineProps } from '.';

export interface UsePolyline extends PolylineProps {}

export function usePolyline(props = {} as UsePolyline) {
  const [polyline, setPolyline] = useState<AMap.Polyline>();
  const { visiable, ...other } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (map && !polyline) {
      let instance: AMap.Polyline = new AMap.Polyline({ ...other });
      map.add(instance);
      setPolyline(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setPolyline(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(polyline!, visiable);
  useSettingProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
    'Path',
    'Options',
    'Map',
    'ExtData',
    'Draggable',
  ]);
  useEventProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
    'onHide',
    'onShow',
    'onMouseOut',
    'onChange',
    'onDragStart',
    'onDragging',
    'onDragEnd',
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
