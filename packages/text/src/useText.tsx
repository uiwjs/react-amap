import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties, useRenderDom } from '@uiw/react-amap-utils';
import { TextProps } from './';

export interface UseText extends TextProps {}
export const useText = (props = {} as UseText) => {
  const { map, visiable, ...other } = props;
  const [text, setText] = useState<AMap.Text>();
  const { container } = useRenderDom({ children: props.children });
  useEffect(() => {
    if (!AMap || !map) return;
    if (!text) {
      if (props.children) {
        other.text = container.innerHTML;
      }
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

  useEffect(() => {
    if (text) {
      text.setText(props.children ? container.innerHTML : props.text || '');
    }
  }, [props.children, props.text, container, text]);

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
