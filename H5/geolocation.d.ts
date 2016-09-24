/// <reference path="h5.d.ts" />

declare module h5plus {

    interface Position {
        coords: Coordinates;
        coordsType: string;
        timestamp: number;
        /**
         * 获取完整地址描述信息
         * */
        addresses: string;
        address: Address;
    }

    interface Coordinates {
        /**
         * 坐标纬度值
         * */
        latitude: number;
        /**
         * 坐标经度值
         * */
        longitude: number;
        /**
         * 海拔信息
         * */
        altitude: number;
        /**
         * 地理坐标信息的精确度信息
         * */
        accuracy: number;
        /**
         * 海拔的精确度信息
         * */
        altitudeAccuracy: number;
        /**
         * 表示设备移动的方向
         * 数据类型对象，范围为0到360，表示相对于正北方向的角度。如果无法获取此信息，则此值为空（null）。如果设备没有移动则此值为NaN。
         * */
        heading: number;
        /**
         * 表示设备移动的速度
         * 数据类型对象，单位为米每秒（m/s），其有效值必须大于0。如果无法获取速度信息，则此值为空（null）。
         * */
        speed: number;
    }

    interface Address {
        country: string;
        province: string;
        city: string;
        district: string;
        street: string;
        poiName: string;
        postalCode: string;
        cityCode: string;
    }
    interface GeolocationError {
        /**
         * 访问权限被拒绝,系统不允许程序获取定位功能，错误代码常量值为1。
         * */
        PERMISSION_DENIED: number;
        /**
         * 位置信息不可用,无法获取有效的位置信息，错误代码常量值为2。
         * */
        POSITION_UNAVAILABLE: number;
        /**
         * 获取位置信息超时,无法在指定的时间内获取位置信息，错误代码常量值为3。
         * */
        TIMEOUT: number;
        /**
         * 未知错误,其它未知错误导致无法获取位置信息，错误代码常量值为4。
         * */
        UNKNOWN_ERROR: number;
        code: number;
        message: string;
    }


    interface PositionOptions {
        /**
         * 是否高精确度获取位置信息,高精度获取表示需要使用更多的系统资源，默认值为false。
         * */
        enableHighAccuracy?: boolean;
        /**
         * 获取位置信息的超时时间,单位为毫秒（ms），默认值为不超时。如果在指定的时间内没有获取到位置信息则触发错误回调函数。
         * */
        timeout?: number;
        /**
         * 获取位置信息的缓存时间,单位为毫秒（ms），默认值为0（立即更新获取）。如果设备缓存的位置信息超过指定的缓存时间，将重新更新位置信息后再返回。
         * */
        maximumAge?: number;
        /**
         * 定位数据的供应者,
         * 可取以下供应者： 
         * "system"：表示系统定位模块，支持wgs84坐标系；
         *  "baidu"：表示百度定位模块，支持gcj02/bd09/bd09ll坐标系； 
         * "amap"：表示高德定位模板，支持gcj02坐标系。 
         * 默认使用“system”值，若指定的provider不存在或无效则返回错误回调。 
         * 注意：百度/高德定位模块需要配置百度/高德地图相关参数才能正常使用。
         * */
        provider?: string;
    }

    export interface Geolocation {
        /**
         * 获取当前设备位置信息
         * @param {(t} success
         * @param {(e} error?
         * @param {PositionOptions} options?
         */
        getCurrentPosition(success: (t: Position) => void, error?: (e: GeolocationError) => void, options?: PositionOptions): void;
        /**
         * 监听设备位置变化信息
         * @param {(t} success
         * @param {(e} error?
         * @param {PositionOptions} options?
         */
        watchPosition(success: (t: Position) => void, error?: (e: GeolocationError) => void, options?: PositionOptions): number;
        /**
         * 关闭监听设备位置信息
         * @param {number} id 需要取消的位置监听器标识，调用watchPosition方法的返回值。
         */
        clearWatch(id: number): void;
    }

}

interface plusStatic {
    /**
     * Geolocation模块管理设备位置信息，用于获取地理位置信息，
     * 如经度、纬度等。通过plus.geolocation可获取设备位置管理对象。
     * 虽然W3C已经提供标准API获取位置信息，但在某些平台存在差异或未实现，为了保持各平台的统一性，定义此规范接口获取位置信息。
     * */
    geolocation: h5plus.Geolocation;
}