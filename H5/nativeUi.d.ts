/// <reference path="h5.d.ts" />
declare module h5plus{
    export interface nativeUI {
        /**
         * 弹出系统选择按钮框
         * @param {actionSheetStyle} style
         * @param {(index} callback?
         */
        actionSheet(style: actionSheetStyle, callback?: (index: nativeUiActionEvent) => void): void;
        /**
         * 弹出系统提示对话框
         * @param {string} message
         * @param {(e} callback
         * @param {string} title
         * @param {string} buttonCapture
         */
        alert(message: string, callback: (e: nativeUiActionEvent) => void, title: string, buttonCapture: string): void;
        /**
         * 弹出系统确认对话框
         * @param {string} message
         * @param {(e} callback?
         * @param {string} title?
         * @param {string[]} buttons?
         */
        confirm(message: string, callback?: (e: nativeUiActionEvent) => void, title?: string, buttons?: string[]): void;
        /**
         * 关闭系统等待对话框
         */
        closeWaiting(): void;
        /**
         * 显示系统等待对话框
         * @param {string} title
         * @param {waitingOptions} options?
         */
        showWaiting(title: string, options?: waitingOptions): void;
        /**
         * 弹出系统日期选择对话框
         * @param {(e} success
         * @param {(e} error?
         * @param {pickDateOptions} options?
         */
        pickDate(success: (e: nativeDateEvent) => void, error?: (e: plusError) => void, options?: pickDateOptions): void;
        /**
         * 弹出系统时间选择对话框
         * @param {(e} success
         * @param {(e} error?
         * @param {pickTimeOptions} options?
         */
        pickTime(success: (e: nativeDateEvent) => void, error?: (e: plusError) => void, options?: pickTimeOptions): void;
        /**
         * 弹出系统输入对话框
         * @param {string} message
         * @param {(e} callback?
         * @param {string} title?
         * @param {string} tip?
         * @param {string[]} buttons?
         */
        prompt(message: string, callback?: (e: promptResult) => void, title?: string, tip?: string, buttons?: string[]): void;
        /**
         * 显示自动消失的提示消息
         * @param {string} msg
         * @param {any} options?
         */
        toast(msg: string, options?: toastOptions): void;
    }


    interface actionSheetStyle {
        title: string;
        cancel?: string;
        buttons:actionButtonStyle[]
    }

    interface actionButtonStyle {
        title: string;
        style?: string;
    }

    interface nativeUiActionEvent {
        index: number;
    }

    interface nativeDateEvent {
        date: Date;
    }

    interface waitingOptions {
        width?: string;
        height?: string;
        color?: string;
        size?: string;
        textalign?: string;
        padding?: string;
        background?: string;
        style?: string;
        modal: boolean;
        padlock?: boolean;
        back?: string;
        loading?: waitingLoadingOptions;
    }
    interface waitingLoadingOptions {
        display: string;
        icon: string;
        interval?: number;
    }

    interface pickDateOptions {
        title: string;
        date: Date;
        minDate: Date;
        maxDate: Date;
        popover: pluspopover;
    }

    interface pickTimeOptions {
        title: string;
        time: Date;
        is24Hour: boolean;
        popover: pluspopover;
    }

    interface promptResult {
        index: number;
        value: string;
    }

    interface toastOptions {
        icon: string;
        duration?: string;
        align?: string;
        verticalAlign?: string;
    }
}

interface plusStatic {
    /**nativeUI管理系统原生界面，可用于弹出系统原生提示对话框窗口、时间日期选择对话框、等待对话框等。*/
    nativeUI: h5plus.nativeUI;
}