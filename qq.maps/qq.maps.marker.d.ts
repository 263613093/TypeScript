declare module qq.maps {
    class Marker extends qq.maps.MVCObject {
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
        setMap(v: qq.maps.Map | any): void;
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
        position?: qq.maps.LatLng;
        id?: string;
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
        /**
         * 
         * @param url  图片地址
         * @param size 图标尺寸，该尺寸为显示图标的实际尺寸，不是整个图片的原始尺寸，当需要显示的是整个图片中一部分的时候必须设置该属性。
         * @param origin 切图坐标，该坐标是相对于图片左上角的相对像素坐标，当需要显示的是整个图片中一部分的时候必须设置该属性，默认为（0,0）。
         * @param anchor 锚点坐标，描述经纬度点对应图标中的位置，坐标是相对于图标部分左上角的相对像素坐标，如果设置的origin参数，该坐标就是相对于origin的相对坐标，默认为底部中心点（x/2,y）
         * @param scaleSize 缩放尺寸，用于拉伸或缩小原图片时使用，该尺寸是用来改变整个图片的尺寸。
         * @param shadowAngle 阴影角度，定义阴影与Y轴正半轴的夹角，在动画时阴影会朝设置的方向运动
         */
        constructor(url: string, size?: Size, origin?: Point, anchor?: Point, scaleSize?: Size, shadowAngle ?:number);
    }


    class MarkerShape {
        constructor(coords:number[],type:string);
    }

}