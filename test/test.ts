import {WebdriverIO} from 'webdriverio';

import client = require('webdriverio');

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

let wd: WebdriverIO = client.remote(options)
    .init()
    .url('http://www.google.com/ncr');

wd.element('#hplogo')
    .then((result: Object) => {
        console.log('||||||||||||||| %s', JSON.stringify(result));
    });

wd.setValue('*[name="q"]', 'webdriverio')
    .click('*[name="btnG"]')
    .pause(5000)
    .end();
