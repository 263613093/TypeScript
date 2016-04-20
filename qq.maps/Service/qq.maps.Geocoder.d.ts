declare module qq.maps {
    export class Geocoder {
        constructor(options?: GeocoderOptions);
        /**
         * 根据指定的坐标进行解析
         * @param {qq.maps.LatLng} v
         */
        getAddress(v: qq.maps.LatLng): void;
        /**
         * 根据指定的地址进行解析
         * @param {string} v
         */
        getLocation(v: string): void;
        /**
         * 设置检索成功后的回调函数
         * @param {(result} callback
         */
        setComplete(callback: (result: baseServiceResult<GeoInfo>) => void): void;
        /**
         * 设置检索失败后的回调函数
         * @param {function} callback
         */
        setError(callback: () => void): void;
    }

    interface GeocoderOptions {
        complete: (result: baseServiceResult<GeoInfo>) => void;
        error: () => void;
    }

    interface GeoInfo {
        /**地址详细描述文字*/
        address: string;
        /**描述地址的层次结构的对象*/
        addressComponents: addressComponents;
        /**地理坐标点*/
        location: qq.maps.LatLng;
        /**附近的poi点*/
        nearPois: qq.maps.Poi[];
        /**查询字符串与查询结果的相似度。数值值越接近1，查询结果越准确。*/
        similarity: number;
        /**结果与查询的行政区划冲突。
         * 返回值：
         * 0：全部一致；
         * 1：区不一致；
         * 2：市不一致；
         * 3：省不一致；
         * 4：查询中无行政区划信息。*/
        pcd_conflict_flag: number
        /**数据类型。
         * 返回值：
         * 1：行政区划中心点；
         * 2：道路中心点；
         * 3：道路交叉口；
         * 4：估算的门址数据；
         * 5：POI（如银科大厦、第三极书局这种类型的）；
         * 6：门址。*/
        gps_type: number;
    }

    interface addressComponents {
        /**门牌号码*/
        streetnumber: string;
        /**街道名称*/
        street: string;
        /**区县名称*/
        district: string;
        /**城市名称*/
        city: string;
        /**省份名称*/
        province: string;
        /**国家*/
        country: string;
    }
}