/// <reference path="h5.d.ts" />
interface Contact {
    id: string;
    displayName: string;
    name: ContactName;
    nickname: string;
    phoneNumbers: ContactField;
    emails: ContactField;
    addresses: ContactAddress;
    ims: ContactField;
    organizations: ContactOrganization;
    birthday: Date;
    note: string;
    photos: ContactField;
    categories: ContactOrganization;
    urls: ContactOrganization;
    /**
     * 克隆联系人
     */
    clone(): Contact;
    /**
     * 删除联系人
     * @param {function} success
     * @param {(err} error?
     */
    remove(success: () => void, error?: (err: any) => void): void;
    /**
     * 保存联系人
     * @param {function} success
     * @param {(err} error?
     */
    save(success: () => void, error?: (err: any) => void): void;
}
interface ContactName {
    formatted: string;//联系人的完整名称，由其它字段组合生成
    familyName: string;//联系人的姓
    givenName: string;//联系人的名
    middleName: string;//联系人的中间名
    honorificPrefix: string;//联系人的前缀（如Mr.或Dr.）
    honorificSuffix: string;//联系人的后缀
}
interface ContactField {
    type: string;//联系人域类型，如电话号码中的“mobile”、“home”、“company”
    value: string;//联系人域值
    preferred: string;//是否为首选项
}

interface ContactAddress {
    type: string;//联系人地址类型，如“home”表示家庭地址、“company”表示单位地址
    formatted: string;//完整地址，由其它字段组合而成
    streetAddress: string;//完整的街道地址
    locality: string;//城市或地区
    region: string;//省或地区
    country: string;//国家
    postalCode: string;//邮政编码
    preferred: string;//是否为首选项
}
interface ContactOrganization {
    type: string;//联系人所属组织类型，如"company"
    name: string;//联系人所属组织名称
    department: string;//联系人所属组织部门
    title: string;//联系人在组织中的职位
    preferred: string;//是否为首选项
}

interface ContactFindOption {
    filter: ContactFindFilter[];
    multiple: boolean;
}

interface ContactFindFilter {
    logic: string;//可取“and”、“or”、“not”，默认值为“and”。
    field: string;//区配的联系人域，可取联系人的属性名称
    value: string;//区配的联系人值，可使用区配符号“?”和“*”
}

interface AddressBook {
    /**
     * 创建联系人
     */
    create(): Contact;
    /**
     * 在通讯录中查找联系人
     * @param {string[]} contactFields
     * @param {function} success
     * @param {function} error
     * @param {any} options
     */
    find(contactFields:string[],success:()=>void,error:()=>void,options:any):void;
}

declare enum contacts {
    ADDRESSBOOK_PHONE,
    ADDRESSBOOK_SIM
}
interface contactMgr {
    /**
     * 手机通讯录
     * */
    ADDRESSBOOK_PHONE: number;
    /**
     * SIM卡通讯录
     * */
    ADDRESSBOOK_SIM: number;
    /**
     * 获取通讯录对象
     * @param {number} type 要获取的通讯录类型
     * @param {function} success 获取通讯录对象成功回调
     * @param {(err} error?  获取通讯录对象失败回调
     */
    getAddressBook(type:number, success: (book:AddressBook[]) => void, error?: (err: any) => void):void;
}

interface plusStatic {
    /**
     * Contacts模块管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作。通过plus.contacts获取系统通讯录管理对象。
     * */
    contact: contactMgr;
}