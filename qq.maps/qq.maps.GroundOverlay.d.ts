 declare module qq.maps {

     /**叠加覆盖物，在地图上添加叠加层。*/
     class GroundOverlay extends qq.maps.MVCObject {
         constructor(options: qq.maps.GroundOverlayOptions);


         getBounds(): qq.maps.LatLngBounds;
         getImageUrl(): string;
         getMap(): qq.maps.Map;
         getVisible(): boolean;
         getZIndex(): number;
          
         setBounds(v: qq.maps.LatLngBounds): void;
         setImageUrl(v: string): void;
         setMap(v: qq.maps.Map): void;
         setVisible(v: boolean): void;
         setZIndex(v: number): void;
         setOptions(v:qq.maps.GroundOverlayOptions):void;
     }

     interface GroundOverlayOptions {
         bounds: qq.maps.LatLngBounds;
         clickable: boolean;
         cursor: string;
         imageUrl: string;
         map: qq.maps.Map;
         opacity: number;
         visible: boolean;
         zIndex:number;
     }
 }