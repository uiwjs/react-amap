import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { EllipseProps } from './';

export interface UseEllipse extends EllipseProps {}
export const useEllipse = (props = {} as UseEllipse) => {
  const { visiable, ...other } = props;
  const { map } = useMapContext();
  const [ellipse, setEllipse] = useState<AMap.Ellipse>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!ellipse) {
      let instance: AMap.Ellipse = new AMap.Ellipse({ ...other });
      map.add(instance);
      setEllipse(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setEllipse(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(ellipse!, visiable);
  useSettingProperties<AMap.Ellipse, UseEllipse>(ellipse!, props, ['Center', 'Radius', 'Options', 'ExtData']);
  useEventProperties<AMap.Ellipse, UseEllipse>(ellipse!, props, [
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
    ellipse,
    setEllipse,
  };
};
