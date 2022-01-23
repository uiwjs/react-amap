import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { MarkerProps } from './';

export interface UseMarker extends MarkerProps {}
export const useMarker = (props = {} as UseMarker) => {
  const { visiable, ...other } = props;
  const { state } = useMapContext();
  const [marker, setMarker] = useState<AMap.Marker>();

  useEffect(() => {
    if (!marker && state.map) {
      let instance: AMap.Marker = new AMap.Marker({ ...other });
      state.map.add(instance);
      setMarker(instance);
    }
    return () => {
      if (marker) {
        marker.remove();
        setMarker(undefined);
      }
    };
  }, [state.map, marker]);

  useVisiable(marker!, visiable);
  useSettingProperties<AMap.Marker, UseMarker>(marker!, props, [
    'Path',
    'Anchor',
    'Offset',
    'Animation',
    'Clickable',
    'Position',
    'Angle',
    'Label',
    'zIndex',
    'Icon',
    'Draggable',
    'Cursor',
    'Content',
    'Map',
    'Title',
    'Top',
    'Shadow',
    'Shape',
    'ExtData',
  ]);
  useEventProperties<AMap.Marker, UseMarker>(marker!, props, [
    'onClick',
    'onDblClick',
    'onRightClick',
    'onMouseMove',
    'onMouseOver',
    'onMouseOut',
    'onMouseDown',
    'onMouseUp',
    'onDragStart',
    'onDragging',
    'onDragEnd',
    'onMoving',
    'onMoveEnd',
    'onMoveAlong',
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
  ]);
  return {
    marker,
    setMarker,
  };
};
