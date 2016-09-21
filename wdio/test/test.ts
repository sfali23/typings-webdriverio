import assert = require('assert');
import {Cookie} from 'webdriverio';

describe('Test WebdriverIO in standalone mode', function () {
    // set timeout to 60 seconds
    this.timeout(60 * 1000);

    it('should be load correct page and title', function () {
        browser.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html');
        let title: string = browser.getTitle();
        console.log('Current Page Title: %s', title);
        assert(title === 'Web Driver IO - Tutorial Test Page');
        return browser;
    });

    it('should demonstrate the \"addValue\" command', function () {
        browser.setValue('#fname', 'test').addValue('#fname', ' 123');
        let value: string = <string>browser.getValue('#fname');
        console.log('First name: %s', value);
        assert(value === 'test 123');
        return browser;
    });

    it('should demonstrate the \"clearElement\" command', function () {
        browser.setValue('#fname', 'test');
        let value: string = <string>browser.getValue('#fname');
        console.log('First name after set: %s', value);
        assert(value === 'test');
        browser.clearElement('#fname');
        value = <string>browser.getValue('#fname');
        console.log('First name after clear: %s', value);
        assert(value === '');
        return browser;
    });

    it('should demonstrate the \"click\" command', function () {
        browser.scroll('#modalbutton')
            //  click button by id
            .click('#modalbutton');
        // wait for modal to be visable
        browser.waitForVisible('#myModal', 5000);

        let text: string = <string>browser.getText('//div[@class=\'modal-body\']');
        console.log('Text found: %s', text);
        assert(text === 'I agree to the following...');

        // click the close button
        browser.click('#closebutton');
        // pause for 500 milli seconds otherwise control doesn't  get transffered to parent
        browser.pause(500);

        return browser;
    });

    it('should select checked options from selectbox', function () {
        browser.scroll('#selectbox');

        let text: string = <string>browser.getText('#selectbox option:checked');
        console.log('Defaut selected text: %s', text);
        assert(text === 'Los Angeles Kings');

        browser.pause(500);
        browser.selectByVisibleText('#selectbox', 'San Jose Sharks');
        text = <string>browser.getText('#selectbox option:checked');
        console.log('Selected Text by \'selectByVisibleText\': %s', text);
        assert(text === 'San Jose Sharks');

        browser.pause(500);
        browser.selectByIndex('#selectbox', 21);
        text = <string>browser.getText('#selectbox option:checked');
        console.log('Selected Text by\'selectByIndex\': %s', text);
        assert(text === 'Pittsburgh Penguins');

        browser.pause(500);
        browser.selectByValue('#selectbox', 'Blackhawks');
        text = <string>browser.getText('#selectbox option:checked');
        console.log('Selected Text by \'selectByValue\': %s', text);
        assert(text === 'Chicago Blackhawks');

        browser.pause(500);
        browser.selectByAttribute('#selectbox', 'value', 'Coyotes');
        text = <string>browser.getText('#selectbox option:checked');
        console.log('Selected Text by \'selectByAttribute\': %s', text);
        assert(text === 'Arizona Coyotes');

        return browser;
    });

    it('should set form values and submit form', function () {
        let firstNameSelector: string = '#fname';
        let firstName: string = 'Farhan';
        let lastNameSelector: string = '#lname';
        let lastName: string = 'Ali';

        browser.scroll(firstNameSelector);
        browser.setValue(firstNameSelector, firstName);
        let value: string = <string>browser.getValue(firstNameSelector);
        console.log('First Name: %s', value);
        assert(value === firstName);

        browser.setValue(lastNameSelector, lastName);
        value = <string>browser.getValue(lastNameSelector);
        console.log('Last Name: %s', value);
        assert(value === lastName);

        browser.submitForm('#search-form');
        browser.waitForVisible('#search-results', 1000);

        let url: string = browser.getUrl();
        console.log('Form submitted to URL: %s', url);
        assert(url === 'http://www.tlkeith.com/process.php');

        return browser;
    });

    it('should demonstrate the \"selectorExecute\" command', function () {
        let x: string = browser.selectorExecute('//div', function (elements: HTMLElement[], message: string) {
            return elements.length + ' ' + message;
        }, 'divs on the page.');
        console.log(x);
        return browser;
    });

    it('should demonstrate cookie operations', function () {
        let cookieName: string = 'webdriverio-test';
        let cookieValue = 'webdriverio is awesome';
        browser.setCookie({ name: cookieName, value: cookieValue });

        let cookie: Cookie = browser.getCookie(cookieName);
        console.log(JSON.stringify(cookie));
        assert(cookie);
        assert(cookie.name === cookieName);
        assert(cookie.value === cookieValue);

        let cookies: Cookie[] = browser.getCookie();
        cookies.forEach((cookie: Cookie) => {
            console.log(JSON.stringify(cookie));
        });

        browser.deleteCookie(cookieName);

        cookie = browser.getCookie(cookieName);
        assert(!cookie);

        return browser;
    });

});
