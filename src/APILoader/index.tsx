/**
 * 初始化和加载baidu地图
 */
import React from 'react';
import { Config } from '../common/map';
import { requireScript } from '../utils/requireScript';

export function delay(time: number): Promise<undefined> {
  return new Promise((resolve, reject) => {
    window.setTimeout(resolve, time);
  });
}

export interface APILoaderProps extends Config {
  /**
   * 用于展示加载中或错误状态
   */
  fallback?: (error?: Error) => React.ReactNode;
}

interface State {
  loaded: boolean;
  error?: Error;
}

const DEFAULT_RETRY_TIME = 3;

/**
 * APILoader 用于加载百度地图依赖
 */
export class APILoader extends React.Component<APILoaderProps> {
  public static defaultProps = {
    akay: '',
    hostAndPath: 'webapi.amap.com/maps',
    version: '2.0',
    callbackName: 'load_amap_sdk',
  };

  /**
   * 全局可能存在多个 Loader 同时渲染, 但是只能由一个负责加载
   */
  private static waitQueue: Array<[Function, Function]> = [];
  public state: State = {
    loaded: !!window.AMap,
  };

  public constructor(props: APILoaderProps) {
    super(props);
    if (props.akay === null) {
      throw new TypeError('AMap: akay is required');
    }
  }

  public componentDidMount() {
    const { callbackName } = this.props;
    if (window.AMap == null) {
      if (window[callbackName as any]) {
        APILoader.waitQueue.push([this.finish, this.handleError]);
        return;
      }
      this.loadMap();
    }
  }

  public render() {
    return this.state.loaded ? (
      this.props.children
    ) : this.props.fallback ? (
      this.props.fallback(this.state.error)
    ) : this.state.error ? (
      <div style={{ color: 'red' }}>{this.state.error.message}</div>
    ) : null;
  }

  private getScriptSrc() {
    const cfg = this.props;
    let protocol = (cfg.protocol || window.location.protocol) as Config['protocol'];
    if (protocol!.indexOf(':') === -1) {
      protocol += ':';
    }
    return `${protocol}//${cfg.hostAndPath}?v=${cfg.version}&key=${cfg.akay}&callback=${cfg.callbackName}`;
  }
  /**
   * load BaiduMap in script tag
   */
  private async loadMap() {
    const { callbackName } = this.props;
    const src = this.getScriptSrc();
    (window as any)[callbackName as any] = () => {
      // flush queue
      const queue = APILoader.waitQueue;
      APILoader.waitQueue = [];
      queue.forEach((task) => task[0]());
      this.finish();
    };

    for (let i = 0; i < DEFAULT_RETRY_TIME; i++) {
      try {
        await requireScript(src);
        break;
      } catch (error) {
        if (i === DEFAULT_RETRY_TIME - 1) {
          const err = new Error(`Failed to load AMap: ${error.message}`);
          // flush queue
          const queue = APILoader.waitQueue;
          APILoader.waitQueue = [];
          queue.forEach((task) => task[1](err));
          this.handleError(err);
          return;
        }
        await delay(i * 1000);
      }
    }
  }

  private handleError = (error: Error) => {
    this.setState({ error });
  };

  private finish = () => {
    this.setState({
      loaded: true,
    });
  };
}
