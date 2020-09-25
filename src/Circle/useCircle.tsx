import { useState, useMemo, useEffect } from 'react';
import { CircleProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseCircle extends CircleProps {}
export const useCircle = (props = {} as UseCircle) => {
  const { map, visiable, ...other } = props;
  const [circle, setCircle] = useState<AMap.Circle>();
  useEffect(() => {
    if (AMap && map && !circle) {
      let instance: AMap.Circle = new AMap.Circle({ ...other });
      map.add(instance);
      setCircle(instance);
    }
    return () => {
      if (circle) {
        map && map.remove(circle);
        setCircle(undefined);
      }
    }
  }, [map]);

  useVisiable(circle!, visiable);
  useSettingProperties<AMap.Circle, UseCircle>(circle!, props, [
    'Center', 'Raius', 'Options', 'ExtData'
  ]);
  useEventProperties<AMap.Circle, UseCircle>(circle!, props, [
    'onHide', 'onShow', 'onRightClick', 'onClick', 'onTouchEnd', 'onDblClick', 'onTouchMove', 'onTouchStart', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseDown'
  ]);
  return {
    circle, setCircle,
  }
}