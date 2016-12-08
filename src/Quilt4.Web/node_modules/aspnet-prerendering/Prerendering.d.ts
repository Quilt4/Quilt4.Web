import 'es6-promise';
import * as url from 'url';
export interface RenderToStringCallback {
    (error: any, result: RenderToStringResult): void;
}
export interface RenderToStringResult {
    html: string;
    globals: {
        [key: string]: any;
    };
}
export interface BootFunc {
    (params: BootFuncParams): Promise<RenderToStringResult>;
}
export interface BootFuncParams {
    location: url.Url;
    origin: string;
    url: string;
    absoluteUrl: string;
    domainTasks: Promise<any>;
    data: any;
}
export interface BootModuleInfo {
    moduleName: string;
    exportName?: string;
    webpackConfig?: string;
}
export declare function renderToString(callback: RenderToStringCallback, applicationBasePath: string, bootModule: BootModuleInfo, absoluteRequestUrl: string, requestPathAndQuery: string, customDataParameter: any, overrideTimeoutMilliseconds: number): void;
