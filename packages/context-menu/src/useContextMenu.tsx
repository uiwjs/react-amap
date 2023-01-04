import { useState, useEffect } from 'react';
import { useEventProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { ContextMenuProps } from '.';

export interface UseContextMenu extends ContextMenuProps {}
export const useContextMenu = (props = {} as UseContextMenu) => {
  const { position, ...other } = props;
  const { map } = useMapContext();
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
          instance.close();
          map.off('rightclick', rightclick);
          setContextMenu(undefined);
        }
      };
    }
  }, [map]);
  useEventProperties<AMap.ContextMenu, UseContextMenu>(contextMenu!, props, ['onOpen', 'onClose']);
  return {
    contextMenu,
    setContextMenu,
  };
};
