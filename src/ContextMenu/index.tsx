import React, { useImperativeHandle, Fragment } from 'react';
import { MapChildProps } from '../common/map';
import { useContextMenu } from './useContextMenu';
import Item from './Item';

export interface ContextMenuProps extends MapChildProps, AMap.ContextMenuOptions, AMap.ContextMenuEvents { };

const ContextMenu = React.forwardRef<ContextMenuProps, ContextMenuProps>((props, ref) => {
  const { contextMenu } = useContextMenu(props);
  useImperativeHandle(ref, () => ({ ...props, contextMenu }));
  const childs = React.Children.toArray(props.children);
  return (
    <Fragment>
      {AMap && contextMenu && childs.map((child, key) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, { ...child.props, AMap, map: props.map, contextMenu, key });
      })}
    </Fragment>
  );
});

type ContextMenu = typeof ContextMenu & {
  Item: typeof Item;
};
(ContextMenu as ContextMenu).Item = Item;

export default ContextMenu as ContextMenu;