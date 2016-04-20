declare module qq.maps {
    export class CityService {
        constructor(options?: CityServiceOptions);
        /**
         * 根据用户IP查询城市信息
         */
        searchLocalCity(): qq.maps.LatLng;
        /**
         * 根据城市名称查询城市信息。cityName为城市名称，如:“北京市”。
         * @param {string} v
         */
        searchCityByName(v: string): qq.maps.LatLng;
        /**
         * 根据经纬度查询城市信息。LatLng为经纬度信息。
         * @param {qq.maps.LatLng} v
         */
        searchCityByLatLng(v: qq.maps.LatLng): qq.maps.LatLng;
        /**
         * 根据指定IP地址查询城市信息。IP为IP地址信息。
         * @param {string} v
         */
        searchCityByIP(v: string): qq.maps.LatLng;
        /**
         * 根据电话区号查询城市信息。areaCode为城市电话区号信息。
         * @param {string} v
         */
        searchCityByAreaCode(v: string): qq.maps.LatLng;
        /**
         * 设置检索成功后的回调函数。参数对象：
         * @param {(r} callback
         */
        setComplete(callback: (r: baseServiceResult<qq.maps.AreaInfo>) => void): void;
        /**
         * 设置检索失败后的回调函数。
         * @param {function} callback
         */
        setError(callback: () => void): void;
    }

    interface CityServiceOptions {
        complete: (result:baseServiceResult<qq.maps.AreaInfo>)=>void;
        error: () => void;
    }
}