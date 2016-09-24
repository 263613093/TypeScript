declare module h5plus {
    export interface Storage {
        /**
         * 获取应用存储区中保存的键值对的个数
         */
        getLength(): number;
        /**
         * 通过键(key)检索获取应用存储的值
         * @param {string} key
         */
        getItem(key: string): string;
        /**
         * 修改或添加键值(key-value)对数据到应用数据存储中
         * @param {string} key
         * @param {string} value
         */
        setItem(key: string, value: string): void;
        /**
         * 通过key值删除键值对存储的数据
         * @param {string} key
         */
        removeItem(key: string): void;
        /**
         * 清除应用所有的键值对存储数据
         */
        clear(): void;
        /**
         * 获取键值对中指定索引值的key值
         * @param {number} index
         */
        key(index: number): string;
    }
}

interface plusStatic {
    /**
     * Storage模块管理应用本地数据存储区，用于应用数据的保存和读取。应用本地数据与localStorage、sessionStorage的区别在于数据有效域不同，前者可在应用内跨域操作，数据存储期是持久化的，并且没有容量限制。
     * 通过plus.storage可获取应用本地数据管理对象。
     * */
    storage: h5plus.Storage;
}