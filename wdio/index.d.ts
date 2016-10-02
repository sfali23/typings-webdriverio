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

import { Browser } from '../lib/wdio/webdriverio';

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

declare global {
    interface Object {
        browser: Browser<any>;
    }
}
