declare module h5plus {
    export interface ZIP{
        /**
         * 压缩生成Zip文件
         * @param {string} src 要压缩的源文件路径，支持文件路径或目录
         * @param {string} zipfile  压缩后保存的Zip文件路径
         * @param {function} success
         * @param {(e} error
         */
        compress(src: string, zipfile: string, success: () => void, error: (e: error) => void): void;
        /**
         * 解压缩Zip文件
         * @param {string} zipfile 需解压Zip文件路径
         * @param {string} target 解压Zip文件的目标路径，必须是路径
         * @param {function} success 解压Zip文件操作成功回调，在解压操作成功时调用。
         * @param {(e} error 解压Zip文件操作失败回调，在解压操作失败时调用。
         */
        decompress(zipfile: string, target: string, success: () => void, error: (e: error) => void): void;
        /**
         * 图片压缩转换
         * @param {compressImageOptions} options
         * @param {(r} success?
         * @param {(e} error?
         */
        compressImage(options: compressImageOptions, success?: (r: compressImageResult) => void, error?: (e: error) => void): void;
    }

    interface error {
        code: number;
        message: string;
    }

    interface compressImageResult {
        target: string;
        size: number;
        width: number;
        height: number;
    }

    interface compressImageOptions {
        /**
         * 压缩转换原始图片的路径
         * */
        src: string;
        /**
         * 压缩转换目标图片的路径
         * */
        dst: string;
        /**
         * 覆盖生成新文件
         * */
        overwrite?: boolean;
        /**
         * 压缩转换后的图片格式
         * */
        format?: string;
        /**
         * 压缩图片的质量, 默认值为50。
         * */
        quality?: number;
        /**
         * 缩放图片的宽度,支持像素值（如"100px"）、百分比（如"50%"）、自动计算
         * */
        width?: string;
        /**
         * 缩放图片的高度,支持像素值（如"100px"）、百分比（如"50%"）、自动计算
         * */
        height?: string;
        /**
         * 旋转图片的角度
         * */
        rotate?: number;
        /**
         * 裁剪区域
         * */
        clip?: clipOptions;
    }

    interface clipOptions {
        top?: string;
        left?: string;
        width?: string;
        height?: string;
    }
}
interface plusStatic {
    /**
     * Zip模块管理文件压缩和解压，通过plus.zip可获取压缩管理对象。
     * */
    zip:h5plus.ZIP;
}