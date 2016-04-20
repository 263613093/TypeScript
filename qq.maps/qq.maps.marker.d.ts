declare module qq.maps {
    class Marker {
        constructor(optoins: qq.maps.MarkerOptions);
        getAnimation(): qq.maps.MarkerAnimation;
        getClickable(): boolean;
        getCursor(): string;
        getDraggable(): boolean;
        getFlat():boolean;
        getIcon(): string | qq.maps.MarkerImage;
        getMap(): qq.maps.Map;
        getPosition(): qq.maps.LatLng;
        getShadow(): string | qq.maps.MarkerImage;
        getShape(): qq.maps.MarkerShape;
        getTitle(): string;
        getVisible(): boolean;
        getZIndex(): number;

        setAnimation(animation: qq.maps.MarkerAnimation): void;
        setClickable(v: boolean): void;
        setCursor(v: string): void;
        setDraggable(v: boolean): void;
        setFlat(v: boolean): void;
        setIcon(v: string | qq.maps.MarkerImage): void;
        setMap(v: qq.maps.Map): void;
        setPosition(v: qq.maps.LatLng): void;
        setShadow(v: string | qq.maps.MarkerImage): void;
        setShape(v: qq.maps.MarkerShape): void;
        setTitle(v: string): void;
        setVisible(v: boolean): void;
        setZIndex(v:number):void;

    }

    interface MarkerOptions {
        animation?: MarkerAnimation;
        clickable?: boolean;
        draggable?: boolean;
        flat?: boolean;
        cursor?: string;
        icon?: MarkerImage;
        shadow?: MarkerImage;
        shape?: MarkerShape;
        title?: string;
        visible?: boolean;
        zIndex?: number;
        map?: qq.maps.Map;
        position:qq.maps.LatLng;
    }

    enum MarkerAnimation {
        /**反复弹跳*/
        BOUNCE,
        /**从天而降*/
        DROP,
        /**落下*/
        DOWN,
        /**升起*/
        UP 
    }


    class MarkerImage {
        constructor(url: string, size?: Size, origin?: Point, anchor?: Point, scaleSize?: Size, shadowAngle ?:number);
    }


    class MarkerShape {
        constructor(coords:number[],type:string);
    }

}