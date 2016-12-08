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
var core_1 = require('@angular/core');
var lib_1 = require('../lib');
function platformUniversalDynamic(extraProviders) {
    var platform = lib_1.platformNodeDynamic(extraProviders);
    return platform;
}
exports.platformUniversalDynamic = platformUniversalDynamic;
;
var UniversalModule = (function () {
    function UniversalModule() {
    }
    UniversalModule.withConfig = function (config) {
        if (config === void 0) { config = {}; }
        var providers = lib_1.NodeModule.withConfig(config).providers;
        return {
            ngModule: UniversalModule,
            providers: providers || []
        };
    };
    UniversalModule = __decorate([
        core_1.NgModule({
            exports: [
                lib_1.NodeModule,
                lib_1.NodeHttpModule,
                lib_1.NodeJsonpModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UniversalModule);
    return UniversalModule;
}());
exports.UniversalModule = UniversalModule;
