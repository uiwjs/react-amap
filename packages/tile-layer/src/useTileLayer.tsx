import { useEffect, useState } from 'react';
import { useVisiable } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { TileLayerProps, TileLayerType } from './index';

export interface UseTileLayer extends TileLayerProps {}

export function useTileLayer(props = {} as UseTileLayer) {
  const [tileLayer, setTileLayer] = useState<AMap.TileLayer>();
  const { visiable, type, options } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (map && !tileLayer) {
      let instance: AMap.TileLayer = null as any;
      if (type) {
        switch (type) {
          case TileLayerType.ROADNET:
            instance = new AMap.TileLayer.Traffic({});
            break;
          case TileLayerType.SATELLITE:
            instance = new AMap.TileLayer.Satellite({});
            break;
          case TileLayerType.TRAFFIC:
            instance = new AMap.TileLayer.Traffic({});
            break;
        }
      }
      if (options) {
        instance = new AMap.TileLayer(options);
      }
      if (!!instance) {
        map.addLayer(instance);
        props.onAdded && props.onAdded();
        setTileLayer(instance);
      }
      return () => {
        if (instance) {
          map.removeLayer(instance);
          props.onRemoved && props.onRemoved();
        }
      };
    }
  }, [map]);

  useVisiable(tileLayer!, visiable);
  return {
    tileLayer,
    setTileLayer,
  };
}
