/**
 * 选择的枚举
 */
export enum ChooseEnum {
    nextTime = 'nextTime',
    never = 'never',
}

/**
 * 具体配置
 */
export type BrowserConfig = {
    minimumVersion?: number;
    upgradeLink?: string;
    choose?: {
        [ChooseEnum.nextTime]?: boolean;
        [ChooseEnum.never]?: boolean;
    }
};
/**
 * 浏览器配置
 */
export type Options = {
    chrome?: BrowserConfig;
    firefox?: BrowserConfig;
};
/**
 * 支撑检测的浏览器
 */
export type CheckBrowsers = 'chrome' | 'firefox';
