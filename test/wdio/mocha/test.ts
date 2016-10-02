/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../build.d.ts"/>

import assert = require('assert');
import { Cookie } from 'webdriverio';

const defaultUrl: string = 'http://www.tlkeith.com/WebDriverIOTutorialTest.html';
let mainTabId: string = '';

describe('Test WebdriverIO in WDIO mode', function () {
    // set timeout to 60 seconds
    this.timeout(60 * 1000);

    let browser = global.browser;

    it('demnostrate simple google search', function () {
        browser.windowHandleMaximize().url('http://www.google.com/ncr');
        browser.setValue('*[name="q"]', 'webdriverio').click('*[name="btnG"]');
        browser.pause(5000);
        let title: string = browser.getTitle();
        assert(title === 'webdriverio - Google Search');
    });

    it('should be load correct page and title', function () {
        browser.url(defaultUrl);
        mainTabId = browser.getCurrentTabId();
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

    it('should demonstrate the \"getAttribute\" command', function () {
        let name: string = 'data-toggle';
        browser.url(defaultUrl);
        let value: string = <string>browser.getAttribute('#dropdownMenu1', name);
        console.log('Attribute \"%s\" value is \"%s\"', name, value);
        return browser;
    });

    /*it('should demonstrate the \"getCssProperty\" command', function () {

    });*/

    it('demonstrate the \"alertAccept\" command', function () {
        browser.execute(function () {
            let result = confirm('Isn\'t \"WebdriverIO\" cool?');
            let msg = result ? 'Accepted' : 'Rejected';
            console.log(msg);
        });

        let text: string = browser.alertText();
        assert(text === 'Isn\'t \"WebdriverIO\" cool?');

        browser.alertAccept();
        // uncomment folowing line and go to console of browser, you will see "Accepted" printed
        // browser.pause(10000);
        return browser;
    });

    it('demonstrate the \"alertDismiss\" command', function () {
        browser.execute(function () {
            let result = confirm('Isn\'t \"WebdriverIO\" cool?');
            let msg = result ? 'Accepted' : 'Rejected';
            console.log(msg);
        });

        let text: string = browser.alertText();
        assert(text === 'Isn\'t \"WebdriverIO\" cool?');

        browser.alertDismiss();
        // uncomment folowing line and go to console of browser, you will see "Accepted" printed
        // browser.pause(10000);
        return browser;
    });

    it('demonstrate the \"back\" command', function () {
        let selector: string = '//table[1]/tbody/tr[1]/td[2]/a';
        let href: string = <string>browser.getAttribute(selector, 'href');

        browser.click(selector);
        let url: string = browser.getUrl();
        assert(url === href);
        browser.pause(1000);
        browser.back();
        url = browser.getUrl();
        assert(url === defaultUrl);
        return browser;
    });

    /*it('demonstrate the \"execute, createTab, and switchTab\" commands', function () {
        let res: AnyResponse = browser.execute(function () {
            let link: HTMLAnchorElement = document.createElement('a');
            link.setAttribute('href', 'http://www.google.com/ncr');
            link.setAttribute('target', '_blank');
            link.innerText = 'Google';
            let divs: NodeListOf<Element> = document.getElementsByClassName('dropdown');
            let div = divs.item(0);
            div.appendChild(link);
            return link;
        });
        let element: WebElementJSONObject = res.value;
        console.log('Element: %s', element.ELEMENT);
        browser.elementIdClick(element.ELEMENT).pause(2000);
        browser.switchTab(mainTabId).pause(5000);
        return browser;
    });*/

    it('demonstrate the \"frame\" command', function () {
        browser.frame('main');
        let text: string = <string>browser.getText('//div[@class=\'jumbotron\']/div/h3');
        assert(text === 'Welcome and Thank You for Visiting tlkeith.com\n\nHome of Tony Keith\'s Online Professional Resume and Information Site.');

        let x: any = browser.frameParent();
        console.log(JSON.stringify(x));

        browser.frame('contact');
        text = <string>browser.getText('//h2');
        assert(text === 'Contact Information');

        return browser;
    });

});
