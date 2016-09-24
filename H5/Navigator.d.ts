declare module h5plus {
    export interface navigator {
        /**
         * 关闭程序启动界面
         */
        closeSplashscreen(): void;
        /**
         * 判断应用当前是否全屏模式显示
         */
        isFullscreen(): boolean;
        /**
         * 设置应用是否全屏显示
         * @param {boolean} v
         */
        setFullscreen(v: boolean): void;
        /**
         * 设置系统状态栏背景颜色
         * @param {string} rgb
         */
        setStatusBarBackground(rgb: string): void;
        /**
         * 获取系统状态栏背景颜色
         */
        getStatusBarBackground(): string;
        /**
         * 设置系统状态栏样式
         * @param {"UIStatusBarStyleDefault" | "UIStatusBarStyleBlackOpaque" |"UIStatusBarStyleBlackTranslucent"} style
         */
        setStatusBarStyle(style: "UIStatusBarStyleDefault" | "UIStatusBarStyleBlackOpaque" | "UIStatusBarStyleBlackTranslucent"): void;
        /**
         * 获取系统状态栏样式
         */
        getStatusBarStyle(): string;
        /**
         * 设置userAgent值
         */
        setUserAgent(): string;
        /**
         * 获取userAgent值
         */
        getUserAgent(): string;
        /**
         * 设置Cookie值
         * @param {string} key
         * @param {string} value
         */
        setCookie(key: string, value: string): string;
        /**
         * 获取Cookie值
         * @param {string} url
         */
        getCookie(url: string): void;
        /**
         * 删除应用所有Cookie值
         */
        removeAllCookie(): void;
        /**
         * 删除应用Cookie
         * @param {string} url
         */
        removeCookie(url: string): void;
        /**
         * 删除应用所有会话期Cookie值
         */
        removeSessionCookie(): void;
    }
}

interface plusStatic {
    navigator: h5plus.navigator;
}