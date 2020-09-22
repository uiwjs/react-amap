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
    constructor(opts: ScaleOptions);
  }
  interface ScaleOptions extends ControlOptions {}
  /**
   * 地图操作工具条插件。可支持方向导航、位置定位、视野级别缩放、视野级别选择等操作。继承自 AMap.Control [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)
   */
  class ToolBar extends Control {
    constructor(opts: ToolBarOptions);
  }
  interface ToolBarOptions extends ControlOptions {}
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
  class HawkEye extends Omit<Control, 'addTo' | 'remove'> {
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
    layers?: array;
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