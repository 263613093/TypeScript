declare module qq.maps {
    export class event {
        /**
         * 绑定Dom事件
         * @param {HTMLElement} ele
         * @param {string} evt
         * @param {function} handler
         */
        static addDomListener(ele: HTMLElement, evt: string, handler: (e?: qq.maps.MouseEvent) => void): MapsEventListener;
        /**
         * 绑定Dom事件，触发一次后自动移除该绑定。
         * @param {HTMLElement} ele
         * @param {string} evt
         * @param {function} handler
         */
        static addDomListenerOnce(ele: HTMLElement, evt: string, handler: (e?:qq.maps.MouseEvent) => void): MapsEventListener;
        /**
         * 注册对象事件。
         * @param {any} instance
         * @param {string} evt
         * @param {function} handler
         */
        static addListener(instance: any, evt: string, handler: (e?: qq.maps.MouseEvent) => void): MapsEventListener;
        /**
         * 注册对象事件，触发一次后自动移除该事件。
         * @param {any} instance
         * @param {string} evt
         * @param {function} handler
         */
        static addListenerOnce(instance: any, evt: string, handler: (e?: qq.maps.MouseEvent) => void): MapsEventListener;
        /**
         * 删除指定的事件侦听器。
         * @param {MapsEventListener} listener
         */
        static removeListener(listener: MapsEventListener): void;
        /**
         * 删除该对象上指定事件的所有侦听器。
         * @param {any} instance
         * @param {string} evt
         */
        static clearListeners(instance: any, evt: string): void;
        /**
         * 触发指定对象的指定事件。
         * @param {any} instance
         * @param {string} evt
         * @param {any} args
         */
        static trigger(instance: any, evt: string, args: any): void;
    }

    interface MapsEventListener {

    }
}
