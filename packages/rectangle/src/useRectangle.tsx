import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { RectangleProps } from '.';

export interface UseRectangle extends RectangleProps {}
export const useRectangle = (props = {} as UseRectangle) => {
  const { visiable, ...other } = props;
  const { map } = useMapContext();
  const [rectangle, setRectangle] = useState<AMap.Rectangle>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!rectangle) {
      let instance: AMap.Rectangle = new AMap.Rectangle({ ...other });
      map.add(instance);
      setRectangle(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setRectangle(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(rectangle!, visiable);
  useSettingProperties<AMap.Rectangle, UseRectangle>(rectangle!, props, ['Bounds', 'Options', 'Map', 'ExtData']);
  useEventProperties<AMap.Rectangle, UseRectangle>(rectangle!, props, [
    'onHide',
    'onShow',
    'onClick',
    'onDblClick',
    'onRightClick',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseDown',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
  ]);
  return {
    rectangle,
    setRectangle,
  };
};
