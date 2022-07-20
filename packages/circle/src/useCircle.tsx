import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { CircleProps } from '.';

export interface UseCircle extends CircleProps {}
export const useCircle = (props = {} as UseCircle) => {
  const { visible, ...other } = props;
  const { map } = useMapContext();
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
    };
  }, [map]);

  useVisiable(circle!, visible);
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
