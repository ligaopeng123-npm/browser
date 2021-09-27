/**
 * 创建提示dom
 */
import {BrowserConfig, ChooseEnum} from "./typing";
import {uuid} from "@gaopeng123/utils";
import {setLocalStorage} from "./localCache";

export const createDom = (_appKey: string, options: BrowserConfig) => {
    const spanId: string = uuid();
    const dom = `
        您的浏览器版本过低，为了更好的交互体验，请您升级浏览器，
        <a style="color: #1890ff;text-decoration:none;" href="${options.upgradeLink}" target="_blank">升级（强烈建议）</a>，
        <span id="${spanId}">
            <span status="${ChooseEnum.never}" style="cursor: pointer;color: #bfbfbf;">不想更新（不建议）</span>，
            <span status="${ChooseEnum.nextTime}" style="cursor: pointer;color: #1890ff;">下次再说</span>
        </span>
    `;
    const div: any = document.createElement('div');
    div.style.position = 'fixed';
    div.style.bottom = '5px';
    div.style.position = 'fixed';
    div.style['text-align'] = 'center';
    div.style.width = '100%';
    div.innerHTML = dom;
    document.body.appendChild(div);
    // @ts-ignore
    document.getElementById(spanId).addEventListener('click', (e: Event) => {
        // @ts-ignore
        setLocalStorage(_appKey, {choose: e.target.getAttribute('status')});
        document.body.removeChild(div);
    });
};