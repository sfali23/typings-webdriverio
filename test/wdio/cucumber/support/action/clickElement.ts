/// <reference path="../../../../typings/index.d.ts"/>

import { CallbackStepDefinition } from 'cucumber';
let browser = global.browser;

export default (action: string, type: string, element: string, done: CallbackStepDefinition) => {
    if (action === 'click') {
        browser.click(element);
    } else {
        browser.doubleClick(element);
    }
    done();
};
