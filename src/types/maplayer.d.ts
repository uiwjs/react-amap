/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  class TileLayer {
    static Satellite: typeof Satellite;
    static Traffic: typeof Traffic;
    static RoadNet: typeof RoadNet;
    constructor(opts: TileLayerOptions);
    /** 设置图层的取图地址 */
    setTileUrl(url: string): void;
    /** 重新加载图层资源，重新渲染 */
    reload(): void;
    /** 设置图层隐藏 */
    hide(): void;
    /** 设置图层可见 */
    show(): void;
    /** 设置图层层级，数字越大图层层级越高 */
    setzIndex(zIndex: number): number;
    /** 获取图层层级 */
    getzIndex(): number;
    /** 设置图层透明度，范围 [0 ~ 1] */
    setOpacity(opacity): number;
    /** 获取图层透明度 */
    getOpacity(): number;
    /** 获取图层参数信息 */
    getOptions(): any;
    /** 获取该图层可显示的级别范围，默认取值范围为[2-20] */
    getZooms(): [number, number];
    /** 获取该图层可显示的级别范围 */
    setZooms(zooms: [number, number]): void;
  }
  interface TileLayerOptions {
    /**
     * 切片取图地址 如：'https://abc{0,1,2,3}.amap.com/tile?x=[x]&y=[y]&z=[z]' [x]、 [y] 、 [z] 分别替代切片的xyz。
     */
    tileUrl?: string;
    /**
     * 支持的缩放级别范围，默认范围 [2-20]
     */
    zooms?: [number, number];
    /**
     * 数据支持的缩放级别范围，默认范围 [2-20]
     */
    dataZooms?: [number, number];
    /**
     * 透明度，默认 1
     */
    opacity?: number;
    /**
     * 是否显示，默认 true
     */
    visible?: boolean;
    /**
     * 图层叠加的顺序值，1 表示最底层。默认 zIndex：4
     */
    zIndex?: number;
    /**
     * 切片大小，取值：
     * - 256，表示切片大小为256 256，
     * - 128，表示切片大小为128 128，
     * - 64，表示切片大小为64*64。默认值为256
     * @default 256
     */
    tileSize?: number;
  }
  /** 卫星图层类，继承自 TileLayer。 */
  class Satellite extends Omit<TileLayer, 'setTileUrl', 'reload'> {
    constructor(opts: SatelliteLayerOptions);
    /** 销毁图层 */
    destroy(): void;
  }
  /** 卫星图层类，继承自 TileLayer。 */
  interface SatelliteLayerOptions extends Omit<TileLayerOptions, 'tileUrl' | 'dataZooms'> {}
  /** 实时交通图层类，继承自TileLayer。 */
  class Traffic extends Omit<TileLayer, 'setTileUrl', 'reload'> {
    constructor(opts: TrafficLayerOptions);
    /** 停止自动更新数据 */
    stopFresh(): void;
  }
  interface TrafficLayerOptions extends SatelliteLayerOptions {
    /** 是否自动更新数据，默认开启 */
    autoRefresh?: boolean;
    /** 自动更新数据的间隔毫秒数，默认 180ms */
    interval?: number;
  }
  /**
   * 路网图层，展示道路信息
   */
  class RoadNet extends Satellite {
    constructor(opts: RoadNetLayerOptions);
  }
  interface RoadNetLayerOptions extends TrafficLayerOptions {}
  /**
   * 建筑楼块 3D 图层
   */
  class Buildings extends Satellite {
    constructor(opts: BuildingsLayerOptions, styleOpts: BuildingStyleOptions);
    setStyle(): void;
  }
  interface BuildingsLayerOptions {
    /** 楼块侧面颜色，支持 rgba、rgb、十六进制等 */
    wallColor?: Array<string> | string;
    /** 楼块顶面颜色，支持 rgba、rgb、十六进制等 */
    roofColor?: Array<string> | string;
    /** 楼块的高度系数因子，默认为 1，也就是正常高度 */
    heightFactor?: number;
    /** 楼块的围栏和样式设置 */
    BuildingStyleOptions?: BuildingStyleOptions;
    /** 图层缩放等级范围，默认 [2, 20]  (default [2,20]) */
    zooms?: [number, number];
    /** 图层透明度，默认为 1 (default 1); */
    opacity?: number;
    /** 图层是否可见，默认为 true (default true); */
    visible?: boolean;
    /** 图层的层级，默认为 11 (default 11); */
    zIndex?: number;
  }
  interface BuildingStyleOptions {
    /** 是否隐藏围栏之外的楼块 */
    hideWithoutStyle?: boolean;
    /** 围栏信息数组 */
    areas?: Array<BuildingStyleArea>;
  }
  interface BuildingStyleArea {
    /** 是否隐藏围栏之外的楼块 */
    rejectTexture?: boolean;
    /** 围栏信息数组 */
    visible?: boolean;
    /** 围栏经纬度列表 */
    path?: Array<number>;
    /** 围栏区域内楼块顶面颜色，支持 rgba、rgb、十六进制等 */
    color1?: Array<string> | string;
    /** 围栏区域内楼块侧面颜色，支持 rgba、rgb、十六进制等 */
    color2?: Array<string> | string;
    areas?: BuildingStyleArea;
  }
  /** 室内图层，用于在适当级别展示室内地图，并提供显示商铺tip、切换楼层等功能。 */
  class IndoorMap {
    constructor(opts: IndoorMapOptions);
    /** 显示指定 POI 的室内地图 */
    showIndoorMap(indoorid: number, floor: number, shopid: number): void;
    /** 显示指定的楼层 */
    showFloor(floor: number): void;
    /** 显示室内地图 */
    show(): void;
    /** 隐藏室内地图 */
    hide(): void;
    /** 设置显示室内图层的地图对象 */
    setMap(map: Map): void;
    /** 设置室内地图的显示顺序 */
    setzIndex(index: number): void;
    /** 显示楼层切换控件 */
    showFloorBar(): void;
    /** 隐藏楼层切换控件 */
    hideFloorBar(): void;
    /** 设置室内图层透明度 */
    setOpacity(opacity: number): void;
    /** 获取室内图层透明度 */
    getOpacity(): number;
    /** 显示室内图层上的标注 */
    showLabels(): void;
    /** 隐藏室内图层上的标注 */
    hideLabels(): void;
    /** 获取被选中室内的 POIID */
    getSelectedBuildingId(): void;
    /** 获取被选中的室内地图的一些基本信息，包含名称、当前楼层、所有楼层信息、POIID等 */
    getSelectedBuilding(): void;
  }
  interface IndoorMapOptions {
    /** 室内图层叠加的顺序值 */
    zIndex?: number;
    /** 图层的透明度，取值范围 [0,1] */
    opacity?: number;
    /** 指定鼠标悬停到店铺面时的鼠标样式 */
    cursor?: string;
    /** 是否隐藏楼层切换控件，默认值：false */
    hideFloorBar?: boolean;
  }
  /** 矢量覆盖物图层，可添加/删除/查询矢量覆盖物(Polygon/Polyline/CircleMarker/Ellipse/RectAngle/BezierCurve)的图层 */
  class VectorLayer {
    constructor(opts: VectorLayerOptions);
    /** 添加矢量覆盖物到集合中，不支持添加重复的覆盖物 */
    add(vectors): void;
    /** 删除矢量覆盖物 */
    remove(vectors: VectorLayer | Array<VectorLayer>): void;
    /** 显示图层 */
    show(): void;
    /** 隐藏图层 */
    hide(): void;
    /** 判断传入的矢量覆盖物实例是否在VectorLayer这中 */
    has(vector: VectorLayer): void;
    /** 清空 VectorLayer */
    clear(): void;
    /** 批量修改矢量覆盖物属性(包括线样式、样色等等) */
    setOptions(opt: any): void;
    /** 根据经纬度查询矢量覆盖物信息 */
    query(geometry: LngLatLike): VectorOverlay | undefined;
    /** 获取 VectorOverlay 所有覆盖物显示的范围 */
    getBounds(): Bounds | undefined;
  }
  interface VectorLayerOptions {
    /** (default true) 是否显示 */
    visible?: boolean;
  }
}