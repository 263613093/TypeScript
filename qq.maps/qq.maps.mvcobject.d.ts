declare module qq.maps
{
    class MVCObject {
       
        get(key: string): any;
        set(key: string, value: any): void;
        bindTo(key: string, target: qq.maps.MVCObject, targetkey?: string, notify?: boolean): void;
        unbind(key:string):void;
        unbindAll(): void;
        changed(key: string): void;
        setValues(v:any);
    }

}