declare namespace WebdriverIO {

    export interface Browser<T> {

        then<P>(onFulfilled?: (value: T) => P | Browser<P>, onRejected?: (err: any) => P | Browser<P>): Browser<T>;

        catch<P>(onRejected?: (err: any) => P | Browser<P>): Browser<P>;

        finally(callback: () => any): Browser<T>;

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
        addValue(selector: string, value: string | number): Browser<AnyResponse>;

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
        clearElement(selector: string): Browser<AnyResponse>;

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
        click(selector: string): Browser<AnyResponse>;

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
        doubleClick(selector: string): Browser<AnyResponse>;

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
        dragAndDrop(selector: string, destinationElem: string): Browser<AnyResponse>;

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
        leftClick(selector: string, xoffset: number, yoffset: number): Browser<AnyResponse>;

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
        middleClick(selector: string, xoffset: number, yoffset: number): Browser<AnyResponse>;

        /**
         *
         * Move the mouse by an offset of the specificed element. The mouse will be moved to the center of the element. If the element is not
         * visible, it will be scrolled into view.
         *
         * @param {String} selector element to move to
         * @return self reference
         * ### Usage
         * 
         * ```
         * client.moveToObject(selector);
         * ```
         */
        moveToObject(selector: string): Browser<AnyResponse>;

        /**
         *
         * Move the mouse by an offset of the specificed element. The element will move according to x & y offset. If the element is not visible, it will be scrolled into view.
         *
         * @param {String} selector element to move to
         * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element.
         * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element.
         * @return self reference
         * 
         * ### Usage
         * 
         * ```
         * client.moveToObject(selector,xoffset,yoffset);
         * ```
         */
        moveToObject(selector: string, xoffset: number, yoffset: number): Browser<AnyResponse>;

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
        rightClick(selector: string, xoffset: number, yoffset: number): Browser<AnyResponse>;

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
        selectByAttribute(selector: string, attribute: string, value: string): Browser<AnyResponse>;

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
        selectByIndex(selector: string, index: number): Browser<AnyResponse>;

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
        selectByValue(selector: string, value: string): Browser<AnyResponse>;

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
        selectByVisibleText(selector: string, text: string): Browser<AnyResponse>;

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
        selectorExecute<P>(selectors: string | string[], script: (elements: HTMLElement | HTMLElement[], ...args: any[]) => P, ...args: any[]): Browser<P>;

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
        selectorExecuteAsync<P>(selectors: string | string[], script: (elements: HTMLElement | HTMLElement[], ...args: any[]) => P, ...args: any[]): Browser<P>;

        /**
         * Send a sequence of key strokes to an element (clears value before). You can also use unicode characters like Left arrow or Back space. Browser<T> will take care of
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
        setValue(selector: string, values?: string | number): Browser<AnyResponse>;

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
        submitForm(selector: string): Browser<any>;
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
        deleteCookie(name?: string): Browser<AnyResponse>;

        /**
         * Retrieve all [cookies](https://w3c.github.io/webdriver/webdriver-spec.html#cookies) visible to the current page. This method will retrieve all cookies.
         * 
         * @return self reference
         * ### Usage
         * ```
         * client.getCookie([name]);
         * ```
         */
        getCookie(): Browser<WebdriverIO.Cookie[]>;

        /**
         * Retrieve a [cookie](https://w3c.github.io/webdriver/webdriver-spec.html#cookies) visible to the current page.
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
        getCookie(name: string): Browser<WebdriverIO.Cookie>;

        /**
         * Sets a [cookie](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#cookie-json-object) for current page.
         * 
         * @param {WebdriverIO.Cookie} cookie cookie object
         * @return self reference
         * 
         * ### Usage
         * 
         * ```
         * client.setCookie(cookie);
         * ```
         */
        setCookie(cookie: WebdriverIO.Cookie): Browser<AnyResponse>;
        // End of "Cookie" section

        // Start of "grid" section
        /**
         * Get the details of the Selenium Grid node running a session.
         * 
         * @return self reference
         * ### Usage
         * 
         * ```
         * client.getGridNodeDetails();
         * ```
         */
        getGridNodeDetails(): Browser<Object>;

        /**
         * 
         * @return self reference
         * ### Usage
         * 
         * ```
         * client.gridProxyDetails();
         * ```
         */
        gridProxyDetails(): Browser<Object>;

        /**
         * 
         * @return self reference
         * ### Usage
         * 
         * ```
         * client.gridTestSession();
         * ```
         */
        gridTestSession(): Browser<Object>;
        // End of "Grid" section

        // Strat of "Mobile" section
        /**
         * Send the currently active app to the background.
         * 
         * @param {Number} seconds  number of seconds after the app gets send to background
         * @return self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#background-app
         * @type mobile
         * @for android
         * ###Usage
         * ```
         * client.background(seconds);
         * ```
         */
        background(seconds: number): Browser<AnyResponse>;

        /**
         * Close the given application.
         *
         * @return self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#close-app
         * @type mobile
         * @for ios
         * ### Usage
         * ```
         * client.closeApp();
         * ```
         */
        closeApp(): Browser<AnyResponse>;

        /**
         * Retrieve current context or switch to the specified context
         *
         * @param {String} id the context to switch to
         * @return self reference
         * @see http://appium.io/slate/en/v1.1.0/?javascript#automating-hybrid-ios-apps
         * @see https://github.com/admc/wd/blob/master/lib/commands.js#L279
         * @type mobile
         * @for android, ios
         * ### Usage
         * ```
         * client.context([id]);
         * ```
         */
        context(id?: string): Browser<AnyResponse>;

        /**
         * list all available contexts.
         *
         * @return self reference
         * @see http://appium.io/slate/en/v1.1.0/?javascript#automating-hybrid-ios-apps
         * @see https://github.com/admc/wd/blob/master/lib/commands.js#L279
         * @type mobile
         * @for android, ios
         * ### Usage
         * ```
         * client.contexts();
         * ```
         */
        contexts(): Browser<AnyResponse>;

        /**
         * Receive the current activity on an Android device.
         *
         * @return self reference
         * @see https://github.com/appium/appium-android-driver/blob/master/lib/commands/general.js#L59-L61
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.currentActivity();
         * ```
         */
        currentActivity(): Browser<AnyResponse>;

        /**
         * Send a key event to the device.
         *
         * @param {Number} keyValue  device specifc key value
         * @param {Object} metastate device specifc metastate
         * @return self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#key-event
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.deviceKeyEvent(keycode[, metastate]);
         * ```
         */
        deviceKeyEvent(keycode: number, metastate?: Object): Browser<AnyResponse>;

        /**
         * Get all defined Strings from an app for the default language.
         *
         * @param {String} language  strings language code
         * @return self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#app-strings
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.getAppStrings(language);
         * ```
         */
        getAppStrings(language: string): Browser<AnyResponse>;

