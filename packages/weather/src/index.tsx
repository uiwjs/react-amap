import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useWeather } from './useWeather';

export * from './useWeather';
export interface WeatherProps extends OverlayProps {
  /** 城市名称/区域编码(如：“杭州市”/“330100”) */
  city?: string;
  /**
   * 获取 `查询实时天气信息` 或 `查询四天预报天气`
   * - live 查询实时天气信息。
   * - forecast 查询四天预报天气，包括查询当天天气信息
   * @default live
   */
  type?: 'live' | 'forecast';
  /** 数据请求完成时触发事件。 */
  onComplete?(data: AMap.WeatherForecastResult | AMap.WeatherLiveResult): void;
  /** 数据请求错误时触发事件。 */
  onError?(err: Error): void;
}
export const Weather = React.forwardRef<WeatherProps, WeatherProps>((props, ref) => {
  const { weather } = useWeather(props);
  useImperativeHandle(ref, () => ({ ...props, weather }));
  return null;
});
