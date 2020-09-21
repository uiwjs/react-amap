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
export function useVisiable<T extends AMap.Control, F extends { visiable?: boolean; }>(instance: T, props = {} as F) {
  const visiable = (props as any).visiable;
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