        /**
         * Get current device activity.
         * 
         * @return self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#current-activity
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.getCurrentDeviceActivity();
         * ```
         */
        getCurrentDeviceActivity(): Browser<AnyResponse>;

        /**
         * Captures iOS device date and time (command works only for real devices).
         * 
         * @return self reference
         * @see https://github.com/appium/appium-ios-driver/blob/master/lib/commands/general.js#L19-L35
         * @type mobile
         * @for ios
         * ### Usage
         * ```
         * client.getDeviceTime();
         * ```
         */
        getDeviceTime(): Browser<AnyResponse>;

        /**
         * Get the current geolocation.
         *
         * @returns self reference &mdash; **Object** the current geo location (`{latitude: number, longitude: number, altitude: number}`)
         * @uses protocol/location
         * @type mobile
         * ### Usage
         * ```
         * client.getGeoLocation();
         * ```
         */
        getGeoLocation(): Browser<AnyResponse>;

        /**
         * Get informations about the current network connection (Data/WIFI/Airplane). The actual server value will be a number
         *  (see `getNetworkConnection.js` example). However Browser<AnyResponse> additional properties to the response object to allow
         *  easier assertions (see `getNetworkConnectionEasier.js` example).
         * 
         * @return self reference
         * @type mobile
         * @see https://github.com/appium/appium-android-driver/blob/master/lib/commands/network.js#L8-L22
         * @for android
         * ### Usage
         * ```
         * client.getNetworkConnection();
         * ```
         */
        getNetworkConnection(): Browser<AnyResponse>;

        /**
         * Get the current browser orientation.
         * 
         * @returns self reference &mdash; **String** device orientation (`landscape/portrait`)
         * @for android, ios
         * @type mobile
         * ### Usage
         * ```
         * client.getOrientation();
         * ```
         */
        getOrientation(): Browser<AnyResponse>;

        /**
         * Hide the keyboard.
         *
         * @param {String} strategy  desired strategy to close keyboard ('tapOutside' or 'pressKey')
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#hide-keyboard-ios-only
         * @type mobile
         * @for ios, android
         * 
         * ### Usage
         * ```
         * client.hideDeviceKeyboard(strategy);
         * ```
         */
        hideDeviceKeyboard(strategy: string): Browser<AnyResponse>;

        /**
         * Long press on an element using finger motion events. This command works only in a mobile context.
         *
         * @param {String} selector element to hold on
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.hold(selector);
         * ```
         */
        hold(selector: string): Browser<AnyResponse>;

        /**
         * Install an app on device.
         * 
         * @param {String} path  path to Android application
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#install-app
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.installApp(path);
         * ```
         */
        installApp(path: string): Browser<AnyResponse>;

        /**
         * Check if an app is installed.
         * 
         * @param {String} bundleId  ID of bundled app
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#is-installed
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.isAppInstalled(bundleId);
         * ```
         */
        isAppInstalled(bundleId: string): Browser<AnyResponse>;

        /**
         * Check whether the device is locked or not.
         *
         * @returns self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.isLocked();
         * ```
         */
        isLocked(): Browser<AnyResponse>;

        /**
         * Launch the session for the desired capabilities. Note that this is the companion to the `autoLaunch=false` capability. 
         * This is not for launching arbitrary apps/activities --- for that use [startActivity](/api/mobile/startActivity.html). 
         * This is for continuing the initialization ("launch") process if you have used `autoLaunch=false`.
         * 
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#launch
         * @type mobile
         * @for ios, android
         * ### Usage
         * ```
         * client.launch();
         * ```
         */
        launch(): Browser<AnyResponse>;

        /**
         * Lock the device.
         * 
         * @param {Number} seconds  wait in seconds until lock screen
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#lock
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.lock(seconds);
         * ```
         */
        lock(seconds: number): Browser<AnyResponse>;

        /**
         * Press a particular key code on the device.
         *
         * @param {String} keycode    key code to press
         * @param {String} metastate  meta state to be activated
         * @returns self reference
         * @see http://developer.android.com/reference/android/view/KeyEvent.html
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.longPressKeycode(keycode,metastate);
         * ```
         */
        longPressKeycode(keycode: string, metastate: string): Browser<AnyResponse>;

        /**
         * Open the notifications pane on the device.
         * 
         * @returns self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.openNotifications();
         * ```
         */
        openNotifications(): Browser<AnyResponse>;

        /**
         * Protocol bindings for all mobile orientation operations. (Not part of the official Webdriver specification).
         * 
         * @param   {String} deviceOrientation  The new browser orientation as defined in ScreenOrientation: `{LANDSCAPE|PORTRAIT}`
         * @returns self reference &mdash; **String** device orientation (`LANDSCAPE/PORTRAIT`)
         * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidorientation
         * @type mobile
         * @for android, ios
         * ### Usage
         * ```
         * client.orientation([deviceOrientation]);
         * ```
         */
        orientation(deviceOrientation?: string): Browser<AnyResponse>;

        /**
         * Perform multi touch action
         *
         * @param {Object} touchAttr contains attributes of touch gesture (e.g. `element`, `x` and `y`)
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#touchaction--multitouchaction
         * @type mobile
         * @for android, ios
         * ### Usage
         * ```
         * client.performMultiAction(touchAttr);
         * ```
         */
        performMultiAction(touchAttr: Object): Browser<AnyResponse>;

        /**
         * Perform touch action
         *
         * @param {Object} touchAttr contains attributes of touch gesture (e.g. `element`, `x` and `y`)
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#touchaction--multitouchaction
         * @type mobile
         * @for android, ios
         * ### Usage
         * ```
         * client.performTouchAction(touchAttr);
         * ```
         */
        performTouchAction(touchAttr: Object): Browser<AnyResponse>;

        /**
         * Press a particular key code on the device.
         * 
         * @param {String} keycode    key code to press
         * @param {String} metastate  meta state to be activated
         * @returns self reference
         * @see http://developer.android.com/reference/android/view/KeyEvent.html
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.pressKeycode(keycode,metastate);
         * ```
         */
        pressKeycode(keycode: string, metastate: string): Browser<AnyResponse>;

        /**
         * Pulls a file from the device.
         * 
         * @param {String} path  device path to file
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#pull-file
         * @type mobile
         * @for ios, android
         * ### Usage
         * ```
         * client.pullFile(path);
         * ```
         */
        pullFile(path: string): Browser<AnyResponse>;

        /**
         * Pulls a folder from the device's file system.
         *
         * @param {String} path  device path to folder  
         * @returns self reference
         * @type mobile
         * @for ios, android
         * ### Usage
         * ```
         * client.pullFolder(path);
         * ```
         */
        pullFolder(path: string): Browser<AnyResponse>;

        /**
         *
         * Pushes a file to the device.
         *
         * @param {String} path  local path to file
         * @param {String} data
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#push-file
         * @type mobile
         * @for ios, android
         */
        pushFile(path: string, base64Data: string): Browser<AnyResponse>;

