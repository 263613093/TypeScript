declare module h5plus {
    export interface Push {
        /**
         * 添加推送消息事件监听器
         * @param {string} event
         * @param {(msg} listener
         * @param {boolean} capture?
         */
        addEventListener(event: string, listener: (msg: string) => void, capture?: boolean): void;
        /**
         * 清空所有推送消息
         */
        clear(): void;
        /**
         * 创建本地消息
         * @param {string} content
         * @param {any} pauload?
         * @param {MessageOptions} option?
         */
        createMessage(content: string, pauload?: any, option?: MessageOptions): void;
        /**
         * 获取所有推送消息
         */
        getAllMessage(): PushMessage[];
        /**
         * 获取客户端推送标识信息
         */
        getClientInfo(): clientInfo;
        /**
         * 设置程序是否将消息显示在系统消息中心
         * @param {boolean} notify?
         */
        setAutoNotification(notify?: boolean): void;
        /**
         * 删除推送消息
         * @param {PushMessage} msg
         */
        remove(msg: PushMessage): void;
    }

    interface clientInfo {
        token: string;
        clientid: string;
        appid: string;
        appkey: string;
    }

    interface PushMessage {
        title: string;
        content: string;
        payload: any;
        aps: any;
    }
    interface MessageOptions {
        title: string;
        sound: string;
        cover: boolean;
        when: Date;
        delay: number;
    }
}

interface plusStatic {
    /**
     * Push模块管理推送消息功能，可以实现在线、离线的消息推送，通过plus.push可获取推送消息管理对象。
     * */
    push: h5plus.Push;
}