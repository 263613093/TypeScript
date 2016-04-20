declare module qq.maps.geometry {
    class spherical {
        
        static computeArea(path: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>, radius?: number): number;

        static computeDistanceBetween(from: qq.maps.LatLng, to: qq.maps.LatLng): number;

        static computeHeading(from: qq.maps.LatLng, to: qq.maps.LatLng): number;

        static computeLength(path: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>): number;

        static computeOffset(from:qq.maps.LatLng,heading:number,radius?:number):qq.maps.LatLng;

        static computeOffsetOrigin(to: qq.maps.LatLng, distance: number, heading: number, radius: number): qq.maps.LatLng;

        static computeSignedArea(loop: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>, radius?: number): number;

        static interpolate(from:qq.maps.LatLng,to:qq.maps.LatLng,fraction:number):qq.maps.LatLng;
    }
} 