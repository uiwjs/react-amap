/// <reference path="./base.d.ts" />
/// <reference path="./maplayer.d.ts" />

declare namespace AMap {
  /**
   * 地图对象类，封装了地图的属性设置、图层变更、事件交互等接口的类。
   */
  class Map extends MapEventListener<'mousemove' | 'zoomchange' | 'mapmove' | 'mousewheel' | 'zoomstart' | 'mouseover' | 'mouseout' | 'dblclick' | 'click' | 'zoomend' | 'moveend' | 'mouseup' | 'mousedown' | 'rightclick' | 'movestart' | 'dragstart' | 'dragging' | 'dragend' | 'hotspotout' | 'hotspotover' | 'touchstart' | 'complete' | 'hotspotclick' | 'touchmove' | 'touchend' | 'resize'> {
    /**
     * @param div 构造一个地图对象，参数 container 中传入地图容器 DIV 的 ID值 或者 DIV对象，opts 地图初始化参数对象，参数详情参看 MapOptions 列表。注意：地图容器在创建之前必须拥有实际大小，否则可能出现底图无法渲染的问题。
     * @param opts 地图初始化参数
     */
    constructor(div: string | HTMLElement, opts?: MapOptions);
    /**
     * 设置中心点
     * @param center 中心点经纬度
     * @param immediately 是否立即过渡到目标位置
     * @param duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    setCenter(center: [number, number] | LngLat, immediately: boolean = false, duration?: number): void;
    /**
     * 地图缩放至指定级别并以指定点为地图显示中心点
     * @param zoom 缩放等级
     * @param center 地图中心点位置
     * @param immediately 是否立即过渡到目位置
     * @param duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    setZoomAndCenter(zoom: number, center: [number, number] | LngLat, immediately: boolean = false, duration?: number);
    /**
     * 获取当前地图视图范围/可视区域。
     * @returns 边界经纬度
     */
    getBounds(): Bounds;
    /** 获取地图中心点经纬度坐标值。 */
    getCenter(): LngLat;
    /**
     * 设置地图显示的缩放级别，参数 zoom 可设范围：[2, 20]
     * @param zoom 
     * @param immediately 
     * @param duration 
     */
    setZoom(zoom: number, immediately: boolean = false, duration?: number): void;
    /**
     * 获取当前地图缩放级别, 默认取值范围为[2, 20]
     * @param digits zoom级别的小数位精度，缺省为2
     */
    getZoom(digits: number): number;
    /** 地图放大一级显示 */
    zoomIn(): void;
    /** 地图缩小一级显示 */
    zoomOut(): void;
    /** 获取地图当前俯仰角 */
    getPitch(): number;
    /**
     * 设置地图俯仰角
     * @param Pitch 角度
     * @param immediately 是否立即过渡到目标位置
     * @param duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    setPitch(Pitch: number, immediately: boolean = false, duration?: number): void;
    /** 返回地图对象的容器 */
    getContainer(): HTMLElement;
    /** 获取地图顺时针旋转角度, 范围: [0 ~ 360] */
    getRotation(): number;
    /** 获取地图容器尺寸，单位：像素 */
    getSize(): Size;
    /**
     * 设置地图顺时针旋转角度, 旋转原点为地图容器中心点, 取值范围: [0 ~ 360]
     * @param rotation 旋转角度
     * @param immediately 是否立即过渡到目标位置
     * @param duration 动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    setRotation(rotation: number, immediately: boolean = false, duration?: number)
    /**
     * 添加图层到地图上
     * @param layer 地图图层对象
     */
    addLayer(layer: TileLayer): void;
    /**
     * 指定当前地图显示范围，参数 bounds 为指定的范围
     * @param bounds 经纬度范围
     */
    setBounds(bounds: Array<number> | Bounds): void;
    /**
     * 指定当前地图显示范围，参数 bounds 为指定的范围
     * @param lnglat 
     * @param duration 动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    panTo(lnglat: [number, number] | LngLat, duration?: number): void;
    /**
     * 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     * @param x 横轴方向
     * @param y 纵轴方向
     * @param duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    panBy(x: number, y: number, duration?: number): void;
    /**
     * 获取地图图层数组，数组为一个或多个图层
     * @returns 地图图层数组
     */
    getLayers(): Array<TileLayer | Satellite | Traffic | RoadNet>;
    /**
     * 获取当前地图状态信息，包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转（rotateEnable）、 是否可双击放大地图、是否可以通过键盘控制地图旋转（keyboardEnable）等
     * @returns 地图状态信息映射集合
     */
    getStatus(): MapStates;
    /**
     * 设置当前地图显示状态，包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转（rotateEnable）、 是否可双击放大地图、是否可以通过键盘控制地图旋转（keyboardEnable）等， 
     * [相关示例](https://lbs.amap.com/api/javascript-api/example/map/set-map-status)
     * @param opts 地图状态值映射集合
     */
    setStatus(opts: MapStates): void;
    /**
     * 获取地图默认鼠标指针样式
     * @returns 地图鼠标指针样式
     */
    getDefaultCursor(): string;
    /**
     * 设置地图默认鼠标指针样式
     * @param cursor 设置鼠标指针默认样式，参数cursor应符合CSS的cursor属性规范。可为CSS标注中的光标样式， 如：setCursor(“pointer”)等；或者自定义的光标样式， 如：setCursor("url(' https://lbs.amap.com/webapi/static/Images//0.png' ),pointer")
     */
    setDefaultCursor(cursor): void;
    /**
     * 从地图上移除图层
     * @param layer 地图图层
     */
    removeLayer(layer:
      TileLayer |
      Polygon |
      Polyline |
      BezierCurve |
      Satellite |
      Rectangle |
      Traffic |
      Ellipse |
      HawkEye |
      CircleMarker |
      ContextMenu |
      RoadNet
    ): void;
    /**
     * 将多个图层一次替代地图上原有图层，会移除地图原有图层
     * @param layers 地图图层数组
     */
    setLayers(layers:Array<TileLayer | Satellite | Traffic | RoadNet>): void;
    /**
     * 添加覆盖物/图层。参数为单个覆盖物/图层，或覆盖物/图层的数组。
     * @param features 覆盖物对象或者数组 VectorOverlay | Array<any>
     */
    add(features: Array<any> | TileLayer | Polyline | Marker | Rectangle | Text | Polygon | InfoWindow | Ellipse | BezierCurve | CircleMarker | Circle): void;
    /**
     * 删除覆盖物/图层。参数为单个覆盖物/图层，或覆盖物/图层的数组。
     * @param features Array<any> | VectorOverlay
     */
    remove(features: Array<any> | TileLayer | HawkEye | Marker | InfoWindow | Circle): void;
    /**
     * 注销地图对象，并清空地图容器
     */
    destroy(): void;
    /**
     * 注销地图对象，并清空地图容器
     */
    getLimitBounds(): any;
    /**
     * 设置 Map 的限制区域，设定区域限制后，传入参数为限制的 Bounds。地图仅在区域内可拖拽 [相关示例](https://lbs.amap.com/api/jsapi-v2/example/map/limit-map-show-range/)
     */
    setLimitBounds(): void;
    /**
     * 经纬度转莫卡托坐标（单位：米）
     * @param lnglat 经纬度
     * @returns 莫卡托坐标（单位：米）
     */
    lngLatToCoords(lnglat: [number, number] | LngLat): any;
    /**
     * 清除 Map 的限制区域
     */
    clearLimitBounds(): void;
    /**
     * 莫卡托坐标（单位：米）转经纬度
     * @param coords 莫卡托坐标（单位：米）
     * @returns 经纬度
     */
    coordsToLngLat(coords: [number, number]): void;
    /**
     * 获取地图缩放等级范围
     */
    getZooms(): [number, number];
    /**
     * 地图经纬度坐标转为地图容器像素坐标 [相关示例](https://lbs.amap.com/api/jsapi-v2/example/axis/transformate-between-coordinates-of-lnglat-and-map-container/)
     * @param lnglat 经纬度
     */
    lngLatToContainer(lnglat: Array<number> | LngLat): Pixel;
    /**
     * 地图容器坐标转换成经纬度[相关示例](https://lbs.amap.com/api/jsapi-v2/example/axis/transformate-between-coordinates-of-lnglat-and-map-container/)
     * @param pixel 容器像素坐标
     */
    containerToLngLat(pixel: Array<number> | Pixel): LngLat;
    /**
     * 莫卡托（单位：米）转成地图容器坐标
     * @param coord 
     */
    coordToContainer(coord: Array<number>): Array<number>;
    /**
     * 地图容器坐标转成莫卡托（单位：米）
     * @param pixel 容器像素坐标
     */
    containerToCoord(pixel: Array<number> | Pixel): Array<number>;
    /**
     * 
     * @param pixel 像素坐标
     * @param zoom 某个地图级别
     */
    pixelToLngLat(pixel: Array<number> | Pixel, zoom?: number): LngLat;
    /**
     * 经纬度坐标转换成平面地图像素坐标
     * @param lnglat 经纬度
     * @param zoom 某个地图级别，默认是地图当前级别
     */
    lngLatToPixel(lnglat: Array<number> | LngLat, zoom?: number): Pixel;
    /**
     * 获取指定位置的地图分辨率，单位：米/像素。 参数point有指定值时，返回指定点地图分辨率，point缺省时，默认返回当前地图中心点位置的分辨率
     * @returns 分辨率
     */
    getResolution(): number;
    /**
     * 获取当前地图比例尺。表示当前屏幕距离一米代表实际距离多少米
     * @param dpi 
     * @returns 比例尺的值
     */
    getScale(dpi: number): number;
    /**
     * 获取地图中心点所在区域，回调函数返回对象属性分别对应为{省，市，区/县}
     * @param getCityCallBack 查询成功的回调函数
     * @param lnglat 查询的经纬度
     */
    getCity(getCityCallBack: (data: CityCallBack) => void, lnglat: Array<number>)
    /**
     * 按照行政区名称或adcode来设置地图显示的中心点。
     * 行政区名称支持中国、省、市、区/县名称，如遇重名的情况，会按城市编码表顺序返回第一个。adcode请在城市编码表中查询。
     * 建议不要同时使用center/setCenter()和setCity()，如一起使用程序将以setCity()作为最后结果。
     * @param cityName 城市名称
     */
    setCity(cityName: string): void;
    /**
     * 根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别，参数均可缺省。
     * overlayList为覆盖物数组，缺省时为当前地图上添加的所有覆盖物图层，
     * immediately代表是否需要动画过程，avoid代表上下左右的像素避让宽度，maxZoom代表fitView之后的最大级
     * @param overlays 覆盖物
     * @param immediately 是否立即过渡
     * @param avoid 四周边距，上、下、左、右
     * @param maxZoom 最大 zoom 级别
     * @returns 新的地图视口范围
     */
    setFitView(overlays: Array<TileLayer>, immediately: boolean = false, avoid: Array<number>, maxZoom: number): Bounds;
    /**
     * 添加控件。参数可以是插件列表中的任何插件对象，如：ToolBar、OverView、Scale等
     * @param control 控件对象
     */
    addControl(control: Control | HawkEye | Geolocation): void;
    /**
     * 移除地图上的指定控件 [相关示例](https://lbs.amap.com/api/jsapi-v2/example/mapbar/mapcontrol-control-add-remove/)
     * @param control 
     */
    removeControl(control: Control | HawkEye): void;
    /**
     * 设置地图的显示样式，目前支持两种地图样式：
     * - 第一种：自定义地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86" 可前往地图自定义平台定制自己的个性地图样式；
     * - 第二种：官方样式模版,如 "amap://styles/grey"。其他模版样式及自定义地图的使用说明见 [开发指南](https://lbs.amap.com/api/jsapi-v2/guide/map/map-style/) [相关示例](https://lbs.amap.com/api/jsapi-v2/example/personalized-map/set-theme-style/)
     * @param value 
     */
    setMapStyle(value): void;
    /**
     * 获取地图显示样式
     */
    getMapStyle(): void;
    /**
     * 返回添加的覆盖物对象，可选类型包括marker、circle、polyline、polygon；  
     * Type可缺省，缺省时返回所有覆盖物（marker、circle、polyline、polygon）。  
     * 返回结果不包含官方覆盖物等，比如定位marker，周边搜索圆等 [相关示例](https://lbs.amap.com/api/jsapi-v2/example/common/get-all-overlays/)
     * @param type 可选，覆盖物类型
     */
    getAllOverlays(type?: string): void;
    /**
     * 删除地图上所有的覆盖物
     */
    clearMap(): void;
    /**
     * 清除地图上的信息窗体。
     */
    clearInfoWindow(): void;
    /**
     * 获取地图显示元素种类
     * @returns 返回 features 的集合，可能有 bg（地图背景）、point（兴趣点）、 road（道路）、building（建筑物）
     */
    getFeatures(): Array<string>;
    /**
     * 设置地图上显示的元素种类，支持bg（地图背景）、point（兴趣点）、road（道路）、building（建筑物） [相关示例](https://lbs.amap.com/api/jsapi-v2/example/personalized-map/set-map-cotent/)
     * @param features 类型数组
     * 示例代码：
     * ```js
     * map.setFeatures(['bg', 'road']);
     * ```
     */
    setFeatures(features: Array<string>): void;
    /**
     * 比例尺之类的插件。
     * @param ControlType 
     * @param CallBack 
     */
    plugin(ControlType: Array<
      'AMap.Scale' |
      'AMap.HawkEye' |
      'AMap.MapType' |
      'AMap.ToolBar' |
      'AMap.ControlBar' |
      'AMap.OverView' |
      'AMap.Weather' |
      'AMap.HeatMap' |
      'AMap.MarkerCluster'
      >, callBack: () => void): void;
  }
  interface MapEvents {
    /**
     * 地图缩放级别更改后触发
     */
    onZoomChange?:() => void;
    /**
     * 地图平移时触发事件
     */
    onMapMove?:() => void;
    /**
     * 鼠标在地图上移动时触发
     */
    onMouseMove?:(event: MapsEvent) => void;
    /**
     * 鼠标滚轮开始缩放地图时触发
     */
    onMouseWheel?:(event: MapsEvent) => void;
    /**
     * 鼠标移入地图容器内时触发
     */
    onMouseOver?:(event: MapsEvent) => void;
    /**
     * 鼠标移出地图容器时触发
     */
    onMouseOut?:(event: MapsEvent) => void;
    /**
     * 鼠标在地图上单击抬起时触发
     */
    onMouseUp?:(event: MapsEvent) => void;
    /**
     * 鼠标在地图上单击按下时触发
     */
    onMouseDown?:(event: MapsEvent) => void;
    /**
     * 缩放开始时触发
     */
    onZoomStart?:() => void;
    /**
     * 鼠标左键双击事件
     */
    onDblClick?:(event: MapsEvent) => void;
    /**
     * 鼠标左键单击事件
     */
    onClick?:(event: MapsEvent) => void;
    /**
     * 缩放结束时触发
     */
    onZoomEnd?:() => void;
    /**
     * 地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发
     */
    onMoveEnd?:() => void;
    /**
     * 鼠标右键单击事件
     */
    onRightClick?:(event: MapsEvent) => void;
    /**
     * 地图平移开始时触发
     */
    onMoveStart?:() => void;
    /**
     * 开始拖拽地图时触发
     */
    onDragStart?:() => void;
    /**
     * 拖拽地图过程中触发
     */
    onDragging?:() => void;
    /**
     * 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发
     */
    onDragEnd?:() => void;
    /**
     * 鼠标点击热点时触发
     */
    onHotspotClick?:(event: { type: string, lnglat: LngLat, name: string, id: string }) => void;
    /**
     * 鼠标移出热点时触发
     */
    onHotspotOut?:(event: { type: string, lnglat: LngLat, name: string, id: string }) => void;
    /**
     * 鼠标滑过热点时触发
     */
    onHotspotOver?:(event: { type: string, lnglat: LngLat, name: string, id: string }) => void;
    /**
     * 触摸开始时触发事件，仅适用移动设备
     */
    onTouchStart?:(event: MapsEvent) => void;
    /**
     * 地图资源加载完成后触发事件
     */
    onComplete?:(event: { type: 'complete'}) => void;
    /**
     * 拖拽地图过程中触发，仅适用移动设备
     */
    onTouchMove?:(event: MapsEvent) => void;
    /**
     * 触摸结束时触发事件，仅适用移动设备
     */
    onTouchEnd?:(event: MapsEvent) => void;
    /**
     * 地图容器尺寸改变事件
     */
    onResize?:() => void;
  }
  /**
   * 区域, {省，市，区/县}
   */
  type CityCallBack = {
    province: string;
    city: string;
    citycode: string;
    district: string;
  }
  interface MapStates {
    /**
     * 地图是否可通过双击鼠标放大地图, 默认为true。此属性可被setStatus/getStatus 方法控制
     */
    doubleClickZoom?: boolean;
    /** 是否开启地图热点和标注的 hover 效果。PC端默认是true, 移动端默认是 false。 */
    isHotspot?: boolean;
    resizeEnable?: boolean;
    /**
     * 地图是否可通过鼠标滚轮缩放浏览，默认为true。此属性可被setStatus/getStatus 方法控制
     */
    scrollWheel?: boolean;
    /**
     * 可缺省，当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心。
     */
    touchZoom?: boolean;
    /**
     * (default true)	地图是否可通过鼠标拖拽平移, 默认为 true。此属性可被 setStatus/getStatus 方法控制
     */
    dragEnable?: boolean;
    /**
     * (default true)	地图是否可缩放，默认值为 true。此属性可被 setStatus/getStatus 方法控制
     */
    zoomEnable?: boolean;
    /**
     * (default true)	地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制
     */
    jogEnable?: boolean;
    /**
     * (default true)	是否允许设置俯仰角度, 3D 视图下为 true, 2D 视图下无效。
     */
    pitchEnable?: boolean;
    /**
     * (default true)	地图是否可旋转, 图默认为true
     */
    rotateEnable?: boolean;
    /**
     * (default true)	地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数, 将对地图产生平移操作, 是否使用动画平移的效果）, 默认为true, 即使用动画
     */
    animateEnable?: boolean;
    /**
     * (default true)	地图是否可通过键盘控制, 默认为true, 方向键控制地图平移，"+"和"-"可以控制地图的缩放, Ctrl+“→”顺时针旋转，Ctrl+“←”逆时针旋转。此属性可被setStatus/getStatus 方法控制
     */
    keyboardEnable?: boolean;
  }
  /**
   * 地图初始化参数
   */
  interface MapOptions extends MapStates {
    /**
     * 初始中心经纬度
     */
    center?: [number, number] | LngLat;
    /**
     * 	地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。
     */
    zoom?: number;
    /**
     * 地图顺时针旋转角度，取值范围 [0-360] ，默认值：0
     */
    rotation?: number;
    /**
     * 俯仰角度，默认 0，最大值根据地图当前 zoom 级别不断增大，2D地图下无效 。
     */
    pitch?: number;
    /**
     * (default '2D')	地图视图模式, 默认为‘2D’，可选’3D’，选择‘3D’会显示 3D 地图效果。
     */
    viewMode?: '2D' | '3D';
    /**
     * (default ['bg','point','road','building'])	设置地图上显示的元素种类, 支持'bg'（地图背景）、'point'（POI点）、'road'（道路）、'building'（建筑物）
     */
    features?: Array<string>;
    /** 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图。 当叠加多个 图层 时，普通二维地图需通过实例化一个TileLayer类实现。 如果你希望创建一个默认底图图层，使用 AMap.createDefaultLayer() */
    layers?: (TileLayer | Satellite | Traffic | RoadNet)[]
    /**
     * (default [2,20])	地图显示的缩放级别范围, 默认为 [2, 20] ，取值范围 [2 ~ 20]
     */
    zooms?: [number, number];
    /**
     * (default true)	是否展示地图文字和 POI 信息。
     */
    showLabel?: boolean;
    /**
     * 地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。
     */
    defaultCursor?: string;
    /**
     * 设置地图的显示样式，目前支持两种地图样式：
     * - 第一种：自定义地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86" 可前往地图自定义平台定制自己的个性地图样式；
     * - 第二种：官方样式模版,如"amap://styles/grey"。 其他模版样式及自定义地图的使用说明见开发指南
     */
    mapStyle?: string;
    /**
     * 地图楼块的侧面颜色
     */
    wallColor?: string | Array<number>;
    /**
     * 地图楼块的顶面颜色
     */
    roofColor?: string | Array<number>;
    /**
     * (default true) 是否展示地图 3D 楼块，默认 true
     */
    showBuildingBlock?: boolean;
    /**
     * (default false) 是否自动展示室内地图，默认是 false
     */
    showIndoorMap?: boolean;
    /**
     * 天空颜色，3D 模式下带有俯仰角时会显示
     */
    skyColor?: string | Array<number>;
    /**
     * 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像，3D视图下有效。 格式为一个经纬度的一维、二维或三维数组。  
     * 相关示例  
     * 一维数组时代表一个普通多边形路径，如:  
     * [lng1,lat1] , [lng2,lat2] , [lng3,lat3] ]  
     * 二维数组时代表一个带洞的多边形路径，如:  
     * [ [lng4,lat4] , [lng5,lat5] , [lng6,lat6] ], [ [lng7,lat7] , [lng8,lat8] , [lng9,lat9] ] ]  
     * 三维数组时代表多个多边形路径，如:  
     * [ [ [lng1,lat1] , [lng2,lat2] , [lng3,lat3] ],
     * // 一个普通多边形 [ 
     * //一个带洞多边形 [ [lng4,lat4] , [lng5,lat5] , [lng6,lat6] ], [ [lng7,lat7] , [lng8,lat8] , [lng9,lat9] ] ] ]}
     */
    mask?: Array<number>;
  }
  function plugin(ControlType: Array<
    'AMap.Weather' |
    'AMap.Geolocation' |
    'AMap.AutoComplete' |
    'AMap.PlaceSearch' |
    'AMap.MoveAnimation'
  >, callBack: () => void): void;
  /**
   * 为坐标转换类，支持将其他坐标系的坐标点转换为高德坐标系。坐标转换方法
   * @param lnglat 
   * @param type 
   * @param callBack 
   */
  function convertFrom(lnglat: LngLat | Array<LngLat>, type: 'gps' | 'baidu' | 'mapbar', callBack: (status: string, result: ConvertorResult) => void): void;
}