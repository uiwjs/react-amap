import { useImperativeHandle, forwardRef } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useLabelMarker } from './useLabelMarker';

export interface LabelMarkerProps extends OverlayProps, AMap.LabelMarkerEvents, AMap.LabelMarkerOptions {
  /**覆盖物是否可见 */
  visiable?: boolean;
  className?: string;
  children?: JSX.Element;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onMouseDown`
   */
  onMousedown?(event: AMap.MapsEvent): void;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onMouseUp`
   */
  onMouseup?(event: AMap.MapsEvent): void;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onTouchStart`
   */
  onTouchstart?(event: AMap.MapsEvent): void;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onTouchMove`
   */
  onTouchmove?(event: AMap.MapsEvent): void;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onTouchEnd`
   */
  onTouchend?(event: AMap.MapsEvent): void;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onMouseMove`
   */
  onMousemove?(event: AMap.MapsEvent): void;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onMouseOver`
   */
  onMouseover?(event: AMap.MapsEvent): void;
  /**
   * 将在下一个版本 `v6+` 版本移除
   * @deprecated use `onMouseOut`
   */
  onMouseout?(event: AMap.MapsEvent): void;
}

export const LabelMarker = forwardRef<LabelMarkerProps & { labelMarker?: AMap.LabelMarker }, LabelMarkerProps>(
  (props, ref) => {
    const { labelMarker } = useLabelMarker(props);
    useImperativeHandle(ref, () => ({ ...props, labelMarker }), [labelMarker]);
    return null;
  },
);
