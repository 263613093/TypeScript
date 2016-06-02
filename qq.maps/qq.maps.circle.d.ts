declare module qq.maps {
    class Circle extends qq.maps.MVCObject
    {
        constructor(options: qq.maps.CircleOptions);

        getBounds(): qq.maps.LatLngBounds;
        getCenter(): qq.maps.LatLng;
        getMap(): qq.maps.Map;
        getRadius(): number;
        getVisible(): boolean;
        getZIndex(): number;

        setCenter(v: qq.maps.LatLng): void;
        setMap(v: qq.maps.Map): void;
        setRadius(v: number): void;
        setVisible(v: boolean): void;
        setZIndex(v: number): void;
        setOptions(v:qq.maps.CircleOptions):void;
    }

    interface CircleOptions {
        center?: qq.maps.LatLng;
        clickable?: boolean;
        cursor?: string;
        fillColor?: qq.maps.Color | string;
        map?: qq.maps.Map;
        radius?: number;
        strokeColor?: qq.maps.Color | string;
        strokeDashStyle?: string;
        strokeWeight?: number;
        visible?: boolean;
        zIndex ?:number;
    }
}