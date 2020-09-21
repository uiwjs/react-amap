
declare namespace AMap {
  class TileLayer {
    constructor(opts: TileLayerOptions);
    /**
     * 设置图层的取图地址
     * @param url 设置图层的取图地址
     */
    setTileUrl(url: string): void;
    /**
     * 获取图层透明度
     * @returns 图层透明度
     */
    getOpacity(): number;
    /**
     * 重新加载图层资源，重新渲染
     */
    reload(): void;
    /**
     * 获取图层层级
     */
    getzIndex(): number;
    /**
     * 设置图层隐藏
     */
    hide(): void;
    /**
     * 设置图层层级，数字越大图层层级越高
     * @param zIndex 图层层级值
     */
    setzIndex(zIndex: number): number;
    /**
     * 获取图层参数信息
     * @returns 图层参数信息
     */
    getOptions(): any;
    /**
     * 设置图层透明度，范围 [0 ~ 1]
     * @param opacity 图层透明度
     */
    setOpacity(opacity): number;
    /**
     * 设置图层可见
     */
    show(): void;
    /**
     * 获取该图层可显示的级别范围，默认取值范围为[2-20]
     * @returns 缩放范围
     */
    getZooms(): [number, number];
    /**
     * 获取该图层可显示的级别范围
     * @param zooms 缩放范围
     */
    setZooms(zooms: [number, number]): void;
  }
  interface TileLayerOptions {
    /**
     * 切片取图地址 如：' https://abc{0,1,2,3}.amap.com/tile?x=[x]&y=[y]&z=[z] ' [x] 、 [y] 、 [z] 分别替代切片的xyz。
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
     * 切片大小，取值： 256，表示切片大小为256 256， 128，表示切片大小为128 128， 64，表示切片大小为64*64。默认值为256
     */
    tileSize?: number;
  }
}