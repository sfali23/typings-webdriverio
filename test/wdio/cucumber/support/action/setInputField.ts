/// <reference path="../../../../typings/index.d.ts"/>

import { CallbackStepDefinition } from 'cucumber';

export default (method: string, value: string, element: string, done: CallbackStepDefinition) => {
    if (method === 'add') {
        browser.addValue(element, value);
    } else {
        browser.setValue(element, value);
    }
    done();
};
