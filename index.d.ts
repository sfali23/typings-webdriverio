import {ApplicationCacheStatus, Button, Cookie, CssProperty, Point, ParsedCssProperty, Size,
    Response, BooleanResponse, CookiesResponse, PointResponse, SizeResponse, StringResponse, WebElementJSONObject,
    WebElementResponse, WebElementsResponse} from './lib/model';
import { WebdriverIO} from './lib/webdriverio';

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
