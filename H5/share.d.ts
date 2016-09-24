declare module h5plus {
    export interface Share {
        /**
         * 获取分享服务
         * @param {(service} success
         * @param {(e} error?
         */
        getServices(success: (service: ShareService) => void, error?: (e: ShareError) => void): void;
        /**
         * 分享授权控件对象
         * */
        Authorize: {
            new (id: string, display?: boolean): Authorize;
        }
    }

    interface ShareError {
        code: number;
        message: string;
    }
    interface ShareService {
        //sinaweibo  tencentweibo  weixin
        id: string;
        description: string;
        authenticated: boolean;
        accessToken: string;
        nativeClient: boolean;
        /**
         * 授权认证操作
         * @param {function} success
         * @param {(e} error?
         */
        authorize(success: () => void, error?: (e: ShareError) => void): void;
        /**
         * 取消授权认证
         */
        forbid(): void;
        /**
         * 发送分享
         * @param {ShareMessage} msg
         * @param {function} success
         * @param {(e} error?
         */
        send(msg: ShareMessage, success: () => void, error?: (e: ShareError) => void): void;
    }


    interface ShareMessage {
        content: string;
        pictures: string[];
        thumbs: string[];
        href: string;
        title: string;
        geo: GeoPosition;
        extra: ShareMessageExtra;
    }



    interface ShareMessageExtra {
        /**
         * 微信分享场景，仅微信分享平台有效
         * */
        scene: string;
    }


    interface GeoPosition {
        latitude: number;
        longitude: number;
    }

    interface Authorize {
        /**
         *  加载分享授权页面
         * @param {string} id
         */
        load(id: string): void;
        /**
         * 设置分享授权控件是否可见
         * @param {boolean} visible
         */
        setVisible(visible: boolean): void;
        /**
         * 分享控件加载完成事件
         * @param {function} callback
         */
        onloaded(callback: () => void): void;
        /**
         * 分享授权认证成功事件
         * @param {(service} callback
         */
        onauthenticated(callback: (service: ShareService) => void): void;
        /**
         *  分享授权认证失败事件
         * @param {(e} callback
         */
        onerror(callback: (e: ShareError) => void): void;

    }
}

interface plusStatic {
    /**
     * Share模块管理客户端的社交分享功能，提供调用终端社交软件的分享能力。
     * 通过plus.share可获取社交分享管理对象。
     * */
    share: h5plus.Share;
}