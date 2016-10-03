/// <reference path="../../../typings/index.d.ts"/>

import { StepDefinitions } from 'cucumber';
import setInputField from '../support/action/setInputField';
import clickElement from '../support/action/clickElement';
import pause from '../support/action/pause';
import scroll from '../support/action/scroll';

module.exports = function when() {
    let step: StepDefinitions = this;
    step.When(/^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/, setInputField);
    step.When(/^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, clickElement);
    step.When(/^I pause for (\d+)ms$/, pause);
    step.When(/^I scroll to element "([^"]*)?" to offset "(-?\d+)" and "(-?\d+)"$/, scroll);
};
