/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  class Marker extends EventListener {
    constructor(opts: MarkerOptions);
    /** 唤起高德地图客户端标注页
    * 其中Object里面包含有{ name:String,name属性 必要参数
    * position: LngLat 坐标点
    } */
    markOnAMAP(obj: any): void;
    /** 获取点标记的动画效果类型 */
    getAnimation(): void;
    /**
     * 设置点标记的动画效果，默认值：
     * “AMAP_ANIMATION_NONE”
     * 可选值：
     * “AMAP_ANIMATION_NONE”，无动画效果
     * “AMAP_ANIMATION_DROP”，点标掉落效果
     * “AMAP_ANIMATION_BOUNCE”，点标弹跳效果
     */
    setAnimation(animate: string): void;
    /** 获取点标记的文字提示 */
    getTitle(): ?string;
    /** 鼠标滑过点标时的文字提示 */
    setTitle(title: string): void;
    /** 当点标记未自定义图标时，获取Icon内容 */
    getIcon(): void;
    /** 设置点标记的显示图标。
      * 参数image可传入String、Icon两种类型的值。
      * 若为String（图片url），表示点标记以指定图片形式显示；若为Icon，表示点标记以Icon对象形式显示
    */
    setIcon(icon): void;
    /** 获取点标记文本标签内容 */
    getLabel(): void;
    /** 设置点标记文本标签内容相关示例（https://lbs.amap.com/api/javascript-api/example/marker/set-marker-text-label/） */
    setLabel(opts: any): void;
    /** 获取点标记是否支持鼠标单击事件Boolean */
    getClickable(): void;
    /** 设置点标记是支持鼠标单击事件clickable:Boolean */
    setClickable(clickable: any): void;
    /** 获取点标记对象是否可拖拽移动Boolean */
    getDraggable(): void;
    /** 设置点标记对象是否可拖拽移动draggable:Boolean */
    setDraggable(draggable: any): void;
    /** Boolean */
    getTop(): void;
    /** 地图上有多个marker时，当isTop为true时，marker将显示在最前面；当为false时，marker取消置顶isTop:Boolean */
    setTop(isTop: any): void;
    /** 
     * 设置鼠标悬停时的光标。 参数cur可为CSS标注中的光标样式，如：
     * setCursor(“pointer”)等；或者自定义的光标样式，如：
     * setCursor("url('https://webapi.amap.com/images/0.png') ,pointer")
     * 注：当浏览器不支持css2，url值不起作用，鼠标样式就按pointer来设置
     */
    setCursor(cursor: any): void;
    /** 获取用户自定义属性 Any */
    getExtData(): void;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等 */
    setExtData(ext: any): void;
    /** 
     * lnglat:LngLat,speed:Number,f:Function
     * 以给定速度移动点标记到指定位置。参数lnglat为指定位置，必设；speed为指定速度，单位：千米/小时，不可为0；
     * 回调函数f为变化曲线函数，缺省为function(k){return k}
     */
    moveTo(targetPosition: any, opts: any): void;
    /** 
     * path:Array, speed:Number,f:Function,circlable:Boolean
     * 以指定的速度，点标记沿指定的路径移动。参数path为轨迹路径的经纬度对象的数组；speed为指定速度，单位：千米/小时，不可为0；
     * 回调函数f为变化曲线函数，缺省为function(k){return k}；参数circlable表明是否循环执行动画，默认为false
     */
    moveAlong(path: Array<LngLat> | Array<VectorLayer> | Array<MoveAlongObj>, opts: MoveAlongOptions): void;
    /** 点标记停止动画 */
    stopMove(): void;
    /** 暂定点标记的动画效果 */
    pauseMove(): void;
    /** 重新开始点标记的动画效果 */
    resumeMove(): void;
    /** 获取点标记的叠加顺序 */
    getzIndex(): void;
    /** 设置点标记的叠加顺序，默认最先添加的点标记在最底层 */
    setzIndex(zIndex: number): void;
    /** 获取点标记内容 */
    getContent(): void;
    /**  */
    add(map: Map): void;
    /** 获取点标记的旋转角度*/
    getAngle(): void;
    /** 设置Marker偏移量（自v1.3 新增） */
    setOffset(offset: VectorLayer | Pixel): void;
    /** 设置点标记显示内容，可以是HTML要素字符串或者HTML DOM对象 */
    setContent(content: HTMLElement | string): void;
    /** 获取Marker偏移量（自v1.3 新增） */
    getOffset(): void;
    /**  */
    Marker(anchor: string): void;
    /** 获取Marker所在地图对象 */
    getMap(): void;
    /** 获取Marker锚点 String */
    getAnchor(): void;
    /** 设置点标记位置lnglat:LngLat */
    setPosition(position: VectorLayer): void;
    /** 获取点标记的位置 */
    getPosition(): void;
    /** 点标记隐藏 */
    hide(): void;
    /** 点标记显示 */
    show(): void;
    /** 将覆盖物设置到地图上 */
    setMap(map: Map | null): void;
    /** 将覆盖物加到地图上 */
    addTo(map: Map): void;
    /** 设置覆盖物旋转角度 */
    setAngle(angle: number): void;
    /** 如设置了尺寸，获取设置的尺寸 */
    getSize(): any;
    /** 为marker设置阴影效果 icon:Icon*/
    setShadow( icon: any): void;
    /** 获取marker的阴影图标 */
    getShadow(): void;
    /** 获取marker的可点击区域 */
    getShape(): void;
  }
  interface MarkerOptions {
    
    /**
     * 要显示该marker的地图对象
     */
    map?: Map;
    /**
     * 点标记在地图上显示的位置，默认为地图中心点
     */
    position?: LngLat;
    /**
     * 设置点标记锚点。
     * @default 'top-left' 默认值
     */
    anchor?: 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    /**
     * 点标记显示位置偏移量，默认值为Pixel(-10,-34)。
     * Marker指定position后，默认以marker左上角位置为基准点（若设置了anchor，则以anchor设置位置为基准点），对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。
     */
    offset?: Pixel;
    /**
     * 需在点标记中显示的图标。可以是一个本地图标地址，或者 Icon 对象。有合法的 content 内容时，此属性无效
     */
    icon?: string | Icon;
    /**
     * 点标记显示内容，可以是HTML要素字符串或者HTML DOM对象。content有效时，icon 属性将被覆盖
     */
    content?: string | Object;
    /**
     * 鼠标点击时marker是否置顶，默认false, 不置顶（自v1.3 新增）
     * @default false 默认值
     */
    topWhenClick?: boolean;
    /**
     * 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）
     * @default false 默认值
     */
    bubble?: boolean;
    /**
     * 设置点标记是否可拖拽移动
     * @default false 默认值
     */
    draggable?: boolean;
    /**
     * 设置拖拽点标记时是否开启点标记离开地图的效果
     */
    raiseOnDrag?: boolean;
    /**
     * 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
     */
    cursor?: string;
    /**
     * 点标记是否可见，默认为true
     * @default true 默认值
     */
    visible?: boolean;
    /**
     * 点标记的叠加顺序。地图上存在多个点标记叠加时，通过该属性使级别较高的点标记在上层显示
     * @default 100 默认值
     */
    zIndex?: number;
    /**
     * 点标记的旋转角度，广泛用于改变车辆行驶方向，注：angle属性是使用CSS3来实现的，支持IE9及以上版本
     */
    angle?: number;
    /**
     * 是否自动旋转。点标记在使用moveAlong动画时，路径方向若有变化，点标记是否自动调整角度，默认为false。广泛用于自动调节车辆行驶方向。IE8以下不支持旋转，autoRotation属性无效
     */
    autoRotation?: boolean;
    /**
     * 点标记的动画效果
     * 可选值：
     * - `AMAP_ANIMATION_NONE` 无动画效果
     * - `AMAP_ANIMATION_DROP` 点标掉落效果
     * - `AMAP_ANIMATION_BOUNCE` 点标弹跳效果
     * @default `AMAP_ANIMATION_NONE`
     */
    animation?: string;
    /**
     * 点标记阴影，不设置该属性则点标记无阴影
     */
    shadow?: Icon;
    /**
     * 鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示
     */
    title?: string;
    /**
     * 点标记是否可点击
     */
    clickable?: boolean;
    /**
     * 设置Marker的可点击区域，在定义的区域内可触发Marker的鼠标点击事件
     */
    shape?: MarkerShape;
    /**
     * 用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等
     */
    extData?: any;
    /**
     * 添加文本标注。content 为文本标注的内容。
     * direction 为文本标注方位（自 v1.4.14 新增属性），可选值：'top'|'right'|'bottom'|'left'|'center'，默认值：'top' 。
     * offset 为偏移量（默认基准点为图标左上角），如设置了 direction，以 direction 方位为基准点进行偏移。相关示例
     */
    label?: { content: string; offset: Pixel, direction: 'top'|'right'|'bottom'|'left'|'center' };
  }
  interface MarkerEvents {
    /**
     * 鼠标左键单击事件
     */
    onClick?(event: MapsEvent): void;
    /**
     * 鼠标左键双击事件
     */
    onDblClick?(event: MapsEvent): void;
    /**
     * 鼠标右键单击事件
     */
    onRightClick?(event: MapsEvent): void;
    /**
     * 鼠标移动
     */
    onMouseMove?(event: MapsEvent): void;
    /**
     * 鼠标移近点标记时触发事件
     */
    onMouseOver?(event: MapsEvent): void;
    /**
     * 鼠标移出点标记时触发事件
     */
    onMouseOut?(event: MapsEvent): void;
    /**
     * 鼠标在点标记上按下时触发事件
     */
    onMouseDown?(event: MapsEvent): void;
    /**
     * 鼠标在点标记上按下后抬起时触发事件
     */
    onMouseUp?(event: MapsEvent): void;
    /**
     * 开始拖拽点标记时触发事件
     */
    onDragStart?(event: MapsEvent): void;
    /**
     * 鼠标拖拽移动点标记时触发事件
     */
    onDragging?(event: MapsEvent): void;
    /**
     * 点标记拖拽移动结束触发事件
     */
    onDragEnd?(event: MapsEvent): void;
    /**
     * 点标记在执行moveTo，moveAlong动画时触发事件，Object对象的格式是{passedPath:Array.<LngLat>}。
     * 其中passedPath为Marker对象在moveAlong或者moveTo过程中已经走过的路径。
     */
    onMoving?(obj: { passedPath:Array<LngLat> }): void;
    /**
     * 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发
     */
    onMoveEnd?(): void;
    /**
     * 点标记执行moveAlong动画一次后触发事件
     */
    onMoveAlong?(): void;
    /**
     * 触摸开始时触发事件，仅适用移动设备
     */
    onTouchStart?(event: MapsEvent): void;
    /**
     * 触摸移动进行中时触发事件，仅适用移动设备
     */
    onTouchMove?(event: MapsEvent): void;
    /**
     * 触摸结束时触发事件，仅适用移动设备
     */
    onTouchEnd?(event: MapsEvent): void;
  }
  class MarkerShape {
    constructor(opts: MarkerShapeOptions)
  }
  interface MarkerShapeOptions {
    /**
     * 可点击区域组成元素数组，存放图形的像素坐标等信息，该数组元素由type决定：
     * - circle:coords格式为 [x1, y1, r]，x1，y1为圆心像素坐标，r为圆半径
     * - poly: coords格式为 [x1, y1, x2, y2 … xn, yn]，各x，y表示多边形边界像素坐标
     * - rect: coords格式为 [x1, y1, x2, y2]，x1，y1为矩形左上角像素坐标，x2，y2为矩形右下角像素坐标
     * Markshape 的像素坐标是指相对于marker的左上角的像素坐标偏移量
     */
    coords?: Array<number>;
    /**
     * 可点击区域类型，可选值：
     * - circle:圆形
     * - poly:多边形
     * - rect:矩形
     */
    type?: 'circle' | 'poly' | 'rect';
  }
  /**
   * 构造折线对象，支持 lineString 和 MultiLineString
   */
  class Polyline extends EventListener {
    constructor(opts: PolylineOptions);
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
    /** 地图上隐藏指定折线 */
    hide(): void;
    /** 地图上显示指定折线 */
    show(): void;
    /** 设置折线所在的地图。参数map即为目标地图，参数为null时，在地图上移除当前折线 */
    setMap(map: Map): void;

  }
  interface PolylineEvents {
    /** 隐藏 */
    onHide?(): void;
    /** 显示 */
    onShow?(): void;
    /** 鼠标移出 */
    onMouseOut?(event: MapsEvent): void;
    /** 鼠标右键单击事件 */
    onRightClick?(event: MapsEvent): void;
    /** 鼠标左键双击事件 */
    onDblClick?(event: MapsEvent): void;
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent & { originEvent: MouseEvent; pos: [number, number]; vectorIndex: number; }): void;
    /** 鼠标经过 */
    onMouseOver?(event: MapsEvent): void;
    /** 触摸结束时触发事件，仅适用移动设备 */
    onTouchEnd?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchMove?(event: MapsEvent): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchStart?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseUp?(event: MapsEvent): void;
    /** 鼠标按下 */
    onMouseDown?(event: MapsEvent): void;
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
  /**
   * 构造圆形对象，通过CircleOptions指定多边形样式
   */
  class Circle extends EventListener {
    constructor(opts: CircleOptions);
    /** 设置圆中心点 */
    setCenter(center: LngLatLike): void;
    /** 设置圆形的半径 */
    setRaius(radius: number): void;
    /** 获取圆中心点 */
    getCenter(): LngLat;
    /** 获取圆形的半径 */
    getRaius(): number;
    /** 判断指定点坐标是否在圆内 */
    contains(point: LngLatLike): void;
    /** 修改圆属性（样式风格，包括组成圆形轮廓线的节点、轮廓线样式等。属性详情参看CircleOptions列表） */
    setOptions(optsArg: CircleOptions): void;
    /** 隐藏圆形 */
    hide(): void;
    /** 显示圆形 */
    show(): void;
    /** 获取用户自定义属性 */
    getExtData(): any;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型 */
    setExtData(extData: any): void;
    /** 获取圆形的属性 */
    getOptions(): CircleOptions;
    /** 设置折线所在的地图。参数map即为目标地图，参数为null时，在地图上移除当前折线 */
    setMap(map: Map): void;
    /** 获取圆外切矩形范围 Bounds*/
    getBounds(): void;
  }
  interface CircleEvents {
    /** 隐藏 */
    onHide?(): void;
    /** 显示 */
    onShow?(): void;
    /** 鼠标右键单击事件 */
    onRightClick?(event: MapsEvent): void;
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent): void;
    /** 鼠标左键单击事件 */
    onTouchEnd?(event: MapsEvent): void;
    /** 鼠标左键双击事件 */
    onDblClick?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchMove?(event: MapsEvent): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchStart?(event: MapsEvent): void;
    /** 鼠标移出 */
    onMouseOut?(event: MapsEvent): void;
    /** 鼠标经过 */
    onMouseOver?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseUp?(event: MapsEvent): void;
    /** 鼠标按下 */
    onMouseDown?(event: MapsEvent): void;
  }
  interface CircleOptions {
    /** 圆心位置 */
    center?: LngLat;
    /** 圆半径，单位:米 */
    radius?: number;
    /**
     * (default 10) 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
     */
    zIndex?: number;
    /** (default false) 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）*/
    bubble?: boolean;
    /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
    cursor?: string;
    /**
     * (default #00D3FC) 轮廓线颜色，使用16进制颜色代码赋值。默认值为#00D3FC
     */
    strokeColor?: string;
    /**
     *  (default 0.9) 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9
     */
    strokeOpacity?: number;
    /**
     *  (default 2) 轮廓线宽度
     */
    strokeWeight?: number;
    /**
     * (default #00B2D5) 多边形填充颜色，使用16进制颜色代码赋值，如：#00B2D5
     */
    fillColor?: string;
    /**
     * (default 0.5) 多边形填充透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5
     */
    fillOpacity?: number;
    /**
     * (default false) 设置多边形是否可拖拽移动，默认为false
     */
    draggable?: boolean;
    /**
     * 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等
     */
    extData?: any;
    /**
     *  (default solid) 轮廓线样式，实线:solid，虚线:dashed
     */
    strokeStyle?: 'solid' | 'dashed';
    /**
     * 勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在ie9+浏览器有效 取值：
     * - 实线： [0,0,0] 虚线： [10,10],[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
     * - 点画线： [10,2,10],[10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
     */
    strokeDasharray?: Array<number>;
  }

  class CircleMarker extends EventListener {
    constructor(opts: CircleMarkerOptions);
    /** 隐藏圆形 */
    hide(): void;
    /** 设置圆点的半径 */
    setRaius(radius: number): void;
    /** 获取圆点中心 */
    getCenter(): LngLat;
    /** 获取圆点的半径 */
    getRadius(): number;
    /** 显示圆形 */
    show(): void;
    /** 修改圆点标记的属性（样式风格，包括轮廓线、填充色等。属性详情参看CircleMarkerOptions列表） */
    setOptions(optsArg: CircleMarkerOptions): void; 
    /** 判断指定点坐标是否在圆内 */
    contains(point: LngLatLike): void;
    /** 获取圆点的属性 */
    getOptions(): CircleMarkerOptions;
    /** 获取用户自定义属性 */
    getExtData(): any;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型 */
    setExtData(extData: any): void;
    /** 获取圆形的属性 */
    getOptions(): CircleMarkerOptions;
     /** 在指定地图上显示当前的多边形。参数取值为null时，在地图上移除当前多边形（自v1.2 新增） */
    setMap(map:Map): void;
  }
  interface CircleMarkerEvents {
    /** 隐藏 */
    onHide?(): void;
    /** 显示 */
    onShow?(): void;
    /** 鼠标经过 */
    onMouseover?(event: MapsEvent): void;
    /** 触摸结束时触发事件，仅适用移动设备 */
    onTouchend?(event: MapsEvent): void;
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchmove?(event: MapsEvent): void;
    /** 鼠标右键单击事件 */
    onRightclick?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseup?(event: MapsEvent): void;
    /** 鼠标移出 */
    onMouseout?(event: MapsEvent): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchstart?(event: MapsEvent): void;
    /** 鼠标按下 */
    onMousedown?(event: MapsEvent): void;
    /** 鼠标左键双击事件 */
    onDblclick?(event: MapsEvent): void;
  }
  interface CircleMarkerOptions {
    /** 圆心位置 */
    center?: LngLat;
    /** 圆半径，单位:px 最大值64 */
    radius?: number;
    /**
     * (default 10) 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
     */
    zIndex?: number;
    /** (default false) 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）*/
    bubble?: boolean;
    /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
    cursor?: string;
    /** default #00D3FC) 轮廓线颜色，使用16进制颜色代码赋值。默认值为#00D3FC */
    strokeColor?: string;
    /** 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9 */
    strokeOpacity?: number;
    /** 轮廓线宽度 */
    strokeWeight?: number;
    /** 多边形填充颜色，使用16进制颜色代码赋值，如：#00B2D5 */
    fillColor?: string;
    /** 多边形填充透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5 */
    fillOpacity?: number;
    /** 设置多边形是否可拖拽移动，默认为false */
    draggable?: boolean;
    /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
    extData?: any;
  }
  /**
   * 构造多边形对象
   */
  class Ellipse extends EventListener {
    constructor(opts: EllipseOptions);
    /**
     * 设置椭圆的中心点
     */
    setCenter(center: LngLatLike): void;
    /**
     * 设置椭圆的中心点
     */
    setRadius(radius: [number, number]): void;
    /** 获取椭圆的圆心 */
    getCenter(): LngLat;
    /** 获取椭圆的半径 */
    getRadius(): number;
    /** 判断指定点坐标是否在椭圆内 */
    contains(point: LngLatLike): void;
    /** 修改椭圆属性（样式风格，包括组成椭圆轮廓线的节点、轮廓线样式等。属性详情参看Ellipse */
    setOptions(optsArg: EllipseOptions): void;
    /** 隐藏椭圆 */
    hide(): void;
    /** 显示圆形 */
    show(): void;
    /** 获取用户自定义属性 */
    getExtData(): any;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型 */
    setExtData(extData: any): void;
    /** 在指定地图上显示当前的多边形。参数取值为null时，在地图上移除当前多边形（自v1.2 新增） */
    setMap(map:Map): void;
  }
  interface EllipseOptions {
    /**
     * 椭圆圆心
     */
    center?: LngLatLike;
    /**
     * 椭圆的半径，用2个元素的数组表示，单位：米 如： radius: [1000, 2000] 表示横向半径是1000，纵向的半径是2000
     * @default [1000,1000] 默认值
     */
    radius?: [number, number];
    /**
     * (default 10) 椭圆覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
     */
    zIndex?: number;
    /**
     * (default false) 是否将覆盖物的鼠标或touch等事件冒泡到地图上
     */
    bubble?: boolean;
    /**
     * 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
     */
    cursor?: string;
    /**
     * (default #00D3FC) 线条颜色，使用16进制颜色代码赋值。默认值为#00D3FC
     */
    strokeColor?: string;
    /**
     * (default 0.9) 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9
     */
    strokeOpacity?: number;
    /**
     * (default 2) 轮廓线宽度
     */
    strokeWeight?: number;
    /**
     * (default #00B2D5) 椭圆填充颜色，使用16进制颜色代码赋值，如：#00B2D5
     */
    fillColor?: string;
    /**
     * (default 0.5) 椭圆填充透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5
     */
    fillOpacity?: number;
    /**
     * (default false) 设置椭圆是否可拖拽移动，默认为false
     */
    draggable?: boolean;
    /**
     * 用户自定义属性，支持JavaScript API任意数据类型，如 id 等
     */
    extData?: object;
    /**
     * (default solid) 轮廓线样式，实线:solid，虚线:dashed
     */
    strokeStyle?: 'solid' | 'dashed';
    /**
     * 勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在ie9+浏览器有效 取值：
     * - 实线： [0,0,0]
     * - 虚线： [10,10],[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
     * - 点画线： [10,2,10],[10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
     */
    strokeDasharray?: Array<number>;
  }
  interface EllipseEvents {
    /** 隐藏 */
    onHide?(data: { type: string, target: any }): void;
    /** 显示 */
    onShow?(data: { type: string, target: any }): void;
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent): void;
    /** 鼠标左键双击事件 */
    onDblClick?(event: MapsEvent): void;
    /** 鼠标右键单击事件 */
    onRightClick?(event: MapsEvent): void;
    /** 鼠标经过 */
    onMouseOver?(event: MapsEvent): void;
    /** 触摸结束时触发事件，仅适用移动设备 */
    onTouchEnd?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchMove?(event: MapsEvent): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchStart?(event: MapsEvent): void;
    /** 鼠标移出 */
    onMouseOut?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseUp?(event: MapsEvent): void;
    /** 鼠标按下 */
    onMouseDown?(event: MapsEvent): void;
  }
  /**
   * 构造矩形对象
   */
  class Rectangle extends EventListener {
    constructor(opts: RectangleOptions);
    /** 设置矩形的范围 */
    setBounds(bounds: Bounds): void;
    /** 修改矩形属性（样式风格，包括组成矩形轮廓线的节点、轮廓线样式等。属性详情参看RectangleOptions列表） */
    setOptions(optsArg: RectangleOptions): void;
    /** 判断坐标是否在矩形上 */
    contains(point: LngLatLike): boolean;
    /** 获取矩形的中心点 */
    getCenter(): LngLat;
    /** 隐藏矩形 */
    hide(): void;
    /** 显示圆形 */
    show(): void;
    /** 获取用户自定义属性 */
    getExtData(): any;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型 */
    setExtData(extData: any): void;
    /** 获取矩形的属性 */
    getOptions(): RectangleOptions;
    /** 在指定地图上显示当前的多边形。参数取值为null时，在地图上移除当前多边形（自v1.2 新增） */
    setMap(map:Map): void;
  }
  interface RectangleOptions {
    /** 要显示该覆盖物的地图对象 */
    map?: Map;
    /** 矩形的范围 */
    bounds?: Bounds;
    /** (default 10) 矩形覆盖物的叠加顺序。地图上存在多个矩形覆盖物叠加时，通过该属性使级别较高的矩形覆盖物在上层显示 */
    zIndex?: number;
    /** (default false) 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增） */
    bubble?: boolean;
    /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
    cursor?: string;
    /** (default #00D3FC) 线条颜色，使用16进制颜色代码赋值。默认值为 #00D3FC */
    strokeColor?: string;
    /** (default 0.9) 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9 */
    strokeOpacity?: number;
    /** (default 2) 轮廓线宽度 */
    strokeWeight?: number;
    /** (default #00B2D5) 矩形填充颜色，使用16进制颜色代码赋值，如：#00B2D5 */
    fillColor?: string;
    /** (default 0.5) 矩形填充透明度，取值范围 [0,1],0 表示完全透明，1表示不透明。默认为0.5 */
    fillOpacity?: number;
    /** (default false) 设置矩形是否可拖拽移动，默认为false */
    draggable?: boolean;
    /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
    extData?: any;
    /** (default solid) 轮廓线样式，实线:solid，虚线:dashed */
    strokeStyle?: 'solid' | 'dashed';
    /** 勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在 ie9+ 浏览器有效 取值：
     * - 实线： [0,0,0]
     * - 虚线： [10,10],[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
     * - 点画线： [10,2,10],[10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
     */
    strokeDasharray?: Array<number>;
  }
  interface RectangleEvents {
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent): void;
    /** 鼠标左键双击事件 */
    onDblClick?(event: MapsEvent): void;
    /** 右键单击 */
    onRightClick?(event: MapsEvent): void;
    /** 隐藏 */
    onHide?(event: { type: string; target: any }): void;
    /** 显示 */
    onShow?(event: { type: string; target: any }): void;
    /** 鼠标按下 */
    onMouseDown?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseUp?(event: MapsEvent): void;
    /** 鼠标经过 */
    onMouseOver?(event: MapsEvent): void;
    /** 鼠标移出 */
    onMouseOut?(event: MapsEvent): void;
    /** 属性发生变化时 */
    onChange?(event: { type: string; target: any }): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchStart?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchMove?(event: MapsEvent): void;
    /** 触摸结束时触发事件，仅适用移动设备 */
    onTouchEnd?(event: MapsEvent): void;
  }
  /**
   * 贝塞尔曲线
   */
  class BezierCurve extends EventListener {
    constructor(opts: BezierCurveOptions);
    /** 修改折线属性（包括路径的节点、线样式、是否绘制大地线等。属性详情参看 BezierCurveOptions 列表） */
    setOptions(optsArg: BezierCurveOptions): void;
    /** 获取贝塞尔曲线路径的节点数组 */
    getPath(): Array<Array<number>> | Array<Array<Array<number>>>;
    /**
     * 设置组成该折线的节点数组
     * path ((Array<Array<number>> | Array<Array<Array<number>>>)) 贝瑟尔曲线的路径。
     * 描述为一个二维数组规则如下：第一个元素是起点， 之后的元素同时描述控制点和途经点，之后每个元素可以有0个到2个控制点 控制点在前，途经点在最后 
     * [ [lng,lat] ,
     * //起点0 [lng,lat,lng,lat,lng,lat] ,
     * //控制点、控制点、途经点2 [lng,lat,lng,lat] //控制点、途经点3 ] 或者 [ [ [lng,lat] ],//起点0 [ [lng,lat] , [lng,lat] ],
     * //控制点、途经点1 [ [lng,lat] , [lng,lat] , [lng,lat] ],//控制点、控制点、途经点2 [ [lng,lat] , [lng,lat] ]
     * //控制点、途经点3 ]
     */
    setPath(path: Array<Array<number>> | Array<Array<Array<number>>>): void;
    /** 隐藏贝塞尔线 */
    hide(): void;
    /** 显示贝塞尔曲线 */
    show(): void;
    /** 获取用户自定义属性 */
    getExtData(): any;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型 */
    setExtData(extData: any): void;
    /** 获取线的属性 */
    getOptions(): BezierCurveOptions;
    /** 判断坐标是否在曲线内 */
    contains(point: LngLatLike): void;
    /** 获取曲线的总长度（单位：米）*/
    getLength(): number;
    /** 获取当前折线的矩形范围对象 */
    getBounds(): Bounds | undefined;
  }
  interface BezierCurveOptions {
    /**
     * polyline 路径，支持 lineString 和 MultiLineString
     * 贝瑟尔曲线的路径。描述为一个二维数组规则如下：第一个元素是起点， 之后的元素同时描述控制点和途经点，之后每个元素可以有0个到2个控制点 控制点在前，途经点在最后
     * ```js
     * [
     *   [lng, lat],
     *   // 起点0
     *   [lng, lat, lng, lat, lng, lat],
     *   // 控制点、控制点、途经点2
     *   [lng, lat, lng, lat]
     *   // 控制点、途经点3
     * ]
     * ```
     * 
     * 或者
     * 
     * ```js
     * [
     *  [[lng, lat]],
     *  // 起点0
     *  [[lng, lat], [lng, lat]],
     *  // 控制点、途经点1
     *  [[lng, lat], [lng, lat], [lng, lat]],
     *  // 控制点、控制点、途经点2
     *  [[lng, lat], [lng, lat]]
     *  // 控制点、途经点3
     * ]
     * ```
     */
    path?: Array<LngLat> | Array<Array<LngLat>>;
    /**
     * (default 10) 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
     */
    zIndex?: number;
    /** (default false) 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增） */
    bubble?: boolean;
    /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
    cursor?: string;
    /** (default #00D3FC) 线条颜色，使用16进制颜色代码赋值。默认值为#00D3FC */
    strokeColor?: string;
    /** (default 0.5) 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5 */
    strokeOpacity?: number;
    /** (default 2) 轮廓线宽度 */
    strokeWeight?: number;
    /** (default 2) 描边线宽度 */
    borderWeight?: number;
    /** (default false) 是否显示描边,默认false */
    isOutline?: boolean;
    /** (default 1) 描边的宽度，默认为1 */
    borderWeight?: number;
    /** (default #00B2D5) 线条描边颜色，此项仅在isOutline为true时有效，默认：#00B2D5 */
    outlineColor?: string;
    /** (default false) 设置多边形是否可拖拽移动，默认为false */
    draggable?: boolean;
    /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
    extData?: any;
    /** (default solid) 轮廓线样式，实线:solid，虚线:dashed */
    strokeStyle?: "solid" | "dashed";
  }
  interface BezierCurveEvents {
    /** 隐藏 */
    onHide?(data: {type: string, target: any}): void;
    /** 显示 */
    onShow?(data: {type: string, target: any}): void;
    /** 鼠标左键双击事件 */
    onDblClick?(event: MapsEvent): void;
    /** 鼠标经过 */
    onMouseOver?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseUp?(event: MapsEvent): void;
    /** 鼠标按下 */
    onMouseDown?(event: MapsEvent): void;
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent): void;
    /** 触摸结束时触发事件，仅适用移动设备 */
    onTouchEnd?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchMove?(event: MapsEvent): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchStart?(event: MapsEvent): void;
    /** 鼠标右键单击事件 */
    onRightClick?(event: MapsEvent): void;
    /** 鼠标移出 */
    onMouseOut?(event: MapsEvent): void;
  }
  /** 多边形 */
  class Polygon extends EventListener {
    constructor(opts: PolygonOptions);
    /** 设置多边形轮廓线节点数组，当为“环”多边形时，path为二维数组，数组元素为多边形轮廓线的节点坐标数组 */
    setPath(path: Array<LngLat> | Array<Array<LngLat>>): void;
    /** 获取多边形轮廓线节点数组。其中lat和lng是经纬度参数。 */
    getPath(): Array<LngLat> | Array<Array<LngLat>>;
    /** 修改多边形属性（样式风格，包括组成多边形轮廓线的节点、轮廓线样式等。属性详情参看PolygonOptions列表） */
    setOptions(opt:PolygonOptions): void;
    /** 获取多边形的属性 */
    getOptions(): PolygonOptions;
    /** 获取当前多边形的矩形范围对象。（自v1.2 新增） */
    getBounds(): Bounds;
    /** 获取多边形的面积（单位：平方米）（自v1.1 新增） */
    getArea(): number;
    /** 隐藏多边形 */
    hide(): void;
    /** 显示多边形 */
    show(): void;
    /** 在指定地图上显示当前的多边形。参数取值为null时，在地图上移除当前多边形（自v1.2 新增） */
    setMap(map:Map): void;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
    setExtData(ext: any): void;
    /** 获取用户自定义属性 */
    getExtData(): any;
    /** 判断指定点坐标是否在多边形范围内 */
    contains(point: LngLat): boolean;	
  }
  interface PolygonOptions {
    /** 要显示该polygon的地图对象 */
    map?: Map;
    /** 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示 默认zIndex：10 */
    zIndex?: number;
    /** 多边形轮廓线的节点坐标数组，当为“环”多边形时（多边形区域在多边形内显示为“岛”），path为二维数组，数组元素为多边形轮廓线的节点坐标数组, “环”多边形时，要求数组第一个元素为外多边形，其余为“岛”多边形，外多边形需包含“岛”多边形，否则程序不作处理 */
    path?: Array<LngLat> | Array<Array<LngLat>>;
    /** 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）默认值：false */
    bubble?: boolean;
    /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
    cursor?: string;
    /** 线条颜色，使用16进制颜色代码赋值。默认值为#006600 */
    strokeColor?: string;
    /** 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9 */
    strokeOpacity?: number;
    /** 轮廓线宽度 */
    strokeWeight?: number;
    /** 多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00 */
    fillColor?: string;
    /** 多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9 */
    fillOpacity?: number;
    /** 设置多边形是否可拖拽移动，默认为false */
    draggable?: boolean;
    /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
    extData?: any;
    /** 轮廓线样式，实线:solid，虚线:dashed */
    strokeStyle?: string;
    /**
     * 勾勒形状轮廓的虚线和间隙的样式，此属性在 strokeStyle 为dashed 时有效，此属性在 ie9+ 浏览器有效 取值：
     * - 实线：[0,0,0]
     * - 虚线：[10,10], [10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
     * - 点画线：[10,2,10], [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
     */
    strokeDasharray?: Array<number>;
  }
  interface PolygonEvents {
    /** 鼠标左键单击事件 */
    onClick?(event: MapsEvent): void;
    /** 鼠标左键双击事件 */
    onDblClick?(event:  MapsEvent): void;
    /** 右键单击 */
    onRightClick?(event:  MapsEvent): void;
    /** 隐藏 */
    onHide?(event: { type: string, target: any }): void;
    /** 显示 */
    onShow?(event: { type: string, target: any }): void;
    /** 鼠标按下 */
    onMouseDown?(event: MapsEvent): void;
    /** 鼠标抬起 */
    onMouseUp?(event: MapsEvent): void;
    /** 鼠标经过 */
    onMouseOver?(event: MapsEvent): void;
    /** 鼠标移出 */
    onMouseOut?(event: MapsEvent): void;
    /** 属性发生变化时 */
    onChange?(): void;
    /** 触摸开始时触发事件，仅适用移动设备 */
    onTouchStart?(event: MapsEvent): void;
    /** 触摸移动进行中时触发事件，仅适用移动设备 */
    onTouchMove?(event: MapsEvent): void;
    /** 触摸结束时触发事件，仅适用移动设备 */
    onTouchEnd?(event: MapsEvent): void;
  }
  /**
   * 用于在地图上弹出一个详细信息展示窗体，地图上只允许同时展示 `1` 个信息窗体
   */
  class InfoWindow extends EventListener {
    constructor(opt:InforWindowOptions);
    /** 打开信息窗体 */
    open(map: Map, pos: LngLat, height?: number): void;
    /** 关闭信息窗体 */
    close(): void;
    /** 获取信息窗体是否打开 */
    getIsOpen(): boolean;
    /** 设置信息窗体大小（isCustom为false时有效） */
    setSize(): Size | Vector;
  }
  interface InforWindowOptions {
    /** 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加（默认为false，即在系统默认的信息窗体外框中显示content内容） */
    isCustom?: boolean;
    /** 是否自动调整窗体到视野内（当信息窗体超出视野范围时，通过该属性设置是否自动平移地图，使信息窗体完全显示） */
    autoMove?: boolean;
    /** autoMove 为 true 时，自动平移到视野内后的上右下左的避让宽度。默认值： [20, 20, 20, 20] */
    avoid?: Array<number>;
    /** 控制是否在鼠标点击地图后关闭信息窗体，默认false，鼠标点击地图后不关闭信息窗体 */
    closeWhenClickMap?: boolean;
    /** 显示内容，可以是HTML要素字符串或者HTMLElement对象，自定义窗体示例 */
    content?: string | HTMLElement;
    /** 信息窗体尺寸（isCustom为true时，该属性无效） */
    size?: Size
    /**
     * 信息窗体锚点
     * @default 'bottom-center' 默认值
     */
    anchor?: 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    /** 信息窗体显示位置偏移量。默认基准点为信息窗体的底部中心（若设置了anchor，则以anchor值为基准点）。 */
    offset?: Pixel;
    /** 信息窗体显示基点位置 （自v1.2 新增） */
    position?: LngLat;
  }
  interface InforWindowEvents {
    /** 信息窗体打开之后触发事件 */
    onOpen?(opts: { type: string }): void;
    /** 信息窗体关闭之后触发事件 */
    onClose?(opts: { type: string }): void;
    onChange?(): void;
  }
   /** 文本标记 */
   class Text extends EventListener {
    constructor(opts: TextOptions);
    /** 获取文本标记内容 */
    getText(): string | undefined;
    text(text: string): void;
    setStyle(style: any): void;
    getTitle(): string | undefined;
    setTitle(title: string): void;
    getClickable(): boolean;
    setClickable(clickable: boolean): void;
    getDraggable(): boolean;
    setDraggable(draggable: boolean): void;
    getTop(): boolean;
    getzIndex(): number | undefined;;
    getMap(): ?Map;
    setMap(map: Map): void;
    addTo(map: Map): void;
    add(map: Map): void;
    show(): void;
    hide(): void;
    getPosition(): Vector | LngLat;
    setPosition(position: Vector): void;
    getAnchor(): string | Vector | undefined;
    Text(anchor: string): void;
    getOffset(): Vector | Pixel | undefined | Array<number>;
    setOffset(offset: Array<number> | Pixel): void;
    getAngle(): number | undefined;
    setAngle(angle: number): void;
    setzIndex(zIndex: number): void;
    getOptions(): OverlayOptions;
    getBounds(): Bounds;
    moveTo(targetPosition: LngLat | Vector, opts: MoveToOptions): void;
    moveAlong(path: Array<LngLat> | Array<Vector> | Array<MoveAlongObj>, opts: MoveAlongOptions): void;
    /** 开启文本标记动画，加载 AMap.MoveAnimation 后可以使用 */
    startMove(): void;
    stopMove(): void;
    pauseMove(): void;
    resumeMove(): void;
    setTop(isTop: boolean): void;
    getCursor(): string;
    setCursor(cursor: string): void;
    getExtData(): any | undefined;
    setExtData(extData: any | undefined): void;
    remove(): void;
  }
  interface TextEvents {
    onMoving?(): void;
    onTouchMove?(): void;
    onTouchEnd?(): void;
    onMoveaLong?(): void;
    onTouchStart?(): void;
    onMoveEnd?(): void;
    onClick?(): void;
    onDblClick?(): void;
    onRightClick?(): void;
    onMouseMove?(): void;
    onMouseOver?(): void;
    onMouseOut?(): void;
    onMouseDown?(): void;
    onMouseUp?(): void;
    onDragStart?(): void;
    onDragEnd?(): void;
    onDragging?(): void;
  }
  interface TextOptions {
    /** 要显示该marker的地图对象 */
    map?: Map;
    /** 点标记在地图上显示的位置 */
    position?: Vector | LngLat;
    /** 标记显示的文本内容 */
    text?: LabelOptions;
    /** 鼠标滑过点标记时的文字提示 */
    title?: string;
    /** 点标记是否可见，默认为true */
    visible?: boolean;
    /** 点标记的叠加顺序 */
    zIndex?: number;
    /** 点标记显示位置偏移量，默认值 [0, 0] 。 图解说明 */
    offset?: Vector | Pixel;
    /** 设置点标记锚点。默认值：'center'。可选值：'top-left'|'top-center'|'top-right'|'middle-left'|'center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right' */
    anchor?: string | Vector;
    /** 点标记的旋转角度。默认值：0 。注：angle属性是使用CSS3来实现的，支持IE9及以上版本 */
    angle?: number;
    /** 点标记是否可点击。默认值: true */
    clickable?: boolean;
    /** 设置点标记是否可拖拽移动。默认值：false */
    draggable?: boolean;
    /** 事件是否冒泡，默认值：false */
    bubble?: boolean;
    /** 点标记显示的层级范围，超过范围不显示。默认值：zooms: [2, 20] 。 */
    zooms?: Vector;
    /** 指定鼠标悬停时的鼠标样式。 */
    cursor?: string;
    /** 鼠标点击时marker是否置顶，默认值: false */
    topWhenClick?: boolean;
    /** 用户自定义属性 ，支持JavaScript API任意数据类型，如 Marker的id等。可将自定义数据保存在该属性上，方便后续操作使用。 */
    extData?: any;
    /** 设置文本样式，Object同css样式表，如:{'background-color':'red'} */
    style?: object;
  }

  interface MoveAlongObj {}
  interface MoveToOptions {
    /** 每段动画持续时长, 单位：ms */
    duration?: number;
    /** 动画速度，已废弃 */
    speed?: number;
    /** easing 时间函数 */
    easing?: EasingCallback;
    /** 覆盖物是否沿路径旋转 */
    autoRotation?: boolean;
  }
  /** 时间函数回调 */
  type EasingCallback = (passedTime: number) => number;
  interface OverlayOptions {
    map?: Map;
    position?: [number, number];
    content?: string | HTMLElement;
    visible?: boolean;
    zIndex?: number;
    extData?: any;
    size?: [number, number] | Size;
    offset?: [number, number] | Pixel;
    anchor?: string | [number, number];
    rotate?: number;
    angle?: number;
    orientation?: number | null;
    scale?: number;
    draggable?: boolean;
    zooms?: [number, number];
    noSelect?: boolean;
    innerOverlay?: boolean;
    isCustom?: boolean;
  }
}