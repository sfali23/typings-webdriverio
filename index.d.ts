import {WebdriverIO, Size, CssProperty, Location, ParsedCssProperty} from './lib/webdriverio';

export function remote(options?: {}, modifier?: {}): WebdriverIO<void>;

export function multiremote<T>(options?: {}): WebdriverIO<T>;

export {WebdriverIO, Location, Size, CssProperty, ParsedCssProperty}
