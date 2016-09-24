/// <reference path="h5.d.ts" />
declare module h5plus {

    export interface NativeObj {

        Bitmap: BitmapStatic;
    }
    interface BitmapStatic{
        new (id: string): Bitmap;
        /**
         * 静态方法，获取所有Bitmap图片对象
         */
        getItems(): Bitmap[];     
        /**
         * 静态方法，获取指定标识的Bitmap图片对象
         * @param {string} id
         */
        getBitmapById(id: string): Bitmap;
    }

    interface Bitmap {
        /**
         * 销毁Bitmap图片
         */
        clear(): void;
        /**
         * 加载Bitmap图片
         * @param {string} path
         * @param {function} success
         * @param {(e} error
         */
        load(path: string, success: () => void, error: (e: plusError) => void): void;
        /**
         * 加载Base64编码格式图片到Bitmap对象
         * @param {string} data
         * @param {function} success
         * @param {(e} error
         */
        loadBase64Data(data: string, success: () => void, error: (e: any) => void): void;
        /**
         * 保存图片
         * @param {string} path
         * @param {BitmapSaveOption} options
         * @param {(b} success
         * @param {(e} error
         */
        save(path: string, options: BitmapSaveOption, success: (b: BitmapSaveResult) => void, error: (e: any) => void): void;
        /**
         * 获取图片的Base64编码数据
         */
        toBase64Data(): string;
    }

    interface BitmapSaveOption {
        overwrite?: boolean;
        format?: string;
        quality?: number;
    }

    interface BitmapSaveResult {
        target: string;
        size: number;
        width: number;
        height: number;
    }

    
}

interface plusStatic {
    /**
     * nativeObj管理系统原生对象。
     * */
    nativeObj: h5plus.NativeObj;
}