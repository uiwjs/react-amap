import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useEventProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';

export interface PolygonEditorProps extends Partial<AMap.PolygonEditor>, AMap.PolygonEditorEvents {
  /** 是否开启编辑功能 */
  active?: boolean;
  polygon?: AMap.Polygon;
}

export const PolygonEditor = forwardRef<PolygonEditorProps, PolygonEditorProps>((props, ref) => {
  const { active, polygon } = props;
  const { map } = useMapContext();
  const [visiable, setVisiable] = useState<boolean>(true);
  const [polyEditor, setPolyEditor] = useState<AMap.PolygonEditor>();
  useImperativeHandle(ref, () => ({ ...props, polyEditor }));
  useEffect(() => {
    if (polygon && map && !polyEditor && AMap && AMap.PolygonEditor) {
      const instance = new AMap.PolygonEditor(map, polygon);
      polygon.on('hide', () => setVisiable(false));
      polygon.on('show', () => setVisiable(true));
      setPolyEditor(instance);
    }
  }, [polygon]);

  useEffect(() => {
    if (!polyEditor) {
      return;
    }
    if (visiable && !active) {
      polyEditor.close();
      props.onEnd && props.onEnd({ target: props.polygon as any });
    } else if (visiable && active) {
      polyEditor.open();
      props.onAdd && props.onAdd({ target: props.polygon as any });
    } else if (!visiable && active) {
      polyEditor.close();
      props.onEnd && props.onEnd({ target: props.polygon as any });
    }
  }, [active, visiable]);

  useEventProperties<AMap.PolygonEditor, AMap.PolygonEditorEvents>(polyEditor!, props, [
    'onEnd',
    'onAddnode',
    'onRemovenode',
    'onAdjust',
    'onMove',
    'onAdd',
  ]);
  return null;
});
