"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var http = require('http');
var https = require('https');
var url = require('url');
var tokens_1 = require('./tokens');
var helper_1 = require('./helper');
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
var PreloadHttp = (function (_super) {
    __extends(PreloadHttp, _super);
    function PreloadHttp(_backend, _defaultOptions) {
        _super.call(this, _backend, _defaultOptions);
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
        this._async = 0;
    }
    PreloadHttp.prototype.preload = function (url, factory) {
        var _this = this;
        var obs = new core_1.EventEmitter(false);
        this._async += 1;
        var request = factory();
        request
            .subscribe({
            next: function (response) {
                obs.next(response);
            },
            error: function (e) {
                obs.error(e);
                _this._async -= 1;
            },
            complete: function () {
                obs.complete();
                _this._async -= 1;
            }
        });
        return obs;
    };
    PreloadHttp.prototype.request = function (url, options) {
        var _this = this;
        return this.preload(url, function () { return _super.prototype.request.call(_this, url, options); });
    };
    PreloadHttp.prototype.get = function (url, options) {
        var _this = this;
        return this.preload(url, function () { return _super.prototype.get.call(_this, url, options); });
    };
    PreloadHttp.prototype.post = function (url, body, options) {
        var _this = this;
        return this.preload(url, function () { return _super.prototype.post.call(_this, url, body, options); });
    };
    PreloadHttp.prototype.put = function (url, body, options) {
        var _this = this;
        return this.preload(url, function () { return _super.prototype.put.call(_this, url, body, options); });
    };
    PreloadHttp.prototype.delete = function (url, options) {
        var _this = this;
        return this.preload(url, function () { return _super.prototype.delete.call(_this, url, options); });
    };
    PreloadHttp.prototype.patch = function (url, body, options) {
        var _this = this;
        return this.preload(url, function () { return _super.prototype.patch.call(_this, url, body, options); });
    };
    PreloadHttp.prototype.head = function (url, options) {
        var _this = this;
        return this.preload(url, function () { return _super.prototype.head.call(_this, url, options); });
    };
    return PreloadHttp;
}(http_1.Http));
exports.PreloadHttp = PreloadHttp;
var NodeConnection = (function () {
    function NodeConnection(req, baseResponseOptions, originUrl, baseUrl) {
        if (originUrl === void 0) { originUrl = ''; }
        this.request = req;
        baseUrl = baseUrl || '/';
        if (originUrl === null) {
            throw new Error('ERROR: Please move ORIGIN_URL to platformProviders');
        }
        var _reqInfo = url.parse(url.resolve(url.resolve(originUrl, baseUrl), req.url));
        _reqInfo.method = http_1.RequestMethod[req.method].toUpperCase();
        if (helper_1.isPresent(req.headers)) {
            _reqInfo.headers = {};
            req.headers.forEach(function (values, name) { return _reqInfo.headers[name] = values.join(','); });
        }
        _reqInfo.headers = _reqInfo.headers || {};
        _reqInfo.headers['User-Agent'] = _reqInfo.headers['User-Agent'] || 'Angular 2 Universal';
        this.response = new Observable_1.Observable(function (responseObserver) {
            var nodeReq;
            var xhrHttp = http;
            if (_reqInfo.protocol === 'https:') {
                xhrHttp = https;
            }
            nodeReq = xhrHttp.request(_reqInfo, function (res) {
                var body = '';
                res.on('data', function (chunk) { return body += chunk; });
                var status = res.statusCode;
                var headers = new http_1.Headers(res.headers);
                var url = res.url;
                res.on('end', function () {
                    var responseOptions = new http_1.ResponseOptions({ body: body, status: status, headers: headers, url: url });
                    var response = new http_1.Response(responseOptions);
                    if (helper_1.isSuccess(status)) {
                        responseObserver.next(response);
                        responseObserver.complete();
                        return;
                    }
                    responseObserver.error(response);
                });
            });
            var onError = function (err) {
                var responseOptions = new http_1.ResponseOptions({ body: err, type: http_1.ResponseType.Error });
                if (helper_1.isPresent(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new http_1.Response(responseOptions));
            };
            nodeReq.on('error', onError);
            nodeReq.write(req.text());
            nodeReq.end();
            return function () {
                nodeReq.removeListener('error', onError);
                nodeReq.abort();
            };
        });
    }
    NodeConnection = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject(tokens_1.ORIGIN_URL)),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(tokens_1.APP_BASE_HREF)), 
        __metadata('design:paramtypes', [http_1.Request, http_1.ResponseOptions, String, String])
    ], NodeConnection);
    return NodeConnection;
}());
exports.NodeConnection = NodeConnection;
var NodeBackend = (function () {
    function NodeBackend(_baseResponseOptions, _ngZone, _baseUrl, _originUrl) {
        this._baseResponseOptions = _baseResponseOptions;
        this._ngZone = _ngZone;
        this._baseUrl = _baseUrl;
        this._originUrl = _originUrl;
    }
    NodeBackend.prototype.createConnection = function (request) {
        return new NodeConnection(request, this._baseResponseOptions, this._baseUrl, this._originUrl);
    };
    NodeBackend = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject(tokens_1.APP_BASE_HREF)),
        __param(3, core_1.Inject(tokens_1.ORIGIN_URL)), 
        __metadata('design:paramtypes', [http_1.ResponseOptions, core_1.NgZone, String, String])
    ], NodeBackend);
    return NodeBackend;
}());
exports.NodeBackend = NodeBackend;
var NodeJSONPConnection = (function () {
    function NodeJSONPConnection(req, baseResponseOptions, ngZone, originUrl, baseUrl) {
        if (originUrl === void 0) { originUrl = ''; }
        if (req.method !== http_1.RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        baseUrl = baseUrl || '/';
        if (originUrl === null) {
            throw new Error('ERROR: Please move ORIGIN_URL to platformProviders');
        }
        var _reqInfo = url.parse(url.resolve(url.resolve(originUrl, baseUrl), req.url));
        _reqInfo.method = http_1.RequestMethod[req.method].toUpperCase();
        if (helper_1.isPresent(req.headers)) {
            _reqInfo.headers = {};
            req.headers.forEach(function (values, name) { return _reqInfo.headers[name] = values.join(','); });
        }
        _reqInfo.headers = _reqInfo.headers || {};
        _reqInfo.headers['User-Agent'] = _reqInfo.headers['User-Agent'] || 'Angular 2 Universal';
        this.response = new Observable_1.Observable(function (responseObserver) {
            var nodeReq;
            var xhrHttp = http;
            function DONE(response) {
                responseObserver.next(response);
                responseObserver.complete();
            }
            var __done = Zone.current.wrap(DONE, 'jsonp');
            if (_reqInfo.protocol === 'https:') {
                xhrHttp = https;
            }
            nodeReq = xhrHttp.request(_reqInfo, function (res) {
                var body = '';
                res.on('data', function (chunk) { return body += chunk; });
                var status = res.statusCode;
                var headers = new http_1.Headers(res.headers);
                var url = res.url;
                res.on('end', function () {
                    var responseJson;
                    try {
                        if (body.indexOf('JSONP_CALLBACK') === -1) {
                            throw new Error('Http request ' + req.url + ' did not return the response with JSONP_CALLBACK()');
                        }
                        var responseFactory = new Function('JSONP_CALLBACK', body);
                        responseFactory(function (json) {
                            responseJson = json;
                        });
                    }
                    catch (e) {
                        console.log('JSONP Error:', e);
                        return onError(e);
                    }
                    var responseOptions = new http_1.ResponseOptions({ body: responseJson, status: status, headers: headers, url: url });
                    var response = new http_1.Response(responseOptions);
                    if (helper_1.isSuccess(status)) {
                        __done(response);
                        return;
                    }
                    ngZone.run(function () {
                        responseObserver.error(response);
                    });
                });
            });
            function onError(err) {
                var responseOptions = new http_1.ResponseOptions({ body: err, type: http_1.ResponseType.Error });
                if (helper_1.isPresent(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new http_1.Response(responseOptions));
            }
            ;
            nodeReq.on('error', onError);
            nodeReq.end();
            return function () {
                nodeReq.removeListener('error', onError);
                nodeReq.abort();
            };
        });
    }
    NodeJSONPConnection = __decorate([
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(tokens_1.ORIGIN_URL)),
        __param(4, core_1.Optional()),
        __param(4, core_1.Inject(tokens_1.APP_BASE_HREF)), 
        __metadata('design:paramtypes', [http_1.Request, http_1.ResponseOptions, core_1.NgZone, String, String])
    ], NodeJSONPConnection);
    return NodeJSONPConnection;
}());
exports.NodeJSONPConnection = NodeJSONPConnection;
var NodeJsonpBackend = (function (_super) {
    __extends(NodeJsonpBackend, _super);
    function NodeJsonpBackend() {
        _super.apply(this, arguments);
    }
    return NodeJsonpBackend;
}(http_1.ConnectionBackend));
exports.NodeJsonpBackend = NodeJsonpBackend;
var NodeJsonpBackend_ = (function (_super) {
    __extends(NodeJsonpBackend_, _super);
    function NodeJsonpBackend_(_baseResponseOptions, _ngZone, _baseUrl, _originUrl) {
        _super.call(this);
        this._baseResponseOptions = _baseResponseOptions;
        this._ngZone = _ngZone;
        this._baseUrl = _baseUrl;
        this._originUrl = _originUrl;
    }
    NodeJsonpBackend_.prototype.createConnection = function (request) {
        return new NodeJSONPConnection(request, this._baseResponseOptions, this._ngZone, this._baseUrl, this._originUrl);
    };
    NodeJsonpBackend_ = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject(tokens_1.APP_BASE_HREF)),
        __param(3, core_1.Inject(tokens_1.ORIGIN_URL)), 
        __metadata('design:paramtypes', [http_1.ResponseOptions, core_1.NgZone, String, String])
    ], NodeJsonpBackend_);
    return NodeJsonpBackend_;
}(NodeJsonpBackend));
exports.NodeJsonpBackend_ = NodeJsonpBackend_;
exports.NODE_HTTP_PROVIDERS_COMMON = [
    { provide: http_1.RequestOptions, useClass: http_1.BaseRequestOptions },
    { provide: http_1.ResponseOptions, useClass: http_1.BaseResponseOptions }
];
exports.NODE_HTTP_PROVIDERS = exports.NODE_HTTP_PROVIDERS_COMMON.concat([
    { provide: http_1.Http, useFactory: httpFactory, deps: [http_1.XHRBackend, http_1.RequestOptions] },
    { provide: http_1.XHRBackend, useClass: NodeBackend },
]);
exports.NODE_JSONP_PROVIDERS = exports.NODE_HTTP_PROVIDERS_COMMON.concat([
    { provide: http_1.Jsonp, useFactory: jsonpFactory, deps: [http_1.JSONPBackend, http_1.RequestOptions] },
    { provide: http_1.JSONPBackend, useClass: NodeJsonpBackend_ },
]);
function jsonpFactory(xhrBackend, requestOptions) {
    return new PreloadHttp(xhrBackend, requestOptions);
}
exports.jsonpFactory = jsonpFactory;
function httpFactory(jsonpBackend, requestOptions) {
    return new PreloadHttp(jsonpBackend, requestOptions);
}
exports.httpFactory = httpFactory;
var NodeHttpModule = (function () {
    function NodeHttpModule() {
    }
    NodeHttpModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return NodeHttpModule.withConfig(config);
    };
    NodeHttpModule.withConfig = function (config) {
        if (config === void 0) { config = {}; }
        var providers = [];
        if (config.baseUrl) {
            providers.push({ provide: tokens_1.APP_BASE_HREF, useValue: config.baseUrl });
        }
        if (config.requestUrl) {
            providers.push({ provide: tokens_1.REQUEST_URL, useValue: config.requestUrl });
        }
        if (config.originUrl) {
            providers.push({ provide: tokens_1.ORIGIN_URL, useValue: config.originUrl });
        }
        return {
            ngModule: NodeHttpModule,
            providers: providers
        };
    };
    NodeHttpModule = __decorate([
        core_1.NgModule({
            providers: exports.NODE_HTTP_PROVIDERS
        }), 
        __metadata('design:paramtypes', [])
    ], NodeHttpModule);
    return NodeHttpModule;
}());
exports.NodeHttpModule = NodeHttpModule;
var NodeJsonpModule = (function () {
    function NodeJsonpModule() {
    }
    NodeJsonpModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return NodeJsonpModule.withConfig(config);
    };
    NodeJsonpModule.withConfig = function (config) {
        if (config === void 0) { config = {}; }
        var providers = [];
        if (config.baseUrl) {
            providers.push({ provide: tokens_1.APP_BASE_HREF, useValue: config.baseUrl });
        }
        if (config.requestUrl) {
            providers.push({ provide: tokens_1.REQUEST_URL, useValue: config.requestUrl });
        }
        if (config.originUrl) {
            providers.push({ provide: tokens_1.ORIGIN_URL, useValue: config.originUrl });
        }
        return {
            ngModule: NodeJsonpModule,
            providers: providers
        };
    };
    NodeJsonpModule = __decorate([
        core_1.NgModule({
            providers: exports.NODE_JSONP_PROVIDERS
        }), 
        __metadata('design:paramtypes', [])
    ], NodeJsonpModule);
    return NodeJsonpModule;
}());
exports.NodeJsonpModule = NodeJsonpModule;
