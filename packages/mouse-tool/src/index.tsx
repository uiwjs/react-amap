import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useEventProperties } from '@uiw/react-amap-utils';
import { useMapContext } from '@uiw/react-amap-map';

export interface MouseToolProps extends Partial<AMap.MouseTool>, AMap.MouseToolEvents {
  active: boolean;
  type: MouseToolDrawType; // TODO transform enum
  drawElementOptions?: AMap.PolygonOptions | AMap.PolylineOptions | AMap.MarkerOptions | AMap.CircleOptions;
  ifClear?: boolean;
}
export enum MouseToolDrawType {
  MARKER,
  POLYLINE,
  POLYGON,
  CIRCLE,
  RECTANGLE,
  MEASUREAREA,
  RULE,
  RECTZOOMIN,
  RECTZOOMOUT,
}
export interface MouseToolDrawedEvent {
  type: string;
  obj: Object;
}
export const MouseTool = forwardRef<MouseToolProps, MouseToolProps>((props, ref) => {
  const { active, type, drawElementOptions, ifClear } = props;
  const { map } = useMapContext();
  const [mouseTool, setMouseTool] = useState<AMap.MouseTool>();
  useImperativeHandle(ref, () => ({ ...props, mouseTool: mouseTool }));

  useEffect(() => {
    if (map && !mouseTool && AMap && AMap.MouseTool) {
      const instance = new AMap.MouseTool(map);
      setMouseTool(instance);
    }
  }, [map, Map, AMap.MouseTool]);

  useEffect(() => {
    if (!mouseTool) {
      return;
    }
    if (!active) {
      mouseTool.close(ifClear);
    } else {
      switch (type) {
        case MouseToolDrawType.MARKER:
          mouseTool.marker(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.POLYLINE:
          mouseTool.polyline(drawElementOptions ? drawElementOptions : ({} as any));
          break;
        case MouseToolDrawType.POLYGON:
          mouseTool.polygon(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.CIRCLE:
          mouseTool.circle(drawElementOptions ? drawElementOptions : ({} as any));
          break;
        case MouseToolDrawType.RECTANGLE:
          mouseTool.rectangle(drawElementOptions ? drawElementOptions : ({} as any));
          break;
        case MouseToolDrawType.MEASUREAREA:
          mouseTool.measureArea(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.RULE:
          mouseTool.rule(drawElementOptions ? drawElementOptions : ({} as any));
          break;
        case MouseToolDrawType.RECTZOOMIN:
          mouseTool.rectZoomIn(drawElementOptions ? drawElementOptions : {});
          break;
        case MouseToolDrawType.RECTZOOMOUT:
          mouseTool.rectZoomOut(drawElementOptions ? drawElementOptions : {});
          break;
      }
    }
  }, [active, ifClear]);

  useEventProperties<AMap.MouseTool, AMap.MouseToolEvents>(mouseTool!, props, ['onDraw']);
  return null;
});
