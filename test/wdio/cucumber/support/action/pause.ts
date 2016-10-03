/// <reference path="../../../../typings/index.d.ts"/>

import { CallbackStepDefinition } from 'cucumber';
let browser = global.browser;

export default (ms: string, done: CallbackStepDefinition) => {
    let intMs: number = parseInt(ms, 10);
    browser.pause(intMs);
    done();
};
