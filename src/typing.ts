/**
 * 具体配置
 */
export type BrowserConfig = {
    minimumVersion?: number;
    upgradeLink?: string;
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

export enum ChooseEnum {
    nextTime = 'nextTime',
    never = 'never',
}

/**
 * 用户选择
 */
export type Choose = 'nextTime' | 'never';