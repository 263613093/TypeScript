/// <reference path="native.android.d.ts" />
/// <reference path="accelerometer.d.ts" />
/// <reference path="audio.d.ts" />
/// <reference path="barcode.d.ts" />
/// <reference path="camera.d.ts" />
/// <reference path="contacts.d.ts" />
/// <reference path="device.d.ts" />
/// <reference path="downloader.d.ts" />
/// <reference path="events.d.ts" />
/// <reference path="gallery.d.ts" />
/// <reference path="geolocation.d.ts" />

interface plusError {
    code: number;
    message: string;
}

interface pluspopover {
    top: number;
    left: number;
    width: number;
    height: number;
}
interface plusStatic {

}
declare var plus: plusStatic;