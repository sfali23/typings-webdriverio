import {Size, Point, CssProperty, WebElementResponse, StringResponse, SizeResponse, BooleanResponse, WebElementsResponse, PointResponse} from 'webdriverio';
import client = require('webdriverio');

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

client.remote(options).init()
    .url('file:///C:/Users/sali/GitHub/typings-webdriverio/test/index.html')
    .getElementSize('#google_logo').then((size: Size) => {
        console.log('%s', JSON.stringify(size));
    })
    .getElementSize('#google_logo', 'width').then((width: number) => {
        console.log('Width: %s', width);
    })
    .getElementSize('#google_logo', 'height').then((height: number) => {
        console.log('Height: %s', height);
    })
    .getCssProperty('#lga', 'margin-top').then((result: CssProperty) => {
        console.log('Property: {\"margin-top\": %s}', result.value);
    }, (err: any) => {
        console.log(JSON.stringify(err));
    })
    .getCssProperty('#lga', 'background-color').then((result: CssProperty) => {
        console.log('Property: {\"background-color\": %s}', result.value);
    })
    .getHTML('#quote').then((html: string) => {
        console.log(html.trim());
    })
    .getHTML('#quote', false).then((html: string) => {
        console.log(html.trim());
    })
    .element('#google_logo').then((result: WebElementResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s', result.selector, result.value.ELEMENT);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .element('#quote').then((result: WebElementResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s', result.selector, result.value.ELEMENT);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .element('#lga').then((result: WebElementResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s', result.selector, result.value.ELEMENT);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .element('#form').then((result: WebElementResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s', result.selector, result.value.ELEMENT);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .element('#inputText').then((result: WebElementResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s', result.selector, result.value.ELEMENT);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .element('#notexists').then((result: WebElementResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s%s', result.selector, result.type, result.message);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .elementIdAttribute(1, 'style').then((result: StringResponse) => {
        console.log('style:%s', result.value);
    })
    .elementIdCssProperty(1, 'height').then((result: StringResponse) => {
        console.log('height:%s', result.value);
    })
    .elementIdCssProperty(1, 'background-color').then((result: StringResponse) => {
        console.log('background-color:%s', result.value);
    })
    .elementIdDisplayed(1).then((result: BooleanResponse) => {
        console.log('1:%s', result.value);
    })
    .elementIdElement(1, '#google_logo').then((result: WebElementResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s', result.selector, result.value.ELEMENT);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .elementIdElements(1, '#google_logo').then((result: WebElementsResponse) => {
        console.log('-------------------------------------------------------');
        console.log('%s:%s', result.selector, result.value.length);
        console.log('-------------------------------------------------------');
        console.log();
    })
    .elementIdEnabled(1).then((result: BooleanResponse) => {
        console.log('1:%s', result.value);
    })
    .elementIdLocation(1).then((result: PointResponse) => {
        let point: Point = result.value;
        console.log('1:%s', JSON.stringify(point));
    })
    .elementIdName(0).then((result: StringResponse) => {
        console.log('0:%s', result.value);
    })
    .elementIdSize(0).then((result: SizeResponse) => {
        let size: Size = result.value;
        console.log('0:%s', JSON.stringify(size));
    })
    .elementIdText(2).then((result: StringResponse) => {
        console.log('2:%s', result.value);
    })
    .elementIdValue(4, 'Hello World')
    .pause(2000)
    .elements('#form').then((result: any) => {
        console.log(JSON.stringify(result));
    })
    .end();
