import {
    AnyResponse,
    ApplicationCacheStatus,
    BooleanResponse,
    Button,
    Capabilities,
    Config,
    Cookie,
    CookiesResponse,
    CssProperty,
    ParsedCssProperty,
    Plugins,
    Point,
    PointResponse,
    Size,
    SizeResponse,
    StringResponse,
    WebElementJSONObject,
    WebElementResponse,
    WebElementsResponse,
    WebdriverCSS
} from '../lib/model';

import { Browser } from '../lib/standalone/webdriverio';

export function remote(options?: {}, modifier?: {}): Browser<any>;

export function multiremote<T>(options?: {}): Browser<any>;

export {
    Browser,
    AnyResponse,
    ApplicationCacheStatus,
    BooleanResponse,
    Button,
    Capabilities,
    Config,
    Cookie,
    CookiesResponse,
    CssProperty,
    ParsedCssProperty,
    Plugins,
    Point,
    PointResponse,
    Size,
    SizeResponse,
    StringResponse,
    WebElementJSONObject,
    WebElementResponse,
    WebElementsResponse,
    WebdriverCSS
}
