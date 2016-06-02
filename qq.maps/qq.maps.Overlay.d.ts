 declare module qq.maps {
     /**自定义覆盖物，通过继承此类，可以自定义Dom元素的样式及事件。*/
     export class Overlay extends qq.maps.MVCObject {
         /**
          * 初始化构造
          */
         construct(): void;
         /**
          * 实现这个接口来绘制和更新自定义的dom元素。
          */
         draw(): void;
         /**
          * 实现这个接口来删除自定义的Dom元素，此方法会在setMap(null)后被调用。
          */
         destroy(): void;
         /**
          * 返回覆盖物容器所在的map对象。
          */
         getMap(): qq.maps.Map;
         /**
          * 返回地图覆盖物容器列表。
          */
         getPanes(): qq.maps.MapPanes;
         /**
          * 返回覆盖物容器的相对像素坐标或是经纬度坐标。
          */
         getProjection(): MapCanvasProjection;
         /**
          *设置覆盖物容器所在的map对象。
          * */
         setMap(v:qq.maps.Map);
     }


     interface MapPanes {
         /**（容器 0）此容器是最下面的容器，在所有覆盖物层的底下，底图的上面。*/
         mapPane: HTMLDivElement;
         /**（容器 1）此容器中包含Polyline、Polygon、GroundOverlay等。*/
         overlayLayer: HTMLDivElement;
         /**（容器 2）此容器包含Marker阴影层。*/
         overlayShadow: HTMLDivElement;
         /**（容器 3）此容器包含Marker图片层。*/
         overlayImage: HTMLDivElement;
         /**（容器 4）此容器包含InfoWindow的阴影，位于overlayImage之上。*/
         floatShadow: HTMLDivElement;
         /**（容器 5）此容器包含透明的鼠标相应元素，用于接收Marker的鼠标事件。该窗格在floatShadow之上，这样便可点击信息窗口阴影中的Marker。*/
         overlayMouseTarget: HTMLDivElement;
         /**（容器 6）此窗格包含InfoWindow。它位于所有地图叠加层之上。*/
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
         fromLatLngToDivPixel(v:qq.maps.LatLng):qq.maps.Point;
     }

 }