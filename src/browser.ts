/**********************************************************************
 *
 * @模块名称: check
 *
 * @模块用途: check
 *
 * @date: 2021/9/7 14:13
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {chromeVersion, isChrome, isFirefox, firefoxVersion} from "@gaopeng123/utils.types";
import {CheckBrowsers} from "./typing";

/**
 * 检查浏览器类型
 */
const browser = (): CheckBrowsers | undefined => {
    if (isChrome()) {
        return 'chrome';
    }
    if (isFirefox()) {
        return 'firefox';
    }
    return undefined;
};
/**
 * 检查浏览器版本
 * @param browser
 */
export const version = (browser: CheckBrowsers): number => {
    switch (browser) {
        case 'chrome':
            return chromeVersion();
        case 'firefox':
            return firefoxVersion()
    }
};

export default browser;
