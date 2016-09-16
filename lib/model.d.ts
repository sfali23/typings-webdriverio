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
