declare module h5plus {

    interface NViewOption {
        id?: string;
        top?: string;
        left?: string;
        width?: string;
        height?: string;
        position?: WebviewPosition;
        dock?: WebviewDock;
    }

    interface NView {
        /**
         * 获取窗口实际度量信息
         * @param {(v} callback
         */
        getMetrics(callback:(v:Metrics)=>void): void;
    }

    interface NWaiting {
        /**
         * 设置等待控件上显示的文字
         * @param {string} title
         */
        setTitle(title: string): void;
        /**
         * 关闭等待控件
         */
        close(): void;
        /**自定义关闭事件*/
        onclose: () => void;

    }



    interface Metrics {
        height: number;
        left: number;
        top: number;
        width: number;
    }

    export interface ui {
        /**
         * 弹出系统提示框
         * @param {string} msg
         * @param {function} callback?
         * @param {string} title?
         * @param {string} buttonCapture?
         */
        alert(msg: string, callback?: () => void, title?: string, buttonCapture?: string): void;

        /**
         * 关闭程序启动界面
         */
        closeSplashscreen(): void;
        /**
         * 关闭已经打开的原生窗口
         * @param {any} win
         * @param {Mui_animationType} anoClose?
         * @param {number} duration?
         */
        closeWindow(win: string | WebviewObject, anoClose?: Mui_animationType, duration?: number): void;
        /**
         * 弹出系统确认对话框
         * @param {string} msg
         * @param {function} callback?
         * @param {string} title?
         * @param {Array<string>} buttons?
         */
        confirm(msg: string, callback?: (i: number) => void, title?: string, buttons?: Array<string>): void;

        /**
         * 创建新的原生控件对象
         * @param {string} identity
         * @param {NViewOption} options
         */
        createView(identity: string, options: NViewOption): NView;
        /**
         * 
         * @param {string} title
         * @param {any} options?
         */
        createWaiting(title: string, options?: any): NWaiting;

        /**
         * 创建新的原生窗口
         * @param {string} url
         * @param {MuiWebviewStyle} options?
         */
        createWindow(url: string, options?: MuiWebviewStyle): NWindow;
        /**
         * 枚举所有原生窗口
         */
        enumWindow(): Array<NWindow>;
        /**
         * 查找指定窗口
         * @param {string} name
         */
        findWindowByName(name: string): NWindow;
        /**
         * 获取自身窗口
         */
        getSelfWindow(): NWindow;
        /**
         * 是否全屏
         */
        isFullscreen(): boolean;
        /**
         * 弹出日期选择界面
         * @param {function} success
         * @param {function} error?
         * @param {DateOption} ops?
         */
        pickDate(success: (v: Date) => void, error?: (error: {message:string}) => void, ops?: DateOption): void;
        /**
         * 弹出时间选择界面
         * @param {(v} success
         * @param {(error} error?
         * @param {DateOption} ops?
         */
        pickTime(success: (v: Date) => void, error?: (error: { message: string }) => void, ops?: DateOption): void;
        /**
         * 系统输入框操作的回调函数
         * @param {string} msg
         * @param {(i} callback?
         * @param {function} v
         * @param {string} title?
         * @param {string} tip?
         * @param {string[]} buttons?
         */
        prompt(msg: string, callback?: (i:number,v:string) => void, title?: string, tip?: string, buttons?: string[]): void;
        /**
         * 设置全屏
         * @param {boolean} v
         */
        setFullscreen(v: boolean): void;
        /**
         * 显示自动消失的消息
         * @param {string} msg
         * @param {any} ops?
         */
        toast(msg: string, ops?: any): void;
    }
}
type NWindowEvent = "close" | "loading" | "loaded" | "failed" | "back" | "menu" | "search" | "volumeup" |"volumedown";
interface NWindow {
    addEventListener(event: NWindowEvent, callback: () => void, capture?: boolean): void;
    /**
     * 在窗口中添加原生界面控件
     * @param {h5plus.NView} view
     */
    append(view: h5plus.NView): void;
    /**
     * 添加页面预先加载的js文件
     * @param {string} file
     */
    appendPreloadJsFile(file: string): void;
    /**
     * 窗口后退到上次加载的页面内容
     */
    back(): void;
    /**
     * 历史记录记录查询的回调函数
     * @param {(v} callback
     */
    canBack(callback: (v: boolean) => void): void;
    /**
     * 查询窗口是否可前进到上次加载的页面内容
     * @param {function} callback(v
     */
    canForward(callback: (v: boolean) => void): void;
    /**
     * 清空原生窗口加载的内容
     */
    clear(): void;
    /**
     * 关闭创建新的原生窗口
     * @param {Mui_animationType} aniClose?
     * @param {number} duration?
     */
    close(aniClose?: Mui_animationType, duration?: number): void;
    /**
     * 关闭原生窗口刷新状态
     */
    endPullToRefresh(): void;
    /**
     * 执行脚本
     * @param {string} js
     */
    evalJS(js: string): void;
    /**
     * 
     * @param {string} id
     */
    findViewById(id: string): h5plus.NView;
    /**
     * 窗口前进到上次加载的页面内容
     */
    forward(): void;
    /**
     * 获取窗口实际度量信息
     * @param {(v} callback
     */
    getMetrics(callback: (v: h5plus.Metrics) => void): void;
    /**
     * 获取窗口属性
     */
    getOption(): MuiWebviewStyle;
    /**
     * 获取窗口加载页面的标题
     */
    getTitle(): string;
    /**
     * 获取窗口加载页面的地址
     */
    getUrl(): string;
    /**
     * 窗口加载新的页面
     * @param {string} url
     */
    load(url: string): void;
    /**
     * 重新加载窗口当前显示的页面
     */
    reload(): void;
    /**
     * 移除事件监听器
     * */
    removeEventListener(event: NWindowEvent, listener: () => void);
    /**
     * 设置内容是否可见
     * @param {boolean} v
     */
    setContentVisible(v: boolean): void;
    /**
     * 设置窗口参数
     * @param {MuiWebviewStyle} option
     */
    setOption(option: MuiWebviewStyle): void;
    /**
     * 预加载JS
     * @param {string} file
     */
    setPreloadJsFile(file: string): void;
    /**
     * 设置窗口的下拉刷新功能
     * @param {pullRefreshOption} ops?
     * @param {function} callback
     */
    setPullToRefresh(ops: pullRefreshOption, callback?: () => void): void;
    /**
     * 设置窗口是否可见
     * @param {boolean} visible
     */
    setVisible(visible: boolean): void;
    /**
     * 显示创建新的原生窗口
     * @param {Mui_animationType} aniShow 显示原生窗口的动画效果
     * @param {number} duration? 显示原生窗口的动画持续时间
     * @param {string} assWin? 新打开原生窗口动画需要关联的窗口名称
     */
    show(aniShow: Mui_animationType, duration?: number, assWin?: string): void;
    /**
     * 窗口停止加载页面内容
     */
    stop(): void;
}

interface DateOption {
    title?: string;
    date?: string;
    startYear?: number;
    endYear?: number;
    minDate?: Date;
    maxDate?: Date;
    popover?: {
        top?: number;
        left?: number;
        width?: number;
        height?: number;
    };
}

interface toastOption {
    icon: string;
    duration?: "long" | "short";
    align?: "left" | "center" | "right";
    verticalAlign?: "left" | "center" | "right";
}

interface plusStatic {
    ui: h5plus.ui;
}