        /**
         * Release touch sequenz on specific element.
         *
         * @param {String} selector element to release on
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.release(selector);
         * ```
         */
        release(selector: string): Browser<AnyResponse>;

        /**
         * Remove an app from the device.
         *
         * @param {String} bundleId  bundle ID of application
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#remove-app
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.removeApp(bundleId);
         * ```
         */
        removeApp(bundleId: string): Browser<AnyResponse>;

        /**
         * Reset the device by clearing the device un- and reinstalling app package (if existing).  
         *
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#reset
         * @type mobile
         * @for android
         */
        reset(): Browser<AnyResponse>;

        /**
         * Perform a rotation gesture centered on the specified element.
         *
         * @param {Number} x          x offset to use for the center of the rotate gesture (default 0)
         * @param {Number} y          y offset to use for the center of the rotate gesture (default 0)
         * @param {Number} duration   The length of hold time for the specified gesture, in seconds. (default 1)
         * @param {Number} radius     The distance in points from the center to the edge of the circular path.
         * @param {Number} rotation   The length of rotation in radians. (default pi (π))
         * @param {Number} touchCount The number of touches to use in the specified gesture. (Effectively, the number of fingers a user would use to make the specified gesture.) Valid values are 1 to 5. (default 2)
         * @returns self reference
         * @see https://developer.apple.com/library/ios/documentation/ToolsLanguages/Reference/UIAElementClassReference/#//apple_ref/javascript/instm/UIAElement/rotateWithOptions
         * @type mobile
         * @for ios
         * ### Usage
         * ```
         * client.rotate(x, y, duration, radius, rotation, touchCount);
         * ```
         */
        rotate(x: number, y: number, duration: number, radius: number, rotation: number, touchCount: number): Browser<AnyResponse>;

        /**
         * Set the current geo location
         * 
         * @param {Object} location the new location (`{latitude: number, longitude: number, altitude: number}`)
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.setGeoLocation(location)
         * ```
         */
        setGeoLocation(location: Object): Browser<AnyResponse>;

        /**
         * Set immediate value in app.
         *
         * @param {String} id id
         * @param {value} value value
         * @returns self reference
         * @type mobile
         * @for ios
         * ### Usage
         * ```
         * client.setImmediateValue(id, value)
         * ```
         */
        setImmediateValue(id: string, value: string): Browser<AnyResponse>;

        /**
         * Set network connection.<br>
         * Types:<br>
         * 	- airplane mode
         * 	- wifi on
         * 	- data on
         *
         * These properties behave like a bitmask so if you set the network connection to 0 everything will get turned off. However if you 
         * for example set the network connection to 4 it will disable the airplane mode and turn off the wifi so that only data will be enabled. 
         * Browser<AnyResponse> provides a simplified interface to set these values without calculating bitmasks.
         *
         * __Note:__ if you have airplane mode enabled you can't have wifi or data be enabled too (for obvious reasons)
         * 
         * Possible values for `type` are: 
         *  
         * | Type | Airplane mode | WIFI | Data |
         * |------|---------------|------|------|
         * |   0  |      OFF      |  OFF |  OFF |
         * |   1  |      ON       |  OFF |  OFF |
         * |   2  |      OFF      |  ON  |  OFF |
         * |   4  |      OFF      |  OFF |  ON  |
         * |   6  |      OFF      |  ON  |  ON  |
         * 
         * @param {number} type type of connection
         * @returns self reference
         * @type mobile
         * @for selendroid
         * @see https://github.com/appium/appium-android-driver/blob/master/lib/commands/network.js#L24-L46
         * ### Usage
         * ```
         * client.setNetworkConnection(type);
         * ```
         */
        setNetworkConnection(type: number): Browser<AnyResponse>;

        /**
         * Set the current browser orientation.
         *
         * @param {String} orientation the new browser orientation (`landscape/portrait`)
         * @returns self reference
         * @type mobile
         * @for android, ios
         * ### Usage
         * ```
         * client.setOrientation(orientation);
         * ```
         */
        setOrientation(orientation: string): Browser<AnyResponse>;

        /**
         * Either retrieve a JSON hash of all the currently specified settings or update the current setting on the device.
         *
         * @param {String} settings the new browser settings
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.settings(settings);
         * ```
         */
        settings(settings: Object): Browser<AnyResponse>;

        /**
         *
         * Perform a shake action on the device.
         *
         * @returns self reference
         * @see  https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#shake
         * @type mobile
         * @for ios
         * ### Usage
         * ```
         * client.shake();
         * ```
         *
         */
        shake(): Browser<AnyResponse>;

        /**
         * Start an arbitrary Android activity during a session.
         *
         * @param {String} appPackage name of app package
         * @param {String} appActivity name of app activity
         * @returns self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.startActivity(appPackage, appActivity);
         * ```
         */
        startActivity(appPackage: string, appActivity: string): Browser<AnyResponse>;

        /**
         * Returns application strings of the application in a specific language.
         *
         * @param {String} language application strings of the application in the given language, if left empty returns all app strings.
         * @returns self reference
         * @see https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/appium-bindings.md#app-strings
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.strings([language});
         * ```
         */
        strings(language?: string): Browser<AnyResponse>;

        /**
         * Perform a swipe on the screen or an element. If you want to swipe on a specific element make sure you provide
         *  a selector argument. If not just pass `xoffset` and `yoffset` as command arguments.
         *
         * Start at a particulat screen location
         *
         * @param {String} selector   element to swipe on
         * @param {Number} xoffset    x offset of swipe gesture (in pixels or relative units)
         * @param {Number} yoffset    y offset of swipe gesture (in pixels or relative units)
         * @param {Number} speed      time (in seconds) to spend performing the swipe
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.swipe(selector, xoffset, yoffset, speed);
         * ```
         */
        swipe(selector?: string, xoffset?: number, yoffset?: number, speed?: number): Browser<AnyResponse>;

        /**
         * Perform a swipe down on an element.
         *
         * @param {String} selector  element to swipe on
         * @param {Number} yoffset    y offset of swipe gesture (in pixels or relative units)
         * @param {Number} speed     number of pixels go per second
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.swipeDown(selector, yOffset, speed);
         * ```
         */
        swipeDown(selector: string, yOffset: number, speed: number): Browser<AnyResponse>;

        /**
         * Perform a swipe left on an element.
         * 
         * @param {String} selector  element to swipe on
         * @param {Number} xoffset    x offset of swipe gesture (in pixels or relative units)
         * @param {Number} speed     time (in seconds) to spend performing the swipe
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.swipeLeft(selector, xOffset, speed);
         * ```
         */
        swipeLeft(selector: string, xOffset: number, speed: number): Browser<AnyResponse>;

        /**
         * Perform a swipe right on an element.
         * 
         * @param {String} selector  element to swipe on
         * @param {Number} xoffset    x offset of swipe gesture (in pixels or relative units)
         * @param {Number} speed     time (in seconds) to spend performing the swipe
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.swipeRight(selector, xOffset, speed);
         * ```
         */
        swipeRight(selector: string, xOffset: number, speed: number): Browser<AnyResponse>;

