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
  type Vector = number[];
  type LngLatLike = LngLat | [number, number];
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
  class MapEventListener<T = ''> {
    /**
     * 设置控件可见
     */
    show: () => void;
    /**
     * 设置控件隐藏
     */
    hide: () => void;
    /**
     * 添加事件监听函数
     * @param event 
     * @param handler 
     */
    on(event: T, handler: any): void;
    /**
     * 移除事件监听函数
     * @param event 
     * @param handler 
     */
    off(event: T, handler: any): void;
    /**
     * 判断当前实例是否已经绑定了某个事件回调
     * @param type 事件类型
     * @param handler 事件回调
     * @param context 事件上下文
     */
    hasEvents(type: string, handler: any, context: any): boolean;
    /**
     * 清除当前实例某一类型的全部事件回调
     * @param type 事件类型，如果此参数为空，清除实例上的所有绑定的事件回调
     */
    clearEvents(type: string): any;
    /** 模拟触发当前实例的某个事件 */
    emit(type: string, data: any): any;
  }
  // interface MapEventListener<T> {
  // }
  type MapsEvent = {
    /**
     * 发生事件时光标所在处的经纬度坐标。
     */
    lnglat: LngLat;
    /**
     * 发生事件时光标所在处的像素坐标。
     */
    pixel: Pixel;
    /**
     * 事件类型。
     */
    type: string;
    /**
     * 发生事件的目标对象，不同类型返回target不同。例如，事件对象是Marker，则target表示目标对象为Marker，事件对象是其他，则随之改变。
     */
    target: Map;
  }
  /**
   * 表示点标记的图标  
   * 用于添加复杂点标记，即在普通点标记的基础上，添加Icon类，通过在Icon表示的大图上截取其中一部分作为标注的图标 [相关示例](https://lbs.amap.com/api/javascript-api/example/marker/custom-icon/)  
   * 构造点覆盖物图标，通过 IconOptions 设置图标属性
   * https://lbs.amap.com/api/javascript-api/reference/overlay#icon
   */
  class Icon {
    constructor(opt: IconOptions);
    /**
     * 获取图标图片大小
     */
    getImageSize?(): Size;
    /**
     * 设置图标图片大小
     * @param size 
     */
    setImageSize?(size:Size): void;
  }
  /**
   * Icon 类设置
   */
  interface IconOptions {
    /**
     * 图标尺寸，默认值(36,36)
     */
    size?: Size;
    /** 图标所在图片偏移位置，默认值: [0, 0] */
    clipOrigin?: Vector | Pixel;
    /** 图标所在图片裁剪大小，若未设置，则使用图片大小 */
    clipSize?: Vector | Pixel;
    /**
     * 图标锚点，锚点位置对应设置的 position 位置。
     * 可选值：'top-left'| 'top-center'|'top-right'|'middle-left'|'center'| 'middle-right'| 'bottom-left'| 'bottom-center'| 'bottom-right' 。默认值：'top-left'。
     */
    anchor?: Vector | Pixel | string;
    /**
     * 图标取图偏移量。当image中指定了一个大图时，可通过size和imageOffset配合，显示图标的指定范围
     */
    imageOffset?: Pixel;
    /**
     * 图标的取图地址。默认为蓝色图钉图片
     */
    image?: string;
    /**
     * 图标所用图片大小，根据所设置的大小拉伸或压缩图片，等同于CSS中的background-size属性。可用于实现高清屏的高清效果
     */
    imageSize?: Size;
  }
  /** 共同部分事件定义 */
  private interface EventsCommonProps {
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent): void;
    /** 鼠标左键双击事件 */
    onDblClick?(event:  MapsEvent): void;
    /** 右键单击 */
    onRightClick?(event:  MapsEvent): void;
    /** 鼠标按下 */
    onMouseDown?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseUp?(event: MapsEvent): void;
    /** 鼠标经过 */
    onMouseOver?(event: MapsEvent): void;
    /** 鼠标移出 */
    onMouseOut?(event: MapsEvent): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchStart?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchMove?(event: MapsEvent): void;
    /** 触摸结束时触发事件，仅适用移动设备 */
    onTouchEnd?(event: MapsEvent): void;
  }
}