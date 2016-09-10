export class WebdriverIO {

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
     * ### Usage
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
     * ### Usage
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
     * ### Usage
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
     * ### Usage
     * 
     * ```
     * client.buttonUp(button);
     * ```
     */
    buttonUp(button: number): WebdriverIO;

    /**
     * Protocol binding to operate with cookies on the current page.
     * 
     * @param {String}         method  request method
     * @param {Object|String} args    contains cookie information if you want to set a cookie or contains name of cookie if you want to delete it
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#cookies
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.cookie([method][,args]);
     * ```
     */
    cookie(method?: string, args?: Object | string): WebdriverIO;

    /**
     * Double-clicks at the current mouse coordinates (set by moveto. (Not part of the official Webdriver specification).
     *
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessioniddoubleclick
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.doDoubleClick();
     * ```
     */
    doDoubleClick(): WebdriverIO;

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

    /**
     * Get the element on the page that currently has focus. The element will be returned as a WebElement JSON object.
     *
     * @returns self reference
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-active-element
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.elementActive();
     * ```
     */
    elementActive(): WebdriverIO;

    /**
     * Get the value of an element's attribute.
     *
     * @param {String} ID             ID of a WebElement JSON object to route the command to
     * @param {String} attributeName  attribute name of element you want to receive
     *
     * @returns self reference
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-attribute
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.elementIdAttribute(ID,attributeName);
     * ```
     */
    elementIdAttribute(ID: string, attributeName: string): WebdriverIO;

    /**
     *  Clear a `TEXTAREA` or text `INPUT element's value.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-clear
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.elementIdClear(ID);
     * ```
     */
    elementIdClear(ID: string): WebdriverIO;

    /**
     * Click on an element.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-click
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.elementIdClick(ID);
     * ```
     */
    elementIdClick(ID: string): WebdriverIO;

    /**
     * Query the value of an element's computed CSS property. The CSS property to query should be specified using the CSS property name,
     * not the JavaScript property name (e.g. background-color instead of backgroundColor).
     *
     * @param {String} ID                ID of a WebElement JSON object to route the command to
     * @param  {String} cssPropertyName  CSS property
     * @returns self reference
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-property
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.elementIdCssProperty(ID,cssPropertyName);
     * ```
     */
    elementIdCssProperty(ID: string, cssPropertyName: string): WebdriverIO;

    /**
     * Determine if an element is currently displayed.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementiddisplayed
     * @type protocol
     * 
     * ### Usage
     * 
     * ```
     * client.elementIdDisplayed(ID);
     * ```
     */
    elementIdDisplayed(ID: string): WebdriverIO;

    /**
     * Search for an element on the page, starting from an element. The located element will be returned as a WebElement JSON object.
     * The table below lists the locator strategies that each server should support. Each locator must return the first matching element located in the DOM.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @param {String} selector selector to query the element
     * @returns self reference
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelement
     * @type protocol
     * ### Usage
     * 
     * ```
     * client.elementIdElement(ID,selector);
     * ```
     */
    elementIdElement(ID: string, selector: string): WebdriverIO;

    /**
     * Search for multiple elements on the page, starting from an element. The located elements will be returned as a WebElement JSON objects.
     * The table below lists the locator strategies that each server should support. Elements should be returned in
     * the order located in the DOM.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @param {String} selector selector to query the elements
     * @returns  self reference &mdash; **Object[]** A list of WebElement JSON objects for the located elements.
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelements
     * @type protocol
     * ### Usage
     * 
     * ```
     * client.elementIdElements(ID,selector);
     * ```
     */
    elementIdElements(ID: string, selector: string): WebdriverIO;

    /**
     * Determine if an element is currently enabled.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **Boolean** true if the element is enabled
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-is-element-enabled
     * @type protocol
     * ### Usage
     * 
     * ```
     * client.elementIdEnabled(ID);
     * ```
     */
    elementIdEnabled(ID: string): WebdriverIO;

    /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page. The element's coordinates are returned as a
     * JSON object with x and y properties.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **Object** The X and Y coordinates for the element on the page (`{x:number, y:number}`)
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation
     * @type protocol
     * @deprecated please use {@link elementIdRect}.
     * 
     * ### Usage
     * ```
     * client.elementIdLocation(ID);
     * ```
     */
    elementIdLocation(ID: string): WebdriverIO;

    /**
     * Determine an element's location on the screen once it has been scrolled into view.
     *
     * *Note:* This is considered an internal command and should only be used to determine an element's location for correctly generating native events.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **Object** The X and Y coordinates for the element (`{x:number, y:number}`)
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation_in_view
     * @type protocol
     * @deprecated please use {@link elementIdRect}.
     * ### Usage
     * ```
     * elementIdLocationInView(ID);
     * ```
     */
    elementIdLocationInView(ID: string): WebdriverIO;

    /**
     * Query for an element's tag name.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **String**  the element's tag name, as a lowercase string
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-tag-name
     * @type protocol
     * ### Usage
     * ```
     * client.elementIdName(ID);
     * ```
     */
    elementIdName(ID: string): WebdriverIO;

    /**
     * The Get Element Rect command returns the dimensions and coordinates of the given web element. The returned value is a dictionary 
     * with `x`. `y`, `width` and `height` properties.
     *
     * Note: this command was recently added to the official Webdriver protocol and might not be working with current Selenium driver.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **Object** The X and Y coordinates for the element on the page (`{x:number, y:number}`)
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-rect
     * @type protocol
     * 
     * ### Usage
     * ```
     * client.elementIdRect(ID);
     * ```
     */
    elementIdRect(ID: string): WebdriverIO;

    /**
     * Determine if an OPTION element, or an INPUT element of type checkbox or radiobutton is currently selected.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **Boolean** true if the element is selected.
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-is-element-selected
     * @type protocol
     * ### Usage
     * ```
     * client.elementIdSelected(ID);
     * ```
     */
    elementIdSelected(ID: string): WebdriverIO;

    /**
     * Determine an element's size in pixels. The size will be returned as a JSON object with width and height properties.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **Object** The width and height of the element, in pixels (`{width:number, height:number}`)
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsize
     * @type protocol
     * @deprecated please use {@link elementIdRect}
     * ### Usage
     * ```
     * client.elementIdSize(ID);
     * ```
     */
    elementIdSize(ID: string): WebdriverIO;

    /**
     * Returns the visible text for the element.
     *
     * @param {String} ID ID of a WebElement JSON object to route the command to
     * @returns self reference &mdash; **String** visible text for the element
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#getelementtext
     * @type protocol
     * ### Usage
     * ``` 
     * client.elementIdText(ID);
     * ```
     */
    elementIdText(ID: string): WebdriverIO;

    /**
     * Send a sequence of key strokes to an element.
     *
     * @param {String} ID              ID of a WebElement JSON object to route the command to
     * @param {String|String[]} value  The sequence of keys to type. An array must be provided. The server should flatten the array items to a single string to be typed.   
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#element-send-keys
     * @type protocol
     * ### Usage
     * ```
     * client.elementIdValue(ID,value);
     * ```
     */
    elementIdValue(ID: string, value: string | string[]): WebdriverIO;

    /**
     * Search for multiple elements on the page, starting from the document root. The located elements will be returned as a WebElement
     *  JSON objects. The table below lists the locator strategies that each server should support. Elements should be returned in
     * the order located in the DOM.
     *
     * The array of elements can be retrieved  using the 'response.value' which is a collection of element ID's and can be accessed in the subsequent commands
     * using the '.ELEMENT' method.
     *
     * @param {String} selector selector to query the elements
     * @returns self reference &mdash; **Object[]** A list of WebElement JSON objects for the located elements.
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#find-elements
     * @type protocol
     * ### Usage
     * ```
     * client.elements(selector);
     * ```
     */
    elements(selector: string): WebdriverIO;

    /**
     * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame. The executed script is 
     * assumed to be synchronous and the result of evaluating the script is returned to the client.
     *
     * The script argument defines the script to execute in the form of a function body. The value returned by that function will be 
     * returned to the client. The function will be invoked with the provided args array and the values may be accessed via the arguments object in the order specified.
     *
     * Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement reference will be converted to the 
     * corresponding DOM element. Likewise, any WebElements in the script result will be returned to the client as WebElement JSON objects.
     * 
     * @param {String|Function} script                     The script to execute.
     * @param {*}               [argument1,...,argumentN]  script arguments
     * @returns self reference &mdash; **any**            The script result.
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-script
     * @type protocol
     * ### Usage
     * ```
     * client.execute(script[,argument1,...,argumentN]);
     */
    execute(script: string | Function, ...args: any[]): WebdriverIO;

    /**
     * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame. The executed script is 
     * assumed to be asynchronous and must signal that is done by invoking the provided callback, which is always provided as the final 
     * argument to the function. The value to this callback will be returned to the client.
     *
     * Asynchronous script commands may not span page loads. If an unload event is fired while waiting for a script result, 
     * an error should be returned to the client.
     *
     * The script argument defines the script to execute in the form of a function body. The function will be invoked with the provided 
     * args array and the values may be accessed via the arguments object in the order specified. The final argument will always be a 
     * callback function that must be invoked to signal that the script has finished.
     *
     * Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement reference will be converted to the 
     * corresponding DOM element. Likewise, any WebElements in the script result will be returned to the client as WebElement JSON objects.
     * 
     * @param {String|Function} script     The script to execute.
     * @param {*}               arguments  script arguments
     *
     * @returns self reference &msash; **any**             The script result.
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-async-script
     * @type protocol
     * 
     * ### Usage
     * ```
     * client.executeAsync(script,arguments);
     * ```
     */
    executeAsync(script: string | Function, ...args: any[]): WebdriverIO;

    /**
     * Uploads a base64 data object. (not documented, not part of Webdriver specs)
     *
     * @param {Object} data base64 data object
     * @returns self reference
     * @type protocol
     * ### Usage
     * ```
     * client.file(data);
     * ```
     */
    file(data: Object): WebdriverIO;

    /**
     * Navigate forwards in the browser history, if possible.
     *
     * @see https://w3c.github.io/webdriver/webdriver-spec.html#forward
     * @type protocol
     * ### Usage
     * ``` 
     * client.forward();
     * ```
     */
    forward(): WebdriverIO;

    /**
     * Change focus to another frame on the page. If the frame id is null,  the server should switch to the page's default content.
     * 
     * @param {String|Number|null|WebElementJSONObject} id   Identifier for the frame to change focus to.
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#switch-to-frame
     * @type protocol
     * 
     * ### Usage
     * ```
     * client.frame(id);
     * ```
     */
    frame(id: string | Object): WebdriverIO;

    /**
     * Change focus to the parent context. If the current context is the top level browsing context, the context remains unchanged.
     *
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#switch-to-parent-frame
     * @type protocol
     * ### Usage
     * ```
     * client.frameParent();
     * ```
     */
    frameParent(): WebdriverIO;

    /**
     * Make an engines that is available (appears on the list returned by getAvailableEngines) active. After this call, the engine will 
     * be added to the list of engines loaded in the IME daemon and the input sent using sendKeys will be converted by the active engine. 
     * Note that this is a platform-independent method of activating IME (the platform-specific way being using keyboard shortcuts. 
     * *(Not part of the official Webdriver specification)*
     *
     * @param {String} engine   Name of the engine to activate.
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactive_engine
     * @type protocol
     * ### Usage
     * ```
     * client.imeActivate(engine);
     * ```
     */
    imeActivate(engine: string): WebdriverIO;

    /**
     * Indicates whether IME input is active at the moment (not if it's available. *(Not part of the official Webdriver specification)*
     *
     * @returns self reference &mdash; **boolean**  true if IME input is available and currently active, false otherwise
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactivated
     * @type protocol
     * 
     * ### Usage
     * ```
     * client.imeActivated();
     * ```
     */
    imeActivated(): WebdriverIO;

    /**
     * Get the name of the active IME engine. The name string is platform specific. *(Not part of the official Webdriver specification)*
     *
     * @returns self reference &mdash; **String** engine   The name of the active IME engine.
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactive_engine
     * @type protocol
     * ### Usage
     * ```
     * client.imeActiveEngine();
     * ```
     */
    imeActiveEngine(): WebdriverIO;

    /**
     * List all available engines on the machine. To use an engine, it has to be present in this list. (Not part of the official Webdriver specification)
     *
     * @returns self reference &mdash; **Object[]** engines   A list of available engines
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeavailable_engines
     * @type protocol
     * ### Usage
     * ```
     * client.imeAvailableEngines();
     * ```
     */
    imeAvailableEngines(): WebdriverIO;

    /**
     * De-activates the currently-active IME engine. (Not part of the official Webdriver specification)
     *
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimedeactivate
     * @type protocol
     * ### Usage
     * ```
     * client.imeDeactivated();
     * ```
     */
    imeDeactivated(): WebdriverIO;

    /**
     * Create a new session. The server should attempt to create a session that most closely matches the desired and required capabilities. Required capabilities
     * have higher priority than desired capabilities and must be set for the session to be created.
     *
     * @param {Object} [capabilities] An object describing the session's [desired capabilities](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities).
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-new-session
     * @type protocol
     * ### Usage
     * ```
     * client.init([capabilities]);
     * ```
     */
    init(capabilities?: Object): WebdriverIO;

    /**
     * Send a sequence of key strokes to the active element. This command is similar to the send keys command in every aspect 
     * except the implicit termination: The modifiers are *not* released at the end of the call. Rather, the state of the modifier 
     * keys is kept between calls, so mouse interactions can be performed while modifier keys are depressed.
     *
     * You can also use unicode characters like Left arrow or Back space. WebdriverIO will take care of translating them into 
     * unicode characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#h-keyboard-actions). 
     * To do that, the value has to correspond to a key from the table.
     *
     * @param {String|String[]} value  The sequence of keys to type. An array must be provided. The server should flatten the array items to a single string to be typed.
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidkeys
     * @type protocol
     * @deprecated -
     * 
     * ### Usage
     * ```
     * client.keys(value);
     * ```
     */
    keys(value: string | string[]): WebdriverIO;

    /**
     * Protocol bindings for all localStorage operations. *(Not part of the official Webdriver specification)*
     * 
     * @param {String}         method  method for storage operation
     * @param {Object|String} args    operation arguments
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storage
     * @type protocol
     * ### Usage
     * ```
     * client.localStorage(method[,args]);
     * ```
     */
    localStorage(method: string, args: string | Object): WebdriverIO;

    /**
     * protocol bindings to get local_storage size. (Not part of the official Webdriver specification)
     *
     * @returns self reference &mdash; **Number** The number of items in the storage.
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storagesize
     * @type protocol
     * ### Usage
     * ```
     * client.localStorageSize();
     * ```
     */
    localStorageSize(): WebdriverIO;

    /**
     * Protocol bindings for all geolocation operations. *(Not part of the official Webdriver specification)*.
     * 
     * @param {Object} location  the new location
     * @returns self reference &mdash; **Object**         the current geo location
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocation
     * @type protocol
     * ### Usage
     * ```
     * client.location(location);
     * ```
     */
    location(location?: Object): WebdriverIO;

    /**
     * Get the log for a given log type. Log buffer is reset after each request. *(Not part of the official Webdriver specification)*.
     * 
     * @param {String} type  The [log type](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#log-type). This must be provided.
     * @returns self reference &mdash; **Object[]** The list of [log entries](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#log-entry-json-object)
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlog
     * @type protocol
     * ### Usage
     * ```
     * client.log(type);
     * ```
     */
    log(type: string): WebdriverIO;

    /**
     * Get available log types. *(Not part of the official Webdriver specification)*.
     *
     * @returns self reference &mdash; **Strings[]**  The list of available [log types](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#log-type)
     *
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlogtypes
     * @type protocol
     * #### Usage
     * ```
     * client.logTypes();
     * ```
     */
    logTypes(): WebdriverIO;

    /**
     * Move the mouse by an offset of the specificed element. If no element is specified, the move is relative to the current mouse cursor. If an element is provided but
     * no offset, the mouse will be moved to the center of the element. If the element is not visible, it will be scrolled into view. 
     * *(Not part of the official Webdriver specification)*.
     *
     * @param {String} element  Opaque ID assigned to the element to move to, as described in the WebElement JSON Object. If not specified or is null, the offset is relative to current position of the mouse.
     * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
     * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidmoveto
     * @type protocol
     * ### Usage
     * ```
     * client.moveTo(element,xoffset,yoffset);
     * ```
     */
    moveTo(element: string, xoffset: number, yoffset: number): WebdriverIO;

    /**
     * Refresh the current page.
     *
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-refresh
     * @type protocol
     * ### Usage
     * ```
     * client.refresh();
     * ```
     */
    refresh(): WebdriverIO;

    /**
     * Take a screenshot of the current viewport. To get the screenshot of the whole page use the action command {@link saveScreenshot}.
     *
     * @returns self reference &mdash; **String** screenshot   The screenshot as a base64 encoded PNG.
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-take-screenshot
     * @type protocol
     * ### Usage
     * ```
     * client.screenshot();
     * ```
     */
    screenshot(): WebdriverIO;

    /**
     * Protocol bindings for all session operations. In case you are looking for `[POST] session` to initialise a session on the server, take a look at `/lib/protocol/init`.
     * 
     * @param {String=} doWhat     session operation (`get` (default)|`delete`)
     * @param {String}  sessionId  session id to operate on
     * @returns self reference
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-delete-session
     * @type protocol
     * ### Usage
     * ```
     * client.session([doWhat],sessionId);
     * ```
     */
    session(doWhat?: string, sessionId?: string): WebdriverIO;

    /**
     * Protocol bindings for all sessionStorage operations. *(Not part of the official Webdriver specification)*.
     * 
     * @param {String=}        method  method for storage operation
     * @param {Object|String=} args    operation arguments
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storage
     * @type protocol
     * ### Usage
     * ```
     * client.sessionStorage([method][,args]);
     * ```
     */
    sessionStorage(method?: string, args?: Object | string): WebdriverIO;

    /**
     * Protocol bindings to get the session storage size. *(Not part of the official Webdriver specification)*.
     *
     * @returns self reference &mdash; **Number** The number of items in the storage.    
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storagesize
     * @type protocol
     * ### Usage
     * ```
     * client.sessionStorageSize();
     * ```
     */
    sessionStorageSize(): WebdriverIO;

    /**
     * Returns a list of the currently active sessions. Each session will be returned
     * as a list of JSON objects with the following keys:
     *
     * | Key          | Type   | Description    |
     * |--------------|--------|----------------|
     * | id           | string | The session ID |
     * | capabilities | object | An object describing the [session capabilities](https://w3c.github.io/webdriver/webdriver-spec.html#capabilities) |
     *
     * *(Not part of the official Webdriver specification)*.
     * 
     * @returns self reference &mdash; **Object[]** a list of the currently active sessions
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessions
     * @type protocol
     * @depcrecated -
     * ### Usage
     * ```
     * client.sessions();
     * ```
     */
    sessions(): WebdriverIO;

    /**
     * Get the current page source.
     *
     * @returns self reference &mdash; **String** The current page source.
     *
     * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-page-source
     * @type protocol
     * ### Usage
     * ```
     * client.source();
     * ```
     */
    source(): WebdriverIO;

    /**
     * Query the server's current status. The server should respond with a general "HTTP 200 OK" response if it is alive and accepting commands. The response body 
     * should be a JSON object describing the state of the server. All server implementations should return two basic objects describing the server's current platform
     *  and when the server was built. All fields are optional; if omitted, the client should assume the value is uknown. Furthermore, server implementations may 
     * include additional fields not listed here.
     *
     * | Key            | Type   | Description |
     * | -------------- | ------ | ----------- |
     * | build.version  | string | A generic release label (i.e. "2.0rc3") |
     * | build.revision | string | The revision of the local source control client from which the server was built |
     * | build.time     | string | A timestamp from when the server was built |
     * | os.arch        | string | The current system architecture |
     * | os.name        | string | The name of the operating system the server is currently running on: "windows", "linux", etc. |
     * | os.version     | string | The operating system version |
     * *(Not part of the official Webdriver specification)*.
     * 
     * @returns self reference &mdash; **Object** An object describing the general status of the server
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#status
     * @type protocol
     * ### Usage
     * ```
     * client.status();
     * ```
     */
    status(): WebdriverIO;

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element. (Not part of the official Webdriver specification).
     *
     * @param {String} ID ID of a `<form />` WebElement JSON object to route the command to
     * @returns self reference
     * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsubmit
     * @type protocol
     * ### Usage
     * ```
     * client.submit(ID);
     * ```
     */
    submit(ID: string): WebdriverIO;

    /**
     * Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.
     *
     * @param {String} type The type of operation to set the timeout for. Valid values are:<br>- **script** for script timeouts<br>- **implicit** for modifying the implicit wait timeout<br>- **page load** for setting a page load timeout.
     * @param {Number} ms   The amount of time, in milliseconds, that time-limited commands are permitted to run.   
     * @returns self reference
     * @see https://w3c.github.io/webdriver/webdriver-spec.html#dfn-set-timeout
     * @type protocol
     * ### Usage
     * ```
     * client.timeouts(type,ms);
     * ```
     */
    timeouts(type: number, ms: number): WebdriverIO;

    /**
     * Set the amount of time, in milliseconds, that asynchronous scripts executed by /session/:sessionId/execute_async are permitted to run before they are 
     * aborted and a |Timeout| error is returned to the client.
     *
     * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsasync_script
     *
     * @param {Number} ms   The amount of time, in milliseconds, that time-limited commands are permitted to run.
     * @type protocol
     * @deprecated please use {@link timeouts}
     * ### Usage
     * ```
     * client.timeoutsAsyncScript(ms);
     */
    timeoutsAsyncScript(ms: number): WebdriverIO;

    /**
     * Set the amount of time the driver should wait when searching for elements. When searching for a single element, the driver should poll the page until an 
     * element is found or the timeout expires, whichever occurs first. When searching for multiple elements, the driver should poll the page until at
     * least one element is found or the timeout expires, at which point it should return an empty list.
     *
     * If this command is never sent, the driver should default to an implicit wait of 0ms.
     *
     * @param {Number} ms   The amount of time to wait, in milliseconds. This value has a lower bound of 0.
     * @returns self reference
     * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsimplicit_wait
     * @type protocol
     * @depcrecated Please use the {@link timeouts} command instead.
     * ### Usage
     * ```
     * client.timeoutsImplicitWait(ms);
     * ```
     */
    timeoutsImplicitWait(ms: string): WebdriverIO;
    // end of "protocol" section

    pause(ms: number): WebdriverIO;

    // protocols
    url(url?: string): WebdriverIO;
}
