import { useState, useEffect } from 'react';
import { ContextMenuProps } from '.';
import { useEventProperties } from '../common/hooks';

export interface UseContextMenu extends ContextMenuProps {}
export const useContextMenu = (props = {} as UseContextMenu) => {
  const { map, position, ...other } = props;
  const [contextMenu, setContextMenu] = useState<AMap.ContextMenu>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!contextMenu) {
      let instance: AMap.ContextMenu = new AMap.ContextMenu({ ...other });
      setContextMenu(instance);
      const rightclick = (e: AMap.MapsEvent) => instance.open(map, position || e.lnglat);
      map.on('rightclick', rightclick);
      return () => {
        if (instance) {
          map.off('rightclick', rightclick);
          map && map.removeLayer(instance);
          setContextMenu(undefined);
        }
      }
    }
  }, [map]);
  useEventProperties<AMap.ContextMenu, UseContextMenu>(contextMenu!, props, [
    'onOpen', 'onClose'
  ]);
  return {
    contextMenu, setContextMenu,
  };
}