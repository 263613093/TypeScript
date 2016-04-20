 declare module qq.maps {
     class InfoWindow extends qq.maps.MVCObject {
         
         constructor(options?: qq.maps.InfoWindowOptions);
         
         open(): void;
         close(): void;
         getContent(): string | HTMLElement;
         getMap(): qq.maps.Map;
         getPosition(): qq.maps.LatLng | qq.maps.Marker;
         getZIndex(): number;

         setContent(v: string | HTMLElement): void;
         setMap(v: qq.maps.Map): void;
         setPosition(v: qq.maps.LatLng | qq.maps.Marker): void;
         setZIndex(v: number): void;
         setOptions(v:qq.maps.InfoWindowOptions):void;

     }

     interface InfoWindowOptions {
         map: qq.maps.Map;
         content: HTMLElement | string;
         position: qq.maps.LatLng | qq.maps.Marker;
         zIndex: number;
         visible?:boolean;
     }
}