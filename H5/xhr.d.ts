declare module h5plus {
    interface XMLHttpRequest {
        readyState: number;
        response: any;
        responseText: string;
        responseType: string;
        responseXML: string;
        status: number;
        statusText: string;
        timeout: number;
        withCredentials: boolean;
        /**
         * 取消当前响应，关闭连接并且结束任何未决的网络活动
         */
        abort(): boolean;
        /**
         * 获取HTTP响应头部信息
         */
        getAllResponseHeaders(): string;
        /**
         * 获取指定的HTTP响应头部的值
         * @param {string} name
         */
        getResponseHeader(name: string): string;
        /**
         * 初始化HTTP请求参数，例如URL和HTTP方法，但是并不发送请求
         * @param {string} method
         * @param {string} url
         * @param {string} username?
         * @param {string} password?
         */
        open(method: string, url: string, username?: string, password?: string): void;
        /**
         * 发送HTTP请求
         * @param {string} body?
         */
        send(body?: string): void;
        /**
         * 指定一个HTTP请求的Header
         * @param {string} name
         * @param {string} value
         */
        setRequestHeader(name: string, value: string): void;
        /**
         * 网络请求状态发生变化事件
         * @param {function} callback
         */
        onreadystatechange(callback: () => void): void;
        /**
         * 网络请求开始事件
         * @param {function} callback
         */
        onloadstart(callback: () => void): void;
        /**
         * 网络请求传输数据事件
         * @param {function} callback
         */
        onprogress(callback: () => void): void;
        /**
         * 网络请求取消事件
         * @param {function} callback
         */
        onabort(callback: () => void): void;
        /**
         * 网络请求错误事件
         * @param {function} callback
         */
        onerror(callback: (e: ProgressEvent) => void): void;
        /**
         * 网络请求成功事件
         * @param {function} callback
         */
        onload(callback: () => void): void;
        /**
         * 网络请求超时事件
         * @param {(e} callback
         */
        ontimeout(callback: (e: ProgressEvent) => void): void;
        /**
         * 网络请求结束事件
         * @param {function} callback
         */
        onloadend(callback: () => void): void;
    }

    interface ProgressEvent {
        target: XMLHttpRequest;
        lengthComputable: boolean;
        loaded: number;
        total: number;
    }

    export interface XMLHttpRequestStatic {
        XMLHttpRequest: {
            new (): XMLHttpRequest;
        }
    }
}


interface plusStatic {
    /**
     * XMLHttpRequest模块管理网络请求，与标准HTML中的XMLHttpRequest用途一致，差别在于前者可以进行跨域访问。
     * 通过plus.net可获取网络请求管理对象。
     * */
    net: h5plus.XMLHttpRequestStatic;
}