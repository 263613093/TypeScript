/// <reference path="h5.d.ts" />
interface Download {
    /**
     * 下载任务的标识
     */
    id: string;
    /**
     * 下载文件的地址
     */
    url: string;
    /**
     * 任务的状态
     */
    state: number;
    /**
     * 下载任务的参数
     */
    options: any;
    /**
     * 下载的文件名称
     */
    filename: string;
    /**
     * 已完成下载文件的大小
     */
    downloadSize: number;
    /**
     * 下载任务文件的总大小
     */
    totalSize: number;
    /**
     * 取消下载任务
     */
    abort(): void;
    /**
     * 添加下载任务事件监听器
     * @param {string} event
     * @param {(d} callback?
     * @param {function} status
     * @param {boolean} capture?
     */
    addEventListener(event: string, callback?: (d: Download, status: number) => void, capture?: boolean): void;
    /**
     * 获取下载请求HTTP响应头部信息
     */
    getAllResponseHeaders(): string;
    /**
     * 获取下载请求指定的HTTP响应头部的值
     * @param {string} headerName HTTP响应头数据名称
     */
    getResponseHeader(headerName?: string): string;
    /**
     * 暂停下载任务
     */
    pause(): void;
    /**
     * 继续下载任务
     */
    resume(): void;
    /**
     * 设置下载请求的HTTP头数据
     * @param {string} headerName HTTP请求的头数据名称
     * @param {string} headerValue HTTP请求的头数据值
     */
    setRequestHeader(headerName: string, headerValue: string): void;
    /**
     * 开始下载任务
     */
    start(): void;
}

interface DownloadOptions {
    method: string;
    data: string;
    filename: string;
    priority: number;
    timeout: number;
    retry: number;
    retryInterval: number;
}

interface downloader {
    /**
     * 新建下载任务
     * @param {string} url 要下载文件资源地址
     * @param {DownloadOptions} options? 下载任务的参数
     * @param {(d} complete? 下载任务完成后的回调,下载任务对象
     * @param {function} status  Http传输协议状态码，如果未获取传输状态则其值则为0，如下载成功其值通常为200
     */
    createDownload(url: string, options?: DownloadOptions, complete?: (d: Download, status: number) => void): Download;
    /**
     * 枚举应用的所有下载任务
     * @param {Download[]} downloads 枚举操作完成后的回调, 枚举到的下载任务对象数组
     * @param {number} state 要枚举下载任务的状态，默认值为所有未完成的下载任务
     */
    enumerate(downloads: Download[], state?: number): void;
    /**
     * 清除下载任务
     * @param {number} state 要清除下载任务的状态，默认值为所有已完成的下载任务
     */
    clear(state: number): void;
    /**
     * 开始所有下载任务
     */
    startAll() : void;
}

interface plusStatic {
    /**
     * Downloader模块管理网络文件下载任务，用于从服务器下载各种文件，并支持跨域访问操作。
     * 通过plus.downloader获取下载管理对象。
     * Downloader下载使用HTTP的GET/POST方式请求下载文件，符合标准HTTP/HTTPS传输协议。
     * */
    downloader: downloader;
}