        /**
         * Perform a swipe up on an element.
         *
         * @param {String} selector  element to swipe on
         * @param {Number} yoffset    y offset of swipe gesture (in pixels or relative units)
         * @param {Number} speed     number of pixels go per second
         * @returns self reference
         * @type mobile
         * ### Usage
         * ```
         * client.swipeUp(selector, yOffset, speed);
         * ```
         */
        swipeUp(selector: string, yOffset: number, speed: number): Browser<AnyResponse>;

        /**
         * Switch the state (enabled/disabled) of airplane mode.
         *
         * @returns self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.toggleAirplaneMode();
         * ```
         */
        toggleAirplaneMode(): Browser<AnyResponse>;

        /**
         * Switch the state (enabled/disabled) of data service.
         *
         * @returns self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.toggleData();
         * ```
         */
        toggleData(): Browser<AnyResponse>;

        /**
         * Switch the state (enabled/disabled) of the location service.
         *
         * @returns self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.toggleLocationServices();
         * ```
         */
        toggleLocationServices(): Browser<AnyResponse>;

        /**
         * Switch the state (enabled/disabled) of the wifi service.
         *
         * @returns self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.toggleWiFi();
         * ```
         */
        toggleWiFi(): Browser<AnyResponse>;

        /**
         * Put finger on an element (only in mobile context).
         *
         * @param {String}  selector  element to put finger on
         * @param {Boolean} longClick if true touch click will be long (default: false)
         * @returns self reference
         * @type mobile
         * @uses android
         * ### Usage
         * ```
         * client.touch(selector, longClick);
         * ```
         */
        touch(selector: string, longClick: boolean): Browser<AnyResponse>;

        /**
         * Performs multiple touch actions. The action object is an array and its objects have to contain the action name (longPress, press, 
         * tap, wait, moveTo, release) and additional information about either the element, x/y coordinates or touch counts.
         *
         * @param {Object} actions  touch action as object or object[] with attributes like touchCount, x, y, duration
         * @returns self reference
         * @see  https://github.com/appium/node-mobile-json-wire-protocol/blob/master/docs/protocol-methods.md#mobile-json-wire-protocol-endpoints
         * @type mobile
         * @for android, ios
         * ### Usage
         * ```
         * client.touchMultiPerform(actions);
         * ```
         */
        touchMultiPerform(actions: Object): Browser<AnyResponse>;

        /**
         * Performs a specific touch action. The action object need to contain the action name (longPress, press, tap, wait, moveTo, release) and additional 
         * information about either the element, x/y coordinates or touch counts.
         * 
         * @param {Object} actions  touch action as object or object[] with attributes like touchCount, x, y, duration
         * @return self reference
         * @see  https://github.com/appium/node-mobile-json-wire-protocol/blob/master/docs/protocol-methods.md#mobile-json-wire-protocol-endpoints
         * @type mobile
         * @for android, ios 
         * ### Usage
         * ```
         * client.touchPerform(actions);
         * ```
         */
        touchPerform(actions: Object): Browser<AnyResponse>;

        /**
         * Unlock the device.
         * @return self reference
         * @type mobile
         * @for android
         * ### Usage
         * ```
         * client.unlock();
         * ```
         */
        unlock(): Browser<AnyResponse>;
        // End of "Mobile" section

        // Start of "Property" section
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
         * ```
         */
        getAttribute(selector: string, attributeName: string): Browser<string | string[]>;

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
        getCssProperty(selector: string, cssProperty: string): Browser<WebdriverIO.CssProperty | WebdriverIO.CssProperty[]>;

        /**
         * Get the width and height for an DOM-element based given selector.
         * 
         * @param {String} selector element with requested size
         * @param {String} property property to get the value, possible values are either `width` or `height`.
         * @returns self reference
         * 
         * ### Usage
         * 
         * ```
         * client.getElementSize(selector[, property]);
         * ```
         */
        getElementSize(selector: string, property: string): Browser<number | number[]>;

        /**
         * Get the width and height for an DOM-element based given selector.
         * 
         * @param {String} selector element with requested size
         * @returns self reference
         * 
         * @see {@link Size}
         * ### Usage
         * 
         * ```
         * client.getElementSize(selector);
         * ```
         */
        getElementSize(selector: string): Browser<WebdriverIO.Size | WebdriverIO.Size[]>;

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
        getHTML(selector: string, includeSelectorTag?: boolean): Browser<string | string[]>;

        getHTML<P>(selector: string, callback: (err: any, html: string | string[]) => P): Browser<P>;

        getHTML<P>(selector: string, includeSelectorTag: boolean, callback: (err: any, html: string | string[]) => P): Browser<P>;

        /**
         * Determine an element’s location on the page. The point (0, 0) refers to the upper-left corner of the page.
         * 
         * @param {String} selector    element with requested position offset
         * @returns self reference
         * ### Usage
         * 
         * ```
         * client.getLocation(selector);
         * ```
         */
        getLocation(selector: string): Browser<WebdriverIO.Point>;

        /**
         * Determine an element's location for given `axis`. The possible values for `axis` are `x' or `y'.
         * 
         * @param {String} selector    element with requested position offset
         * @param {String} axis axis to get the value for
         * @returns self reference
         * ### Usage
         * 
         * ```
         * client.getLocation(selector, axis);
         * ```
         */
        getLocation(selector: string, axis: string): Browser<number>;

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
        getLocationInView(selector: string): Browser<WebdriverIO.Point>;

        getLocationInView(selector: string, axis: string): Browser<number>;

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
        getSource(): Browser<string>;

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
        getTagName(selector: string): Browser<string>;

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
        getText(selector: string): Browser<string | string[]>;

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
        getTitle(): Browser<string>;

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
        getUrl(): Browser<string>;

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
        getValue(selector: string): Browser<string | string[]>;
        // End of "Property" section

        // Start of "Protocol" section
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
        alertAccept(): Browser<AnyResponse>;

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
        alertDismiss(): Browser<AnyResponse>;

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
         * @type protocol
         */
        alertText(text?: string): Browser<string>;

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
        applicationCacheStatus(): Browser<WebdriverIO.ApplicationCacheStatus>;

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
        back(): Browser<AnyResponse>;

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
        buttonDown(button: number | WebdriverIO.Button): Browser<AnyResponse>;

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
        buttonPress(button: number | WebdriverIO.Button): Browser<AnyResponse>;

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
        buttonUp(button: number | WebdriverIO.Button): Browser<AnyResponse>;

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
        cookie(method?: string, args?: WebdriverIO.Cookie | string): Browser<WebdriverIO.CookiesResponse>;

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
        doDoubleClick(): Browser<AnyResponse>;

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
        element(selector: string): Browser<WebdriverIO.WebElementResponse>;

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
        elementActive(): Browser<WebdriverIO.WebElementResponse>;

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
        elementIdAttribute(ID: string | number, attributeName: string): Browser<WebdriverIO.StringResponse>;

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
        elementIdClear(ID: string | number): Browser<AnyResponse>;

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
        elementIdClick(ID: string | number): Browser<AnyResponse>;

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
        elementIdCssProperty(ID: string | number, cssPropertyName: string): Browser<WebdriverIO.StringResponse>;

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
        elementIdDisplayed(ID: string | number): Browser<WebdriverIO.BooleanResponse>;

