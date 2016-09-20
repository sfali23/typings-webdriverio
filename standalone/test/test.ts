import webdriverio = require('webdriverio');
import assert = require('assert');
import {Browser} from 'webdriverio';

describe('Test WebdriverIO in standalone mode', function () {
    // set timeout to 30 seconds
    this.timeout(30000);
    let browser: Browser<any>;

    // hook to run before tests
    before(function () {
        browser = webdriverio.remote({ desiredCapabilities: { browserName: 'chrome' } });
        return browser.init();
    });

    it('should be load correct page and title', function () {
        return browser.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
            .getTitle().then((title: string) => {
                console.log('Current Page Title: %s', title);
                assert(title === 'Web Driver IO - Tutorial Test Page');
            });
    });

    // a "hook" to run after all tests in this block
    after(function () {
        return browser.end();
    });
});
