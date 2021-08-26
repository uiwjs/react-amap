import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useGeolocation } from './useGeolocation';

export * from './useGeolocation';
export interface GeolocationProps extends OverlayProps, AMap.GeolocationEvents, AMap.GeolocationOptions {
  /**
   * 定位类型
   * - position 获取 用户的精确位置，有失败几率
   * - cityInfo 根据用户 IP 获取 用户所在城市信息
   * @default position
   */
  type?: 'position' | 'cityInfo';
}
export const Geolocation = React.forwardRef<GeolocationProps, GeolocationProps>((props, ref) => {
  const { geolocation } = useGeolocation(props);
  useImperativeHandle(ref, () => ({ ...props, geolocation }));
  return null;
});
