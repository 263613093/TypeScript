declare module qq.maps {


    class Label extends qq.maps.MVCObject
    {
        constructor(options:qq.maps.LabelOptions);

        getContent(): string;
        getMap(): qq.maps.Map;
        getPosition(): qq.maps.LatLng;
        getVisible(): boolean;
        getZIndex(): number;

        setContent(v: string): void;
        setMap(v: qq.maps.Map): void;
        setPosition(v: qq.maps.LatLng): void;
        setStyle(v: any): void;
        setVisible(v: boolean): void;
        setZIndex(v: number): void;
        setOptions(v:qq.maps.LabelOptions):void;
    }

    interface LabelOptions {
        clickable: boolean;
        content: string;
        map: qq.maps.Map;
        offset: qq.maps.Size;
        position: qq.maps.LatLng;
        style: any;
        visible: boolean;
        zIndex :number;
    }

}