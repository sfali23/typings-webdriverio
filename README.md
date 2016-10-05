# Typings for WebdriverIO
The typescript typings for [WebdriverIO](http://webdriver.io/).

[![Build Status](https://travis-ci.org/sfali23/typings-webdriverio.svg?branch=master)](https://travis-ci.org/sfali23/typings-webdriverio)

## Installation notes:

### Installing standalone mode

```
typings install npm~webdriverio -S
```

### Example

```
/// <reference path="../typings/index.d.ts"/>

import webdriverio = require('webdriverio');
import {Browser} from 'webdriverio';

let options: any = {{ desiredCapabilities: { browserName: 'chrome' }};
let browser: Browser<any> = webdriverio.remote(options)
                                .init()
                                .url('http://webdriver.io/')
                                .getTitle()
                                .then((title: string) => {
                                    console.log('Title was: %s', title);
                                })
                                .end();
```

## Installing WDIO mode

```
typings install env~webdriverio -GS
```

### Example

**NOTE:** Following example is written using _mocha_ framework.

```
/// <reference path="../typings/index.d.ts"/>

import assert = require('assert');
let browser = global.browser;

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});
```

## Running test examples

### Install dependencies

```
npm install
```

### Install typings

```
cd test
typings install
```

### Run examples in standalone mode

**Open a separate terminal and start selenium standalone server**

```
node_modules/.bin/selenium-standalone start
```

**Run test**

```
node_modules/.bin/mocha test/standalone/test.js
```

### Run examples in WDIO mode

**Running examples in _mocha_ framework**

```
cd test/wdio/mocha
../../../node_modules/.bin/wdio
```

**Running examples in _cucumber_ framework**

```
cd test/wdio/cucumber
../../../node_modules/.bin/wdio
```

## Examples

[Standalone mode examples](./test/standalone/test.ts)

[WDIO mode examples using mocha](./test/wdio/mocha/test.ts)

For WDIO mode examples using cucumber, see examples under `./test/wdio/cucumber`

# License
MIT
