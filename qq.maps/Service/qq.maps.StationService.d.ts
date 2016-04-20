declare module qq.maps {

    class StationService {
        constructor(otions?: baseServiceOptions<StationInfo>);

        searchById(id: string);
        setComplete(callback: (result: baseServiceResult<StationInfo>) => void): void;
        setError(callback:()=>void):void;
    }

    interface StationInfo {
        id: string;
        name: string;
        type: PoiType;
        latlng: qq.maps.LatLng;
        lines:Array<LineInfo>;
    }

}