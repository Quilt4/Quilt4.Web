import { Renderer, RenderComponentType, RootRenderer } from '@angular/core';
import { AnimationDriver, EventManager } from '@angular/platform-browser';
import { NodeSharedStylesHost } from './node-shared-styles-host';
export declare class NodeDomRootRenderer implements RootRenderer {
    document: any;
    eventManager: EventManager;
    sharedStylesHost: NodeSharedStylesHost;
    private _animationDriver;
    protected registeredComponents: Map<string, DomRenderer>;
    constructor(document: any, eventManager: EventManager, sharedStylesHost: NodeSharedStylesHost, _animationDriver: AnimationDriver);
    renderComponent(componentProto: RenderComponentType): Renderer;
}
export declare const ATTRIBUTES: {
    textarea: string[];
    script: string[];
    button: string[];
    fieldset: string[];
    a: string[];
    img: string[];
    input: string[];
    output: string[];
    progress: string[];
    label: string[];
    option: string[];
    select: string[];
    optgroup: string[];
    form: string[];
};
export declare const IGNORE_ATTRIBUTES: {
    'innerHTML': boolean;
    'hidden': boolean;
};
export declare class DomRenderer implements Renderer {
    private _rootRenderer;
    private componentProto;
    private _animationDriver;
    private _contentAttr;
    private _hostAttr;
    private _styles;
    constructor(_rootRenderer: NodeDomRootRenderer, componentProto: RenderComponentType, _animationDriver: AnimationDriver);
    selectRootElement(selectorOrNode: string | any, debugInfo: any): any;
    createElement(parent: any, name: string, debugInfo: any): any;
    createViewRoot(hostElement: any): any;
    createTemplateAnchor(parentElement: any, debugInfo: any): any;
    createText(parentElement: any, value: string, debugInfo: any): any;
    projectNodes(parentElement: any, nodes: any[]): void;
    attachViewAfter(node: any, viewRootNodes: any[]): void;
    detachView(viewRootNodes: any[]): void;
    destroyView(hostElement: any, viewAllNodes: any[]): void;
    listen(renderElement: any, name: string, callback: Function): Function;
    listenGlobal(target: string, name: string, callback: Function): Function;
    setElementProperty(renderElement: any, propertyName: string, propertyValue: any): void;
    setElementAttribute(renderElement: any, attributeName: string, attributeValue: string): void;
    setBindingDebugInfo(renderElement: any, propertyName: string, propertyValue: string): void;
    setElementClass(renderElement: any, className: string, isAdd: boolean): void;
    setElementStyle(renderElement: any, styleName: string, styleValue: string): void;
    invokeElementMethod(renderElement: any, methodName: string, args: any[]): void;
    setText(renderNode: any, text: string): void;
    animate(element: any, startingStyles: any, keyframes: any[], duration: number, delay: number, easing: string): any;
}
export declare class NodeDomRenderer extends DomRenderer {
    __rootRenderer: any;
    constructor(_rootRenderer: NodeDomRootRenderer, _componentProto: RenderComponentType, _animationDriver: AnimationDriver);
    selectRootElement(selectorOrNode: string | any, debugInfo: any): any;
    _isObject(val: any): boolean;
    setElementProperty(renderElement: any, propertyName: string, propertyValue: any): void;
    setElementStyle(renderElement: any, styleName: string, styleValue: string): void;
    invokeElementMethod(renderElement: any, methodName: string, args: any[]): void;
    _setDisabledAttribute(renderElement: any, propertyName: any, propertyValue: any): void;
    _setCheckedAttribute(renderElement: any, propertyName: any, propertyValue: any): void;
    _setOnOffAttribute(renderElement: any, propertyName: any, propertyValue: any): void;
    _setBooleanAttribute(renderElement: any, propertyName: any, propertyValue: any): void;
}
