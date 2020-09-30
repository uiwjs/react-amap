/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace AMap {
  /**
   * 天气查询服务，根据城市名称或区域编码返回城市天气预报信息，包括实时天气信息和四天天气预报。
   */
  class Weather {
    constructor();
    /**
     * 查询实时天气信息。
     * @param city 城市名称/区域编码（如：“杭州市”/“330100”）
     * @param callback 回调函数
     */
    getLive(city: string, callback: (err?: Error, data?: WeatherLiveResult) => void): void;
    /**
     * 查询四天预报天气，包括查询当天天气信息
     * @param city 城市名称/区域编码（如：“杭州市”/“330100”）
     * @param callback 回调函数
     */
    getForecast(city: string, callback: (err?: Error, data?: WeatherForecastResult) => void): void;
  }
  /** 查询四天预报天气，包括查询当天天气信息 */
  interface WeatherForecastResult {
    /** 成功状态文字描述 */
    info: string;
    /** 省份名 */
    province: string;
    /** 城市名 */
    city: string;
    /** 区域编码 */
    adcode: string;
    /** 数据发布的时间 */
    reportTime: string;
    /** 天气预报数组，包括当天至第三天的预报数据 */
    forecast: Array<{
      /** 日期，格式为“年-月-日” */
      date: string;
      /** 星期 */
      week: string;
      /** 白天天气现象，详见天气现象列表 */
      dayWeather: string;
      /** 夜间天气现象，详见天气现象列表 */
      nightWeather: string;
      /** 白天温度 */
      dayTemp: number;
      /** 白天温度 */
      nightTemp: number;
      /** 白天风向 */
      dayWindDir: string;
      /** 白天风力 */
      dayWindPower: string;
      /** 夜间风力 */
      nightWindPower: string;
    }>;
  }
  /** 实时天气查询结果说明 */
  interface WeatherLiveResult {
    /** 成功状态文字描述 */
    info: string;
    /** 省份名 */
    province: string;
    /** 城市名 */
    city: string;
    /** 区域编码 */
    adcode: string;
    /** 天气现象，详见天气现象列表 */
    weather: string;
    /** 实时气温，单位：摄氏度 */
    temperature: string;
    /** 风向，风向编码对应描述 */
    windDirection: string;
    /** 风力，风力编码对应风力级别，单位：级 */
    windPower: number;
    /** 空气湿度（百分比） */
    humidity: string;
    /** 数据发布的时间 */
    reportTime: string;
  }
  /**
   * 用于进行城市定位或者精确定位的插件类型
   */
  class Geolocation {
    constructor(opts: GeolocationOptions);
    /** 获取 用户的精确位置，有失败几率 */
    getCurrentPosition(callback: (status: 'error' | 'complete', result: GeolocationResult) => void): void;
    /** 根据用户 IP 获取 用户所在城市信息 */
    getCityInfo(callback: (status: 'error' | 'complete', result: GeolocationResult) => void): void;
  }
  interface GeolocationOptions extends ControlOptions {
    /** 缩略图的高度，同CSS，如'silver' */
    borderColor?: string;
    /** 缩略图的高度，同CSS，如'5px' */
    borderRadius?: string;
    /** 箭头按钮的像素尺寸，同CSS，如'12px' */
    buttonSize?: string;
    /** 是否将定位结果转换为高德坐标 */
    convert?: boolean;
    /** 进行浏览器原生定位的时候是否尝试获取较高精度，可能影响定位效率，默认为false */
    enableHighAccuracy?: boolean;
    /** 定位的超时时间，毫秒 */
    timeout?: number;
    /** 浏览器原生定位的缓存时间，毫秒 */
    maximumAge?: number;
    /** 是否显示定位按钮，默认为true */
    showButton?: boolean;
    /** 是否显示定位精度圆，默认为true */
    showCircle?: boolean;
    /** 是否显示定位点，默认为true */
    showMarker?: boolean;
    /** 定位点的样式 */
    markerOptions?: MarkerOptions;
    /** 定位圆的样式 */
    circleOptions?: CircleOptions;
    /** 定位成功后是否自动移动到响应位置 */
    panToLocation?: boolean;
    /** 定位成功后是否自动调整级别 */
    zoomToAccuracy?: boolean;
    /** 是否显示打开关闭的按钮 */
    GeoLocationFirst?: boolean;
    /** 是否禁用IP精确定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用 */
    noIpLocate?: 0 | 1 | 2 | 3;
    /** 是否禁用浏览器原生定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用 */
    noGeoLocation?: 0 | 1 | 2 | 3;
    /** 是否与高德定位SDK能力结合，需要同时使用安卓版高德定位sdk，否则无效 */
    useNative?: boolean;
    /** 定位失败之后是否返回基本城市定位信息 */
    getCityWhenFail?: boolean;
    /** 是否需要将定位结果进行逆地理编码操作 */
    needAddress?: boolean;
    /** 是否需要详细的逆地理编码信息，默认为'base'只返回基本信息，可选'all' */
    extensions?: 'base' | 'all';
  }
  interface GeolocationEvents {
    /** 数据请求完成时触发事件。 */
    onComplete?(data: GeolocationResult): void;
    /** 数据请求错误时触发事件。 */
    onError?(err: GeolocationError): void;
  }
  interface GeolocationResult {
    /** 定位结果 */
    position: LngLat;
    /** 精度范围，单位：米 */
    accuracy: number;
    /** 定位结果的来源，可能的值有:'html5'、'ip'、'sdk' */
    location_type: string;
    /** 形成当前定位结果的一些信息 */
    message: string;
    /** 是否经过坐标纠偏 */
    isConverted: boolean;
    /** 状态信息 "SUCCESS" */
    info: string;
    /** 地址信息，详情参考Geocoder */
    addressComponent: AddressComponent;
    /** 地址 */
    formattedAddress: string;
    /** 定位点附近的POI信息，extensions等于'base'的时候为空 */
    pois: Array<any>;
    /** 定位点附近的道路信息，extensions等于'base'的时候为空 */
    roads: Array<any>;
    /** 定位点附近的道路交叉口信息，extensions等于'base'的时候为空 */
    crosses: Array<any>;
  }
  interface GeolocationError {
    /** 错误信息，参考[错误信息列表](https://lbs.amap.com/api/javascript-api/reference/location#m_ErrorinformationList) */
    info: String;
    /** 造成定位失败结果的一些有用信息[message说明](https://lbs.amap.com/faq/web/javascript-api/80) */
    message: String;
  }
  interface AddressComponent {
    /** 所在省（省编码在城市编码表中可查询到） */
    province: string;
    /** 所在城市 */
    city: string;
    /** 所在城市编码 */
    citycode: string;
    /** 所在区 */
    district: string;
    /** 所在区域编码 */
    adcode: string;
    /** 所在乡镇 */
    township: string;
    /** 所在街道 */
    street: string;
    /** 门牌号 */
    streetNumber: string;
    /** 所在社区 */
    neighborhood: string;
    /** 社区类型 */
    neighborhoodType: string;
    /** 所在楼/大厦 */
    building: string;
    /** 楼类型 */
    buildingType: string;
    /** 仅逆地理编码时返回，所属商圈信息 */
    businessAreas: Array<BusinessArea>;
  }
  interface BusinessArea {
    /** 商圈id */
    id: string;
    /** 商圈名称 */
    name: string;
    /** 商圈中心点经纬度 */
    location: string;
  }
  interface Road {
    /** 道路id */
    id: string;
    /** 道路名称 */
    name: string;
    /** 道路离查询点最近距离 */
    distance: number;
    /** 道路上离查询点最近的点坐标 */
    location: LngLat;
    /** 与查询点的相对方位 */
    direction: string;
  }
  interface Cross {
    /** 道路离查询点最近距离 */
    distance: number;
    /** 与查询点的相对方位 */
    direction: string;
    /** 路口经纬度 */
    location: LngLat;
    /** 第一条道路id */
    first_id: string;
    /** 第一条道路名称 */
    first_name: string;
    /** 第二条道路id */
    second_id: string;
    /** 第二条道路名称 */
    second_name: string;
  }
  interface ConvertorResult {
    /** 成功状态文字描述 */
    info: String;
    /** 返回高德坐标集合 */
    locations: Array<LngLat>;
  }
  /**
   * 根据输入关键字提示匹配信息，可将Poi类型和城市作为输入提示的限制条件。用户可以通过自定义回调函数取回并显
   */
  class AutoComplete extends MapEventListener<'choose' | 'select'> {
    constructor(opts: AutoCompleteOptions);
    /** 设置提示Poi类型，多个类型用“|”分隔，POI相关类型请在网站“相关下载”处下载，目前只支持Poi类型编码如“050000” 默认值：所有类别 */
    setType(type: string): void;
    /** 设置城市 */
    setCity(city: string): void;
    /** 设置是否强制限制城市 */
    setCityLimit(citylimit: boolean): void;
    /** 设置是否强制限制城市 */
    search(keyword?: string, callback: (status: 'complete' | 'error' | 'no_data', result: AutoCompleteSearchCallback) => void): void;
  }
  interface AutoCompleteSearchCallback {
    /** 查询状态说明 */
    info: string;
    /** 输入提示条数 */
    count: number;
    /** 输入提示列表 */
    tips: Array<{
      /** 名称 */
      name: string;
      /** 所属区域 */
      district: string;
      /** 区域编码 */
      adcode: string;
    }>
  }
  interface AutoCompleteOptions {
    /** 输入提示时限定POI类型，多个类型用“|”分隔，目前只支持Poi类型编码如“050000” 默认值：所有类别 */
    type?: string;
    /** 输入提示时限定城市。可选值：城市名（中文或中文全拼）、citycode、adcode；默认值：“全国” */
    city?: string;
    /** 返回的数据类型。可选值：all-返回所有数据类型、poi-返回POI数据类型、bus-返回公交站点数据类型、busline-返回公交线路数据类型目前暂时不支持多种类型 */
    datatype?: string;
    /** 是否强制限制在设置的城市内搜索,默认值为：false，true：强制限制设定城市，false：不强制限制设定城市 */
    citylimit?: boolean;
    /** 可选参数，用来指定一个input输入框，设定之后，在input输入文字将自动生成下拉选择列表。支持传入输入框DOM对象的id值，或直接传入输入框的DOM对象。 */
    input?: string | HTMLInputElement;
    /** 可选参数，指定一个现有的div的id或者元素，作为展示提示结果的容器，当指定了input的时候有效，缺省的时候将自动创建一个显示结果面板 */
    output?: string | HTMLDivElement;
    /** 默认为true，表示是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡 */
    outPutDirAuto?: boolean;
    /** 页面滚动时关闭搜索结果列表，默认 true */
    closeResultOnScroll?: boolean;
    /** 设置检索语言类型，默认中文 'zh_cn' */
    lang?: string;
  }
  interface AutoCompleteEvents {
    /** 鼠标或者键盘上下键选择POI信息时触发此事件 */
    onChoose?(event: AutoCompleteEventsCallback): void;
    /** 鼠标点击或者回车选中某个POI信息时触发此事件 */
    onSelect?(event: AutoCompleteEventsCallback): void;
  }
  interface AutoCompleteEventsCallback {
    /**POI唯一标识 */
    id: string;
    /**名称 */
    name: string;
    /**区域编码 */
    adcode: string;
    /**所属区域 */
    district: string;
    /**位置 */
    location: LngLat;
    /**类型 */
    type: string;
  }
}