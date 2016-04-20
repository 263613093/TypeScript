declare module qq.maps {
    class Polyline extends qq.maps.MVCObject {
        constructor(options: qq.maps.PolylineOptions);

        getBounds(): qq.maps.LatLngBounds;
        getMap(): qq.maps.Map;
        getPath(): qq.maps.MVCArray<qq.maps.LatLng>;
        getStrokeColor(): qq.maps.Color;
        getStrokeWeight(): number;
        getVisible(): boolean;
        getZIndex(): number;

        setMap(map: qq.maps.Map): void;
        setPath(path: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>): void;
        setStrokeColor(color: qq.maps.Color): void;
        setStrokeWeight(v: number): void;
        setVisible(v: boolean): void;
        setZIndex(v: number): void;
        setOptions(options:qq.maps.PolylineOptions):void;
    }

    interface PolylineOptions {
        clickable: boolean;
        cursor: string;
        editable: boolean;
        map: qq.maps.Map;
        path: Array<qq.maps.LatLng>|qq.maps.MVCArray<qq.maps.LatLng>;
        strokeColor: qq.maps.Color | string;
        strokeDashStyle: string;
        strokeWeight: number;
        visible: boolean;
        zIndex :number;
    }
}