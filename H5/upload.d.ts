declare module h5plus {
    export interface Uploader {
        /**
         * 新建上传任务
         * @param {string} url
         * @param {UploadOptions} options?
         * @param {(u} success?
         */
        createUpload(url: string, options?: UploadOptions, success?: (u: Upload) => void): void;
        /**
         * 枚举应用的所有上传任务
         * @param {(uploads} success
         * @param {UploadState} state
         */
        enumerate(success: (uploads: Upload[]) => void, state: UploadState): void;
        /**
         * 清除上传任务
         */
        clear(): void;
        /**
         * 开始全部任务
         */
        startAll(): void;
    }

    
    export const enum UploadState {
        /**
         * 初始状态，在创建之后触发此状态事件，上传任务处于可调度状态
         */
        Init = 0,
        /**
         * 上传任务开始处理，开始建立网络连接
         */
        Connecting = 1,
        /**
         * 上传任务请求已经接收，网络连接已建立
         */
        Connected = 2,
        /**
         * 上传任务请求处理中，上传过程中不断触发
         */
        Uploading = 3,
        /**
         * 上传任务已完成（成功或失败）
         */
        Complete = 4,
        /**
         * 上传任务暂停状态，可重新开始
         */
        Pause = 5,
        /**
         * 非任务状态，用于enumerate()和clear()操作所有上传任务
         */
        UnKnown = -1
    }

    interface UploadOptions {
        
        method?: string;
        
        blocksize?: number;
        
        priority?: number;
        
        timeout?: number;
        retry?: number;
        retryInterval?: number;
    }


    interface Upload {
        url: string;
        state: number;
        options: UploadOptions;
        responseText: string;
        uploadedSize: number;
        totalSize: number;
        /**
         * 添加上传文件
         * @param {string} path
         * @param {UploadOptions} options
         */
        addFile(path: string, options: UploadOptions): boolean;
        /**
         * 添加上传数据
         * @param {string} key
         * @param {string} value
         */
        addData(key: string, value: string): boolean;
        /**
         * 开始上传任务
         */
        start(): void;
        /**
         * 停止上传任务
         */
        pause(): void;
        /**
         * 恢复上传任务
         */
        resume(): void;
        /**
         * 取消上传
         */
        abort(): void;
        /**
         * 添加上传任务事件监听器
         * @param {string} type
         * @param {(upload} listener
         * @param {function} status
         * @param {boolean} capture?
         */
        addEventListener(type: string, listener: (upload: Upload, status: UploadState) => void, capture?: boolean): void;
        /**
         * 获取上传请求HTTP响应头部信息
         */
        getAllResponseHeaders(): string;
        /**
         * 获取上传请求指定的HTTP响应头部的值
         * @param {string} key
         */
        getResponseHeader(key: string): string;
        /**
         * 设置上传请求的HTTP头数据
         * @param {string} key
         * @param {string} value
         */
        setRequestHeader(key: string, value: string): void;

    }
}

interface plusStatic {
    /**
     * Uploader模块管理网络上传任务，
     * 用于从本地上传各种文件到服务器，并支持跨域访问操作。
     * 通过plus.uploader可获取上传管理对象。
     * Uploader上传使用HTTP的POST方式提交数据，数据格式符合Multipart/form-data规范
     * 即rfc1867（Form-based File Upload in HTML）协议。
     * */
    uploader: h5plus.Uploader;
}