 declare module qq.maps {
     /**Poi检索类。用于进行本地检索、周边检索等服务*/
     class SearchService {
         constructor(options?: SearchServiceOptions);

         search(key: string):void;
         searchInBounds(key: string, bounds: qq.maps.LatLngBounds): void;
         searchNearBy(key: string, center: qq.maps.LatLng, radius: number): void;

         setComplete(callback: (result: baseServiceResult<PoiList> | baseServiceResult<CityList> | baseServiceResult<AreaInfo>) => void): void;
         setError(callback: () => void): void;
         setLocation(area?: string): qq.maps.LatLng;

         setPageIndex(v: number): void;
         setPageCapacity(v: number): void;

         getLocation(): qq.maps.LatLng;
         getPageIndex(): number;
         getPageCapacity(): number;
         clear():void;
     }

     interface SearchServiceOptions {
         complete: (result: baseServiceResult<PoiList> | baseServiceResult<CityList>|baseServiceResult<AreaInfo>) => void;
         error: () => void;
         pageIndex: number;
         pageCapacity: number;
         location: string;
         map: qq.maps.Map;
         panel: string | HTMLDivElement;
         autoExtend:boolean;
     }


     /**service所返回结果的类型*/
     enum ServiceResultType {
         /**POI列表*/
         POI_LIST,
         /**POI检索结果城市列表*/
         CITY_LIST,
         /**行政区划信息*/
         AREA_INFO,
         /**地理位置信息*/
         GEO_INFO,
         /**公交站点信息*/
         STATION_INFO,
         /**公交线路信息*/
         LINE_INFO,
         /**公交换乘信息*/
         TRANSFER_INFO,
         /**驾车线路信息*/
         DRIVING_INFO,
         /**起点或终点位置不唯一*/
         MULTI_DESTINATION
     }

     interface PoiList {
         pois: Array<qq.maps.Poi>;
         pageIndex: number;
         pageCapacity: number;
         totalNum: number;
     }

     interface CityList {
         cities:Array<any>;
     }

     interface AreaInfo {
         /**名称*/
         name: string;
         /**地图级别*/
         level: string;
         /**经纬度*/
         latlng:qq.maps.LatLng;
     }

     interface Poi {
         id: string;
         name: string;
         latLng: qq.maps.LatLng;
         type: PoiType;
         address: string;
         phone: string;
         postcode: string;
         category: string;
         boundary: Array<qq.maps.LatLng>;
         panoinfo: any;
         dist?: number;
     }

     enum PoiType {
         NORMAL,
         BUS_STATION,
         SUBWAY_STATION,
         BUS_LINE,
         DISTRICT
     }
 }