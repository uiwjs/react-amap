/// <reference types="@uiw/react-amap-types" />

import React, { useImperativeHandle, Fragment } from 'react';
import { MapChildProps } from '@uiw/react-amap-map';
import { useContextMenu } from './useContextMenu';
import Item from './Item';

export * from './useContextMenu';
export * from './Item';
export interface ContextMenuProps extends MapChildProps, AMap.ContextMenuOptions, AMap.ContextMenuEvents {
  children?: JSX.Element | JSX.Element[];
}

const ContextMenuCompound = React.forwardRef<ContextMenuProps, ContextMenuProps>((props, ref) => {
  const { contextMenu } = useContextMenu(props);
  useImperativeHandle(ref, () => ({ ...props, contextMenu }));
  const childs = React.Children.toArray(props.children);
  return (
    <Fragment>
      {AMap &&
        contextMenu &&
        childs.map((child, key) => {
          if (!React.isValidElement(child)) return null;
          return React.cloneElement(child, { ...child.props, AMap, map: props.map, contextMenu, key });
        })}
    </Fragment>
  );
});

type CompoundedComponent = typeof ContextMenuCompound & {
  Item: typeof Item;
};

console.log('ContextMenuCompound:', ContextMenuCompound);

export const ContextMenu: CompoundedComponent = ContextMenuCompound as unknown as CompoundedComponent;

ContextMenu.Item = Item;
