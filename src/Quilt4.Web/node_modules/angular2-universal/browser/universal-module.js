"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var prebootClient;
try {
    prebootClient = require('preboot/__build/src/browser/preboot_browser');
    prebootClient = (prebootClient && prebootClient.prebootClient) || prebootClient;
}
catch (e) { }
function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
var OpaqueToken = (function () {
    function OpaqueToken(_desc) {
        this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
    OpaqueToken = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String])
    ], OpaqueToken);
    return OpaqueToken;
}());
exports.OpaqueToken = OpaqueToken;
var SharedStylesHost = platform_browser_1.__platform_browser_private__.SharedStylesHost;
exports.UNIVERSAL_CACHE = new OpaqueToken('UNIVERSAL_CACHE');
var UniversalModule = (function () {
    function UniversalModule(sharedStylesHost) {
        var domStyles = document.head.querySelectorAll('style');
        var styles = Array.prototype.slice.call(domStyles)
            .filter(function (style) { return style.innerText.indexOf('_ng') !== -1; })
            .map(function (style) { return style.innerText; });
        styles.forEach(function (style) {
            sharedStylesHost._stylesSet.add(style);
            sharedStylesHost._styles.push(style);
        });
    }
    UniversalModule.withConfig = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: UniversalModule,
            providers: []
        };
    };
    UniversalModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            providers: [
                {
                    provide: exports.UNIVERSAL_CACHE,
                    useFactory: function () {
                        var _win = window;
                        var CACHE = Object.assign({}, _win.UNIVERSAL_CACHE || {});
                        delete _win.UNIVERSAL_CACHE;
                        return CACHE;
                    }
                },
                {
                    provide: core_1.APP_ID,
                    useFactory: function () {
                        var _win = window;
                        var CACHE = _win.UNIVERSAL_CACHE || {};
                        var appId = null;
                        if (CACHE.APP_ID) {
                            appId = CACHE.APP_ID;
                        }
                        else {
                            appId = _appIdRandomProviderFactory();
                        }
                        return appId;
                    },
                    deps: []
                },
                {
                    multi: true,
                    provide: core_1.APP_BOOTSTRAP_LISTENER,
                    useValue: function () {
                        var _win = window;
                        if (_win && prebootClient) {
                            setTimeout(function () { return prebootClient().complete(); });
                        }
                    }
                }
            ]
        }),
        __param(0, core_1.Inject(SharedStylesHost)), 
        __metadata('design:paramtypes', [Object])
    ], UniversalModule);
    return UniversalModule;
}());
exports.UniversalModule = UniversalModule;
function platformUniversalDynamic(extraProviders) {
    var platform = core_1.createPlatformFactory(platform_browser_dynamic_1.platformBrowserDynamic, 'universalBrowserDynamic', [])(extraProviders);
    return platform;
}
exports.platformUniversalDynamic = platformUniversalDynamic;
;