        /**
         * Search for an element on the page, starting from an element. The located element will be returned as a WebElement JSON object.
         * The table below lists the locator strategies that each server should support. Each locator must return the first matching element 
         * located in the DOM.
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
        elementIdElement(ID: string | number, selector: string): Browser<WebdriverIO.WebElementResponse>;

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
        elementIdElements(ID: string | number, selector: string): Browser<WebdriverIO.WebElementsResponse>;

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
        elementIdEnabled(ID: string | number): Browser<WebdriverIO.BooleanResponse>;

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
        elementIdLocation(ID: string | number): Browser<WebdriverIO.PointResponse>;

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
        elementIdLocationInView(ID: string | number): Browser<WebdriverIO.PointResponse>;

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
        elementIdName(ID: string | number): Browser<WebdriverIO.StringResponse>;

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
        elementIdRect(ID: string | number): Browser<WebdriverIO.PointResponse>;

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
        elementIdSelected(ID: string | number): Browser<WebdriverIO.BooleanResponse>;

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
        elementIdSize(ID: string | number): Browser<WebdriverIO.SizeResponse>;

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
        elementIdText(ID: string | number): Browser<WebdriverIO.StringResponse>;

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
        elementIdValue(ID: string | number, value: string | string[]): Browser<AnyResponse>;

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
        elements(selector: string): Browser<WebdriverIO.WebElementsResponse>;

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
         * ```
         */
        execute(script: string | Function, ...args: any[]): Browser<WebdriverIO.AnyResponse>;

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
        executeAsync(script: string | Function, ...args: any[]): Browser<WebdriverIO.AnyResponse>;

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
        file(data: Object): Browser<AnyResponse>;

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
        forward(): Browser<AnyResponse>;

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
        frame(id?: string | number | WebdriverIO.WebElementJSONObject): Browser<AnyResponse>;

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
        frameParent(): Browser<AnyResponse>;

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
        imeActivate(engine: string): Browser<AnyResponse>;

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
        imeActivated(): Browser<AnyResponse>;

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
        imeActiveEngine(): Browser<AnyResponse>;

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
        imeAvailableEngines(): Browser<AnyResponse>;

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
        imeDeactivated(): Browser<AnyResponse>;

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
        init(capabilities?: Object): Browser<AnyResponse>;

        /**
         * Send a sequence of key strokes to the active element. This command is similar to the send keys command in every aspect 
         * except the implicit termination: The modifiers are *not* released at the end of the call. Rather, the state of the modifier 
         * keys is kept between calls, so mouse interactions can be performed while modifier keys are depressed.
         *
         * You can also use unicode characters like Left arrow or Back space. Browser<AnyResponse> will take care of translating them into 
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
        keys(value: string | string[]): Browser<AnyResponse>;

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
        localStorage(method: string, args: string | Object): Browser<AnyResponse>;

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
        localStorageSize(): Browser<AnyResponse>;

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
        location(location?: Object): Browser<AnyResponse>;

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
        log(type: string): Browser<AnyResponse>;

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
        logTypes(): Browser<AnyResponse>;

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
        moveTo(element: string, xoffset: number, yoffset: number): Browser<AnyResponse>;

        moveTo(xoffset: number, yoffset: number): Browser<AnyResponse>;

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
        refresh(): Browser<AnyResponse>;

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
        screenshot(): Browser<AnyResponse>;

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
        session(doWhat?: string, sessionId?: string): Browser<AnyResponse>;

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
        sessionStorage(method?: string, args?: Object | string): Browser<AnyResponse>;

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
        sessionStorageSize(): Browser<AnyResponse>;

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
        sessions(): Browser<AnyResponse>;

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
        source(): Browser<AnyResponse>;

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
        status(): Browser<AnyResponse>;

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
        submit(ID: string): Browser<AnyResponse>;

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
        timeouts(type: number, ms: number): Browser<AnyResponse>;

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
         * ```
         */
        timeoutsAsyncScript(ms: number): Browser<AnyResponse>;

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
        timeoutsImplicitWait(ms: string): Browser<AnyResponse>;

        /**
         * Gets an object containing the current page title.
         * 
         * @returns self reference &mdash; **String** The current page title.
         * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-title
         * @type protocol
         * ### Usage
         * ```
         * client.title();
         * ```
         */
        title(): Browser<AnyResponse>;

        /**
         * Single tap on the touch enabled device.
         *
         * @param {String} ID ID of a WebElement JSON object to route the command to
         * @returns self reference
         * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchclick
         * @type protocol
         * @for android
         * @depcrecated Please use {@link touchPerform} instead.
         * ### Usage
         * ```
         * client. touchClick(ID);
         * ```
         */
        touchClick(ID: string): Browser<AnyResponse>;

        /**
         * Finger down on the screen.
         *
         * @param {Number} x  X coordinate on the screen
         * @param {Number} y  Y coordinate on the screen
         * @returns self reference
         * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchdown
         * @type protocol
         * @depcrecated Please use {@link touchPerform} instead.
         * ### Usage
         * ```
         * client.touchDown(x,y);
         * ```
         */
        touchDown(x: number, y: number): Browser<AnyResponse>;

        /**
         * Flick on the touch screen using finger motion events. This flick command starts at a particular screen location.
         *
         * @param {String} ID      ID of the element where the flick starts
         * @param {Number} xoffset the x offset in pixels to flick by
         * @param {Number} yoffset the y offset in pixels to flick by
         * @param {Number} speed   the speed in pixels per seconds
         * @returns self reference
         * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchflick
         * @type protocol
         * @depcrecated Please use {@link touchPerform} instead.
         * ### Usage
         * ```
         * client.touchFlick(ID,xoffset,yoffset,speed);
         * ```
         */
        touchFlick(ID: string, xoffset: number, yoffset: number, speed: number): Browser<AnyResponse>;

        /**
         * Long press on the touch screen using finger motion events.
         *
         * @param {String} id ID of the element to long press on
         * @returns self reference
         * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchlongclick
         * @type protocol
         * @depcrecated Please use {@link touchPerform} instead.
         * @for android
         * 
         * ### Usage
         * ```
         * client.touchLongClick(id);
         * ```
         */
        touchLongClick(id: string): Browser<AnyResponse>;

