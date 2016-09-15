import client = require('webdriverio');

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

client.remote(options)
    .init()
    .url('http://thenostalgiamachine.com/')
    .pause(2000)
    .selectByIndex('select', 4)
    .pause(2000)
    .selectByValue('select', '2009')
    .pause(2000)
    .selectByVisibleText('select', '2008')
    .pause(2000)
    .end();