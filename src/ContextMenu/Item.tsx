import { useEffect } from 'react';
import { MapChildProps } from '../common/map';

export interface ContextMenuItem extends MapChildProps {
  contextMenu?: AMap.ContextMenu;
  text?: string;
  onClick?: (event: MouseEvent) => void;
};

const noop = function() {}

export default (props: ContextMenuItem = {}) => {
  const {text = '', onClick = noop } = props;
  useEffect(() => {
    if (props.contextMenu) {
      props.contextMenu.addItem(text, onClick, 1);
    }
    return () => {
      if (props.contextMenu) {
        props.contextMenu.removeItem(text, onClick);
      }
    }
  }, [props.contextMenu, props.text, props.onClick]);
  return null;
}