        /**
         * Finger move on the screen.
         *
         * @param {Number} x  coordinate on the screen
         * @param {Number} y  coordinate on the screen
         * @returns self reference
         * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchmove
         * @type protocol
         * @depcrecated Please use {@link touchPerform} instead.
         * 
         * ### Usage
         * ```
         * client.touchMove(x,y);
         * ```
         */
        touchMove(x: number, y: number): Browser<AnyResponse>;

        /**
         * croll on the touch screen using finger based motion events. If element ID is given start scrolling at a particular screen location.
         * 
         * @param {String} id       the element where the scroll starts.
         * @param {Number} xoffset  in pixels to scroll by
         * @param {Number} yoffset  in pixels to scroll by 
         * @returns self reference
         * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchscroll
         * @type protocol
         * @depcrecated Please use {@link touchPerform} instead.
         * 
         * ### Usage
         * ```
         * client.touchScroll(id,xoffset,yoffset);
         * ```
         */
        touchScroll(id: string, xoffset: number, yoffset: number): Browser<AnyResponse>;

        /**
         * Finger up on the screen.
         *
         * @param {Number} x  coordinate on the screen
         * @param {Number} y  coordinate on the screen
         * @returns self reference
         * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchup
         * @type protocol
         * @depcrecated Please use {@link touchPerform} instead.
         * 
         * ### Usage
         * ```
         * client.touchUp(x,y);
         * ```
         */
        touchUp(x: number, y: number): Browser<AnyResponse>;

        /**
         * Protocol binding to load or get the URL of the browser.
         * 
         * @param {String} url  the URL to navigate to
         * @returns self reference &mdash; **String**     the current URL
         * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get
         * @type protocol
         * 
         * ### Usage
         * ```
         * client.url([url]);
         * ```
         */
        url(url?: string): Browser<AnyResponse>;

        /**
         * Protocol binding to handle with tabs in the browser.
         * 
         * @param {String} windowHandle the window to change focus to
         * @returns self reference
         * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-switch-to-window
         * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-close-window
         * @type protocol
         * 
         * ### Usage
         * ```
         * client.window([windowHandle]);
         * ```
         */
        window(windowHandle?: string): Browser<AnyResponse>;

        /**
         * Retrieve the current window handle.
         * 
         * @returns self reference &mdash; **String** the current window handle
         * @see https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-window-handle
         * @type protocol
         * ### Usage
         * ```
         * client.windowHandle();
         * ```
         */
        windowHandle(): Browser<AnyResponse>;

        /**
         * The Fullscreen Window command invokes the window manager-specific “full screen” operation, if any, on the window containing the current 
         * top-level browsing context. This typically increases the window to the size of the physical display and can hide browser UI elements such as toolbars.
         *
         * **Note:** this command was recently added to the official Webdriver protocol and might not be working with current Selenium driver.
         *
         * @returns self reference
         * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-fullscreen-window
         * @type protocol
         * ### Usage
         * ```
         * client.windowHandleFullscreen();
         * ```
         */
        windowHandleFullscreen(): Browser<AnyResponse>;

        /**
         * Maximize the specified window if not already maximized. If the :windowHandle URL parameter is "current", the currently active window will be maximized.
         *
         * @param {String} windowHandle window to maximize (if parameter is falsy the currently active window will be maximized)
         * @returns self reference
         * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-maximize-window
         * @type protocol
         * ### Usage
         * ```
         * client.windowHandleMaximize([windowHandle]);
         * ```
         */
        windowHandleMaximize(windowHandle?: string): Browser<AnyResponse>;

        /**
         *  Protocol bindings to receive or change the position of the browser window. If the `windowHandle` URL parameter is falsy, the currently active window will be considered.
         * *(Not part of the official Webdriver specification).*
         * 
         * @param {String} windowHandle the window to receive/change the position
         * @param {Object} position     the X and Y coordinates to position the window at, relative to the upper left corner of the screen
         * @returns self reference &mdash; **Object** the X and Y coordinates for the window, relative to the upper left corner of the screen (`{x: number, y: number}`)
         * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandleposition
         * @type protocol
         * ###Usage
         * ```
         * client.windowHandlePosition([windowHandle][,position]);
         * ```
         */
        windowHandlePosition(windowHandle?: string, position?: Object): Browser<AnyResponse>;

        /**
         * Protocol binding to get or change the size of the browser.
         *  
         * @param {String} windowH  andle the window to receive/change the size
         * @param {Object} dimensi  on    the new size of the window
         * @returns self reference  s &mdash; **Object** the size of the window (`{width: number, height: number}`)
         * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-set-window-size
         * @type protocol
         * ### Usage
         * ```  
         * client.windowHandleSize([windowHandle][,dimension]);
         * ```
         */
        windowHandleSize(windowHandle?: string, dimension?: Object): Browser<AnyResponse>;

        /** 
         * Retrieve the list of all window handles available to the session.
         *  
         * @returns self reference  s &mdash; **String[]** a list of window handles
         * @see https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-window-handles
         * @type protocol
         * ### Usage
         * ```  
         * client.windowHandles();
         * ```
         */
        windowHandles(): Browser<AnyResponse>;
        // End of "Protocol" section

        // Start of "State" section
        /** 
         * Return true or false if the selected DOM-element currently has focus.
         *  
         * @param {String} selecto  r   select active element
         * @returns self reference &mdash; **Boolean**         true if element has focus
         * @type state
         * ### Usage
         * ```  
         * client.hasFocus(selector);
         * ```
         */
        hasFocus(selector: string): Browser<Boolean>;

        /**
         * Return true or false if the selected DOM-element found by given selector is enabled.
         * 
         * @param   {String}             selector  DOM-element
         * @returns self reference &mdash; **Boolean|Boolean[]**            true if element(s)* (is|are) enabled
         * @type state
         * ### Usage
         * ```
         * client.isEnabled(selector);
         * ```
         */
        isEnabled(selector: string): Browser<Boolean | Boolean[]>;

        /**
         * Returns true if at least one element is existing by given selector.
         * 
         * @param   {String}             selector  DOM-element
         * @returns self reference &mdash; **Boolean|Boolean[]**            true if element(s)* [is|are] existing
         * @type state
         * ### Usage
         * ```
         * client.isExisting(selector);
         * ```
         */
        isExisting(selector: string): Browser<Boolean | Boolean[]>;

        /**
         * Return true or false if an `<option>` element, or an `<input>` element of type checkbox or radio is currently selected found by given selector.
         * 
         * @param   {String}             selector  option element or input of type checkbox or radio
         * @returns self reference &mdash; **Boolean|Boolean[]**            true if element is selected
         * @type state
         * ### Usage
         * ```
         * client.isSelected(selector);
         * ```
         */
        isSelected(selector: string): Browser<Boolean | Boolean[]>;

        /**
         * Return true if the selected DOM-element found by given selector is visible. Returns an array if multiple DOM-elements are found for the given selector.
         * 
         * @param   {String}             selector  DOM-element
         * @returns self reference &mdash; **Boolean|Boolean[]**           true if element(s)* [is|are] visible
         * @type state
         * ### Usage
         * ```
         * client.isVisible(selector);
         * ```
         */
        isVisible(selector: string): Browser<Boolean | Boolean[]>;

