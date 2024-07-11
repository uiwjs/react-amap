/// <reference types="@uiw/react-amap-types" />
import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useTileLayer } from './useTileLayer';

export * from './useTileLayer';

export enum TileLayerType {
  SATELLITE = 'satellite',
  TRAFFIC = 'traffic',
  ROADNET = 'roadnet',
}

export interface TileLayerProps extends OverlayProps, AMap.TileLayerOptions {
  /** @deprecated use `visible` */
  visiable?: boolean;
  /** 覆盖物是否可见 */
  visible?: boolean;
  type?: TileLayerType;
  options?: AMap.TileLayerOptions;
  /** 图层添加到地图上后的回调 */
  onAdded?: () => void;
  /** 图层从地图上移除后的回调 */
  onRemoved?: () => void;
}

export const TileLayer = React.forwardRef<TileLayerProps, TileLayerProps>((props, ref) => {
  const { tileLayer } = useTileLayer(props);
  useImperativeHandle(ref, () => ({ ...props, tileLayer }), [tileLayer]);
  return null;
});
