/// <reference path="../../../typings/index.d.ts"/>

import { StepDefinitions } from 'cucumber';
import validateTitle from '../support/validation/validateTitle';
import validateContent from '../support/validation/validateContent';

module.exports = function then() {
    let step: StepDefinitions = this;
    step.Then(/^I expect that the title is( not)* "([^"]*)?"$/, validateTitle);
    step.Then(/^I expect that (element|inputfield) "([^"]*)?" does( not)* contain any text$/, validateContent);
    step.Then(/^I expect that (element|inputfield) "([^"]*)?"( not)* contains the text "([^"]*)?"$/, validateContent);
};
