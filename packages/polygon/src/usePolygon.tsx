import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { PolygonProps } from '.';

export interface UsePolygon extends PolygonProps {}
export const usePolygon = (props = {} as UsePolygon) => {
  const { map, visiable, ...other } = props;
  const [polygon, setPolygon] = useState<AMap.Polygon>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!polygon) {
      let instance: AMap.Polygon = new AMap.Polygon({ ...other });
      map.add(instance);
      setPolygon(instance);
    }
  }, [map]);

  useVisiable(polygon!, visiable);
  useSettingProperties<AMap.Polygon, UsePolygon>(polygon!, props, ['ExtData', 'ExtData']);
  useEventProperties<AMap.Polygon, UsePolygon>(polygon!, props, [
    'onClick',
    'onDblClick',
    'onRightClick',
    'onHide',
    'onShow',
    'onMouseDown',
    'onMouseUp',
    'onMouseOver',
    'onMouseOut',
    'onChange',
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
  ]);
  return {
    polygon,
    setPolygon,
  };
};
