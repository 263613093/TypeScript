declare module qq.maps
{
    class Polygon extends qq.maps.MVCObject{
        constructor(options: qq.maps.PolygonOptions);

        getBounds(): qq.maps.LatLngBounds;
        getMap(): qq.maps.Map;
        getPath(): qq.maps.MVCArray<qq.maps.LatLng>;
        getVisible(): boolean;
        getZIndex(): number;

        setMap(map: qq.maps.Map):void;
        setPath(path: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>): void;
        setVisible(v: boolean): void;
        setZIndex(v: number): void;
        setOptions(v:qq.maps.PolygonOptions):void;
    }

    interface PolygonOptions {
        clickable: boolean;
        cursor: string;
        editable: boolean;
        fillColor: qq.maps.Color | string;
        map: qq.maps.Map;
        path: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>;

        strokeColor: qq.maps.Color | string;
        strokeDashStyle: string;
        strokeWeight: number;
        visible: boolean;
        zIndex :number;
    }
}