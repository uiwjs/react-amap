import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useMassMarks } from './useMassMarks';

export interface MassMarksProps extends OverlayProps, AMap.MassMarksEvents, AMap.MassMarkersOptions {
  data?: AMap.MassMarkersDataOptions;
}

export const MassMarks = React.forwardRef<MassMarksProps, MassMarksProps>((props, ref) => {
  const { massMarks } = useMassMarks(props);
  useImperativeHandle(ref, () => ({ ...props, massMarks }), [massMarks, props]);
  return null;
});
