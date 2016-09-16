import client = require('webdriverio');
import {Cookie, CookiesResponse} from 'webdriverio';

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

client.remote(options)
    .init()
    .url('http://www.google.com/ncr')
    .setValue('*[name="q"]', 'webdriverio')
    .click('*[name="btnG"]')
    .pause(5000)
    .cookie().then((result: CookiesResponse) => {
        let cookies: Cookie[] = result.value;
        console.log('Cookies: %s', JSON.stringify(cookies));
    })
    .elementActive().then((result: any) => {
        console.log('active: %s', JSON.stringify(result));
    })
    .end();
