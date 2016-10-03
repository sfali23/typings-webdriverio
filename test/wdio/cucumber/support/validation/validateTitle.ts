/// <reference path="../../../../typings/index.d.ts"/>

import { CallbackStepDefinition } from 'cucumber';
let browser = global.browser;

export default (falseCase: string, expectedTitle: string, done: CallbackStepDefinition) => {
    let title: string = browser.getTitle();
    if (falseCase) {
        title.should.not.equal(expectedTitle, `expected title not to be "${expectedTitle}"`);
    } else {
        title.should.equal(expectedTitle, `expected title to be "${expectedTitle}" but found "${title}"`);
    }
    done();
};
