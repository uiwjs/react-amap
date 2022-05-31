/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  /**
   * 驾车路线规划服务，提供起、终点坐标的驾车导航路线[查询功能](https://a.amap.com/jsapi/static/doc/index.html#drivingresult)。
   * AMap.Driving 构造函数的参数为 DrivingOptions 对象。
   * DrivingOptions 允许设置驾车策略和返回信息详略。用户可以通过自定义回调函数取回并显示查询结果。
   * 若服务请求失败，系统将返回错误信息
   */
  class Driving {
    constructor(opts: ControlBarOptions);
  }
  interface DrivingOptions {
    /**  AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。可选 */
    map: Map;
    /**  驾车路线规划策略 */
    policy?: number;
    /**  默认值：base，返回基本地址信息\n当取值为：all，返回DriveStep基本信息+DriveStep详细信息  (default 'base') */
    extensions?: string;
    /**  默认为0，表示可以使用轮渡，为1的时候表示不可以使用轮渡 (default 0) */
    ferry?: number;
    /**  结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。可选 */
    panel?: (string | HTMLElement);
    /**  设置隐藏路径规划的起始点图标 设置为true：隐藏图标；设置false：显示图标\n默认值为：false */
    hideMarkers?: boolean;
    /**  设置是否显示实时路况信息，默认设置为true。 显示绿色代表畅通，黄色代表轻微拥堵，红色代表比较拥堵，灰色表示无路况信息。 */
    showTraffic?: boolean;
    /**  车牌省份的汉字缩写，用于判断是否限行，与number属性组合使用，可选。例如：京 */
    province?: string;
    /**  除省份之外车牌的字母和数字，用于判断限行相关，与province属性组合使用，可选。例如:NH1N11 */
    number?: string;
    /**  使用map属性时，绘制的规划线路是否显示描边。缺省为true */
    isOutline?: boolean;
    /**  使用map属性时，绘制的规划线路的描边颜色。缺省为'white' */
    outlineColor?: string;
    /**  用于控制在路径规划结束后，是否自动调整地图视野使绘制的路线处于视口的可见范围 */
    autoFitView?: boolean;
  }
  type DrivingCallback = () => DrivingResult;
  interface DrivingResult {
    /** 成功状态说明 */
    info: string;
    /** 驾车规划起点坐标 */
    origin: LngLat;
    /** 驾车规划终点坐标 */
    destination: LngLat;
    /** 驾车规划起点 Poi */
    start: LngLat;
    /** 驾车规划终点 Poi */
    end: LngLat;
    /** 驾车规划途经点 Poi */
    waypoints: LngLat;
    /** 打车费用，仅extensions为“all”时返回. 单位: 元 */
    taxi_cost: number;
    /** 驾车规划路线列表 */
    routes: Array<DriveRoute>;
    /** 子路段DriveStep集合 */
    steps?: Array<(DriveStepBasic | DriveStepDetail)>;
  }
  interface DriveRoute {
    /** 驾车规划路线列表元素 */
    route: DriveRoute
    /** 起点到终点的驾车距离，单位：米 */
    distance: number;
    /** 时间预计，单位：秒 */
    time: number;
    /** 驾车规划策略 */
    policy: string;
    /** 此驾车路线收费金额，单位：元 */
    tolls: number;
    /** 收费路段长度，单位：米 */
    tolls_distance: number;
    /** 限行结果,0 代表限行已规避或未限行，即该路线没有限行路段,1 代表限行无法规避，即该线路有限行路段 */
    restriction: number;
  }
  interface DriveStepBasic {
    /** 此路段起点 */
    start_location: LngLat;
    /** 此路段终点 */
    end_location: LngLat;
    /** 此路段说明，如“沿北京南站路行驶565米右转” */
    instruction: string;
    /** 本驾车子路段完成后动作 */
    action: string;
    /** 驾车子路段完成后辅助动作，一般为到达某个目的地时返回 */
    assist_action: string;
    /** 驾车方向 */
    orientation: string;
    /** 驾车方向 */
    road: string;
    /** 此路段距离，单位：米 */
    distance: number;
    /** 此段收费，单位：元 */
    tolls: number;
    /** 收费路段长度，单位：米 */
    tolls_distance: number;
    /** 主要收费道路 */
    toll_road: string;
    /** 此路段预计使用时间，单位：秒 */
    time: number;
    /** 此路段坐标集合 */
    path: Array<LngLat>;
  }
  interface DriveStepDetail {
    /** 途径城市列表元素 */
    cities?: Array<{
      /** 途径名称 */
      name: string;
      /** 城市编码 */
      citycode: string;
      /** 区域编码 */
      adcode: string;
      /** 途径行政区列表 */
      districts: Array<{
        /** 区域名称 */
        name: string;
        /** 区域编码 */
        adcode: string;
      }>;
    }>
    /** 实时交通信息列表 */
    tmcs?: Array<{
      /** 路况信息对应的编码 如果direction是正向 lcode返回值大于0；否则lcode，返回值小于0； 如果返回0则说明此路段无lcode */
      lcode: string;
      /** 此lcode对应的路段长度，单位: 米 */
      distance: number;
      /** 路况状态，可能的值有：未知，畅通，缓行，拥堵 */
      status: string;
    }>
  }
}