
export interface Config {
  /**
   * akay 密钥
   * 您需先[申请密钥(ak)](https://lbs.amap.com/dev/key/app)。开发文档说明地址：https://lbs.amap.com/api/javascript-api/guide/abc/prepare
   * 
   * 1. 首先，[注册开发者账号](https://lbs.amap.com/dev/id/newuser)，成为高德开放平台开发者  
   * 2. 登陆之后，在进入「应用管理」 页面「创建新应用」  
   * 3. 为应用[添加 Key](https://lbs.amap.com/dev/key/app)，「服务平台」一项请选择「 Web 端 ( JSAPI ) 」  
   * 
   */
  akay: string;
  /**
   * SDK 包版本
   * @default 1.4.15
   */
  version?: string;
  /**
   * 协议，默认是根据当前网站协议的
   */
  protocol?: 'http' | 'https';
  /**
   * 请求 SDK 的前半部分
   * https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值
   * @default webapi.amap.com/maps
   */
  hostAndPath?: string;
  /**
   * JSONP 回调函数
   */
  callbackName?: string;
}

/**
 * 此类型是 `<Map>` 组件传递给子组件(如 `<Marker>`)的两个 props
 */
export interface MapChildProps {
  /**
   * 地图API的核心类，SDK加载完成才有
   */
  AMap?: typeof AMap;
  /**
   * 实例化后的地图对象
   */
  map?: AMap.Map;
}

export interface OverlayProps extends MapChildProps {
  /**
   * 覆盖物是否可见
   */
  visiable?: boolean;
}
