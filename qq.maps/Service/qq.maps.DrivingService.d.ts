 declare module qq.maps {

     class DrivingService {

     }


     interface DrivingServiceOptions extends baseServiceOptions<DrivingInfo>{
         policy: DrivingPolicy;
         location: string;
         /**
          * 时间，当且仅当policy为PREDICT_TRAFFIC时生效，格式为“day mm:ss”,例如“0 05:30”代表周日5点三十分。
          * day为星期，1—6代表周一至周六，0代表周日。
          * mm:ss为24小时制，预测时间以半小时为间隔。
          * */
         time: string;
         map: qq.maps.Map;
         panel:string|HTMLDivElement;

     }

     interface DrivingInfo {
         routes: Array<RouteInfo>;
         policy: DrivingPolicy;
         tmc: boolean;
         start: Poi;
         end: Poi;
         bounds: qq.maps.LatLngBounds;
         duration: string;
         distance:number;
     }


     enum DrivingPolicy {
         /**最少时间。*/
         LEAST_TIME,
         /**最短距离。*/
         LEAST_DISTANCE,
         /**避开高速。*/
         AVOID_HIGHWAYS,
         /**实时路况，避开交通拥堵。*/
         REAL_TRAFFIC,
         /**预测路况，避开交通拥堵。*/
         PREDICT_TRAFFIC
     }
 }