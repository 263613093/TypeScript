/// <reference path="h5.d.ts" />
interface RecordOption {
    filename: string;
    samplerate: string;
    format: string;
}
interface AudioRecorder {
    /**
     * 设备录音支持的采用率
     * */
    supportedSamplerates: string[];
    /**
     * 设备录音支持的文件格式
     * */
    supportedFormats: string[];
    /**
     * 调用设备麦克风进行录音操作
     * @param {RecordOption} option 设置录音的参数
     * @param {(f} success 录音操作成功回调函数
     * @param {function} error? 录音操作错误回调函数
     */
    record(option: RecordOption, success: (f: string) => void, error?: () => void): void;
    /**
     * 结束录音操作
     * */
    stop: () => void;
}

interface AudioPlayer {
    /**
     * 开始播放音频
     * @param {function} success
     * @param {(err} error
     */
    play(success: () => void, error: (err: any) => {}): void;
    /**
     * 暂停播放音频
     */
    pause(): void;
    /**
     * 恢复播放音频
     */
    resume(): void;
    /**
     * 停止播放音频
     */
    stop(): void;
    /**
     *  跳到指定位置播放音频
     * @param {number} position 音频播放要跳到的位置，单位为s
     */
    seekTo(position: number): void;
    /**
     * 获取音频流的总长度
     */
    getDuration(): number;
    /**
     * 获取音频流当前播放的位置
     */
    getPosition(): number;
    /**
     * 设置音频输出线路
     * @param {number} route 音频播放时输出线路常量
     */
    setRoute(route:number):void;
}

interface audio {
    /**
     * 设备的扬声器音频输出线路
     * */
    ROUTE_SPEAKER: number;
    /**
     * 设备听筒音频输出线路
     * */
    ROUTE_EARPIECE: number;
    /**
    * 获取当前设备的录音对象
    */
    getRecorder(): AudioRecorder;
    /**
     * 创建音频播放对象
     * @param {string} path 要播放的音频文件的路径。
     */
    createPlayer(path: string):AudioPlayer;
}


interface plusStatic {
    /**
     * Audio模块用于提供音频的录制和播放功能，可调用系统的麦克风设备进行录音操作
     * 也可调用系统的扬声器设备播放音频文件
     * 通过plus.audio获取音频管理对象。
     * */
    audio: audio;
}