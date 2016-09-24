/// <reference path="h5.d.ts" />
/// <reference path="h5.d.ts" />
interface Camera {
    /**
     * 字符串数组，摄像头支持的拍照分辨率
     * */
    supportedImageResolutions: string[];
    /**
     * 字符串数组，摄像头支持的摄像分辨率
     * */
    supportedVideoResolutions: string[];
    /**
     * 字符串数组，摄像头支持的拍照文件格式
     * */
    supportedImageFormats: string[];
    /**
     * 字符串数组，摄像头支持的摄像文件格式
     * */
    supportedVideoFormats: string[];
    /**
     * 进行拍照操作
     * @param {(File} success 拍照操作成功的回调函数
     * @param {function} error?  拍照操作失败的回调函数
     * @param {any} option? 摄像头拍照参数
     */
    captureImage(success: (File: string) => void, error?: () => void, option?:CameraOption): void;
    /**
     * 调用摄像头进行摄像操作
     * @param {function} success 摄像操作成功的回调函数
     * @param {function} error? 拍照操作失败的回调函数
     * @param {any} option? 摄像头拍照参数
     */
    startVideoCapture(success: () => void, error: () => void, option?: CameraOption): void;
    /**
     * 结束摄像操作
     */
    stopVideoCapture () : void;
}
interface CameraOption {
    /**
     * 拍照或摄像文件保存的路径
     * @param {number} index?
     */
    filename: string;
    /**
     * 拍照或摄像的文件格式
     * @param {number} index?
     */
    format: string;
    /**
     * 拍照或摄像默认使用的摄像头
     * @param {number} index?
     */
    index: string;
    /**
     * 拍照或摄像界面弹出指示区域
     * @param {number} index?
     */
    popover: PopPosition;
}
interface PopPosition {
    top: string;
    left: string;
    width: string;
    height: string;
}
interface camera{
    /**
     * 获取摄像头管理对象
     * @param {number} index 指定要获取摄像头的索引值，1表示主摄像头，2表示辅摄像头。如果没有设置则使用系统默认主摄像头。
     */
    getCamera(index?: number):Camera;
}

interface plusStatic {
    /**
     * Camera模块管理设备的摄像头，可用于拍照、摄像操作，通过plus.camera获取摄像头管理对象。
     * */
    camera: camera;
}