/// <reference path="h5.d.ts" />
declare module h5plus {
    export interface IO {
        /**
         *  应用运行资源目录常量
         * */
        PRIVATE_WWW: number;
        /**
         * 应用私有文档目录常量
         * */
        PRIVATE_DOC: number;
        /**
         * 程序公用文档目录常量
         * */
        PUBLIC_DOCUMENTS: number;
        /**
         * 程序公用下载目录常量
         * */
        PUBLIC_DOWNLOADS: number;
        /**
         * 获取指定的文件系统，可通过type指定获取文件系统的类型。
         * 获取指定的文件系统对象成功通过succesCB回调返回，失败则通过errorCB返回。
         * @param {number} type
         * @param {(fs} success
         * @param {(e} error?
         */
        requestFileSystem(type: number, success: (fs: FileSystem) => void, error?: (e: any) => void): void;
        /**
         * 通过URL参数获取目录对象或文件对象
         * @param {string} url
         * @param {(d} success
         * @param {(e} error?
         */
        resolveLocalFileSystemURL(url: string, success: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 将本地URL路径转换成平台绝对路径
         * @param {string} url
         */
        convertLocalFileSystemURL(url: string): string;
        /**
         * 将平台绝对路径转换成本地URL路径
         * @param {string} path
         */
        convertAbsoluteFileSystem(path: string): string;
    }

    interface DirectoryReader {
        /**
         * 获取当前目录中的所有文件和子目录
         * @param {(d} success
         * @param {(e} error?
         */
        readEntries(success:(d:DirectoryEntry)=>void,error?:(e:any)=>void): void;
    }

    interface FileSystem {
        /**
         * 文件系统的名称
         * */
        name: string;
        /**
         *  文件系统的根目录
         * */
        root: string;
    }

    interface Flags{
        /**
         * 是否创建对象标记,指示如果文件或目录不存在时是否进行创建，默认值为false。
         * */
        create: boolean;
        /**
         * 反向操作标记,其本身没有任何效果，需与create属性值设置为true时一起使用，如果目标文件或目录已经存在则会导致文件或目录打开失败，默认值为false。
         * */
        exclusive: boolean;
    }

