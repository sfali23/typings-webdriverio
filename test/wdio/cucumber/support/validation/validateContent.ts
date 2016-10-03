/// <reference path="../../../../typings/index.d.ts"/>

import { CallbackStepDefinition } from 'cucumber';
let browser = global.browser;

export default (type: string, element: string, falseCase: string, expectedText: string | CallbackStepDefinition, done?: CallbackStepDefinition) => {
    let parsedExpectedText: string = '';
    let boolFalseCase: boolean = !!falseCase;
    let doneCallback: CallbackStepDefinition = done;
    if (typeof expectedText === 'string') {
        parsedExpectedText = expectedText;
    } else {
        // if there is no "expectedText" and test for input field or element does not contain any text, "falseCase" should be equal to " not" and "boolFalseCase"
        // should be true in this case, make "boolFalseCase" false and we will test eqaulity with current value of input field or element
        // 
        // if there is no "expectedText" and test for input field or element does contain any text, "falseCase" should be "undefined" and "boolFalseCase"
        // should be false in this case, make "boolFalseCase" true and we will test ineqaulity with current value of input field or element
        doneCallback = expectedText;
        boolFalseCase = !boolFalseCase;
    }
    if (parsedExpectedText === '' && (typeof falseCase) === 'undefined') {
        // if is "falseCase" is "undefined"
        boolFalseCase = true;
    }
    let text: string = <string>((type === 'inputfield') ? browser.getValue(element) : browser.getText(element));
    if (boolFalseCase) {
        parsedExpectedText.should.not.equal(text);
    } else {
        parsedExpectedText.should.equal(text);
    }
    doneCallback();
};
