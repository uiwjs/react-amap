import { useState, useMemo } from 'react';
import { RectangleProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseRectangle extends RectangleProps {}
export const useRectangle = (props = {} as UseRectangle) => {
  const { map, visiable, ...other } = props;
  const [rectangle, setRectangle] = useState<AMap.Rectangle>();
  useMemo(() => {
    if (!AMap || !map) return;
    if (!rectangle) {
      let instance: AMap.Rectangle = new AMap.Rectangle({ ...other });
      map.add(instance);
      setRectangle(instance);
      return () => {
        if (instance) {
          map && map.remove(instance);
          setRectangle(undefined);
        }
      }
    }
  }, [map, rectangle]);

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