/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  /**
   * 构造折线对象，支持 lineString 和 MultiLineString
   */
  class Polyline {
    constructor(opts: PolylineOptions);
    /**
     * 设置控件可见
     */
    show(): void;
    /**
     * 设置控件隐藏
     */
    hide(): void;
    /**
     * 获取当前折线的矩形范围对象
     */
    getBounds(): Bounds | undefined;
    /**
     * 设置组成该折线的节点数组,支持单条折线(LngLatLike[]) 多条折线（LngLatLike[][]）
     * @param path 折线
     */
    setPath(path?: Array<LngLatLike> | Array<Array<LngLatLike>>): void;
    /**
     * 获取折线的总长度（单位：米）
     */
    getLength(): number;
    /**
     * 获取用户自定义属性
     */
    getExtData(): any;
    /**
     * 设置用户自定义属性，支持JavaScript API任意数据类型
     * @param extData 
     */
    setExtData(extData: any): void;
    /**
     * 获取线的属性
     */
    getOptions(): PolylineOptions;
    /**
     * 获取折线路径的节点数组。
     */
    getPath(): Array<LngLat> | Array<Array<LngLat>>;
    /**
     * 修改折线属性（包括路径的节点、线样式、是否绘制大地线等。属性详情参看PolylineOptions列表)
     * @param opts 
     */
    setOptions(opts: PolylineOptions): void;
    /**
     * 判断坐标是否在折线内
     * @param point 
     */
    contains(point: LngLatLike): boolean;
  }
  interface PolylineOptions {
    /**
     * polyline 路径，支持 lineString 和 MultiLineString
     */
    path?: Array<LngLat> | Array<Array<LngLat>>;
    /**
     * 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
     * @default 10 默认值
     */
    zIndex?: number;
    /**
     * 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）
     * @default false 默认值
     */
    bubble?: boolean;
    /**
     * 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持 `cur/ani/ico` 格式，Opera 不支持自定义 `cursor`
     */
    cursor?: string;
    /**
     * 线条颜色，使用16进制颜色代码赋值。默认值为 `#00D3FC`
     * @default "#00D3FC" 默认值
     */
    strokeColor?: string;
    /**
     * 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5
     * @default 0.5 默认值
     */
    strokeOpacity?: number;
    /**
     * 轮廓线宽度
     * @default 2 默认值
     */
    strokeWeight?: number;
    /**
     * 描边线宽度
     * @default 2 默认值
     */
    borderWeight?: number;
    /**
     * 是否显示描边,默认 `false`
     * @default false 默认值
     */
    isOutline?: boolean;
    /**
     * 描边的宽度，默认为 `1`
     * @default 1 默认值
     */
    borderWeight?: number;
    /**
     * @default '#00B2D5' 默认值
     */
    outlineColor?: string;
    /**
     * 设置多边形是否可拖拽移动，默认为 `false`
     * @default false 默认值
     */
    draggable?: boolean;
    /**
     * 用户自定义属性，支持 `JavaScript API` 任意数据类型，如 `Polygon` 的 `id` 等
     */
    extData?: any;
    /**
     * 轮廓线样式，实线:solid，虚线:dashed
     * @default 'solid' 默认值
     */
    strokeStyle?: 'solid' | 'dashed';
    /**
     * 勾勒形状轮廓的虚线和间隙的样式，此属性在 strokeStyle 为 dashed 时有效， 此属性在 `ie9+` 浏览器有效  
     * > **取值**  
     * - 实线： [0,0,0]  
     * - 虚线： [10,10],[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
     * - 点画线： [10,2,10],[10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
     */
    strokeDasharray?: Array<number>;
    /**
     * 折线拐点的绘制样式，默认值为 `miter` 尖角，其他可选值：`round` 圆角、`bevel` 斜角
     * @default 'miter' 默认值
     */
    lineJoin?: 'miter' | 'round' | 'bevel';
    /**
     * 折线两端线帽的绘制样式，默认值为 `butt` 无头，其他可选值：`round` 圆头、`square` 方头
     * @default 'butt' 默认值
     */
    lineCap?: 'butt' | 'round' | 'square';
    /**
     * 是否绘制成大地线，默认false
     * @default false 默认值
     */
    geodesic?: boolean;
    /**
     * 是否延路径显示白色方向箭头,默认false。建议折线宽度大于6时使用
     * @default false 默认值
     */
    showDir?: boolean;
  }
}