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
}