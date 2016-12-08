import { PlatformRef } from '@angular/core';
export declare class OpaqueToken {
    private _desc;
    constructor(_desc: string);
    toString(): string;
}
export declare const UNIVERSAL_CACHE: OpaqueToken;
export declare class UniversalModule {
    constructor(sharedStylesHost: any);
    static withConfig(config?: {}): {
        ngModule: UniversalModule;
        providers: any[];
    };
}
export declare function platformUniversalDynamic(extraProviders?: any[]): PlatformRef;
