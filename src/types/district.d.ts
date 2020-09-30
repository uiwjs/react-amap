/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  /**
   * 为了满足基于行政区块的数据可视化、行政区边界展示等开发需求，我们通过AMap.DistrictLayer插件提供了一组简易行政区图层，包括：
   * - 世界简易行政区图层 AMap.DistrictLayer.World [相关示例](https://lbs.amap.com/api/jsapi-v2/example/district/district-world)
   * - 国家简易行政区图层 AMap.DistrictLayer.Country [相关示例](https://lbs.amap.com/api/jsapi-v2/example/district/district-chn)
   * - 省市简易行政区图层 AMap.DistrictLayer.Province [相关示例](https://lbs.amap.com/api/jsapi-v2/example/district/district-pro)
   */
  class DistrictLayer {
    static World: typeof World;
    static Country: typeof Country;
    static Province: typeof Province;
    constructor(opts: DistrictLayerOptions);
    /** 设定显示的国家 SOC */
    setSOC(SOC: string): void;
    /** 设置 adcodes 值 */
    setDistricts(adcodes: Array<any> | string | number): void;
    /** 获取 adcodes */
    getDistricts(): void;
    /** 设置样式信息 */
    setStyles(styles: DistrictLayerStyle): void;
    /** 获取样式信息 */
    getStyles(): void;
    /** 获取该图层可显示的级别范围 */
    setZooms(zooms: [number, number]): void;
    /** 获取图层透明度 */
    getOptions(): any;
    /** 获取图层透明度 */
    getOpacity(): number;
    /** 获取该图层可显示的级别范围，默认取值范围为[2-20] */
    getZooms(): [number, number];
    /** 获取图层层级 */
    getzIndex(): number;
    /** 设置图层透明度，范围 [0 ~ 1] */
    setOpacity(opacity: number): void;
    /** 设置图层隐藏 */
    hide(): void;
    /** 设置 adcodes 值 */
    setAdcode(adcodes: Array<any> | string | number): void;
    /** 设置图层可见 */
    show(): void;
    /** 设置图层层级，数字越大图层层级越高 */
    setzIndex(zIndex: number): void;
  }
  interface DistrictLayerOptions {
    /**	行政区的编码 adcode与省市行政区对照表 */
    adcode?: string;
    /** (default 'CHN') 设定显示的国家 SOC 国家代码、名称、Bounds对照表下载 */
    SOC?: string;
    /** (default 0) 设定数据的层级深度，depth为0的时候只显示国家面，depth为1的时候显示省级， 当国家为中国时设置depth为2的可以显示市一级 */
    depth?: number;
    /** (default 80) 图层的层级，默认为 80 */
    zIndex?: number;
    /** (default 1) 图层透明度，默认为 1 */
    opacity?: number;
    /** (default true) 图层是否可见，默认为 true */
    visible?: boolean;
    /** (default [2,20]) 图层缩放等级范围，默认 [2, 20] */
    zooms?: [number, number];
    /**
     * 为简易行政区图设定各面的填充颜色和描边颜色。 styles各字段的值可以是颜色值，也可以是一个返回颜色值* 的回调函数function。支持的颜色格式有：
     * 1. #RRGGBB，如：'#FFFFFF'
     * 2. rgba()，如：'rgba(255,255,255,1)'
     * 3. rgb()，如：'rgb(255,255,255)'
     * 4. [r,g,b,a] ，如： [1,1,1,1]
     * 5. ''，代表不赋予颜色 * 
     */
    styles?: DistrictLayerStyle;
  }
  interface DistrictLayerStyle {
    /** (default 1)	描边线宽 */
    ['stroke-width']?: number
    /** (default [0.18,0.63,0.94,1])	海岸线颜色 */
    ['coastline-stroke']:? Array<string> | string | Function;
    /** (default [0.35,0.35,0.35,1])	国境线颜色 */
    ['nation-stroke']:? Array<string> | string | Function;
    /** (default [0.5,0.5,0.5,1])	省界颜色 */
    ['province-stroke']:? Array<string> | string | Function;
    /** (default [0.7,0.7,0.7,1])	城市界颜色 */
    ['city-stroke']:? Array<string> | string | Function;
    /** (default [0.85,0.85,0.85,1])	区/县界颜色 */
    ['county-stroke']:? Array<string> | string | Function;
    /** (default [1,1,1,1])	填充色 */
    fill?: Array<string> | string | Function;
  }
  private class World extends DistrictLayer {}
  private class Country extends DistrictLayer {}
  private class Province extends DistrictLayer {}
}