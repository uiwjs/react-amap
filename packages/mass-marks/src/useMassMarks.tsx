import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { MassMarksProps } from './';

export interface UseMassMarks extends MassMarksProps {}
export const useMassMarks = (props = {} as UseMassMarks) => {
  const { visiable, ...other } = props;
  const { map } = useMapContext();
  const { opacity = 0.8, zIndex = 1111, style, data } = other || {};
  const [massMarks, setMassMarks] = useState<AMap.MassMarks>();

  useEffect(() => {
    if (!AMap || !map) return;
    if (!massMarks) {
      let initStyle = style;
      if (!initStyle) {
        // JSAPI 2.0 支持显示设置 zIndex, zIndex 越大约靠前，默认按顺序排列
        initStyle = [
          {
            url: 'https://webapi.amap.com/images/mass/mass0.png',
            anchor: new AMap.Pixel(6, 6),
            size: new AMap.Size(11, 11),
            zIndex: 3,
          },
          {
            url: 'https://webapi.amap.com/images/mass/mass1.png',
            anchor: new AMap.Pixel(4, 4),
            size: new AMap.Size(7, 7),
            zIndex: 2,
          },
          {
            url: 'https://webapi.amap.com/images/mass/mass2.png',
            anchor: new AMap.Pixel(3, 3),
            size: new AMap.Size(5, 5),
            zIndex: 1,
          },
        ];
      }
      let instance: AMap.MassMarks = new AMap.MassMarks(data || [], { opacity, zIndex, style: initStyle });
      // 将海量点实例添加到地图上
      // map.add(instance);
      setMassMarks(instance);
      instance.setMap(map);
      return () => {
        if (instance) {
          instance.clear();
          setMassMarks(undefined);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(massMarks!, visiable);
  useSettingProperties<AMap.MassMarks, UseMassMarks>(massMarks!, props, [
    'Map',
    'Data',
    'Style',
    'Opacity',
    'zIndex',
    'Zooms',
  ]);

  useEventProperties<AMap.MassMarks, UseMassMarks>(massMarks!, props, [
    // 'onRightClick',
    // 'onDragStart',
    // 'onDragging',
    // 'onDragEnd',
    // 'onMoving',
    // 'onMoveEnd',
    // 'onMoveAlong',
    'onClick',
    'onDblClick',
    'onMouseMove',
    'onMouseOut',
    'onMouseUp',
    'onMouseDown',
    'onMouseOver',
    'onTouchStart',
    'onTouchEnd',
  ]);

  return { massMarks, setMassMarks };
};
