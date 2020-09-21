
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
    position?: string | {
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
    constructor(opts: ScaleOptions);
  }
  interface ScaleOptions extends ControlOptions {}
}