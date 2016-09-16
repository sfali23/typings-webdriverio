import client = require('webdriverio');

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

client.remote(options)
    .init()
    .url('https://news.ycombinator.com/')
    .selectorExecute('//div', function (elements: HTMLElement[], message: string) {
        return elements.length + ' ' + message;
    }, 'divs on the page')
    .then(function (res: string) {
        console.log(res);
    })
    .end();