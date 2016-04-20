 declare module qq.maps {

     /**自定义覆盖物，通过继承此类，可以自定义Dom元素的样式及事件。*/
     interface Overlay extends qq.maps.MVCObject {

         draw(): void;
         destroy(): void;
         getMap(): qq.maps.Map;
         getPanes(): qq.maps.MapPanes[];
         getProjection(): any;
         setMap(v:qq.maps.Map);
     }


     interface MapPanes {
         mapPane: HTMLDivElement;
         overlayLayer: HTMLDivElement;
         overlayShadow: HTMLDivElement;
         overlayImage: HTMLDivElement;
         floatShadow: HTMLDivElement;
         overlayMouseTarget: HTMLDivElement;
         floatPane:HTMLDivElement;
     }

     interface MapCanvasProjection {
         /**根据地图外部容器左上角的相对像素坐标计算经纬度坐标。*/
         fromContainerPixelToLatLng(): qq.maps.LatLng;
         /**根据地图内部容器左上角的相对像素坐标计算经纬度坐标。*/
         fromDivPixelToLatLng(): qq.maps.LatLng;
         /**根据经纬度坐标计算相对于地图外部容器左上角的相对像素坐标。*/
         fromLatLngToContainerPixel(): qq.maps.LatLng;
         /**根据经纬度坐标计算相对于地图内部容器左上角的相对像素坐标。*/
         fromLatLngToDivPixel():qq.maps.LatLng;
     }

 }