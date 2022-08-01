import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties, usePortal } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { MarkerProps } from './';

export interface UseMarker extends MarkerProps {}
export const useMarker = (props: UseMarker = {}) => {
  const { visiable, children, ...other } = props;
  const { map } = useMapContext();
  const [marker, setMarker] = useState<AMap.Marker>();
  const { container, Portal } = usePortal();

  useEffect(() => {
    if (!marker && map) {
      if (props.children) {
        other.content = container;
      }
      let instance: AMap.Marker = new AMap.Marker({ ...other });
      map.add(instance);
      setMarker(instance);
    }
    return () => {
      if (marker) {
        // @fix [244] https://github.com/uiwjs/react-amap/issues/244
        // typeof marker.remove === 'function' && marker.remove();
        marker.setMap(null);
        setMarker(undefined);
      }
    };
  }, [map, marker]);

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
    MarkerPortal: Portal,
  };
};
