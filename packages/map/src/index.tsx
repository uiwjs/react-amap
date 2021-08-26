/// <reference types="@uiw/react-amap-types" />
import {
  useRef,
  useEffect,
  useImperativeHandle,
  Fragment,
  Children,
  cloneElement,
  isValidElement,
  forwardRef,
} from 'react';
import { useMap } from './useMap';

export * from './useMap';

type RenderProps =
  | { children: (data: { AMap: typeof AMap; map: AMap.Map; container?: HTMLDivElement | null }) => void }
  | { children: React.ReactNode };

export interface MapProps extends AMap.MapEvents, AMap.MapOptions {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export const Map = forwardRef<MapProps & { map?: AMap.Map }, MapProps & RenderProps>(
  ({ className, style, children, ...props }, ref) => {
    const elmRef = useRef<HTMLDivElement>(null);
    const { setContainer, container, map } = useMap({ container: elmRef.current, ...props });
    useEffect(() => setContainer(elmRef.current), [elmRef.current]);
    useImperativeHandle(ref, () => ({ ...props, map, AMap, container: elmRef.current }), [map]);
    const childs = Children.toArray(children);
    return (
      <Fragment>
        <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
        {AMap && map && typeof children === 'function' && children({ AMap, map, container })}
        {AMap &&
          map &&
          childs.map((child, key) => {
            if (typeof child === 'string') {
              return cloneElement(<Fragment>{child}</Fragment>, { key });
            }
            if (!isValidElement(child)) return null;
            if (child.type && typeof child.type === 'string') {
              return cloneElement(child, { key });
            }
            return cloneElement(child, {
              ...child.props,
              AMap,
              map,
              container,
              key,
            });
          })}
      </Fragment>
    );
  },
);
