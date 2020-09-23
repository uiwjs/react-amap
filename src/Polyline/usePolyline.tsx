import { useEffect, useState } from 'react';
import { PolylineProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

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
          map && map.remove(instance);
          setPolyline(undefined);
        }
      }
    }
  }, [map]);

  useVisiable(polyline!, visiable);
  useSettingProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
    'Path', 'Anchor', 'Offset', 'Animation', 'Clickable', 'Position', 'Angle',
    'Label', 'zIndex', 'Icon', 'Draggable', 'Cursor', 'Content', 'Map', 'Title', 'Top', 'Shadow', 'Shape', 'ExtData'
  ]);
  useEventProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
    'onHide', 'onShow', 'onMouseOut', 'onRightClick', 'onDblClick', 'onClick', 'onMouseOver', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onMouseUp', 'onMouseDown'
  ]);
  return {
    polyline, setPolyline,
  };
}
