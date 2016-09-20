import assert = require('assert');

describe('Test WebdriverIO in standalone mode', function () {
    // set timeout to 30 seconds
    this.timeout(30000);

    it('should be load correct page and title', function () {
        browser.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html');
        let title: string = browser.getTitle();
        console.log('Current Page Title: %s', title);
        assert(title === 'Web Driver IO - Tutorial Test Page');
        return browser;
    });

});
