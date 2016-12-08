import { NgZone, EventEmitter } from '@angular/core';
import { Http, Connection, ConnectionBackend, XHRBackend, ReadyState, Request, RequestOptions, Response, ResponseOptions, RequestOptionsArgs, JSONPBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export declare class PreloadHttp extends Http {
    protected _backend: ConnectionBackend;
    protected _defaultOptions: RequestOptions;
    _async: number;
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions);
    preload(url: any, factory: any): EventEmitter<{}>;
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    get(url: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    head(url: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
}
export declare class NodeConnection implements Connection {
    readyState: ReadyState;
    request: Request;
    response: Observable<Response> | Observable<any>;
    constructor(req: Request, baseResponseOptions: ResponseOptions, originUrl?: string, baseUrl?: string);
}
export declare class NodeBackend implements ConnectionBackend {
    private _baseResponseOptions;
    private _ngZone;
    private _baseUrl;
    private _originUrl;
    constructor(_baseResponseOptions: ResponseOptions, _ngZone: NgZone, _baseUrl: string, _originUrl: string);
    createConnection(request: Request): NodeConnection;
}
export declare class NodeJSONPConnection {
    readyState: ReadyState;
    request: Request;
    response: Observable<Response> | Observable<any>;
    constructor(req: Request, baseResponseOptions: ResponseOptions, ngZone: NgZone, originUrl?: string, baseUrl?: string);
}
export declare abstract class NodeJsonpBackend extends ConnectionBackend {
}
export declare class NodeJsonpBackend_ extends NodeJsonpBackend {
    private _baseResponseOptions;
    private _ngZone;
    private _baseUrl;
    private _originUrl;
    constructor(_baseResponseOptions: ResponseOptions, _ngZone: NgZone, _baseUrl: string, _originUrl: string);
    createConnection(request: Request): NodeJSONPConnection;
}
export declare const NODE_HTTP_PROVIDERS_COMMON: Array<any>;
export declare const NODE_HTTP_PROVIDERS: any[];
export declare const NODE_JSONP_PROVIDERS: any[];
export declare function jsonpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): PreloadHttp;
export declare function httpFactory(jsonpBackend: JSONPBackend, requestOptions: RequestOptions): PreloadHttp;
export declare class NodeHttpModule {
    static forRoot(config?: any): {
        ngModule: typeof NodeHttpModule;
        providers: any[];
    };
    static withConfig(config?: any): {
        ngModule: typeof NodeHttpModule;
        providers: any[];
    };
}
export declare class NodeJsonpModule {
    static forRoot(config?: any): {
        ngModule: typeof NodeJsonpModule;
        providers: any[];
    };
    static withConfig(config?: any): {
        ngModule: typeof NodeJsonpModule;
        providers: any[];
    };
}
