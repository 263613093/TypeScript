 declare module qq.maps {

     class TransferService {
         constructor(options?:TransferServiceOptions);

         search(start: string | qq.maps.Poi | qq.maps.LatLng, end: string | qq.maps.Poi | qq.maps.LatLng): void;
         setPolicy(v: TransferPolicy): void;
         setLocation(v: string);
         setComplete(callback: (result: baseServiceResult<TransferInfo>)=>void):void;
         setError(callback:()=>void):void;
         clear():void;
     }


     interface TransferServiceOptions {
         policy?: TransferPolicy;
         location?: string;
         complete?: (result: baseServiceResult<TransferInfo>) => void;
         error?: () => void;
         map?: qq.maps.Map;
         panel?:string|HTMLDivElement;
     }

     interface TransferInfo {
         plans: Array<TransferPlanInfo>;
         policy: TransferPolicy;
         city: string;
         start: qq.maps.Poi;
         end:qq.maps.Poi;
     }

     interface TransferPlanInfo {
         /**此换乘路线的换乘动作数组*/
         actions: Array<TransferActionInfo>;
         /**此换乘中所有路线的地理范围*/
         bounds: qq.maps.LatLngBounds;
         /**换乘中的公交线路路段的信息*/
         lines: Array<LineInfo>;
         /**换乘中的公交车站数组。不包括起终点*/
         stations: Array<qq.maps.Poi>;
         /**总路程花费时间，单位分钟*/
         duration: string;
         /**总路程覆盖的距离，单位米*/
         distance: number;
         /**步行信息*/
         walks:RouteInfo;
     }

     interface TransferActionInfo {
         type: TransferActionType;
         instructions: string;
         /**
          * 换乘中的换乘线路、步行中的数据。 
          * 如果type为ActionType.BUS、ActionType.SUBWAY，数据类型为LineInfo。 
          * 如果type为ActionType.WALK，数据类型为RouteInfo。
          * */
         data:LineInfo|RouteInfo;
     }

     enum TransferActionType {
         BUS,
         SUBWAY,
         WALK
     }


     enum TransferPolicy {
         LEAST_TIME,
         LEAST_TRANSFER,
         LEAST_WALKING,
         NO_SUBWAY
     }


     interface LineInfo {
         id: string;
         name: string;
         from: string;
         to: string;
         price: number;
         stime: string;
         etime: string;
         distance: number;
         stationNum: number;
         path: Array<qq.maps.LatLng>;
         bounds: Array<qq.maps.LatLngBounds>;
         stations:Array<qq.maps.Poi>;
     }

     interface RouteInfo {
         /**此路线的总持续时间，单位分钟。*/
         duration: string;
         distance: number;
         path: Array<qq.maps.LatLng>;
         steps: Array<StepInfo>;
         start_address: string;
         start_location: qq.maps.LatLng;
         end_address: string;
         end_location:qq.maps.LatLng;
     }

     interface StepInfo {
         duration: string;
         distance: number;
         roadname: string;
         start_location: qq.maps.LatLng;
         end_location: qq.maps.LatLng;
         instructions: string;
         path: Array<qq.maps.LatLng>;
         placemarks: Array<qq.maps.Poi>;
         cities: Array<any>;
         turning:Turning;
     }

     interface Turning {
         text: string;
         latlng:qq.maps.LatLng;
     }


 }