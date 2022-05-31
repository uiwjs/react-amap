/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  interface DrivingSearch {
    /**
     * 根据起点、终点和途经点（可选）坐标或名称，实现驾车路线规划，途经点通过opts设定
     * @param points 终点经纬度points为起点、终点和途经点（可选）名称及对应城市的数组，例如： [{keyword:‘北京南站’,city:‘北京市’},{keyword:‘广东大厦’,city:’北京市’},{ keyword:‘北京西站’,city:‘北京市’}] 系统取数组第一个元素和最后一个元素作为起点和终点，中间元素为途经点；
     * @param callback status为complete时，result为DrivingResult；当status为error时，result为错误信息info；当status为no_data时，代表检索返回0结果。
     */
    (points: Array<{keyword: string;city: string}>, callback?: (status: 'error' | 'complete' | 'no_data', result: DrivingResult) => void): void;
    /** 根据起点、终点和途经点（可选）坐标或名称，实现驾车路线规划，途经点通过opts设定 */
    (origin: LngLat, destination: LngLat, opts: { waypoints?: Array<LngLat>; }, callback?: (status: 'error' | 'complete' | 'no_data', result: DrivingResult) => void): void;
  }
  /**
   * 驾车路线规划服务，提供起、终点坐标的驾车导航路线[查询功能](https://a.amap.com/jsapi/static/doc/index.html#drivingresult)。
   * AMap.Driving 构造函数的参数为 DrivingOptions 对象。
   * DrivingOptions 允许设置驾车策略和返回信息详略。用户可以通过自定义回调函数取回并显示查询结果。
   * 若服务请求失败，系统将返回错误信息
   */
  class Driving extends MapEventListener<'complete' | 'error'> {
    constructor(opts: DrivingOptions);
    /** 清除搜索结果 */
    clear(): void;
    search: DrivingSearch;
    /** 设置避让区域，最大支持三个避让区域，参数为LngLat的二维数组 */
    setAvoidPolygons(areas: Array<Array<LngLatLike>>): void;
    /** 清除避让区域 */
    clearAvoidPolygons(): void;
    /** 获取避让区域，返回LngLat的二维数组 */
    getAvoidPolygons(): Array<Array<LngLat>>;
    /** 设置避让道路名称，只支持一条避让道路 注：避让道路和避让区域不能同时使用 */
    setAvoidRoad(value: string): void;
    /** 清除避让道路 */
    clearAvoidRoad(): void;
    /** 获取避让道路 */
    getAvoidRoad(): string;
    /** 设置车牌的汉字首字符和首字后的号码，设置后路线规划的结果将考虑该车牌在当前时间的限行路段 */
    setProvinceAndNumber(province: string, number: string): void;
    /** 设置驾车路线规划策略。可选值为： 0：推荐路线及最快路线综合 1：推荐路线 2：最快路线 */
    setPolicy(policy: number): void;
  }
  interface DrivingEvents {
    /** 当查询成功时触发此事件 */
    onComplete?: (result: DrivingResult) => void;
    /** 当查询失败时触发此事件 */
    onError?: (result: DrivingResult) => void;
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