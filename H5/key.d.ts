declare module h5plus{

    export interface KEY {
        /**
         * 添加按键事件监听器
         * @param {string} key
         * @param {(e} listener
         * @param capture?boolean
         */
        addEventListener(key: string, listener: (e: number) => void, capture?: boolean): void;
        /**
         * 移除按键事件监听器
         * @param {string} key
         * @param {(e} listener
         */
        removeEventListener(key: string, listener: (e: number) => void): void;
    }
}

interface plusStatic {
    /**
     * Key管理设备按键事件
     * */
    key: h5plus.KEY;
}