        /**
         * Return true if the selected DOM-element found by given selector is visible and within the viewport.
         * 
         * @param   {String}             selector  DOM-element
         * @returns self reference &mdash; **Boolean|Boolean[]**            true if element(s)* [is|are] visible
         * @type state
         * ### Usage
         * ```
         * client.isVisibleWithinViewport(selector);
         * ```
         */
        isVisibleWithinViewport(selector: string): Browser<Boolean | Boolean[]>;
        // End of "State" section

        // Start of "Utilty" section
        /**
         * Add custom command to client/browser instance. Read more about `addCommand` [here](http://webdriver.io/guide/usage/customcommands.html).
         * 
         * @param {String}   commandName   name of your custom command
         * @param {Function} customMethod  your custom method
         * @param {Boolean}  overwrite     if set to `true` you can overwrite existing commands
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.addCommand(commandName,customMethod,overwrite);
         * ```
         */
        addCommand(commandName: string, customMethod: Function, overwrite?: boolean): Browser<AnyResponse>;

        /**
         * Call an own function within running chain. It is mostly used to end an async BDD/TDD block (see example below) when running in standalone mode. Using the wdio test runner this command
         * is obsolete and should not be used.
         * 
         * @param {Function} callback  function to be called
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.call(callback);
         * ```
         */
        call(callback: Function): Browser<AnyResponse>;

        /**
         * Given a selector corresponding to an `<input type=file>`, will upload the local file to the browser machine and fill the form accordingly.
         *  It does not submit the form for you.
         * 
         * @param {String} selector   input element
         * @param {String} localPath  local path to file to be uploaded
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.chooseFile(selector,localPath);
         * ```
         */
        chooseFile(selector: string, localPath: string): Browser<AnyResponse>;

        /**
         * This command helps you to debug your integration tests. It stops the running queue and gives  you time to jump into the browser and check the state of 
         * your application (e.g. using the dev tools). Once you are done go to the command line and press Enter.
         *
         * Make sure you increase the timeout property of your test framework your are using (e.g. Mocha or Jasmine) in order to prevent the continuation due to a test timeout.
         *
         * <iframe width="560" height="315" src="https://www.youtube.com/embed/xWwP-3B_YyE" frameborder="0" allowfullscreen></iframe>
         * 
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.debug();
         * ```
         */
        debug(): Browser<AnyResponse>;

        /**
         * End the session and close browser.
         * 
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.end();
         * ```
         */
        end(callbak?: Function): Browser<AnyResponse>;

        /**
         * End all selenium server sessions at once.
         *
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.endAll();
         * ```
         */
        endAll(): Browser<AnyResponse>;

        /**
         * Returns a list of previous called commands + their arguments.
         * 
         * @returns self reference &mdash; **Object[]** list of recent called commands + their arguments
         * @type utility
         * ### Usage
         * ```
         * client.getCommandHistory();
         * ```
         */
        getCommandHistory(): Browser<AnyResponse>;

        /**
         * Pauses queue execution for a specific amount of time.
         * 
         * @param {Number} milliseconds time in ms
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.pause(milliseconds);
         * ```
         */
        pause(ms: number): Browser<AnyResponse>;

        /**
         * Creates a new Selenium session with your current capabilities. This is useful if you test highly stateful application where you need to
         *  clean the browser session between the tests in your spec file to avoid creating hundreds of single test files with WDIO. Be careful though, 
         * this command affects your test time tremendously since spawning new Selenium sessions is very time consuming especially when using cloud services.
         * 
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.reload();
         * ```
         */
        reload(): Browser<AnyResponse>;

        /**
         * Save a screenshot as a base64 encoded PNG with the current state of the browser. Be aware that some Selenium driver are taking screenshots
         *  of the whole document (e.g. phantomjs) and others only of the current viewport. If you want to always be sure that the screenshot has the 
         * size of the whole document, use [WebdriverCSS](https://github.com/Browser<AnyResponse>/webdrivercss) to enhance this command with that functionality.
         * 
         * @param {Function|String}   filename    path to the generated image (relative to the execution directory)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.saveScreenshot([filename]);
         * ```
         */
        saveScreenshot(filenam?: Function | string): Browser<AnyResponse>;

        /**
         * Scroll to a specific element. You can also append/pass two offset values as parameter to scroll to a specific position.
         * 
         * @param {String}  selector  element to scroll to
         * @param {Number}   xoffset   x offset to scroll to
         * @param {Number}   yoffset   y offset to scroll to
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.scroll([selector],xoffset,yoffset);
         * ```
         */
        scroll(selector: string, xoffset: number, yoffset: number): Browser<AnyResponse>;

        scroll(selector: string): Browser<AnyResponse>;

        scroll(xoffset: number, yoffset: number): Browser<AnyResponse>;

        /**
         * Uploads a file to the selenium server.
         *
         * @param {String} localPath local path to file
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.uploadFile(localPath);
         * ```
         */
        uploadFile(localPath: string): Browser<AnyResponse>;

        /**
         * Wait for an element (selected by css selector) for the provided amount of milliseconds to be (dis/en)abled. If multiple elements get queryied by given
         * selector, it returns true (or false if reverse flag is set) if at least one element is (dis/en)abled.
         *
         * @param {String}   selector element to wait for
         * @param {Number}  ms       time in ms (default: 500)
         * @param {Boolean} reverse  if true it waits for the opposite (default: false)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.waitForEnabled(selector[,ms][,reverse]);
         * ```
         */
        waitForEnabled(selector: string, ms?: number, reverse?: boolean): Browser<boolean>;

        /**
         * Wait for an element (selected by css selector) for the provided amount of milliseconds to be present within the DOM. Returns true if the selector
         * matches at least one element that exists in the DOM, otherwise throws an error. If the reverse flag is true, the command will instead return true
         * if the selector does not match any elements.
         *
         * @param {String}   selector element to wait for
         * @param {Number}  ms       time in ms (default: 500)
         * @param {Boolean} reverse  if true it instead waits for the selector to not match any elements (default: false)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.waitForExist(selector[,ms][,reverse]);
         * ```
         */
        waitForExist(selector: string, ms?: number, reverse?: boolean): Browser<boolean>;

        /**
         * Wait for an option or radio/checkbox element (selected by css selector) for the provided amount of milliseconds to be (un)selected or (un)checked.
         *  If multiple elements get queryied by given selector, it returns true (or false if reverse flag is set) if at least one element is (un)selected.
         *
         * @param {String}   selector element to wait for
         * @param {Number}  ms       time in ms (default: 500)
         * @param {Boolean} reverse  if true it waits for the opposite (default: false)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.waitForSelected(selector[,ms][,reverse]);
         * ```
         */
        waitForSelected(selector: string, ms?: number, reverse?: boolean): Browser<boolean>;

