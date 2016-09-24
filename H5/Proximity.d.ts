/// <reference path="h5.d.ts" />
declare module h5plus {
    export interface Proximity {
        /**
         * 获取当前设备的接近距离信息
         * @param {(distance} success?
         * @param {(e} error?
         */
        getCurrentProximity(success?: (distance: number) => void, error?: (e: ProximityError) => void): void;
        /**
         * 监听设备接近距离的变化
         * @param {(distabce} change
         * @param {(e} error?
         */
        watchProximity(change: (distabce: number) => void, error?: (e: ProximityError) => void): number;
        /**
         * 关闭监听设备接近距离变化
         * @param {number} id
         */
        clearWatch(id: number): void;
    }

    interface ProximityError {
        code: number;
        message: string;
    }
}

interface plusStatic {
    /**Proximity模块管理设备距离传感器，可获取当前设备的接近距离信息，通过plus.proximity可获取设备距离传感管理对象。*/
    proximity: h5plus.Proximity;
}