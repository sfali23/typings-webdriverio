import client = require('webdriverio');

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

client.remote(options)
    .init()
    .url('https://news.ycombinator.com/')
    .selectorExecute('//div', function (inputs: string, message: string) {
        return inputs.length + ' ' + message;
    }, 'divs on the page')
    .then(function (res: string) {
        console.log(res);
    })
    .end();