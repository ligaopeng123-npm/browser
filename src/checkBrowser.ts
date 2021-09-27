/**
 * 根据配置检测浏览器版本
 * @param appKey
 * @param opt
 */
import {ChooseEnum, Options} from "./typing";
import browser, {version} from "./browser";
import {lastChoose} from "./localCache";
import {createDom} from "./createDom";
import {assignDeep} from "@gaopeng123/utils";

const defaultOptions = {
    chrome: {
        minimumVersion: 80,
        upgradeLink: 'http://chrome.illzjp.cn/dl.html'
    },
    firefox: {
        minimumVersion: 80,
        upgradeLink: 'https://download-ssl.firefox.com.cn/releases-sha2/stub/official/zh-CN/Firefox-latest.exe'
    }
};
const checkBrowser = (appKey: string, options?: Options) => {
    const _appKey = `${appKey}-browser`;
    /**
     * 如果检测结果不是永不升级 则下次继续检查
     */
    if (lastChoose(_appKey) !== ChooseEnum.never) {
        const key = browser();
        if (key && defaultOptions[key]) {
            const _options = assignDeep({}, defaultOptions, options)[key];
            /**
             * 小于配置的浏览器
             */
            if (version(key) < _options.minimumVersion) {
                createDom(_appKey, _options);
            }
        }
    }
};
export default checkBrowser;