import { useState, useEffect } from 'react';
import { CircleMarkerProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseCircleMarker extends CircleMarkerProps {}
export const useCircleMarker = (props = {} as UseCircleMarker) => {
  const { map, visiable, ...other } = props;
  const [circleMarker, setCircleMarker] = useState<AMap.CircleMarker>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!circleMarker) {
      let instance: AMap.CircleMarker = new AMap.CircleMarker({ ...other });
      map.add(instance);
      setCircleMarker(instance);
      return () => {
        if (instance) {
          map && map.removeLayer(instance);
          setCircleMarker(undefined);
        }
      }
    }
  }, [map]);

  useVisiable(circleMarker!, visiable);
  useSettingProperties<AMap.CircleMarker, UseCircleMarker>(circleMarker!, props, [
    'Center', 'Raius', 'zIndex', 'Bubble', 'Cursor', 'StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'FillColor', 'FillOpacity', 'Draggable', 'ExtData'
  ]);
  useEventProperties<AMap.CircleMarker, UseCircleMarker>(circleMarker!, props, [
    'onHide', 'onShow', 'onMouseover', 'onTouchend', 'onClick', 'onTouchmove', 'onRightclick', 'onMouseup', 'onMouseout', 'onTouchstart','onMousedown','onDblclick'
  ]);
  return {
    circleMarker, setCircleMarker,
  }
}