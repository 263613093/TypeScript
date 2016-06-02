declare module qq.maps {

    class Map {
        constructor(container: HTMLDivElement | string, options?: MapOptions );
        fitBounds(bounds: LatLngBounds): void;
        getBounds(): LatLngBounds;
        getCenter(): LatLng;
        getZoom(): number;
        getContainer(): HTMLDivElement;
        getMapTypeId(): MapTypeId;
        getProjection(): any;
        panBy(x: number, y: number): void;
        zoomBy(zoom: number): void;
        panTo(lonlat: LatLng): void;
        zoomTo(zoom: number): void;
        setCenter(point: LatLng): void;
        setZoom(zoom: number): void;
        setMapTypeId(v: MapTypeId): void;
        setOptions(options: MapOptions): void;
    }


    enum MapTypeId {
        /**
         * 该地图类型显示普通的街道地图。
         */
        ROADMAP,
        /**
         * 该地图类型显示卫星图像。
         */
        SATELLITE,
        /**
         * 该地图类型显示卫星图像上的主要街道透明层。
         */
        HYBRID 
    }

    enum ControlPosition {
        TOP_LEFT,
        TOP_CENTER,
        TOP_RIGHT,
        BOTTOM_LEFT,
        BOTTOM_CENTER,
        BOTTOM_RIGHT,
        LEFT_TOP,
        LEFT_CENTER,
        LEFT_BOTTOM,
        RIGHT_TOP,
        RIGHT_CENTER,
        RIGHT_BOTTOM,
        CENTER
    }

   
    interface MapOptions  {
        minZoom?: number;
        maxZoom?: number;
        center?: qq.maps.LatLng;
        zoom?: number;
        noClear?: boolean;
        backgroundColor?: string;
        boundary?: qq.maps.LatLngBounds;
        draggableCursor?: string;
        draggingCursor?: string;
        mapTypeId?: MapTypeId;
        draggable?: boolean;
        scrollwheel?: boolean;
        disableDoubleClickZoom?: boolean;
        keyboardShortcuts?: boolean;
        mapTypeControl?: boolean;
        mapTypeControlOptions?: MapTypeControlOptions;
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
        scaleControl?: boolean;
        scaleControlOptions? :ScaleControlOptions;
    }

    

    interface MapTypeControlOptions {
        mapTypeIds: Array<qq.maps.MapTypeId> | Array<string>;
        position:ControlPosition;
    }

    interface PanControlOptions {
    position:ControlPosition;
    }

    interface ZoomControlOptions {
        position?: ControlPosition;
        style?:ZoomControlStyle;
    }

    interface ScaleControlOptions {
        position:ControlPosition;
    }

    enum ZoomControlStyle {
        DEFAULT,
        LARGE,
        SMALL 
    }

}