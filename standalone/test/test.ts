import webdriverio = require('webdriverio');
import assert = require('assert');
import {AnyResponse, Browser, Cookie, WebElementJSONObject} from 'webdriverio';

const defaultUrl: string = 'http://www.tlkeith.com/WebDriverIOTutorialTest.html';
let mainTabId: string = '';

describe('Test WebdriverIO in standalone mode', function () {
    // set timeout to 60 seconds
    this.timeout(60 * 1000);
    let browser: Browser<any>;

    // hook to run before tests
    before(function () {
        browser = webdriverio.remote({ desiredCapabilities: { browserName: 'chrome' } });
        return browser.init();
    });

    it('should be load correct page and title', function () {
        return browser.windowHandleMaximize('current').url(defaultUrl)
            .getCurrentTabId()
            .then((handle: string) => {
                mainTabId = handle;
            })
            .getTitle().then((title: string) => {
                console.log('Current Page Title: %s', title);
                assert(title === 'Web Driver IO - Tutorial Test Page');
            });
    });

    it('should demonstrate the \"addValue\" command', function () {
        return browser.setValue('#fname', 'test')
            .addValue('#fname', ' 123')
            .getValue('#fname')
            .then((value: string) => {
                console.log('First name: %s', value);
                assert(value === 'test 123');
            });
    });

    it('should demonstrate the \"clearElement\" command', function () {
        return browser.setValue('#fname', 'test')
            .getValue('#fname')
            .then((value: string) => {
                console.log('First name after set: %s', value);
                assert(value === 'test');
            })
            .clearElement('#fname')
            .getValue('#fname')
            .then((value: string) => {
                console.log('First name after clear: %s', value);
                assert(value === '');
            });
    });

    it('should demonstrate the \"click\" command', function () {
        return browser.scroll('#modalbutton')
            //  click button by id
            .click('#modalbutton').then(() => {
                console.log('Clicked modal button');
            })
            // wait for modal to be visable
            .waitForVisible('#myModal', 5000)
            .getText('//div[@class=\'modal-body\']').then((text: string) => {
                console.log('Text found: %s', text);
                assert(text === 'I agree to the following...');
            })
            // click the close button
            .click('#closebutton').then(function () {
                console.log('Clicked Close button in modal');
            })
            // pause for 500 milli seconds otherwise control doesn't  get transffered to parent
            .pause(500);
    });

    it('should select checked options from selectbox', function () {
        // default selection
        return browser.scroll('#selectbox')
            .getText('#selectbox option:checked').then((text: string) => {
                console.log('Defaut selected text: %s', text);
                assert(text === 'Los Angeles Kings');
            })
            .pause(500)
            .selectByVisibleText('#selectbox', 'San Jose Sharks')
            .getText('#selectbox option:checked').then((text: string) => {
                console.log('Selected Text by \'selectByVisibleText\': %s', text);
                assert(text === 'San Jose Sharks');
            })
            .pause(500)
            .selectByIndex('#selectbox', 21)
            .getText('#selectbox option:checked').then((text: string) => {
                console.log('Selected Text by\'selectByIndex\': %s', text);
                assert(text === 'Pittsburgh Penguins');
            })
            .pause(500)
            .selectByValue('#selectbox', 'Blackhawks')
            .getText('#selectbox option:checked').then((text: string) => {
                console.log('Selected Text by \'selectByValue\': %s', text);
                assert(text === 'Chicago Blackhawks');
            })
            .pause(500)
            .selectByAttribute('#selectbox', 'value', 'Coyotes')
            .getText('#selectbox option:checked').then((text: string) => {
                console.log('Selected Text by \'selectByAttribute\': %s', text);
                assert(text === 'Arizona Coyotes');
            })
            .pause(500);
    });

    it('should set form values and submit form', function () {
        let firstNameSelector: string = '#fname';
        let firstName: string = 'Farhan';
        let lastNameSelector: string = '#lname';
        let lastName: string = 'Ali';
        return browser.scroll(firstNameSelector)
            // set first name
            .setValue(firstNameSelector, firstName)
            .getValue(firstNameSelector)
            .then((value: string) => {
                console.log('First Name: %s', value);
                assert(value === firstName);
            })
            // set last name
            .setValue(lastNameSelector, lastName)
            .getValue(lastNameSelector)
            .then((value: string) => {
                console.log('Last Name: %s', value);
                assert(value === lastName);
            })
            // submit form
            .submitForm('#search-form')
            .then(() => {
                console.log('Submit Search Form');
            })
            .waitForVisible('#search-results', 1000)
            .then(() => {
                console.log('Search Results Found');
                browser.getUrl().then((url: string) => {
                    console.log('Form submitted to URL: %s', url);
                    assert(url === 'http://www.tlkeith.com/process.php');
                });
            })
            .pause(500);
    });

    it('should demonstrate the \"selectorExecute\" command', function () {
        return browser.selectorExecute('//div', function (elements: HTMLElement[], message: string) {
            return elements.length + ' ' + message;
        }, 'divs on the page.')
            .then(function (res: string) {
                console.log(res);
            });
    });

    it('should demonstrate cookie operations', function () {
        let cookieName: string = 'webdriverio-test';
        let cookieValue = 'webdriverio is awesome';
        return browser.setCookie({ name: cookieName, value: cookieValue })
            .getCookie(cookieName)
            .then((cookie: Cookie) => {
                console.log(JSON.stringify(cookie));
                assert(cookie);
                assert(cookie.name === cookieName);
                assert(cookie.value === cookieValue);
            })
            .getCookie()
            .then((cookies: Cookie[]) => {
                cookies.forEach((cookie: Cookie) => {
                    console.log(JSON.stringify(cookie));
                });
            })
            .deleteCookie(cookieName)
            .getCookie(cookieName)
            .then((cookie: Cookie) => {
                assert(!cookie);
            });
    });

    it('should demonstrate the \"getAttribute\" command', function () {
        let name: string = 'data-toggle';
        return browser.url(defaultUrl)
            .getAttribute('#dropdownMenu1', name).then((value: string) => {
                console.log('Attribute \"%s\" value is \"%s\"', name, value);
            });
    });

    it('demonstrate the \"alertAccept\" command', function () {
        return browser.execute(function () {
            let result = confirm('Isn\'t \"WebdriverIO\" cool?');
            let msg = result ? 'Accepted' : 'Rejected';
            console.log(msg);
        })
            .alertText()
            .then((text: string) => {
                assert(text === 'Isn\'t \"WebdriverIO\" cool?');
            })
            .alertAccept()
            // uncomment folowing line and go to console of browser, you will see "Accepted" printed
            // .pause(10000)
            ;
    });

    it('demonstrate the \"alertDismiss\" command', function () {
        return browser.execute(function () {
            let result = confirm('Isn\'t \"WebdriverIO\" cool?');
            let msg = result ? 'Accepted' : 'Rejected';
            console.log(msg);
        })
            .alertText()
            .then((text: string) => {
                assert(text === 'Isn\'t \"WebdriverIO\" cool?');
            })
            .alertDismiss()
            // uncomment folowing line and go to console of browser, you will see "Rejected" printed
            // .pause(10000)
            ;
    });

    it('demonstrate the \"back\" command', function () {
        let selector: string = '//table[1]/tbody/tr[1]/td[2]/a';
        let href: string = '';

        return browser.getAttribute(selector, 'href')
            .then((value: string) => {
                href = value;
            })
            .click(selector)
            .getUrl()
            .then((url: string) => {
                assert(url === href);
            })
            .pause(1000)
            .back()
            .getUrl()
            .then((url: string) => {
                assert(url === defaultUrl);
            });
    });

    it('demonstrate the \"isEnabled\" command', function () {
        let selector: string = '#fname';
        return browser.isEnabled(selector)
            .then((res: boolean) => {
                let msg: string = res ? 'enabled' : 'disabled';
                console.log('Selector \"%s\" is %s', selector, msg);
            });
    });

    it('demonstrate the \"execute, createTab, and switchTab\" commands', function () {
        return browser
            .execute(function () {
                let link: HTMLAnchorElement = document.createElement('a');
                link.setAttribute('href', 'http://www.google.com/ncr');
                link.setAttribute('target', '_blank');
                link.innerText = 'Google';
                let divs: NodeListOf<Element> = document.getElementsByClassName('dropdown');
                let div = divs.item(0);
                div.appendChild(link);
                return link;
            })
            .then((res: AnyResponse) => {
                let element: WebElementJSONObject = res.value;
                console.log('Element: %s', element.ELEMENT);
                browser.elementIdClick(element.ELEMENT);
            })
            .pause(2000)
            .switchTab(mainTabId)
            .pause(5000);
    });

    // a "hook" to run after all tests in this block
    after(function () {
        return browser.end();
    });
});