    interface DirectoryEntry {
        isFile: boolean;
        isDirectory: boolean;
        name: string;
        fullPath: string;
        fileSystem: any;
        /**
         * 获取目录的属性
         * @param {(d} success
         * @param {(e} error
         * @param {boolean} recursive? 是否递归子目录，默认false
         */
        getMetadata(success: (d: Metadata) => void, error: (e: any) => void, recursive?: boolean): void;
        /**
         * 移动目录
         * @param {DirectoryEntry} parent
         * @param {string} newName?
         * @param {(d} success?
         * @param {(e} error?
         */
        moveTo(parent: DirectoryEntry, newName?: string, success?: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 拷贝目录
         * @param {DirectoryEntry} parent
         * @param {string} newName?
         * @param {(d} success?
         * @param {(e} error?
         */
        copyTo(parent: DirectoryEntry, newName?: string, success?: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 获取目录路径转换为URL地址
         */
        toURL(): string;
        /**
         * 获取目录路径转换为本地路径URL地址
         */
        toLocalURL(): string;
        /**
         * 获取目录路径转换为网络路径URL地址
         */
        toRemoteURL(): string;
        /**
         * 删除目录
         * @param {(d} success?
         * @param {(e} error?
         */
        remove(success?: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 获取目录所属的父目录
         * @param {(d} success?
         * @param {(e} error?
         */
        getParent(success?: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 创建一个目录读取对象，用户读取目下的文件及子目录。
         */
        createReader(): DirectoryReader;
        /**
         * 创建或打开子目录
         * @param {string} path 要操作目录相对于当前目录的地址
         * @param {Flags} flag?
         * @param {(d} success?
         * @param {(e} error?
         */
        getDirectory(path: string, flag?: Flags, success?: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 创建或打开文件
         * @param {string} path
         * @param {Flags} flag?
         * @param {(d} success?
         * @param {(e} error?
         */
        getFile(path: string, flag?: Flags, success?: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 递归删除目录
         * @param {(d} success?
         * @param {(e} error?
         */
        removeRecursively(success?: (d: DirectoryEntry) => void, error?: (e: any) => void): void;
    }

    interface File {
        /**
         * 文件数据对象的数据大小，单位为字节
         */
        size: number;
        /**
         * 文件数据对象MIME类型
         */
        type: string;
        /**
         * 文件数据对象的名称，不包括路径
         */
        name: string;
        /**
         * 文件对象的最后修改时间
         */
        lastModifiedDate: Date;
        /**
         * 获取文件指定的数据内容，其中end必须大于start。
         * @param {number} start?
         * @param {number} end?
         */
        slice(start?: number, end?: number): File;
        /**
         * 关闭文件数据对象
         */
        close(): void;
    }

    interface FileEntry {
        isFile: boolean;
        isDirectory: boolean;
        name: string;
        fullPath: string;
        fileSystem: any;
        /**
         * 获取文件的属性信息
         * @param {(d} success
         * @param {(e} error
         */
        getMetadata(success: (d: Metadata) => void, error: (e: any) => void): void;
        /**
         * 移动文件
         * @param {DirectoryEntry} parent
         * @param {string} newName
         * @param {(d} success?
         * @param {(d} error?
         */
        moveTo(parent: DirectoryEntry, newName: string, success?: (d: DirectoryEntry) => void, error?: (d: any) => void): void;
        /**
         * 拷贝文件
         * @param {DirectoryEntry} parent
         * @param {string} newName
         * @param {(d} success?
         * @param {(d} error?
         */
        copyTo(parent: DirectoryEntry, newName: string, success?: (d: DirectoryEntry) => void, error?: (d: any) => void): void;
        /**
         * 获取文件路径转换为URL地址
         */
        toURL(): string;
        /**
         * 获取文件路径转换为本地路径URL地址
         */
        toLocalURL(): string;
        /**
         * 获取文件路径转换为网络路径URL地址
         */
        toRemoteURL(): string;
        /**
         * 删除文件
         * @param {(f} success?
         * @param {(e} error?
         */
        remove(success?: (f: FileEntry) => void, error?: (e: any) => void): void;
        /**
         * 获取文件所属的父目录
         * @param {(f} success?
         * @param {(e} error?
         */
        getParent(success?: (f: DirectoryEntry) => void, error?: (e: any) => void): void;
        /**
         * 获取文件关联的写文件操作对象FileWriter
         * @param {(writter} success?
         * @param {(e} error?
         */
        createWriter(success?: (writter: FileWritter) => void, error?: (e: any) => void): void;
        /**
         * 获取文件数据对象
         * @param {(f} success?
         * @param {(e} error?
         */
        file(success?: (f: File) => void, error?: (e: any) => void): void;
    }


    interface Metadata {
        modificationTime: Date;
        size: number;
        directoryCount: number;
        fileCount: number;
    }


    interface FileWritter {
        INIT: number;
        WRITING: number;
        DONE: number;

        readyState: number;
        length: number;
        position: number;
        error: number;
        /**
         * 取消
         */
        abort(): void;
        /**
         * 定位到的位置
         * @param {number} position
         */
        seek(position: number): void;
        /**
         * 按照指定长度截断文件
         * @param {number} length
         */
        truncate(length: number): void;
        /**
         * 写入数据
         * @param {string} data
         */
        write(data: string): void;
        /**
         * 写入文件开始时的回调函数
         * @param {(e} event
         */
        onwritestart(event: (e: FileWritter) => void): void;
        /**
         * 写入文件过程中的回调函数
         * @param {(e} event
         */
        onprogress(event: (e: FileWritter) => void): void;
        /**
         * 写入文件成功完成的回调函数
         * @param {(e} event
         */
        onwrite(event: (e: FileWritter) => void): void;
        /**
         * 取消写入文件时的回调函数
         * @param {(e} event
         */
        onabort(event: (e: FileWritter) => void): void;
        /**
         * 文件写入操作失败时调用的回调函数
         * @param {(e} event
         */
        onwriteend(event: (e: FileWritter) => void): void;
    }
}

interface plusStatic {
    /**
     * IO模块管理本地文件系统，用于对文件系统的目录浏览、文件的读取、文件的写入等操作。
     * 通过plus.io可获取文件系统管理对象。
     * */
    io: h5plus.IO;
}