/**
 * 获取配置
 * @param appKey
 */
const getLocalStorage = (appKey: string): any => {
    return JSON.parse(localStorage.getItem(appKey) || "{}")
};
/**
 * 设置静态配置
 * @param appKey
 * @param value
 */
export const setLocalStorage = (appKey: string, value: object): void => {
    localStorage.setItem(appKey, JSON.stringify(Object.assign({}, getLocalStorage(appKey), value)))
};
/**
 * 最后的选择
 * @param appKey
 */
export const lastChoose = (appKey: string) => {
    return getLocalStorage(appKey).choose;
};

