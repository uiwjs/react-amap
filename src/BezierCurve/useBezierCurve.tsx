import { useState, useEffect } from 'react';
import { BezierCurveProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseBezierCurve extends BezierCurveProps {}
export const useBezierCurve = (props = {} as UseBezierCurve) => {
  const { map, visiable, ...other } = props;
  const [bezierCurve, setBezierCurve] = useState<AMap.BezierCurve>();
  useEffect(() => {
    if (AMap && map && !bezierCurve) {
      let instance: AMap.BezierCurve = new AMap.BezierCurve({ ...other });
      map.add(instance);
      setBezierCurve(instance);
      return () => {
        if (instance) {
          map && map.removeLayer(instance);
          setBezierCurve(undefined);
        }
      }
    }
  }, [map]);

  useVisiable(bezierCurve!, visiable);
  useSettingProperties<AMap.BezierCurve, UseBezierCurve>(bezierCurve!, props, [
    'Options', 'Path', 'ExtData', 'ExtData'
  ]);
  useEventProperties<AMap.BezierCurve, UseBezierCurve>(bezierCurve!, props, [
    'onHide', 'onShow', 'onDblClick', 'onMouseOver', 'onMouseUp', 'onMouseDown', 'onclick', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onRightClick', 'onMouseOut',
  ]);
  return {
    bezierCurve, setBezierCurve,
  }
}