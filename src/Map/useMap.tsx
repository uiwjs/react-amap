import { useEffect, useState, useMemo } from 'react';
import { MapChildProps } from '../common/map';
import { MapProps } from './';
import { useSetStatus } from '../common/hooks';

export interface UseMap extends MapProps, MapChildProps {
  /**
   * 指定的容器
   */
  container?: HTMLDivElement | null;
}

export default (props: UseMap = {}) => {
  const { ...other } = props;
  const [map, setMap] = useState<AMap.Map>();
  const [zoom, setZoom] = useState(props.zoom || 15);
  const [container, setContainer] = useState(props.container);
  useMemo(() => {
    if (container && !map && AMap) {
      const instance = new AMap.Map(container, { zoom, ...other });
      setMap(instance);
    }
  }, [container, map]);
  
  useSetStatus<AMap.Map, UseMap>(map!, props, ['dragEnable', 'zoomEnable', 'jogEnable', 'pitchEnable', 'rotateEnable', 'animateEnable', 'keyboardEnable']);

  return {
    map, setMap,
    container, setContainer,
  };
}