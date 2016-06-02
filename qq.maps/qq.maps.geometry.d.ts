declare module qq.maps.geometry {
    /**效用函数，计算角度、距离和面积。*/
    class spherical {
        /**返回闭合路径的面积。返回的面积单位为平方米。*/
        static computeArea(path: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>, radius?: number): number;
        /**返回两个坐标点间的距离。*/
        static computeDistanceBetween(from: qq.maps.LatLng, to: qq.maps.LatLng): number;
        /**返回从一个坐标到另一个坐标的航向。航向是指从一个坐标指向另一个坐标的向量与正北方向的夹角，范围为[-180,180)。*/
        static computeHeading(from: qq.maps.LatLng, to: qq.maps.LatLng): number;
        /**返回给定路径的长度。*/
        static computeLength(path: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>): number;
        /**通过起始点坐标、距离以及航向算出终点坐标。*/
        static computeOffset(from:qq.maps.LatLng,heading:number,radius?:number):qq.maps.LatLng;
        /**通过终点坐标、距离以及航向算出起始点坐标。*/
        static computeOffsetOrigin(to: qq.maps.LatLng, distance: number, heading: number, radius: number): qq.maps.LatLng;
        /**返回闭合路径的有向面积。有向面积可以用于检测路径的方向。返回的有向面积单位为平方米。*/
        static computeSignedArea(loop: Array<qq.maps.LatLng> | qq.maps.MVCArray<qq.maps.LatLng>, radius?: number): number;
        /**返回在起终点连线上位于给定比例的点坐标。比例值fraction范围为0~1。*/
        static interpolate(from:qq.maps.LatLng,to:qq.maps.LatLng,fraction:number):qq.maps.LatLng;
    }
} 

