declare global {
  interface Window {
    AMap: typeof AMap;
  }
}

declare namespace AMap {
  /**
   * 经纬度坐标，用来描述地图上的一个点位置, 目前高德地图使用的是 GCJ-02 坐标，如果你采集的是 WGS84 坐标，请先进行坐标转换
   */
  class LngLat {
    /**
     * @param lng 地理经度
     * @param lat 地理纬度
     * @param noWrap 是否自动将经度值修正到 [-180,180] 区间内，缺省为false; noWrap 为false时传入 [190,30] ，会被自动修正为 [-170,30] , noWrap 为true时不会自动修正，可以用来进行跨日期限的覆盖物绘制
     */
    constructor(lng: number, lat: number, noWrap: boolean);
    /**
     * 设置经度值
     * @param lng 经度值
     */
    setLng?(lng): void;
    /**
     * 获取纬度值
     * @param lat 纬度值
     */
    setLat?(lat): void;
    /**
     * 获取纬度值
     */
    getLng?(): number;
    /**
     * 获取纬度值
     */
    getLat?(): number;
    /**
     * 判断经纬度坐标和另外一个经纬度坐标是否相等
     * @param another 另外一个经纬度坐标
     */
    equals?(another: LngLat): boolean;
    /**
     * 与另外一个经纬度相加
     * @param another 另外一个经纬度坐标
     * @param noWrap 是否将相加的结果经度值修正到 [-180,180] 区间内
     * @returns 两个经纬度相加的结果
     */
    add?(another: LngLat, noWrap: boolean): LngLat;
    /**
     * 与另外一个经纬度相减
     * @param another 另外一个经纬度坐标
     * @param noWrap 是否将相减的结果经度值修正到 [-180,180] 区间内
     * @returns 两个经纬度相减的结果
     */
    subtract?(another, noWrap): LngLat;
    /**
     * 获取从当前经纬度位置向东移动 E 米，向北移动 N 米的坐标位置
     * @param E 经度方向移动，向东为正
     * @param N 维度方向移动，向北为正
     */
    offset?(E: number, N: number): LngLat;
    /**
     * LngLat对象以字符串的形式返回
     * @returns 格式如'lng值,lat值'的字符串
     */
    toString?(): string;
    /**
     * LngLat对象以字符串的形式返回
     * @returns 格式如'lng值,lat值'的字符串
     */
    toArray?(): string;
    /**
     * 计算当前经纬度距离另一个经纬度或者经纬度数组组成的路径的距离 [相关示例](https://lbs.amap.com/api/javascript-api/example/calcutation/calculate-distance-between-two-markers/)
     * @returns 距离值，单位为米
     */
    distance?(): number;
  }
  /**
   * 地物对象的经纬度矩形范围。
   */
  class Bounds {
    /**
     * @param southWest 西南角经纬度
     * @param northEast 东北角经纬度值
     */
    constructor(southWest: LngLat, northEast: LngLat);
    /**
     * 获取西南角坐标。
     */
    getSouthWest?(): LngLat;
    /**
     * 获取东南角坐标
     */
    getNorthEast?(): LngLat;
    /**
     * 指定点坐标是否在矩形范围内 [相关示例](https://lbs.amap.com/api/javascript-api/example/relationship-judgment/point-surface-relation)
     * @param obj 
     */
    contains?(obj: LngLat): boolean;
    /**
     * 获取当前Bounds的中心点经纬度坐标。
     */
    getCenter?(): LngLat;
    /**
     * 以字符串形式返回地图对象的矩形范围
     */
    toString?(): string;
  }
  /**
   * 像素坐标，确定地图上的一个像素点。
   */
  class Pixel {
    /**
     * @param x 横坐标
     * @param y 纵坐标
     */
    constructor(x: number, y: number);
    /**
     * 获取像素横坐标
     */
    getX?(): number;
    /**
     * 获取像素纵坐标
     */
    getY?(): number;
    /**
     * 以字符串形式返回像素坐标对象
     */
    toString?(): string;
    /**
     * 当前像素坐标与传入像素坐标是否相等
     * @param point 
     */
    equals?(point: Pixel): boolean;
  }
  /**
   * 地物对象的像素尺寸
   */
  class Size {
    /**
     * @param width 宽度
     * @param height 高度
     */
    constructor(width: number, height: number);
    /**
     * 获取像素横坐标
     */
    getWidth?(): number;
    /**
     * 获取像素纵坐标
     */
    getHeight?(): number;
    /**
     * 以字符串形式返回尺寸大小对象
     */
    toString?(): string;
  }
}