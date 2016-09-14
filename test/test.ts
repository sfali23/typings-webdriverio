import client = require('webdriverio');

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
    .end();
