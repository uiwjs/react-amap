/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  /**
   * 地图控件基类，可扩展做自定义地图控件。
   */
  class Control {
    constructor(opts: ControlOptions);
    /**
     * 添加控件到地图上
     * @param map 地图实例
     */
    addTo(map: Map): void;
    /**
     * 从地图上移除控件
     * @param map 地图实例
     */
    remove(map: Map): void;
    /**
     * 设置控件可见
     */
    show(): void;
    /**
     * 设置控件隐藏
     */
    hide(): void;
  }
  interface ControlOptions {
    /**
     * 控件停靠位置 { top: 5; left: 5; right: 5; bottom: 5 } 或者 'LT': 左上角, 'RT': 右上角, 'LB': 左下角, 'RB': 右下角
     */
    position?: ('LT' | 'RT' | 'LB' | 'RB') | {
      top: number; left: number; right: number; bottom: number;
    };
    /**
     * 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为AMap.Pixel(10,10)
     */
    offset?: [number, number];
  }
  /**
   * 比例尺插件。位于地图右下角，用户可控制其显示与隐藏。继承自 AMap.Control [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)
   */
  class Scale extends Control {
    constructor(opts?: ScaleOptions);
  }
  interface ScaleOptions extends ControlOptions {}
  /**
   * 地图操作工具条插件。可支持方向导航、位置定位、视野级别缩放、视野级别选择等操作。继承自 AMap.Control [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)
   */
  class ToolBar extends Control {
    constructor(opts?: ToolBarOptions);
  }
  interface ToolBarOptions extends ControlOptions {}
  /**
   * 地图类型切换插件。用户通过该插件进行地图切换。
   */
  class MapType extends Control {
    constructor(opts?: MapTypeOptions);
  }
  interface MapTypeOptions {
    /**
     * 初始化默认图层类型。 取值为0：默认底图 取值为1：卫星图 默认值：0
     */
    defaultType?: number;
    /**
     * 叠加实时交通图层 默认值：false
     */
    showTraffic?: boolean;
    /**
     * 叠加路网图层 默认值：false
     */
    showRoad?: boolean;
  }
  /**
   * 地理编码与逆地理编码类，用于地址描述与经纬度坐标之间的转换。用户可以通过回调函数获取查询结果。 [相关示例](https://lbs.amap.com/api/jsapi-v2/example/geocoder/geocoding)
   */
  class Geocoder extends Control {
    constructor(opts: GeocoderOptions);
    /** 将地址信息转化为高德经纬度坐标信息 */
    getLocation?(keyword: string, ReGeocoderCallback)
    /** 地理编码时，设置地址描述所在城市 */
    setCity(city: string)
    /** 将高德经纬度坐标信息转化为结构化的地址信息 */
    getAddress(location: LngLat | LngLat[], ReGeocoderCallback)
  }
  interface ReGeocoderCallback {
    (status: string, result: ReGeocoderResult): void
  }
  /**
   * 地理编码
   * https://lbs.amap.com/api/webservice/guide/api/georegeo#geo
   */
  interface ReGeocoderResult {
    info: string
    geocode: {
      formatted_address: string
      country: string
      province: string
      city: string
      citycode: string
      district: string
      street: string
      number: string
      adcode: string
      location: string
      level: string
    }
  }
  interface GeocoderOptions {
    /**
     * 城市，地理编码时，设置地址描述所在城市
     * 可选值：城市名（中文或中文全拼）、citycode、adcode
     * @default 全国
     */
    city?: string;
    /**
     * 逆地理编码时，以给定坐标为中心点，单位：米
     * 取值范围：0 - 3000
     * @default 1000
     */
    radius?: number;
    /**
     * 设置语言类型
     * 可选值：zh_cn（中文）、en(英文)
     * @default zh_cn(中文)
     */
    lang?: string;
    /**
     * 是否批量查询
     * batch 设置为 false 时，只返回第一条记录
     */
    batch?: boolean;
    /**
     * 逆地理编码时，返回信息的详略  
     * 默认值：`base`，返回基本地址信息  
     * 取值为：`all`，返回地址信息及附近poi、道路、道路交叉口等信息
     * @default base
     */
    extensions?: string;
  }
  /**
   * 组合了旋转、倾斜、复位在内的地图控件。 [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)
   */
  class ControlBar extends Control {
    constructor(opts: ControlBarOptions);
  }
  interface ControlBarOptions extends ControlOptions {
    /**
     * 是否显示倾斜、旋转按钮。默认为 true
     * @default true 默认值
     */
    showControlButton?: boolean;
  }
  /**
   * 鹰眼控件，用于显示缩略地图，显示于地图右下角，可以随主图的视口变化而变化，也可以配置成固定位置实现类似于南海附图的效果。
   */
  class HawkEye extends Control {
    constructor(opts: HawkEyeOptions);
    /**
     * 恢复鹰眼控件的正常大小
     */
    open(): void;
    /**
     * 最小化鹰眼控件
     */
    close(): void;
  }
  interface HawkEyeOptions extends Omit<ControlOptions, 'position'> {
    /**
     * 是否随主图视口变化移动
     */
    autoMove?: boolean;
    /**
     * 是否显示视口矩形
     */
    showRectangle?: boolean;
    /**
     * 是否显示打开关闭的按钮
     */
    showButton?: boolean;
    /**
     * 默认是否展开
     */
    isOpen?: boolean;
    /**
     * 缩略图要显示的地图自定义样式，如'amap://styles/dark'
     */
    mapStyle?: string;
    /**
     * 缩略图要显示的图层类型，默认为普通矢量地图
     */
    layers?: any[];
    /**
     * 缩略图的宽度，同CSS，如'200px'
     */
    width?: string;
    /**
     * 缩略图的高度，同CSS，如'200px'
     */
    height?: string;
    /**
     * 缩略图距离地图右下角的像素距离，如 [2,2]
     */
    offset?: [number, number];
    /**
     * 缩略图的边框样式，同CSS，如"double solid solid double"
     */
    borderStyle?: string;
  }
}