import { useState, useLayoutEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { LabelMarkerProps } from './';

const initIcon: LabelMarkerProps['icon'] = {
  // 图标类型，现阶段只支持 image 类型
  // 图片 url
  image: 'http://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png',
  // 图片尺寸
  size: [19, 32],
  // 图片相对 position 的锚点，默认为 bottom-center
  anchor: 'center',
};

export interface UseLabelMarker extends LabelMarkerProps {}
export const useLabelMarker = (props: UseLabelMarker = {}) => {
  const { visiable, children, text, icon = initIcon, ...other } = props;
  const { map, AMap } = useMapContext();
  const [labelMarker, setLabelMarker] = useState<AMap.LabelMarker>();

  useLayoutEffect(() => {
    if (!labelMarker && map) {
      let initText = text;
      if (!text) {
        initText = {
          // 要展示的文字内容
          content: '',
          // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
          direction: 'right',
          // 在 direction 基础上的偏移量
          offset: [-20, -5],
          // 文字样式
          style: {
            // 字体大小
            fontSize: 12,
            // 字体颜色
            fillColor: '#22886f',
            // 描边颜色
            strokeColor: '#fff',
            // 描边宽度
            strokeWidth: 2,
          },
        };
      }
      // if (props.children) {
      //   other.content = container;
      // }
      const instance: AMap.LabelMarker = new (AMap as any).LabelMarker({
        style: icon,
        icon: icon,
        text: initText,
        ...other,
      });
      setLabelMarker(instance);

      //  issue #259  兼容 v1.4.xxx 版本
      if ((AMap as any)?.v?.indexOf('1.4') === 0) {
        let labelMarkersLayer;
        if ((map as any).labelMarkersLayer) {
          labelMarkersLayer = (map as any).labelMarkersLayer;
        } else {
          (map as any).labelMarkersLayer = labelMarkersLayer = new (AMap as any).LabelsLayer({
            zooms: [3, 20],
            zIndex: 101,
            collision: true,
            animation: true,
          });
          map.add(labelMarkersLayer);
        }
        labelMarkersLayer.add(instance);
      }

      map.add(instance);
      return () => {
        if (instance) {
          //  issue #259  兼容 v1.4.xxx 版本
          if ((AMap as any)?.v?.indexOf('1.4') === 0) {
            (map as any)?.labelMarkersLayer?.remove(instance);
          } else {
            instance.remove();
          }
          setLabelMarker(undefined);
        }
      };
    }
  }, [map]);
  useVisiable(labelMarker!, visiable);
  useSettingProperties<AMap.LabelMarker, UseLabelMarker>(labelMarker, props, [
    'Name',
    'Position',
    'Zooms',
    'Opacity',
    'zIndex',
    'Rank',
    'Text',
    'Icon',
    'ExtData',
    'Top',
  ]);

  useEventProperties<AMap.LabelMarker, UseLabelMarker>(labelMarker!, props, [
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
    'onClick',
    'onMouseMove',
    'onMouseOver',
    'onMouseDown',
    'onMouseUp',
    'onMouseOut',

    // 以下事件过时兼容，将在 v6 中移除
    'onMousedown',
    'onMouseup',
    'onTouchstart',
    'onTouchmove',
    'onTouchend',
    'onMousemove',
    'onMouseover',
    'onMouseout',
  ]);

  return {
    labelMarker,
    setLabelMarker,
  };
};
