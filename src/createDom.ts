/**
 * 创建提示dom
 */
import {BrowserConfig, ChooseEnum} from "./typing";
import {uuid} from "@gaopeng123/utils.string";
import {setLocalStorage} from "./localCache";

export const createDom = (_appKey: string, options: BrowserConfig) => {
    const spanId: string = uuid();
    const dom = [`您的浏览器版本过低，为了更好的交互体验，请您升级浏览器，
        <a style="color: #1890ff;text-decoration:none;" href="${options.upgradeLink}" target="_blank">升级（强烈建议）</a>
        <span id="${spanId}">
    `];

    const choose: any = options.choose;

    if (choose && choose[ChooseEnum.never]) {
        dom.push(`
            ,&nbsp;&nbsp;<span status="${ChooseEnum.never}" style="cursor: pointer;color: #bfbfbf;">不想更新（不建议）</span>
        `);
    }

    if (choose && choose[ChooseEnum.nextTime]) {
        dom.push(`
             ,&nbsp;&nbsp;<span status="${ChooseEnum.nextTime}" style="cursor: pointer;color: #1890ff;">下次再说</span>
         `);
    }
    dom.push(`</span>`);
    const div: any = document.createElement('div');
    div.style.position = 'fixed';
    div.style.bottom = '5px';
    div.style.position = 'fixed';
    div.style['text-align'] = 'center';
    div.style.width = '100%';
    div.style.backgroundColor = '#fff';
    div.innerHTML = dom.join('');
    document.body.appendChild(div);
    /**
     * 点击事件
     * @param e
     */
    const span = document.getElementById(spanId);
    const onClick = (e: Event) => {
        // @ts-ignore
        setLocalStorage(_appKey, {choose: e.target.getAttribute('status')});
        // @ts-ignore
        span.removeEventListener('click', onClick);
        document.body.removeChild(div);
    };
    // @ts-ignore
    span.addEventListener('click', onClick);
};
