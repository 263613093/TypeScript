 declare module qq.maps {
     class convertor {
         /**
          * 将其他地图服务商的坐标批量转换成腾讯地图经纬度坐标
          * @param {qq.maps.LatLng|qq.maps.Point|Array<qq.maps.LatLng>|Array<qq.maps.Point>} points
          * @param {qq.maps.convertType} type
          * @param {(e} callback
          */
         static translate(points:qq.maps.LatLng|qq.maps.Point|Array<qq.maps.LatLng>|Array<qq.maps.Point>,type:qq.maps.convertType,callback:(e:Array<qq.maps.LatLng>)=>void):void;
     }

     const enum convertType {
         /**gps经纬度*/
         gps = 1,
         /**搜狗经纬度*/
         sogou = 2,
         /**百度经纬度*/
         baidu = 3,
         /**mapbar经纬度*/
         mapbar = 4,
         /**google*/
         google = 5,
         /**搜狗墨卡托*/
         sogoMercator=6
     }
 }