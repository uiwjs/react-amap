import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { PolygonProps } from '.';

export interface UsePolygon extends PolygonProps {}
export const usePolygon = (props = {} as UsePolygon) => {
  const { visiable, ...other } = props;
  const { map } = useMapContext();
  const [polygon, setPolygon] = useState<AMap.Polygon>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!polygon) {
      let instance: AMap.Polygon = new AMap.Polygon({ ...other });
      map.add(instance);
      setPolygon(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setPolygon(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(polygon!, visiable);
  useSettingProperties<AMap.Polygon, UsePolygon>(polygon!, props, ['Path', 'Options', 'Map', 'ExtData', 'Draggable']);
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
    'onDragStart',
    'onDragging',
    'onDragEnd',
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
  ]);
  return {
    polygon,
    setPolygon,
  };
};
