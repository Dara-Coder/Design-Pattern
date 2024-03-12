"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorator = void 0;
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.addedBehaviour = function () {
        return this.component.addedBehaviour();
    };
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
exports.Decorator = Decorator;
