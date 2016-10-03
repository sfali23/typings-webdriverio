/// <reference path="../../../../typings/index.d.ts"/>

import { CallbackStepDefinition } from 'cucumber';
let browser = global.browser;

export default (selector: string, xoffset: string, yoffset: string, done: CallbackStepDefinition) => {
    let intXoffset: number = parseInt(xoffset, 10);
    let intYoffset: number = parseInt(yoffset, 10);
    browser.scroll(selector, intXoffset, intYoffset);
    done();
};
