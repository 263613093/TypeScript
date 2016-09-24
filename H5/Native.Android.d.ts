interface ClassObject {
    plusGetAttribute: (name: string) => any;
    plusSetAttribute: (name: string, value: any) => any;
}
interface InstanceObject {
    plusGetAttribute: (name: string) => any;
    plusSetAttribute: (name: string, value: any) => any;
}


interface android {
    importClass: (classname: string) => ClassObject;
    newObject: (classname: string, ...args: any[]) => InstanceObject;
    getAttribute: (obj: any, name: string) => any;
    setAttribute: (obj: any, name: string, value: any) => void;
    invoke: (obj: any, name: string, ...args: any[]) => any;
    implements: (name: string, obj: any) => any;
    runtimeMainActivity: () => any;
    currentWebview: () => any;
}

interface plus {
    android: android;
}