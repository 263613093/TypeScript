/// <reference path="h5.d.ts" />
declare module h5plus {
    export interface Speech {
        /**
         * 启动语音识别
         * @param {recordOptions} options?
         * @param {(result} success?
         * @param {(e} error?
         */
        startRecognize(options?: recordOptions, success?: (result: string[]) => void, error?: (e: plusError) => void): void;
        /**
         * 停止语音识别
         */
        stopRecognize(): void;
    }

    interface recordOptions {
        /**语音识别引擎标识*/
        engine?: string;
        /**语音识别引擎服务器地址*/
        service?: string;
        /**语音识别超时时间*/
        timeout?: number;
        /**语音识别引擎的语言*/
        lang?: string;
        /**语音识别是否采用持续模式*/
        continue?: boolean;
        /**指定识别结果识别包括多候选结果*/
        nbest?: number;
        /**识别时是否显示用户界面*/
        userInterface?: boolean;
        /**语音识别开始事件*/
        onstart: () => void;
        /**语音识别结束事件*/
        onend: () => void;
        /**录音开始事件*/
        onaudiostart: () => void;
        /**录音结束事件*/
        onaudioend: () => void;
        /**录音识别开始事件*/
        onrecognizestart: () => void;
        /**录音识别结束事件*/
        onrecognizeend: () => void;
    }
}

interface plusStatic {
    /**Speech模块管理语音输入功能，提供语音识别功能，可支持用户通过麦克风设备进行语音输入内容
     * 通过plus.speech可获取语音输入管理对象。
     * */
    speech: h5plus.Speech;
}