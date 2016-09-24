/// <reference path="h5.d.ts" />

interface BarcodeOption {
    /**
     * 是否保存成功扫描到的条码数据时的截图
     * */
    conserve: boolean;
    /**
     * 保存成功扫描到的条码数据时的图片路径
     * */
    filename: string;
}
interface BarcodeControlInstance {
    
    /**
     * 开始条码识别
     * @param {BarcodeOption} options
     */
    start(options?: BarcodeOption): void;
    /**
     * 结束条码识别
     */
    cancel(): void;
    /**
     * 是否开启闪光灯
     * @param {boolean} open
     */
    setFlash(open:boolean):void;
    /**
     * 条码识别成功事件
     * @param {number} type
     * @param {string} code
     * @param {string} file
     */
    onmarked(type: number, code: string, file: string): void;
    /**
     * 条码识别错误事件
     * @param {any} err
     */
    onerror(err:any):void;
}

interface BarCodeStatic {
    new (id: string, filters?: number[]): BarcodeControlInstance;
}


interface barcode {
    QR: number;
    EAN13: number;
    EAN8: number;
    AZTEC: number;
    DATAMATRIX: number;
    UPCA: number;
    UPCE: number;
    CODABAR: number;
    CODE39: number;
    CODE93: number;
    CODE128: number;
    ITF: number;
    MAXICODE: number;
    PDF417: number;
    RSS14: number;
    RSSEXPANDED: number;
    


    /**
     * 条码扫描识别控件对象
     * */
    Barcode: BarCodeStatic;
    /**
     * 通过图片扫描条码数据 
     * @param {string} path 扫描的图片的地址
     * @param {(type} succcess 识别到的条码类型
     * @param {string} code 识别到的条码数据
     * @param {function} file 识别到的条码图片文件路径
     * @param {(err} error? 扫描条码图片失败的回调函数，返回错误信息
     * @param {number[]} filters? 要识别的条码类型过滤器，为条码类型常量数组
     */
    scan(path: string, succcess: (type: number, code: string, file?: string) => void, error?: (err: any) => void, filters?: number[]): void;
}



interface plusStatic {
    /**
     * Barcode模块管理条码扫描，提供常见的条码（二维码及一维码）的扫描识别功能，可调用设备的摄像头对条码图片扫描进行数据输入。通过plus.barcode可获取条码码管理对象。
     * */
    barcode: barcode;
}