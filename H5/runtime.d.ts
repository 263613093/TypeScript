/// <reference path="h5.d.ts" />
declare module h5plus {
    export interface RunTime {
        appid: string;
        arguments: string;
        launcher: string;
        version: string;
        innerVersion: string;
        launchLoadedTime: number;
        /**
         * 获取指定APPID对应的应用信息
         * @param {string} appid
         * @param {(w} success
         */
        getProperty(appid: string, success: (w: widgetInfo) => void): void;
        /**
         * 安装应用
         * @param {string} path
         * @param {widgetOption} options?
         * @param {(w} success?
         * @param {(e} error?
         */
        install(path: string, options?: { force: boolean }, success?: (w: widgetInfo) => void, error?: (e: RunTimeError) => void): void;
        /**
         * 退出客户端程序
         */
        quit(): void;
        /**
         * 重启当前的应用
         */
        restart(): void;
        /**
         * 设置程序快捷方式上显示的提示数字
         */
        setBadgeNumber(num: number): void;
        /**
         * 调用第三方程序打开指定的URL
         * @param {string} url
         * @param {any} error?
         * @param {string} identity
         */
        openURL(url: string, error?: (e: RunTimeError)=>void, identity?: string): void;
        /**
         * 调用第三方程序打开指定的文件
         * @param {string} path
         * @param {{ left} options?
         * @param {number} top
         * @param {number} width
         * @param {number }} height
         * @param {(e} error?
         */
        openFile(path: string, options?: { popover: { left: number, top: number, width: number, height: number } }, error?: (e: RunTimeError) => void): void;
        /**
         * 调用第三方程序
         * @param {ApplicationInf} appinf
         * @param {(e} error?
         */
        launchApplication(appinf: ApplicationInf, error?: (e: RunTimeError) => void): void;
    }


    interface ApplicationInf {
        pname: string;
        action: string;
        extra: any;
    }

    interface widgetInfo {
        appid: string;
        version: string;
        name: string;
        description: string;
        author: string;
        email: string;
        license: string;
        licensehref: string;
        features: string[];
    }

    interface RunTimeError {
        code: number;
        message: string;
    }
}

interface plusStatic {
    /**
     * Runtime模块管理运行环境，可用于获取当前运行环境信息、与其它程序进行通讯等。
     * 通过plus.runtime可获取运行环境管理对象。
     * */
    runtime: h5plus.RunTime;
}