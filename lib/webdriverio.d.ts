export class WebdriverIO {

    init(): WebdriverIO;

    end(): WebdriverIO;

    then(onFulfilled?: Function, onRejected?: Function): WebdriverIO;

    catch(onRejected?: Function): WebdriverIO;

    finally(fn?: Function): WebdriverIO;

    // Start of "Action" section
    /**
     * Add a value to an object found by given selector. You can also use unicode characters like Left arrow or Back space. WebdriverIO will take care of
     * translating them into unicode characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-character-types).
     * To do that, the value has to correspond to a key from the table.
     * 
     * @param {String}        selector   Input element
     * @param {String|Number} values     value to be added
     * @return self reference
     * 
     * ### Usage
     * ```
     * client.addValue(selector,values);
     * ```
     */
    addValue(selector: string, value: string | number): WebdriverIO;

    /**
     * Clear a `<textarea>` or text `<input>` element’s value.
     * 
     * @param {String} selector input element
     * @return self reference
     * 
     * ### Usage
     * ```
     * client.clearElement(selector);
     * ```
     */
    clearElement(selector: string): WebdriverIO;

    /**
     * Click on an element based on given selector.
     * 
     * @param {String} selector element to click on. If it matches with more than one DOM-element it automatically clicks on the first element
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.click(selector);
     * ```
     */
    click(selector: string): WebdriverIO;

    /**
     * Click on an element based on given selector.
     * 
     * @param {String} element to double click on. If it matches with more than on DOM-element it automatically clicks on the first element
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.doubleClick(selector);
     * ```
     */
    doubleClick(selector: string): WebdriverIO;

    /**
     * Drag an item to a destination element.
     * 
     * @param {String} sourceElem      source selector
     * @param {String} destinationElem destination selector
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.dragAndDrop(sourceElem,destinationElem);
     * ```
     */
    dragAndDrop(selector: string, destinationElem: string): WebdriverIO;

    /**
     * Apply left click on an element. If selector is not provided, click on the last moved-to location.
     *
     * @param {String} selector element to click on
     * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element.
     * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element.
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.leftClick(selector,xoffset,yoffset);
     * ```
     */
    leftClick(selector: string, xoffset: number, yoffset: number): WebdriverIO;

    /**
     * Apply middle click on an element. If selector is not provided, click on the last moved-to location.
     *
     * @param {String} selector element to click on
     * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element.
     * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element.
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.middleClick(selector,xoffset,yoffset);
     * ```
     */
    middleClick(selector: string, xoffset: number, yoffset: number): WebdriverIO;

    /**
     *
     * Move the mouse by an offset of the specificed element. If an element is provided but no offset, the mouse will be moved to the center of the element. If the element is not
     * visible, it will be scrolled into view.
     *
     * @param {String} selector element to move to
     * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
     * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.moveToObject(selector,xoffset,yoffset);
     * ```
     */
    moveToObject(selector: string, xoffset: number, yoffset: number): WebdriverIO;

    /**
     * Apply right click on an element. If selector is not provided, click on the last moved-to location.
     *
     * @param {String} selector element to click on
     * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element.
     * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element.
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.rightClick(selector,xoffset,yoffset);
     * ```
     */
    rightClick(selector: string, xoffset: number, yoffset: number): WebdriverIO;

    /**
     * Select option with a specific value.
     * 
     * @param {String} selector   select element that contains the options
     * @param {String} attribute  attribute of option element to get selected
     * @param {String} value      value of option element to get selected
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.selectByAttribute(selector,attribute,value);
     * ```
     */
    selectByAttribute(selector: string, attribute: string, value: string): WebdriverIO;

    /**
     * Select option with a specific index.
     * 
     * @param {String} selector   select element that contains the options
     * @param {Number} index      option index
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.selectByIndex(selector,index);
     * ```
     */
    selectByIndex(selector: string, index: number): WebdriverIO;

    /**
     * Select option with a specific value.
     * 
     * @param {String} selector   select element that contains the options
     * @param {String} value      value of option element to get selected
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.selectByValue(selector,value);
     * ```
     */
    selectByValue(selector: string, value: string): WebdriverIO;

    /**
     * Select option that display text matching the argument.
     * 
     * @param {String} selector   select element that contains the options
     * @param {String} text       text of option element to get selected
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.selectByVisibleText(selector,text);
     * ```
     */
    selectByVisibleText(selector: string, text: string): WebdriverIO;

    /**
     * Works just like execute, only you can use selectors to pass html elements to the function you wish to execute in the browser.
     *
     * The function fn will receive every resolved selector as an array of html elements, even if there is only one result, or no result.
     * These arrays are the first arguments the function fn receives. If you pass an array of selectors, the resulting html element arrays
     *  are returned in the same order.
     *
     * All arguments you append after function fn are added as the arguments after the html arrays. You can use any JSON value or a function as such an argument.
     * 
     * @param {String|Array.<String>} selectors                  single selector or array of selectors
     * @param {Function}              script                     function to get executed in the browser
     * @param {...*}                  [argument1,...,argumentN]  arguments added to fn. Can be any JSON value or function
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.selectorExecute(selectors,script[,argument1,...,argumentN]);
     * ```
     */
    selectorExecute(selectors: string | string[], script: Function, ...args: any[]): WebdriverIO;

    /**
     * Works just like execute, only you can use Selenium selector strategies to pass html elements to the asynchronous function you wish to execute in the browser.
     *
     * The asynchronous function fn will receive every resolved selector as an array of html elements, even if there is only one result, or no result.
     * These arrays are the first arguments the function fn receives. If you pass an array of selectors, the resulting html element arrays are returned in the same order.
     *
     * All arguments you append after function fn are added as the arguments after the html arrays. You can use any JSON value or a function as such an argument.
     * 
     * @param {String|Array.<String>} selectors                  single selector or array of selectors
     * @param {Function}              script                     asynchronous function to get executed in the browser
     * @param {...*}                  [argument1,...,argumentN]  arguments added to fn. Can be any JSON value or function
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.selectorExecuteAsync(selectors,script[,argument1,...,argumentN]);
     * ```
     */
    selectorExecuteAsync(selectors: string | string[], script: Function, ...args: any[]): WebdriverIO;

    /**
     * Send a sequence of key strokes to an element (clears value before). You can also use unicode characters like Left arrow or Back space. WebdriverIO will take care of
     * translating them into unicode characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-character-types).
     * To do that, the value has to correspond to a key from the table.
     * 
     * @param {String}         selector   Input element
     * @param {String|Number} values     Input element
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.setValue(selector[,values]);
     * ```
     */
    setValue(selector: string, values?: string | number): WebdriverIO;

    /**
     * Submits a form found by given selector. The submit command may also be applied o any element that is a descendant of a `<form>` element.
     * 
     * @param {String} selector form element
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.submitForm(selector);
     * ```
     */
    submitForm(selector: string): WebdriverIO;

    // End of "Action" section

    // Start of "Cookie" section

    /**
     * Delete cookies visible to the current page. By providing a cookie name it just removes the single cookie.
     * 
     * @param {String} name name of cookie to be deleted
     * @return self reference
     * 
     * ### Usage
     * ```
     * client.deleteCookie([name]);
     * ```
     */
    deleteCookie(name?: string): WebdriverIO;

    /**
     * Retrieve a [cookie](https://w3c.github.io/webdriver/webdriver-spec.html#cookies) visible to the current page. You can query a specific cookie by
     *  providing the cookie name or retrieve all.
     * 
     * @param {String} name name of requested cookie
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getCookie([name]);
     * ```
     */
    getCookie(name?: string): WebdriverIO;

    /**
     * Sets a [cookie](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#cookie-json-object) for current page.
     * 
     * @param {Object} cookie cookie object
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.setCookie(cookie);
     */
    setCookie(cookie: Object): WebdriverIO;

    // end of "cookie" section

    // strat of "grid" section

    /**
     * Get the details of the Selenium Grid node running a session.
     * 
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getGridNodeDetails();
     * ```
     */
    getGridNodeDetails(): WebdriverIO;

    /**
     * 
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.gridProxyDetails();
     */
    gridProxyDetails(): WebdriverIO;

    /**
     * 
     * @return self reference
     * 
     * ### Usage
     * 
     * ```
     * client.gridTestSession();
     */
    gridTestSession(): WebdriverIO;

    // end of "grid" section

    // strat of "mobile" section

    // end of "mobile" section

    // strat of "property" section

    /**
     * Get an attribute from an DOM-element based on the selector and attribute name. Returns a list of attribute values if selector matches multiple elements.
     * 
     * @param {String} selector      element with requested attribute
     * @param {String} attributeName requested attribute
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getAttribute(selector,attributeName);
     */
    getAttribute(selector: string, attributeName: string): WebdriverIO;

    /**
     *  Get a css property from a DOM-element selected by given selector. The return value is formatted to be testable. 
     * Colors gets parsed via [rgb2hex](https://www.npmjs.org/package/rgb2hex) and all other properties gets parsed 
     * via [css-value](https://www.npmjs.org/package/css-value).
     *
     * Note that shorthand CSS properties (e.g. background, font, border, margin, padding, list-style, outline, pause, cue) 
     * are not returned, in accordance with the DOM CSS2 specification- you should directly access the longhand properties 
     * (e.g. background-color) to access the desired values.
     * 
     * @param {String} selector    element with requested style attribute
     * @param {String} cssProperty css property name
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getCssProperty(selector,cssProperty);
     * ```
     */
    getCssProperty(selector: string, cssProperty: string): WebdriverIO;

    /**
     * Get the width and height for an DOM-element based given selector.
     * 
     * @param   {String} selector element with requested size
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getElementSize(selector);
     * ```
     */
    getElementSize(selector: string): WebdriverIO;

    /**
     * Get source code of specified DOM element by selector.
     * 
     * @param {String}   selector           element to get the current DOM structure from
     * @param {Boolean} includeSelectorTag if true it includes the selector element tag (default: true)
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getHTML(selector[,includeSelectorTag]);
     * ```
     */
    getHTML(selector: string, includeSelectorTag?: boolean): WebdriverIO;

    /**
     * Determine an element’s location on the page. The point (0, 0) refers to the upper-left corner of the page.
     * 
     * @param {String} selector    element with requested position offset
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getLocation(selector);
     * ```
     */
    getLocation(selector: string): boolean;

    /**
     * Determine an element’s location on the screen once it has been scrolled into view.
     * 
     * @param {String} selector    element with requested position offset
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getLocationInView(selector);
     * ```
     */
    getLocationInView(selector: string): WebdriverIO;

    /**
     * Get source code of the page.
     * 
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getSource();
     * ```
     */
    getSource(): WebdriverIO;

    /**
     * Get tag name of a DOM-element found by given selector.
     * 
     * @param   {String}           selector   element with requested tag name
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getTagName(selector);
     * ```
     */
    getTagName(selector: string): WebdriverIO;

    /**
     * Get the text content from a DOM-element found by given selector. Make sure the element you want to request the text from 
     * [is interactable](http://www.w3.org/TR/webdriver/#interactable) otherwise you will get an empty string as return value.
     *  If the element is disabled or not visible and you still want to receive the text content use {@link getHTML}
     * as a workaround.
     * 
     * @param  {String} selector   element with requested text
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getText(selector);
     * ```
     */
    getText(selector: string): WebdriverIO;

    /**
     * Get the title of current opened website.
     * 
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getTitle();
     * ```
     */
    getTitle(): WebdriverIO;

    /**
     * Get the url of current opened website.
     * 
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getUrl();
     * ```
     */
    getUrl(): WebdriverIO;

    /**
     * Get the value of a `<textarea>` or text `<input>` found by given selector.
     * 
     * @param   {String} selector input or textarea element
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.getValue(selector);
     * ```
     */
    getValue(selector: string): WebdriverIO;

    // end of "property" section

    // start of "protocol" section

    /**
     * Accepts the currently displayed alert dialog. Usually, this is equivalent to clicking on the 'OK' button in the dialog.
     *
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.alertAccept();
     * ```
     * 
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#accept-alert
     * @type protocol
     */
    alertAccept(): WebdriverIO;

    /**
     * Dismisses the currently displayed alert dialog. For confirm() and prompt() dialogs, this is equivalent to clicking the 'Cancel' button. For alert()
     * dialogs, this is equivalent to clicking the 'OK' button. 
     * 
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.alertDismiss();
     * ```
     * * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dismiss-alert
     * @type protocol
     */
    alertDismiss(): WebdriverIO;

    /**
     * Gets the text of the currently displayed JavaScript alert(), confirm(), or prompt() dialog.
     * 
     * @param {String=} text  Keystrokes to send to the prompt() dialog.
     * @returns self reference
     * 
     * ### Usage
     * 
     * ```
     * client.alertText([text]);
     * ```
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#get-alert-text
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#send-alert-text
     * @type protocol
     */
    alertText(text?: string): WebdriverIO;

    /**
     * Get the status of the html5 application cache.
     * 
     * @returns self reference &mdash; Resulatant promise will contain status code for application cache: 
     * **{UNCACHED = 0, IDLE = 1, CHECKING = 2, DOWNLOADING = 3, UPDATE_READY = 4, OBSOLETE = 5}**
     * 
     * ### Usage
     * 
     * ```
     * client.applicationCacheStatus();
     * ```
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidapplication_cachestatus
     * @type protocol
     */
    applicationCacheStatus(): WebdriverIO;

    /**
     * Navigate backwards in the browser history, if possible.
     * 
     * @returns self reference
     * 
     * ### Usagae
     * ```
     * client.back();
     * ```
     * @see https://w3c.github.io/webdriver/webdriver-spec.html#back
     * @type protocol
     */
    back(): WebdriverIO;

    /**
     * * Click and hold the left mouse button (at the coordinates set by the last moveto command). Note that the next mouse-related command 
     * that should follow is buttonup. Any other mouse command (such as click or another call to buttondown) will yield undefined behaviour.
     * 
     * @param {Number} button  Which button, enum: *{LEFT = 0, MIDDLE = 1 , RIGHT = 2}*. Defaults to the left mouse button if not specified.
     * @returns self reference
     * 
     * ### Usagae
     * 
     * ```
     * client.buttonDown(button);
     * ```
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttondown
     * @type protocol
     */
    buttonDown(button: number): WebdriverIO;

    /**
     * Click any mouse button (at the coordinates set by the last moveto command). Note  that calling this command after calling 
     * buttondown and before calling button up (or any out-of-order interactions sequence) will yield undefined behaviour).
     *
     * @param {Number} button  Which button, enum: *{LEFT = 0, MIDDLE = 1 , RIGHT = 2}*. Defaults to the left mouse button if not specified.
     * @returns self reference
     * @type protocol
     * 
     * ### Usagae
     * 
     * ```
     * client.buttonPress(button);
     * ```
     */
    buttonPress(button: number): WebdriverIO;

    /**
     * Releases the mouse button previously held (where the mouse is currently at). Must be called once for every buttondown command issued. See the note in click and
     * buttondown about implications of out-of-order commands.
     * 
     * @param {Number} button  Which button, enum: *{LEFT = 0, MIDDLE = 1 , RIGHT = 2}*. Defaults to the left mouse button if not specified.
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttonup
     * @type protocol
     * 
     * ### Usagae
     * 
     * ```
     * client.buttonUp(button);
     * ```
     */
    buttonUp(button: number): WebdriverIO;

    /**
     * Search for an element on the page, starting from the document root. The located element will be returned as a WebElement JSON object.
     * The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#find-element
     * 
     * @param {String} selector selector to query the element
     * @returns self reference
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.element(selector);
     * ```
     */
    element(selector: string): WebdriverIO;

    // end of "protocol" section

    pause(ms: number): WebdriverIO;

    // protocols
    url(url?: string): WebdriverIO;
}
