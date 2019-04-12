define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Shape = /** @class */ (function () {
        function Shape(x, y) {
            this.X = x;
            this.Y = y;
        }
        Object.defineProperty(Shape.prototype, "X", {
            get: function () {
                return this._x;
            },
            set: function (v) {
                this._x = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shape.prototype, "Y", {
            get: function () {
                return this._y;
            },
            set: function (v) {
                this._y = v;
            },
            enumerable: true,
            configurable: true
        });
        return Shape;
    }());
    exports.Shape = Shape;
});
//# sourceMappingURL=Shape.js.map