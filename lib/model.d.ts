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

export interface Config {
    host?: string;
    port?: number;
    path?: string;
    user?: string;
    key?: string;
    specs?: string[];
    exclude?: string[];
    maxInstances?: number;
    capabilities: Capabilities[];
    services?: string[];
    debug?: boolean;
    execArgv?: string[];
    sync?: boolean;
    logLevel?: string;
    coloredLogs?: boolean;
    screenshotPath?: string;
    baseUrl?: string;
    waitforTimeout?: number;
    connectionRetryTimeout?: number;
    connectionRetryCount?: number;
    plugins?: Plugins;
    framework?: string;
    reporter?: string;
    reporters?: string[];
    reporterOptions?: any;
    mochaOpts?: any;
    jasmineNodeOpts?: any;
    cucumberOpts?: any;
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides a several hooks you can use to interfere the test process in order to enhance
    // it and build services around it. You can either apply a single function to it or an array of
    // methods. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    /**
     * Gets executed once before all workers get launched.
     */
    onPrepare?: (config?: Config, capabilities?: Capabilities) => void;

    /**
     * Gets executed before test execution begins. At this point you can access to all global variables like `browser`.
     *  It is the perfect place to define custom commands.
     */
    before?: (capabilities?: Capabilities, specs?: string[]) => void;

    /**
     * Hook that gets executed before the suite starts
     */
    beforeSuite?: (suite?: any) => void;

    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling beforeEach in Mocha)
     */
    beforeHook?: () => void;

    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling afterEach in Mocha)
     */
    afterHook?: () => void;

    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     */
    beforeTest?: (test?: any) => void;

    /**
     * Runs before a WebdriverIO command gets executed.
     */
    beforeCommand?: (commandName: string, ...args: string[]) => void;

    /**
     * Runs after a WebdriverIO command gets executed
     */
    afterCommand?: (commandName: string, args: string[], result?: any, error?: Error) => void;

    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     */
    afterTest?: (test?: any) => void;

    /**
     * Hook that gets executed after the suite has ended
     */
    afterSuite?: (suite?: any) => void;

    /**
     * Gets executed after all tests are done. You still have access to all global variables from the test.
     */
    after?: (result?: any, capabilities?: Capabilities, specs?: string[]) => void;

    /**
     * Gets executed after all workers got shut down and the process is about to exit. It is not possible to defer the end of the process using a promise
     */
    onComplete?: (exitCode?: number) => void;

    // Cucumber specific hooks
    beforeFeature?: (feature?: any) => void;
    beforeScenario?: (scenario?: any) => void;
    beforeStep?: (step?: any) => void;
    afterStep?: (stepResult?: any) => void;
    afterScenario?: (scenario?: any) => void;
    afterFeature?: (feature?: any) => void;
}

export interface Capabilities {
    browserName: string;
    version?: string;
    platform?: string;
    maxInstances?: number;
    specs?: string[];
    exclude?: string[];
}

export interface WebdriverCSS {
    screenshotRoot?: string;
    failedComparisonsRoot?: string;
    misMatchTolerance?: number;
    screenWidth?: number[];
    updateBaseline?: boolean;
}

export interface Plugins {
    webdrivercss?: WebdriverCSS;
    webdriverrtc?: {};
    browserevent?: {};
}
