/// <reference path="h5.d.ts" />

//速度传感器

    interface accelerometerValue {
        xAxis: number;
        yAxis: number;
        zAxis: number;
    }

    interface AccelerometerOption {
        frequency: number;
    }

    interface accelerometer {
        /**
         * 获取当前设备的加速度信息
         * @param {function} succcess
         * @param {function} error?
         */
        getCurrentAcceleration(succcess: (a: accelerometerValue) => void, error?: (e:accelerometerError) => void): void;
        /**
         * 监听设备加速度变化信息
         * @param {function} succcess
         * @param {function} error?
         * @param {any} options?
         */
        watchAcceleration(succcess: (a: accelerometerValue) => void, error?: (e: accelerometerError) => void, options?: AccelerometerOption): number;
        /**
         * 关闭监听设备加速度信息
         * @param {any} a
         */
        clearWatch(a: number):void;
    }

interface accelerometerError {
    code: number;
    message: string;
}


interface plusStatic {
    /**
     * 速度传感器
     * */
    accelerometer: accelerometer;
}