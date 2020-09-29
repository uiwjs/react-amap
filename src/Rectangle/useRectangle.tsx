import { useState, useEffect } from 'react';
import { RectangleProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseRectangle extends RectangleProps {}
export const useRectangle = (props = {} as UseRectangle) => {
  const { map, visiable, ...other } = props;
  const [rectangle, setRectangle] = useState<AMap.Rectangle>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!rectangle) {
      let instance: AMap.Rectangle = new AMap.Rectangle({ ...other });
      map.add(instance);
      setRectangle(instance);
      return () => {
        if (instance) {
          map && map.removeLayer(instance);
          setRectangle(undefined);
        }
      }
    }
  }, [map]);

  useVisiable(rectangle!, visiable);
  useSettingProperties<AMap.Rectangle, UseRectangle>(rectangle!, props, [
    'Bounds', 'Options', 'Map', 'ExtData'
  ]);
  useEventProperties<AMap.Rectangle, UseRectangle>(rectangle!, props, [
    'onHide', 'onShow', 'onClick', 'onDblClick', 'onRightClick', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseDown', 'onTouchEnd', 'onTouchMove', 'onTouchStart'
  ]);
  return {
    rectangle, setRectangle,
  }
}