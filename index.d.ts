import { WebdriverIO} from './lib/webdriverio';

import {
    ApplicationCacheStatus,
    Button,
    Cookie,
    CssProperty,
    ParsedCssProperty,
    Point,
    Size,
    Response,
    AnyResponse,
    BooleanResponse,
    CookiesResponse,
    PointResponse,
    SizeResponse,
    StringResponse,
    WebElementJSONObject,
    WebElementResponse,
    WebElementsResponse} from './lib/model';

export function remote(options?: {}, modifier?: {}): WebdriverIO<void>;

export function multiremote<T>(options?: {}): WebdriverIO<T>;

export {
ApplicationCacheStatus,
Button,
Cookie,
CssProperty,
Point,
ParsedCssProperty,
Size,
Response,
AnyResponse,
BooleanResponse,
CookiesResponse,
PointResponse,
SizeResponse,
StringResponse,
WebdriverIO,
WebElementJSONObject,
WebElementResponse,
WebElementsResponse
}
