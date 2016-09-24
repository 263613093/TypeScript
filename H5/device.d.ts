/// <reference path="h5.d.ts" />
interface screen {
    /**
     *  设备屏幕高度分辨率
     * */
    resolutionHeight: number;
    /**
     * 设备屏幕宽度分辨率
     * */
    resolutionWidth: number;
    /**
     *  逻辑分辨率与实际分辨率的比例
     * */
    scale: number;
    /**
     *  设备屏幕水平方向的密度
     * */
    dpiX: number;
    /**
     * 设备屏幕垂直方向的密度
     * */
    dpiY: number;
    /**
     * 设置屏幕亮度 取值范围为0到1，0表示最低亮度值
     * @param {number} brightness
     */
    setBrightness(brightness: number): void;
    /**
     * 屏幕亮度值范围为0到1，0表示最低亮度值，1表示最高亮度值。
     */
    getBrightness(): number;
    /**
     * 锁定屏幕方向
     * @param {string} orientation 锁定屏幕方向可取以下值： "portrait-primary": 竖屏正方向； "portrait-secondary": 竖屏反方向，屏幕正方向按顺时针旋转180°； "landscape-primary": 横屏正方向，屏幕正方向按顺时针旋转90°； "landscape-secondary": 横屏方向，屏幕正方向按顺时针旋转270°； "portrait": 竖屏正方向或反方向，根据设备重力感应器自动调整； "landscape": 横屏正方向或反方向，根据设备重力感应器自动调整；
     */
    lockOrientation(orientation: string): void;
    /**
     * 解除锁定屏幕方向
     */
    unlockOrientation() : void;
}
interface display {
    /**
     * 应用可使用的屏幕高度逻辑分辨率
     * */
    resolutionHeight: number;
    /**
     * 应用可使用的屏幕宽度逻辑分辨率
     * */
    resolutionWidth: number;
}
interface networkinfo {
    /**
     * 网络连接状态未知
     * */
    CONNECTION_UNKNOW: number;// 网络连接状态未知
    /**
     * 未连接网络
     * */
    CONNECTION_NONE: number;// 未连接网络
    /**
     * 有线网络
     * */
    CONNECTION_ETHERNET: number;// 有线网络
    /**
     * 无线WIFI网络
     * */
    CONNECTION_WIFI: number;// 无线WIFI网络
    /**
     * 蜂窝移动2G网络
     * */
    CONNECTION_CELL2G: number;// 蜂窝移动2G网络
    /**
     * 蜂窝移动3G网络
     * */
    CONNECTION_CELL3G: number;// 蜂窝移动3G网络
    /**
     * 蜂窝移动4G网络
     * */
    CONNECTION_CELL4G: number;// 蜂窝移动4G网络
    /**
     * 获取设备当前连接的网络类型
     */
    getCurrentType() : number;
}
interface device {
    /**
     * 设备的国际移动设备身份码
     * */
    imei: string;
    /**
     * 设备的国际移动用户识别码
     * */
    imsi: string;
    /**
     * 设备的型号
     * */
    model: string;
    /**
     * 设备的唯一标识
     * */
    uuid: string;
    /**
     * 设备的生产厂商
     * */
    vendor: string;
    /**
     * 调用系统程序拨打电话。
     * @param {string} number 要拨打的电话号码
     * @param {boolean} confirm?  是否需要用户确认后开始拨打电话
     */
    dial(number: string, confirm?: boolean): void;
    /**
     * 发出蜂鸣声
     * @param {number} times? 蜂鸣声重复的次数，默认发出一次蜂鸣声
     */
    beep(times?: number): void;
    /**
     * 设备振动
     * @param {number} millseconds? 设备振动持续的时间，单位为ms，默认为500ms。
     */
    vibrate(millseconds?: number): void;
    /**
     * 设置应用是否保持唤醒（屏幕常亮）状态
     * @param {boolean} lock 是否设置程序一直保持唤醒状态
     */
    setWakelock(lock: boolean): void;
    /**
     * 获取程序是否一直保持唤醒（屏幕常亮）状态
     */
    isWakelock(): boolean;
    /**
     * 调用此方法调节设备的系统音量。
     * @param volume 设备的系统音量值,取值范围为0到1，0表示静音，1表示最大音量值。
     */
    setVolume(volume): number;
    /**
     * 获取设备的系统音量,系统音量值范围为0到1，0表示静音，1表示最大音量值。
     */
    getVolume() : number;
}


interface os {
    /**
     * 系统语言信息
     * */
    language: string;
    /**
     * 系统版本信息
     * */
    version: string;
    /**
     * 系统的名称
     * */
    name: string;
    /**
     * 系统的供应商信息
     * */
    vendor: string;

}

interface plusStatic {
    /**
     * Device模块管理设备信息，用于获取手机设备的相关信息，如IMEI、IMSI、型号、厂商等。通过plus.device获取设备信息管理对象。
     * */
    device: device,
    /**
     * OS模块管理操作系统信息
     * */
    os: os;
    /**
     * Screen模块管理设备屏幕信息
     * */
    screen: screen;
    /**
     * Display模块管理应用可使用的显示区域信息
     * */
    display: display;
    /**
     * Device模块用于获取网络信息
     * */
    networkinfo: networkinfo;
}