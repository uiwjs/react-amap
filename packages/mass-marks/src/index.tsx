import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useMassMarks } from './useMassMarks';

export * from './useMassMarks';

export interface MassMarksProps extends OverlayProps, AMap.MassMarksEvents, AMap.MassMarkersOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
  data?: AMap.MassMarkersDataOptions;
}

export const MassMarks = React.forwardRef<MassMarksProps, MassMarksProps>((props, ref) => {
  const { massMarks } = useMassMarks(props);
  useImperativeHandle(ref, () => ({ ...props, massMarks }), [massMarks, props]);
  return null;
});
