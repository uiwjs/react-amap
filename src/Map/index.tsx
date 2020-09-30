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
  return (
    <Fragment>
      <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style}} />
      {AMap && map && typeof children === 'function' && children({ AMap, map, container })}
      {AMap && map && childs.map((child, key) => {
        if (typeof child === 'string') {
          return React.cloneElement(<Fragment>{child}</Fragment>, { key });
        }
        if (!React.isValidElement(child)) return;
        if (child.type && typeof child.type === 'string') {
          return React.cloneElement(child, { key });
        }
        return React.cloneElement(child, {
          ...child.props, AMap, map, container, key
        });
      })}
    </Fragment>
  );
});