        /**
         * Wait for an element (selected by css selector) for the provided amount of milliseconds to have text/content. If multiple elements get queryied by 
         * given selector, it returns true (or false if reverse flag is set) if at least one element has text/content.
         *
         * @param {String}   selector element to wait for
         * @param {Number}  ms       time in ms (default: 500)
         * @param {Boolean} reverse  if true it waits for the opposite (default: false)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.waitForText(selector[,ms][,reverse]);
         * ```
         */
        waitForText(selector: string, ms?: number, reverse?: boolean): Browser<boolean>;

        /**
         * Wait for an element (selected by css selector) for the provided amount of milliseconds to have a value. If multiple elements get queryied by given selector,
         *  it returns true (or false if reverse flag is set) if at least one element has a value.
         *
         * @param {String}   selector element to wait for
         * @param {Number}  ms       time in ms (default: 500)
         * @param {Boolean} reverse  if true it waits for the opposite (default: false)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.waitForValue(selector[,ms][,reverse]);
         * ```
         */
        waitForValue(selector: string, ms?: number, reverse?: boolean): Browser<boolean>;

        /**
         * Wait for an element (selected by css selector) for the provided amount of milliseconds to be (in)visible. If multiple elements get queryied by given selector,
         *  it returns true (or false if reverse flag is set) if at least one element is visible.
         *
         * @param {String}   selector element to wait for
         * @param {Number}  ms       time in ms (default: 500)
         * @param {Boolean} reverse  if true it waits for the opposite (default: false)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.waitForVisible(selector[,ms][,reverse]);
         * ```
         */
        waitForVisible(selector: string, ms?: number, reverse?: boolean): Browser<boolean>;

        /**
         * This wait command is your universal weapon if you want to wait on something. It expects a condition and waits until that condition is fulfilled with an 
         * truthy value. A condition can be either a promise or a command that returns a promise.
         * 
         * @param {Function|Promise} condition  condition to wait on
         * @param {Number}          timeout    timeout in ms (default: 500)
         * @param {String}          timeoutMsg error message to throw when waitUntil times out
         * @param {Number}          interval   interval between condition checks (default: 500)
         * @returns self reference
         * @type utility
         * ### Usage
         * ```
         * client.waitUntil(condition[,timeout][,timeoutMsg][,interval]);
         * ```
         */
        waitUntil(condition: Function, timeout?: number, timeoutMsg?: string, interval?: number): Browser<AnyResponse>;

        // End of "Utilty" section

        // Start of "Windown" section
        /**
         * Close current window (and focus on an other window). If no window handle is given it automatically switches back to the first handle.
         * 
         * @param {String} windowHandle new window to focus on
         * @returns self reference
         * @type window
         * ### Usage
         * ```
         * client.close([windowHandle]);
         * ```
         */
        close(windowHandle?: string): Browser<AnyResponse>;

        /**
         * Retrieve the current window handle.
         * 
         * @returns self reference
         * @type window
         * ### Usage
         * ```
         * client.getCurrentTabId();
         * ```
         */
        getCurrentTabId(): Browser<string>;

        /**
         * Retrieve a list of all window handles available in the session.
         * 
         * @returns self reference
         * @type window
         * ### Usage
         * ```
         * client.getTabIds();
         * ```
         */
        getTabIds(): Browser<string[]>;

        /**
         * Get viewport size of the current browser window.
         * 
         * @param {String} property if “width” or “height” is set it returns only that property
         * @returns self reference
         * @type window
         * ### Usage
         * ```
         * client.getViewportSize([property]);
         * ```
         */
        getViewportSize(property?: string): Browser<AnyResponse>;

        /**
         * Open new window in browser. This command is the equivalent function to `window.open()`. This command does not work in mobile environments.
         *
         * __Note:__ When calling this command you automatically switch to the new window.
         * 
         * @param {String} url            website URL to open
         * @param {String} windowName     name of the new window
         * @param {String} windowFeatures features of opened window (e.g. size, position, scrollbars, etc.)
         * @returns self reference
         * @type window
         * ### Usage
         * ```
         * client.newWindow(url,windowName,windowFeatures);
         * ```
         */
        newWindow(url: string, windowName: string, windowFeatures: string): Browser<AnyResponse>;

        /**
         * This command changes the viewport size of the browser. When talking about browser size we have to differentiate between the actual window size
         *  of the browser application and the document/viewport size of the website. The window size will always be bigger since it includes the height of
         *  any menu or status bars.
         * 
         * @param {Object}   size  window width/height
         * @param {Boolean}  type  set to `false` to change window size, `true` (default) to change viewport size
         * @returns self reference
         * @type window
         * ### Usage
         * ```
         * client.setViewportSize(size,type);
         * ```
         */
        setViewportSize(size: Object, type: boolean): Browser<AnyResponse>;

        /**
         * Switch focus to a particular tab / window handle.
         *
         * @param {String} windowHandle window handle URL to focus on (if no handle was specified the command switches to the first available one)
         * @returns self reference
         * @type window
         * ### Usage
         * ```
         * client.switchTab([windowHandle]);
         * ```
         */
        switchTab(windowHandle?: string): Browser<AnyResponse>;
        // End of "Windown" section
    }

    export enum ApplicationCacheStatus {
        UNCACHED = 0, IDLE = 1, CHECKING = 2, DOWNLOADING = 3, UPDATE_READY = 4, OBSOLETE = 5
    }

    export enum Button {
        LEFT = 0, MIDDLE = 1, RIGHT = 2
    }

    export interface Cookie {
        name: string;
        value: string;
        path?: string;
        domain?: string;
        secure?: boolean;
        httpOnly?: boolean;
        expiry?: number;
    }

    export interface CssProperty {
        property: string;
        value: string;
        parsed: ParsedCssProperty;
    }

    export interface Point {
        x: number;
        y: number;
    }

    export interface ParsedCssProperty {
        type: string;
        string: string;
        quote: string;
        unit: string;
        value: string | number | string[] | number[];
    }

    export interface Size {
        width: number;
        height: number;
    }

    export interface Response<T> {
        state: string;
        sessionId: string;
        value: T;
        status: number;
        selector?: string;
        hCode?: string;
        type?: string;
        message?: string;
    }

    export interface AnyResponse extends Response<any> { }

    export interface BooleanResponse extends Response<Boolean> { }

    export interface CookiesResponse extends Response<Cookie[]> { }

    export interface PointResponse extends Response<Point> { }

    export interface SizeResponse extends Response<Size> { }

    export interface StringResponse extends Response<String> { }

    export interface WebElementResponse extends Response<WebElementJSONObject> { }

    export interface WebElementsResponse extends Response<WebElementJSONObject[]> { }

    export interface WebElementJSONObject {
        ELEMENT: string;
    }

    export function remote(options?: {}, modifier?: {}): Browser<any>;

    export function multiremote<T>(options?: {}): Browser<any>;

}

declare module 'webdriverio' {
    export = WebdriverIO;
}
