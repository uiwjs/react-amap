/// <reference types="../types" />

import React, { useRef, useEffect, useImperativeHandle, Fragment } from 'react';
import { useMap } from './useMap';

export interface MapProps extends AMap.MapEvents, AMap.MapOptions {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export const Map = React.forwardRef<MapProps & { map?: AMap.Map }, MapProps>(({ className, style, children, ...props }, ref) => {
  const elmRef = useRef<HTMLDivElement>(null);
  const { setContainer, container, map } = useMap({ container: elmRef.current, ...props });
  useEffect(() => setContainer(elmRef.current), [elmRef.current]);
  useImperativeHandle(ref, () => ({ ...props, map, AMap, container: elmRef.current }), [map]);
  const childs = React.Children.toArray(children);

  const renderChildren = () => {
    return childs.map((child) => {
      if (child && React.isValidElement(child)) {
        const type = child.type;
        /*
         * 下面两种组件不注入地图相关属性
         * 1. 明确声明不需要注入的
         * 2. DOM 元素
         */
        if (type.preventAmap || (typeof type === 'string')) {
          return child
        }
        return React.cloneElement(child, {
          ...child.props, AMap, map, container,
        });
      }
      return child
    })
  }

  return (
    <Fragment>
      <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style}} />
      {AMap && map && typeof children === 'function' && children({ AMap, map, container })}
      {AMap && map && renderChildren()}
    </Fragment>
  );
});