declare module h5plus {
    export interface splashscreen {
        /**
         * 关闭程序启动界面
         */
        closeSplashscreen(): void;
    }
}

interface plusStatic {
    splashscreen: h5plus.splashscreen;
}