import { forwardRef, useEffect, useImperativeHandle, useContext, useState } from 'react';
import { useEventProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';
import { PolylineContext } from '@uiw/react-amap-polyline';

export interface PolylineEditorProps extends Partial<AMap.PolylineEditor>, AMap.PolylineEditorEvents {
  /** 是否开启编辑功能 */
  active?: boolean;
}

export const PolylineEditor = forwardRef<PolylineEditorProps, PolylineEditorProps>((props, ref) => {
  const { active } = props;
  const { map } = useMapContext();
  const polyline = useContext(PolylineContext);
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
    if (visiable && !active && polyline) {
      polyEditor.close();
      props.onEnd && props.onEnd({ target: polyline });
    } else if (visiable && active && polyline) {
      polyEditor.open();
      props.onAdd && props.onAdd({ target: polyline });
    } else if (!visiable && active && polyline) {
      polyEditor.close();
      props.onEnd && props.onEnd({ target: polyline });
    }
  }, [active, visiable, polyline, polyEditor]);

  useEventProperties<AMap.PolylineEditor, AMap.PolylineEditorEvents>(polyEditor!, props, [
    'onEnd',
    'onAddnode',
    'onRemovenode',
    'onAdjust',
    'onAdd',
  ]);
  return null;
});
