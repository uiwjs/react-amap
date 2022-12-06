import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useEventProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';

export interface PolylineEditorProps extends Partial<AMap.PolylineEditor>, AMap.PolylineEditorEvents {
  /** 是否开启编辑功能 */
  active?: boolean;
  polyline?: AMap.Polyline;
}

export const PolylineEditor = forwardRef<PolylineEditorProps, PolylineEditorProps>((props, ref) => {
  const { active, polyline } = props;
  const { map } = useMapContext();
  const [visiable, setVisiable] = useState<boolean>(true);
  const [polyEditor, setPolyEditor] = useState<AMap.PolylineEditor>();
  useImperativeHandle(ref, () => ({ ...props, polyEditor }));
  useEffect(() => {
    if (polyline && map && !polyEditor && AMap && AMap.PolylineEditor) {
      const instance = new AMap.PolylineEditor(map, polyline);
      polyline.on('hide', () => setVisiable(false));
      polyline.on('show', () => setVisiable(true));
      setPolyEditor(instance);
    }
  }, [polyline]);

  useEffect(() => {
    if (!polyEditor) {
      return;
    }
    if (visiable && !active) {
      polyEditor.close();
    } else if (visiable && active) {
      polyEditor.open();
    } else if (!visiable && active) {
      polyEditor.close();
    }
  }, [active, visiable]);

  useEventProperties<AMap.PolylineEditor, AMap.PolylineEditorEvents>(polyEditor!, props, [
    'onEnd',
    'onAddnode',
    'onAdjust',
    'onRemove',
    'onAdd',
  ]);
  return null;
});
