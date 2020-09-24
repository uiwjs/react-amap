import { useState, useMemo } from 'react';
import { InfoWindowProps } from '.';
import { useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseInfoWindow extends InfoWindowProps {}
export const useInfoWindow = (props = {} as UseInfoWindow) => {
  const { map, visiable, position, ...other } = props;
  const [isOpen, setIsOpen] = useState(visiable);
  const [infoWindow, setInfoWindow] = useState<AMap.InfoWindow>();
  useMemo(() => {
    if (!AMap || !map) return;
    if (!infoWindow) {
      const positionCenter = map.getCenter();
      let instance: AMap.InfoWindow = new AMap.InfoWindow({ ...other, position: position || positionCenter });
      setInfoWindow(instance);
      if (isOpen) {
        instance.open(map, position || positionCenter);
      }
      return () => {
        if (instance) {
          map && map.remove(instance);
          setInfoWindow(undefined);
        }
      }
    }
  }, [map, infoWindow]);

  useMemo(() => {
    if (isOpen !== visiable && infoWindow && map) {
      setIsOpen(visiable);
      if (visiable) {
        const positionCenter = map.getCenter();
        infoWindow.open(map, position || positionCenter);
      } else {
        infoWindow.close();
      }
    }
  }, [visiable, infoWindow]);

  useSettingProperties<AMap.InfoWindow, UseInfoWindow>(infoWindow!, props, [
    'Content', 'Anchor', 'Size'
  ]);
  useEventProperties<AMap.InfoWindow, UseInfoWindow>(infoWindow!, props, [
    'onOpen', 'onClose', 'onChange'
  ]);
  return {
    infoWindow, setInfoWindow,
  };
}