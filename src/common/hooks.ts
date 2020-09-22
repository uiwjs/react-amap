import React, { useEffect, useState, useRef } from 'react';

export function useSetStatus<T extends AMap.Map, F = {}>(instance: T, props = {} as F, propsName: string[] = []) {
  propsName.forEach((name) => {
    const eName = name as keyof F;
    const [state, setState] = useState(props[eName]);
    useEffect(() => {
      if (instance && props[eName] !== undefined) {
        if(props[eName] !== state) {
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
    }, [instance, props[eName]]);
  });
}

/**
 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
 * 通过参数 `visiable` 来控制执行 `show()` or `hide()`
 */
export function useVisiable<T extends { show: () => void; hide: () => void; }>(instance: T, visiable?: boolean) {
  const [state, setState] = useState(visiable);
  useEffect(() => {
    if (instance && visiable !== undefined) {
      if (visiable) {
        instance.show && instance.show();
      } else {
        instance.hide && instance.hide();
      }
      if(visiable !== state) {
        setState(visiable);
      }
    }
  }, [instance, visiable]);
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

export interface EventListener {
  /**
   * 添加事件监听函数
   * @param event 
   * @param handler 
   */
  on(event: string, handler: any): void;
  /**
   * 移除事件监听函数
   * @param event 
   * @param handler 
   */
  off(event: string, handler: any): void;
}

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
export function useEventProperties<T extends EventListener, F>(instance: T, props = {} as F, eventName: string[] = [], type?: EventNameType) {
  eventName.forEach((name) => {
    const eventName = name as keyof F;
    const eventHandle = props[eventName];
    useEffect(() => {
      if(!instance) return;
      let eName = name.toLocaleLowerCase().replace(/^on/, '');
      if (eventHandle && eName) {
        instance.on(eName, eventHandle);
      }
      return () => {
        if (eName && eventHandle) {
          instance.off(eName, eventHandle);
        }
      }
    }, [instance, props[eventName]]);
  });
}