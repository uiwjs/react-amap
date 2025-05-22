/// <reference types="@uiw/react-amap-types" />
import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useMassMarks } from './useMassMarks';

export * from './useMassMarks';

export interface MassMarksProps extends OverlayProps, AMap.MassMarksEvents, AMap.MassMarkersOptions {
  /** @deprecated use {@link visible} */
  visiable?: boolean;
  /** 覆盖物是否可见 */
  visible?: boolean;
  data?: AMap.MassMarkersDataOptions;
}

export const MassMarks = React.forwardRef<MassMarksProps, MassMarksProps>((props, ref) => {
  const { massMarks } = useMassMarks(props);
  useImperativeHandle(ref, () => ({ ...props, massMarks }), [massMarks, props]);
  return null;
});
