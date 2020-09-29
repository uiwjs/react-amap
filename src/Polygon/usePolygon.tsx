import { useState, useEffect } from 'react';
import { PolygonProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

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
      return () => {
        if (instance) {
          map && map.removeLayer(instance);
          setPolygon(undefined);
        }
      }
    }
  }, [map]);

  useVisiable(polygon!, visiable);
  useSettingProperties<AMap.Polygon, UsePolygon>(polygon!, props, [
    'Path', 'ExtData', 'ExtData'
  ]);
  useEventProperties<AMap.Polygon, UsePolygon>(polygon!, props, [
    'onClick', 'onDblClick', 'onRightClick', 'onHide', 'onShow', 'onMouseDown', 'onMouseUp', 'onMouseOver', 'onMouseOut', 'onChange', 'onTouchStart', 'onTouchMove', 'onTouchEnd'
  ]);
  return {
    polygon, setPolygon,
  }
}