# Typings for WebdriverIO
The typescript typings for [WebdriverIO](http://webdriver.io/).

[![Build Status](https://travis-ci.org/sfali23/typings-webdriverio.svg?branch=master)](https://travis-ci.org/sfali23/typings-webdriverio)

# Installation notes:

You do not need typings for node and/or mocha, but test examples are written using mocha, however if you are planning to use WDIO test runnner then you will need either of `mocha`, `cucumber`, or `jasmine`.

## Running test examples

### Install dependencies

```
npm install
```

### Install typings

```
cd test
typings install env~node --global -S
typings install env~mocha --global -S
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

### Run examples with WDIO test runner

```
node_modules/.bin/wdio test/wdio/wdio.conf.js
```

## Installing WebdriverIO in Standalone mode

```
typings install webdriverio --global  --save
```

## Installing WebdriverIO in WDIO mode

```
typings install webdriverio@4.2.16-w --global  --save
```

## Examples

[Standalone mode examples](./test/standalone/test.ts)
[WDIO mode examples](./test/wdio/test.ts)

# License
MIT
