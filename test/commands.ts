import {Size, CssProperty} from 'webdriverio';
import client = require('webdriverio');

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

client.remote(options).init()
    .url('file:///C:/Users/sali/GitHub/typings-webdriverio/test/index.html')
    .getElementSize('#google_logo')
    .then((size: Size) => {
        console.log('%s', JSON.stringify(size));
    })
    .getElementSize('#google_logo', 'width')
    .then((width: number) => {
        console.log('Width: %s', width);
    })
    .getElementSize('#google_logo', 'height')
    .then((height: number) => {
        console.log('Height: %s', height);
    })
    .getCssProperty('#lga', 'margin-top')
    .then((result: CssProperty) => {
        console.log('Property: {\"margin-top\": %s}', result.value);
    }, (err: any) => {
        console.log(JSON.stringify(err));
    })
    .getCssProperty('#lga', 'background-color')
    .then((result: CssProperty) => {
        console.log('Property: {\"background-color\": %s}', result.value);
    })
    .getHTML('#quote')
    .then((html: string) => {
        console.log(html.trim());
    })
    .getHTML('#quote', false)
    .then((html: string) => {
        console.log(html.trim());
    })
    .end();
