import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { PolygonProps } from '.';

export interface UsePolygon extends PolygonProps {}
export const usePolygon = (props = {} as UsePolygon) => {
  const { visible, ...other } = props;
  const { map } = useMapContext();
  const [polygon, setPolygon] = useState<AMap.Polygon>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!polygon) {
      let instance: AMap.Polygon = new AMap.Polygon({ ...other });
      map.add(instance);
      setPolygon(instance);
    }
  }, [map]);

  useVisiable(polygon!, visible);
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
