/// <reference types="@uiw/react-amap-types" />
import { useEffect, useState, useRef } from 'react';

export * from './usePortal';

/**
 * 对实例有 setStatus 更改状态的处理
 * @param instance
 * @param props
 * @param propsName
 */
export function useSetStatus<T extends { getStatus: () => any; setStatus: (opt: any) => void }, F = {}>(
  instance: T,
  props = {} as F,
  propsName: string[] = [],
) {
  propsName.forEach((name) => {
    const eName = name as keyof F;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(props[eName]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (instance && props[eName] !== undefined) {
        if (props[eName] !== state) {
          // map.setStatus({
          //   dragEnable: true,
          //   keyboardEnable: true,
          //   doubleClickZoom: true,
          //   zoomEnable: true,
          //   rotateEnable: true
          // });
          const status = instance.getStatus();
          instance.setStatus({ ...status, [eName]: props[eName] });
          setState(props[eName]);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[eName]]);
  });
}

/**
 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
 * 通过参数 `visible` 来控制执行 `show()` or `hide()`
 */
export function useVisiable<T extends { show: () => void; hide: () => void }>(instance: T, visible?: boolean) {
  const [state, setState] = useState(visible);
  useEffect(() => {
    if (instance && visible !== undefined) {
      if (visible) {
        instance.show && instance.show();
      } else {
        instance.hide && instance.hide();
      }
      if (visible !== state) {
        setState(visible);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance, visible]);
}

/**
 * 获取上一轮的 props 或 state
 * How to get the previous props or state?
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @example
 * ```js
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   return <h1>Now: {count}, before: {prevCount}</h1>;
 * }
 * ```
 */
export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export type EventNameType = 'LowerCase';

/**
 * 绑定事件
 * @param instance 实例对象
 * @param props 传递进来的 props
 * @param eventName 事件的名字，如，我们使用 `onClick` 事件，最终被转换成，`click` 绑定到实例中，`onDblClick` => `dblclick`
 *
 * @example
 * ```js
 * useEventProperties<BMap.Marker, UseMarker>(marker!, props, [
 *   'onMouseMove', 'onZoomChange', 'onMapMove', 'onMouseWheel', 'onZoomStart'
 * ]);
 * ```
 */
export function useEventProperties<T extends AMap.MapEventListener<any>, F>(
  instance: T,
  props = {} as F,
  eventName: string[] = [],
  type?: EventNameType,
) {
  eventName.forEach((name) => {
    const eventName = name as keyof F;
    const eventHandle = props[eventName];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!instance) return;
      let eName = name.toLocaleLowerCase().replace(/^on/, '');
      if (eventHandle && eName) {
        instance.on(eName, eventHandle);
      }
      return () => {
        if (eName && eventHandle) {
          instance.off(eName, eventHandle);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[eventName]]);
  });
}

/**
 * 属性受控
 * @param instance 实例对象
 * @param props 属性值
 * @param propsName 多个属性设置的名称
 * @example
 * ```ts
 * useSettingProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
 *    'Path'
 * ]);
 * ```
 */
export function useSettingProperties<T, F = {}>(instance = {} as T, props = {} as F, propsName: string[] = []) {
  propsName.forEach((name) => {
    const eName = `set${name}` as keyof T;
    const vName = `${name.charAt(0).toLowerCase()}${name.slice(1)}` as keyof F;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(props[vName]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (instance && props[vName] !== undefined) {
        if (props[vName] !== state && instance[eName] && typeof instance[eName] === 'function') {
          (instance[eName] as any)(props[vName]);
          setState(props[vName]);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[vName]]);
  });
}
