import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { BezierCurveProps } from '.';

export interface UseBezierCurve extends BezierCurveProps {}
export const useBezierCurve = (props = {} as UseBezierCurve) => {
  const { visiable, ...other } = props;
  const { map } = useMapContext();
  const [bezierCurve, setBezierCurve] = useState<AMap.BezierCurve>();
  useEffect(() => {
    if (AMap && map && !bezierCurve) {
      let instance: AMap.BezierCurve = new AMap.BezierCurve({ ...other });
      map.add(instance);
      setBezierCurve(instance);
      return () => {
        if (instance) {
          if (AMap.v) {
            map && map.remove(instance);
          } else {
            // 暂不使用这个 API，这个不兼容 v1.4.xx，改用 map.remove API
            map && map.removeLayer(instance);
          }
          setBezierCurve(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(bezierCurve!, visiable);
  useSettingProperties<AMap.BezierCurve, UseBezierCurve>(bezierCurve!, props, [
    'Options',
    'Path',
    'ExtData',
    'ExtData',
  ]);
  useEventProperties<AMap.BezierCurve, UseBezierCurve>(bezierCurve!, props, [
    'onHide',
    'onShow',
    'onDblClick',
    'onMouseOver',
    'onMouseUp',
    'onMouseDown',
    'onclick',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onRightClick',
    'onMouseOut',
  ]);
  return {
    bezierCurve,
    setBezierCurve,
  };
};
