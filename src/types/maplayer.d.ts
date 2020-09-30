/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  class TileLayer extends MapEventListener<'complete'> {
    static Satellite: typeof Satellite;
    static Traffic: typeof Traffic;
    static RoadNet: typeof RoadNet;
    static Flexible: typeof Flexible;
    static WMS: typeof WMS;
    static WMTS: typeof WMTS;
    constructor(opts: TileLayerOptions);
    /** 设置图层的取图地址 */
    setTileUrl(url: string): void;
    /** 重新加载图层资源，重新渲染 */
    reload(): void;
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
  /**
   * 用于加载OGC标准的WMS地图服务的一种图层类，仅支持EPSG3857坐标系统的WMS图层。[查看 WMS的OGC标准](http://www.opengeospatial.org/standards/wms)。
   */
  class WMS extends MapEventListener<'complete'> {
    constructor(opts: WMSLayerOptions);
    /** 设置OGC标准的WMS getMap接口的参数，包括VERSION、LAYERS、STYLES、FORMAT、TRANSPARENT等 */
    setParams(params: any): void;
    getParams(): any;
    setUrl(url: string): void;
    getUrl(): string;
    setOpacity(opacity: number): void;
    getOpacity(): number;
    setZooms(zooms: [number, number]): void;
    getZooms(): [number, number];
    setzIndex(zIndex: number): void;
    getzIndex(): number;
    getOptions(): any;
  }
  interface WMSLayerOptions {
    /** wmts服务的url地址，如：' https://services.arcgisonline.com/arcgis/rest/services/'+ 'Demographics/USA_Population_Density/MapServer/WMTS/' */
    url?: string;
    /** 地图级别切换时，不同级别的图片是否进行混合，如图层的图像内容为部分透明请设置为false */
    blend?: boolean;
    /** OGC标准的WMS地图服务的GetMap接口的参数 */
    param?: any;
    /** 支持的缩放级别范围，默认范围 [2-20] */
    zooms?: [number, number];
    /** 透明度，默认 1 */
    opacity?: number;
    /** 是否显示，默认 true */
    visible?: boolean;
    /** 图层叠加的顺序值，1 表示最底层。默认 zIndex：4 */
    zIndex?: number;
  }
  class WMTS extends WMS {
    constructor(opts: WMTSLayerOptions);
  }
  interface WMTSLayerOptions extends WMSLayerOptions {}
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
  class IndoorMap extends MapEventListener {
    constructor(opts: IndoorMapOptions);
    /** 显示指定 POI 的室内地图 */
    showIndoorMap(indoorid: number, floor: number, shopid: number): void;
    /** 显示指定的楼层 */
    showFloor(floor: number): void;
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
  class HeatMap extends MapEventListener {
    constructor(map: Map, opts: HeatMapOptions);
    /** 获取热力图的属性信息 */
    getOptions(): HeatMapOptions;
    /** 设置热力图要叠加的地图实例，也可以在Map中的layers属性中设置为默认显示的图层 */
    setMap(map: Map): void;
    /** 设置热力图层叠加层级 */
    setzIndex(zIndex: number): void;
    /** 获得热力图层叠加层级 */
    getzIndex(): number;
    /** 向热力图数据集中添加坐标点，count不填写时默认：1 */
    addDataPoint(longitude: string, latitude: string, count: number): void;
    /**
     * 设置热力图展现的数据集，dataset数据集格式为：
     * ```js
     * { max: Number 权重的最大值, data: Array 坐标数据集 }
     * ```
     * 其中max不填则取数据集count最大值 例：
     * ```js
     * { max: 100, data: [{lng: 116.405285, lat: 39.904989, count: 65},{}, …] }
     * ```
     * 也可以通过url来加载数据，格式为
     * ```js
     * {
     *  data: jsonp格式数据的服务地址URL,
     *  dataParser: 数据格式转换function
     *  //当jsonp返回结果和官方结构不一致的时候，用户可以传递一个函数用来进行数据格式转换；
     * }
     * ```
     * 例：
     * ```js
     * {
     *   data:'http://abc.com/jsonp.js',
     *   dataParser: function(data){
     *     // 返回的对象结果应该与上面例子的data字段结构相同
     *     return doSomthing(data);
     *   }
     * }
     * ```
     */
    setDataSet(dataset: HeatMapDataSet): void;
    /** 输出热力图的数据集，数据结构同setDataSet中的数据集 */
    getDataSet(): HeatMapDataSet;
    /** 设置热力图属性，请参考 HeatMapOptions 列表中的说明 */
    setOptions(options: HeatMapOptions): void;
    /** 获取热力图叠加地图对象 */
    getMap(): Map;
  }
  type HeatMapDataSet = {
    /** 权重的最大值 */
    max?: number,
    /** 坐标数据集 */
    data: string | LngLat[] | { lng: number, lat: number, count: number },
    /** 数据格式转换 Function */
    dataParser?: (data: LngLat[] | { lng: number, lat: number, count: number }) => LngLat[] | { lng: number, lat: number, count: number }
  }
  interface HeatMapOptions {
    /** 热力图中单个点的半径，默认：30，单位：pixel */
    radius?: number;
    /** 热力图的渐变区间，热力图按照设置的颜色及间隔显示热力图，例{0.4:'rgb(0, 255, 255)',0.85:'rgb(100, 0, 255)',},其中 key 表示间隔位置，取值范围： [0,1] ，value 为颜色值。默认：heatmap.js标准配色方案 */
    gradient?: object;
    /** 热力图透明度区间数组，取值范围 [0,1] ，0表示完全透明，1表示不透明，默认： [0,1] */
    opacity?: array;
    /** 支持的缩放级别范围，取值范围 [3-20] ，默认： [3,20] */
    zooms?: array;
    /** 是否可见 */
    visible?: boolean;
    /** 热力图层在地图上的叠加顺序，默认 130 */
    zIndex?: number;
    /** 3D热力图属性 */
    '3d'?: HeatMap3DOptions;
  }
  interface HeatMap3DOptions {
    /** 高度缩放因子，表示在单位高度上的缩放比例， 默认为 1 */
    heightScale?: number;
    /** 影响高度平滑度的贝塞尔曲线因子，默认 [0.5, 0, 1, 0.5] , */
    heightBezier?: array;
    /** 取样精度，越小越平滑，越大性能越高 */
    gridSize?: number;
  }
  class LabelsLayer extends MapEventListener {
    constructor(opts: LabelsLayerOptions);
    /** 获取标注层透明度 */
    getOpacity(): number;
    /** 设置标注层透明度 */
    setOpacity(opacity: boolean): void;
    /** 获取标注层叠加顺序 */
    getzIndex(): number;
    /** 设置标注层叠加顺序 */
    setzIndex(zIndex: number): void;
    /** 获取标注层显示层级范围 */
    getZooms(): [number, number];
    /** 设置标注层显示层级范围 */
    setZooms(zooms: [number, number]): void;
    // ^^^^^^^^ 上面公共部分 ^^^^^^^^

    /** 获取标注层是否支持内部标注避让 */
    getCollision(): void;
    /** 设置标注层是否支持内部标注避让 */
    setCollision(collision: boolean): void;
    /** 获取标注层是否允许其它层标注避让 */
    getAllowCollision(): void;
    /** 设置标注层是否允许其它层标注避让，开启该功能可实现地图标注对 LabelMarker 的避让，[相关示例](https://lbs.amap.com/api/jsapi-v2/example/marker/labelsmarker) */
    setAllowCollision(allowCollision: boolean): void;
    /** 将 labelMarker 添加到标注层上 */
    add(labelMarkers: LabelsLayer[]): void;
    /** 将 labelMarker 从标注层上移除 */
    remove(labelMarkers: LabelsLayer | LabelsLayer[]): void;
    /** 清空标注层上的标注 */
    clear(): void;
    /** 获取标注层内的所有标注对象 */
    getAllOverlays(): any[];
  }
  interface LabelsLayerOptions {
    /** 标注层展示层级范围 */
    zooms?: Array<number>;
    /** 标注层透明度 */
    opacity?: number;
    /** 标注层是否可见，默认值:true */
    visible?: boolean;
    /** 标注层与其它图层的叠加顺序，默认值：120 */
    zIndex?: number;
    // ^^^^^^^^ 上面公共部分 ^^^^^^^^
    /** 标注层内的标注是否互相避让，默认值: true */
    collision?: boolean;
    /** 标注层内的标注是否允许其它标注层对它避让，默认值:false，开启该功能可实现地图标注对 LabelMarker 的避让 */
    allowCollision?: boolean;
  }
  class CustomLayer extends MapEventListener {
    constructor(canvas: HTMLCanvasElement, opts: CustomLayerOption);
    /** 获取标注层透明度 */
    getOpacity(): number;
    /** 设置标注层透明度 */
    setOpacity(opacity: boolean): void;
    /** 获取标注层叠加顺序 */
    getzIndex(): number;
    /** 设置标注层叠加顺序 */
    setzIndex(zIndex: number): void;
    /** 获取标注层显示层级范围 */
    getZooms(): [number, number];
    /** 设置标注层显示层级范围 */
    setZooms(zooms: [number, number]): void;
    // ^^^^^^^^ 上面公共部分 ^^^^^^^^
    getOptions(): CustomLayerOption;
    setMap(map: Map): void;
  }
  /**
   * 灵活切片图层，继承自AMap.TileLayer，开发者可通过构造时传入给其传入createTile字段来指定每一个切片的内容[相关示例](https://lbs.amap.com/api/jsapi-v2/example/selflayer/flex-canvas/)
   */
  class Flexible extends MapEventListener<'complete'> {
    constructor(opts: FlexibleLayerOptions);
    /** 获取标注层透明度 */
    getOpacity(): number;
    /** 设置标注层透明度 */
    setOpacity(opacity: boolean): void;
    /** 获取标注层叠加顺序 */
    getzIndex(): number;
    /** 设置标注层叠加顺序 */
    setzIndex(zIndex: number): void;
    /** 获取标注层显示层级范围 */
    getZooms(): [number, number];
    /** 设置标注层显示层级范围 */
    setZooms(zooms: [number, number]): void;
    // ^^^^^^^^ 上面公共部分 ^^^^^^^^
    getOptions(): any;
    destroy(): void;
  }
  interface FlexibleLayerOptions {
    /** 缓存瓦片数量 */
    cacheSize?: Number;
    /** 由开发者实现，由API自动调用，xyz分别为切片横向纵向编号和层级，切片大小 256。假设每次创建的贴片为A(支持img或者canvas)，当创建或者获取成功时请回调success(A)，不需要显示或者失败时请回调fail() */
    createTile?: (x: number, y: number, z: number, success: () => void, fail: () => void) => void;
    /** 支持的缩放级别范围，默认范围 [2-20] */
    zooms?: [Number, Number];
    /** 透明度，默认 1 */
    opacity?: Number;
    /** 是否显示，默认 true */
    visible?: Boolean;
    /** 图层叠加的顺序值，1 表示最底层。默认 zIndex：4 */
    zIndex?: Number;
    /**
     * 切片大小，默认: 256 取值：
     * - 256，表示切片大小为256 256，
     * -128，表示切片大小为128 128，
     * - 64，表示切片大小为64*64。默认值为256
     */
    tileSize?: Number;
  }
  interface CustomLayerOption extends Omit<LabelsLayerOptions, 'collision' | 'allowCollision'> {
    /** 绘制函数，初始化完成时候，开发者需要给该图层设定render方法，该方法需要实现图层的绘制，API会在合适的时机自动调用该方法 */
    render?: () => void;
  }
  class ImageLayer extends MapEventListener<'complete'> {
    constructor(opts: ImageLayerOptions);
    /** 获取标注层透明度 */
    getOpacity(): number;
    /** 设置标注层透明度 */
    setOpacity(opacity: boolean): void;
    /** 获取标注层叠加顺序 */
    getzIndex(): number;
    /** 设置标注层叠加顺序 */
    setzIndex(zIndex: number): void;
    /** 获取标注层显示层级范围 */
    getZooms(): [number, number];
    /** 设置标注层显示层级范围 */
    setZooms(zooms: [number, number]): void;
    // ^^^^^^^^ 上面公共部分 ^^^^^^^^
    getOptions(): CustomLayerOption;
    getImageUrl(): string;
    setImageUrl(url: string): void;
    getBounds(): Bounds;
    setBounds(bounds: Bounds): void;
  }
  interface ImageLayerOptions extends Omit<CustomLayerOption, 'render'> {
    /** 图片地址链接 */
    url?: string;
    /** 图片的范围大小经纬度，如果传递数字数组类型: [minlng,minlat,maxlng,maxlat] */
    bounds?: [number, number, number, number] | Bounds;
  }
  /**
   * Canvas图层类，用户可以将一个 Canvas 作为图层添加在地图上，Canvas图层会随缩放级别而自适应缩放。[相关示例](https://lbs.amap.com/api/jsapi-v2/example/selflayer/canvaslayer)
   */
  class CanvasLayer extends MapEventListener {
    constructor(opts: CanvasLayerOptions);
  }
  interface CanvasLayerOptions extends Omit<ImageLayerOptions, 'url'> {
    /** Canvas DOM 对象 */
    canvas?: HTMLCanvasElement;
  }
}