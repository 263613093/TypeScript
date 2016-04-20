 declare module qq.maps {
     class MarkerCluster extends qq.maps.MVCObject {
         constructor(options:MarkerClusterOptions);
     }

     interface MarkerClusterOptions {
         map: qq.maps.Map;
         minimumClusterSize: number;
         markers: qq.maps.Marker[];
         zoomOnClick: boolean;
         gridSize: number;
         averageCenter: boolean;
         maxZoom: number;
     }
 }