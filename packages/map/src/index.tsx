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
  useReducer,
} from 'react';
import { useMap } from './useMap';
import { Context, reducer, initialState } from './context';

export * from './useMap';
export * from './context';

type RenderProps =
  | { children?: (data: { AMap: typeof AMap; map: AMap.Map; container?: HTMLDivElement | null }) => void }
  | { children?: React.ReactNode };

export interface MapProps extends AMap.MapEvents, AMap.MapOptions {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
  container?: HTMLDivElement | null;
}

export function Provider(props: RenderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ ...state, state, dispatch }}>{props.children}</Context.Provider>;
}

export const Map = forwardRef<MapProps & { map?: AMap.Map }, MapProps & RenderProps>(
  ({ className, style, children, ...props }, ref) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const elmRef = useRef<HTMLDivElement>(null);
    const { setContainer, container, map } = useMap({
      container: props.container || (elmRef.current as MapProps['container']),
      ...props,
    });
    useEffect(() => setContainer(elmRef.current), [elmRef.current]);
    useImperativeHandle(ref, () => ({ ...props, map, AMap, container: props.container || elmRef.current }), [map]);
    const childs = Children.toArray(children);

    useEffect(() => {
      if (map) {
        dispatch({ map, container: elmRef.current, AMap });
      }
    }, [map]);

    return (
      <Context.Provider value={{ ...state, state, dispatch }}>
        {!props.container && (
          <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
        )}
        {AMap && map && typeof children === 'function' && children({ AMap, map, container })}
        {AMap &&
          map &&
          childs.map((child, key) => {
            if (!isValidElement(child)) return null;
            if (typeof child === 'string') {
              return cloneElement(<Fragment>{child}</Fragment>, { key });
            }
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
      </Context.Provider>
    );
  },
);
