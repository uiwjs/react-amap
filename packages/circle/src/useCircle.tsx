import { useState, useLayoutEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { CircleProps } from '.';

export interface UseCircle extends CircleProps {}
export const useCircle = (props = {} as UseCircle) => {
  const { visiable, visible, ...other } = props;
  const { map } = useMapContext();
  const [circle, setCircle] = useState<AMap.Circle>();
  useLayoutEffect(() => {
    if (AMap && map && !circle) {
      const instance: AMap.Circle = new AMap.Circle({ ...other });
      map.add(instance);
      setCircle(instance);
      return () => {
        map && map.remove(instance);
        setCircle(undefined);
      };
    }
  }, [map]);

  useVisiable(circle!, visible ?? visiable);
  useSettingProperties<AMap.Circle, UseCircle>(circle!, props, ['Center', 'Raius', 'Options', 'ExtData']);
  useEventProperties<AMap.Circle, UseCircle>(circle!, props, [
    'onHide',
    'onShow',
    'onRightClick',
    'onClick',
    'onTouchEnd',
    'onDblClick',
    'onTouchMove',
    'onTouchStart',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseDown',
  ]);
  return {
    circle,
    setCircle,
  };
};
