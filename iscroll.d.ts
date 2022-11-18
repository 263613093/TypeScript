declare module 'iscroll/build/iscroll'{
    type SCROLL_EVENTS='beforeScrollStart'|'scrollStart'|'scrollCancel'|'flick'|'refresh'|'scrollEnd'|'destroy';
    export default class Scroll{

        constructor(element:string|HTMLElement,ops?:IScrollOptions):Scroll;


        
        get options():IScrollOptions;

        scrollTo(x:number,y:number,time?:number,easing?:string);
        scrollBy(x:number,y:number,time?:number,easing?:string);
        scrollToElement(el:string|HTMLElement,time?:number,offsetX?:number,offsetY?:number,easing?:string);

        goToPage(x:number,y:number,time?:number,easing?:string);
        next();
        prev();
        refresh():void;
        destroy():void;

        resetPosition(time?:number):boolean;
        disable():void;
        getComputedPosition():{x:number,y:number};

        on(event:SCROLL_EVENTS,callback:(...arg:any[])=>void):void;
        off(event:SCROLL_EVENTS,callback:(...arg:any[])=>void):void;


        static utils:{
            ease:{
                quadratic:string;
                circular:string;
                back:string;
                bounce:string;
                elastic:string;
            }
        };
        
    }
    declare type callback=(e:MouseEvent)=>void;
    interface IScrollOptions{
        mouseWheel?:boolean;
        scrollbars?:boolean;
        useTransform?:boolean;
        useTransition?:boolean;
        HWCompositing?:boolean;
        bounce?:boolean;
        click?:callback;
        disableMouse?:boolean;
        disablePointer?:boolean;
        disableTouch?:boolean;
        eventPassthrough?:boolean|'horizontal';
        freeScroll?:boolean;
        keyBindings?:boolean|Record<string,callback>;
        invertWheelDirection?:boolean;
        momentum?:boolean;
        mouseWheel?:boolean;
        preventDefault?:boolean;
        scrollbars?:boolean;
        scrollX?:boolean;
        scrollY?:boolean;
        startX?:number;
        startY?:number;
        tap?:string|boolean|callback;
        /**
         * 指示器
         */
        indicators?:{
            el?:Array<string|HTMLElement>|string|HTMLElement;
            fade?:boolean;
            ignoreBoundaries?:boolean;
            interactive?:boolean;
            listenX?:boolean;
            listenY?:boolean;
            resize?:boolean;
            shrink?:boolean;
            speedRatioX?:number;
            speedRatioY?:boolean;
            clientHeight?:number;
        },
        snap?:boolean|string;
    }
}
