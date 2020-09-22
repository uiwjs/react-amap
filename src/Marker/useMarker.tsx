import { useState, useMemo } from 'react';
import { MarkerProps } from './';
import { useVisiable, useEventProperties } from '../common/hooks';

export interface UseMarker extends MarkerProps {}
export default (props = {} as UseMarker) => {
  const { map, visiable, ...other } = props;
  const [marker, setMarker] = useState<AMap.Marker>();
  useMemo(() => {
    if (!AMap || !map) return;
    if (!marker) {
      let instance: AMap.Marker = new AMap.Marker({ ...other });
      map.add(instance);
      setMarker(instance);
      return () => {
        if (instance) {
          map && map.remove(instance);
          setMarker(undefined);
        }
      }
    }
  }, [map, marker]);

  useVisiable(marker!, visiable);
  useEventProperties<AMap.Marker, UseMarker>(marker!, props, [
    'onClick', 'onDblClick', 'onRightClick', 'onMouseMove', 'onMouseOver', 'onMouseOut', 'onMouseDown', 'onMouseUp', 'onDragStart', 'onDragging', 'onDragEnd', 'onMoving', 'onMoveEnd', 'onMoveAlong', 'onTouchStart', 'onTouchMove', 'onTouchEnd'
  ]);
  return {
    marker, setMarker,
  }
}