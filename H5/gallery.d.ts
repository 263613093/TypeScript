/// <reference path="h5.d.ts" />
interface GalleryOptions {
    /**
     * 选择文件保存的路径
     */
    filename: string;
    /**
     * 相册中选择文件类型过滤器,image video none
     * */
    filter: string;//image video none
    /**
     * 是否支持多选图片
     * */
    multiple: boolean;
    /**
     * 是否显示系统相册文件选择界面的动画
     * */
    animation?: boolean;
    /**
     * 相册选择界面弹出指示区域,默认弹出位置为屏幕居中。
     * */
    popover: PopPosition;
    /**
     * 是否使用系统相册文件选择界面, 默认值为true。
     * */
    system: boolean;
}

interface gallery {
    /**
     * 从系统相册选择文件（图片或视频）
     * @param {(data} success
     * @param {(err} error
     * @param {GalleryOptions} options
     */
    pick(success: (data: any) => void, error: (err: any) => void, options: GalleryOptions): void;
    /**
     * 保存文件到系统相册中
     * @param {string} path
     * @param {function} success
     * @param {(err} error
     */
    save(path: string, success: () => void, error: (err: any) => void) : void;
}

interface plusStatic {
    /**
     * Gallery模块管理系统相册，支持从相册中选择图片或视频文件、保存图片或视频文件到相册等功能。
     * 通过plus.gallery获取相册管理对象。
     * */
    gallery: gallery;
}