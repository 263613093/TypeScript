declare module qq.maps {
    class MVCArray<T> {
        constructor(arr?: Array<T>);

        forEach(callback:() => void):void;

        getAt(index: number): T;

        setAt(index: number, v: T): void;

        getLength(): number;

        pop(): T;

        setAt(v: T): number;

        insertAt(index: number, v: T): void;

        
        removeAt():T;
    }


}