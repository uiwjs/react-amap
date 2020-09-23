/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  class Marker extends EventListener {
    constructor(opts: MarkerOptions);
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
     * 鼠标点击时marker是否置顶，默认false ，不置顶（自v1.3 新增）
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
  }
  interface RectangleOptions {
    /** 要显示该覆盖物的地图对象 */
    map?: Map;
    /** 矩形的范围 */
    bounds?: Bounds;
    /** (default 10)	矩形覆盖物的叠加顺序。地图上存在多个矩形覆盖物叠加时，通过该属性使级别较高的矩形覆盖物在上层显示 */
    zIndex?: number;
    /** (default false)	是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增） */
    bubble?: boolean;
    /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
    cursor?: string;
    /** (default #00D3FC)	线条颜色，使用16进制颜色代码赋值。默认值为 #00D3FC */
    strokeColor?: string;
    /** (default 0.9)	轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9 */
    strokeOpacity?: number;
    /** (default 2)	轮廓线宽度 */
    strokeWeight?: number;
    /** (default #00B2D5)	矩形填充颜色，使用16进制颜色代码赋值，如：#00B2D5 */
    fillColor?: string;
    /** (default 0.5)	矩形填充透明度，取值范围 [0,1],0 表示完全透明，1表示不透明。默认为0.5 */
    fillOpacity?: number;
    /** (default false)	设置矩形是否可拖拽移动，默认为false */
    draggable?: boolean;
    /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
    extData?: any;
    /** (default solid)	轮廓线样式，实线:solid，虚线:dashed */
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
}