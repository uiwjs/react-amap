import { useImperativeHandle, forwardRef } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useLabelMarker } from './useLabelMarker';

export interface LabelMarkerProps extends OverlayProps, AMap.LabelMarkerOptions, AMap.LabelMarkerOptions {
  /**覆盖物是否可见 */
  visiable?: boolean;
  className?: string;
  children?: JSX.Element;
}

export const LabelMarker = forwardRef<LabelMarkerProps & { marker?: AMap.LabelMarker }, LabelMarkerProps>(
  (props, ref) => {
    const { labelMarker } = useLabelMarker(props);
    useImperativeHandle(ref, () => ({ ...props, labelMarker }), [labelMarker]);
    return null;
  },
);
