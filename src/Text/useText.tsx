import { useState, useEffect } from 'react';
import { TextProps } from './';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseText extends TextProps {}
export const useText = (props = {} as UseText) => {
  const { map, visiable, ...other } = props;
  const [text, setText] = useState<AMap.Text>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!text) {
      let instance: AMap.Text = new AMap.Text({ ...other });
      map.add(instance);
      setText(instance);
      return () => {
        if (instance) {
          instance.remove();
          setText(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(text!, visiable);
  useSettingProperties<AMap.Text, UseText>(text!, props, [
    'Style',
    'Title',
    'Clickable',
    'Draggable',
    'Map',
    'Position',
    'Offset',
    'Angle',
    'zIndex',
    'Top',
    'Cursor',
    'ExtData',
  ]);
  useEventProperties<AMap.Text, UseText>(text!, props, [
    'onMoving',
    'onTouchMove',
    'onTouchEnd',
    'onMoveaLong',
    'onTouchStart',
    'onMoveEnd',
    'onClick',
    'onDblClick',
    'onRightClick',
    'onMouseMove',
    'onMouseOver',
    'onMouseOut',
    'onMouseDown',
    'onMouseUp',
    'onDragStart',
    'onDragEnd',
    'onDragging',
  ]);
  return {
    text,
    setText,
  };
};
