var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Shape"], function (require, exports, Shape_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(x, y, width, height) {
            var _this = _super.call(this, x, y) || this;
            _this.Width = width;
            _this.Height = height;
            return _this;
        }
        Object.defineProperty(Rectangle.prototype, "Width", {
            get: function () {
                return this._width;
            },
            set: function (v) {
                this._width = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (v) {
                this._height = v;
            },
            enumerable: true,
            configurable: true
        });
        return Rectangle;
    }(Shape_1.Shape));
    exports.Rectangle = Rectangle;
});
//# sourceMappingURL=Rectangle.js.map