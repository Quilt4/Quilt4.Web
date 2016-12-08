import { EventManager } from '@angular/platform-browser';
import { Injector, OpaqueToken, PlatformRef, NgModuleRef, NgZone } from '@angular/core';
import { NodeSharedStylesHost } from './node-shared-styles-host';
export declare function _document(domSharedStylesHost: NodeSharedStylesHost, zone: any): any;
export declare function removePlatformRef(): void;
export declare function getPlatformRef(): PlatformRef;
export declare function setPlatformRef(platformRef: any): void;
export declare class NodePlatform {
    private _platformRef;
    static _noop: () => void;
    static _cache: Map<any, any>;
    readonly platformRef: PlatformRef;
    constructor(_platformRef: PlatformRef);
    cacheModuleFactory<T>(moduleType: any, compilerOptions?: any): Promise<NgModuleRef<T>>;
    serializeModule<T>(ModuleType: any, config?: any): Promise<T>;
    serializeModuleFactory<T>(ModuleType: any, config?: any): Promise<T> | T;
    serialize<T>(moduleRef: NgModuleRef<T>, config?: any): Promise<T>;
    readonly injector: Injector;
    bootstrapModule<T>(moduleType: any, compilerOptions?: any): Promise<NgModuleRef<T>>;
    bootstrapModuleFactory<T>(moduleFactory: any): Promise<NgModuleRef<T>>;
    readonly disposed: boolean;
    readonly destroyed: boolean;
    destroy(): void;
    dispose(): void;
    registerDisposeListener(dispose: () => void): void;
    onDestroy(callback: () => void): void;
}
export interface EventManagerPlugin {
    manager: EventManager | NodeEventManager;
    supports(eventName: string): boolean;
    addEventListener(element: any, eventName: string, handler: Function): any;
    addGlobalEventListener(element: string, eventName: string, handler: Function): any;
}
export declare class NodeEventManager {
    private _document;
    private _zone;
    private _plugins;
    constructor(plugins: EventManagerPlugin[], _document: any, _zone: NgZone);
    getWindow(): any;
    getDocument(): any;
    getZone(): NgZone;
    addEventListener(element: any, eventName: string, handler: Function): Function;
    addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
}
export declare class NodeDomEventsPlugin {
    manager: NodeEventManager;
    supports(eventName: string): boolean;
    addEventListener(element: any, eventName: string, handler: Function): Function;
    addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
}
export declare function _APP_BASE_HREF(zone: any): any;
export declare function _REQUEST_URL(zone: any): any;
export declare function _ORIGIN_URL(zone: any): any;
export declare class NodeModule {
    static forRoot(document: string, config?: any): {
        ngModule: typeof NodeModule;
        providers: {
            provide: OpaqueToken;
            useValue: string;
        }[];
    };
    static withConfig(config?: any): {
        ngModule: typeof NodeModule;
        providers: {
            provide: OpaqueToken;
            useValue: string;
        }[];
    };
    constructor(parentModule: NodeModule);
}
export declare const INTERNAL_NODE_PLATFORM_PROVIDERS: Array<any>;
export declare const platformNodeDynamic: (extraProviders?: any[], platform?: any) => NodePlatform;
