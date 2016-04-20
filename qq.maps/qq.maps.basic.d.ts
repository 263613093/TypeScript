declare module qq.maps {

    class Size {
        constructor(width: number, height: number);
        width: number;
        height:number;

        equals(other: Size): boolean;
        /**
         * 
         */
        getWidth(): number;
        getHeight(): number;
        toString(): string;
        clone():Point;
    }


    class Point {
        constructor(x: number, y: number);

        width: number;
        height: number;

        equals(other: Point): boolean;
        getX(): number;
        getY(): number;
        toString(): string;
        clone():Point;
    }


    class Color {
        constructor(r: number, g: number, b: number, alpha?: number);

        toRGB(): string;

        toRGBA(): string;

        toHex(): string;

        static fromHex(hex: string, alpha?: number): qq.maps.Color;
    }

    class LatLng {
        constructor(lat: number, lon: number);
        /**
         * 返回纬度值。
         * */
        getLat(): number;
        /**
         * 返回经度值
         * */
        getLng(): number;
        toString(): string;
        clone(): LatLng;
        /**
         * 比较两个经纬度坐标是否相等。
         * */
        equals(other: LatLng): boolean;
    }

    class LatLngBounds {
        constructor(sw:qq.maps.LatLng,ne:qq.maps.LatLng);
        /**
         * 获取该范围的中心点坐标。
         * */
        getCenter(): LatLng;
        /**
         * 获取该范围的东北角坐标。
         * */
        getNorthEast(): LatLng;
        /**
         * 获取该范围的西南角坐标。
         * */
        getSouthWest(): LatLng;
        /**
         * 扩展该范围边界，以包含指定的坐标点。
         * */
        extend(lonlat: LatLng): LatLngBounds;
        /**
         * 扩展该范围边界，以包含指定的一个矩形范围
         * */
        union(): LatLngBounds;
        union(): boolean;
        /**
         * 比较两个矩形范围是否完全相等。
         * */
        equals(other: LatLngBounds): boolean;
        /**
         * 判断该范围是否为空。
         * */
        isEmpty(): boolean;
        /**
         * 判断指定的坐标是否在这个范围内。
         * */
        contains(lonlat: LatLng): boolean;
        /**
         * 转换为字符串表示。
         * */
        toString(): string;
    }



}
