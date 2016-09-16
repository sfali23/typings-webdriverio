import {WebdriverIO, Size, CssProperty, ParsedCssProperty} from './lib/webdriverio';

export function remote(options?: {}, modifier?: {}): WebdriverIO<void>;

export function multiremote<T>(options?: {}): WebdriverIO<T>;

export {WebdriverIO, Size, CssProperty, ParsedCssProperty}
