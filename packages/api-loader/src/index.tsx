/// <reference types="@uiw/react-amap-types" />

import { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { load } from '@amap/amap-jsapi-loader';

export interface APILoaderConfig {
  /**
   * key 密钥
   * 您需先[申请密钥(ak)](https://lbs.amap.com/dev/key/app)。开发文档说明地址：https://lbs.amap.com/api/javascript-api/guide/abc/prepare
   *
   * 1. 首先，[注册开发者账号](https://lbs.amap.com/dev/id/newuser)，成为高德开放平台开发者
   * 2. 登陆之后，在进入「应用管理」 页面「创建新应用」
   * 3. 为应用[添加 Key](https://lbs.amap.com/dev/key/app)，「服务平台」一项请选择「 Web 端 ( JSAPI ) 」
   *
   */
  akey?: string;
  /**
   * SDK 包版本，指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
   * @default 1.4.15
   */
  version?: string;
  /**
   * 加载一个或者多个插件
   * @example `['AMap.ToolBar', 'AMap.Driving']`
   */
  plugins?: string[];
  /** 是否加载 AMapUI，缺省不加载 */
  AMapUI?: {
    /** AMapUI 缺省 1.1 */
    version?: string;
    /** 需要加载的 AMapUI ui插件 */
    plugins?: string[];
  };
  /** 是否加载 Loca， 缺省不加载 */
  Loca?: {
    /** Loca 版本，缺省 1.3.2 */
    version?: string;
  };
}

export interface APILoaderProps extends APILoaderConfig {
  /**
   * 请使用 `key`
   * @deprecated
   */
  akay?: string;
  /**
   * 请使用 `plugins`
   * @deprecated
   * @example `AMap.ToolBar,AMap.Driving`
   */
  plugin?: string;
}

/**
 * APILoader 用于加载百度地图依赖
 */
export const APILoader: FC<PropsWithChildren<APILoaderProps>> = (props) => {
  const { children, ...config } = props;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const aKey = config.akey || config.akay || '';
    const plugins = config.plugins || (config.plugin ? config.plugin.split(',') : []);
    load({
      key: aKey,
      plugins,
      version: config.version || '2.0',
      AMapUI: config.AMapUI,
      Loca: config.Loca,
    })
      .then(() => {
        setError(undefined);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
  }, [config.akey, config.akay]);
  if (error) {
    return <div style={{ color: 'red' }}>{error.message}</div>;
  } else if (loaded) {
    return <Fragment>{children}</Fragment>;
  }
  return null;
};
