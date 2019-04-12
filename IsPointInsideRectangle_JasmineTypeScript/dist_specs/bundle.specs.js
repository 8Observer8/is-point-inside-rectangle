(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collisions = /** @class */ (function () {
    function Collisions() {
    }
    Collisions.prototype.IsPointInsideRectangle = function (point, r) {
        return (r.X < point.X && point.X < r.X + r.Width &&
            r.Y < point.Y && point.Y < r.Y + r.Height);
    };
    return Collisions;
}());
exports.Collisions = Collisions;

},{}],2:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Point = /** @class */ (function (_super) {
    __extends(Point, _super);
    function Point(x, y) {
        return _super.call(this, x, y) || this;
    }
    return Point;
}(Shape_1.Shape));
exports.Point = Point;

},{"./Shape":4}],3:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
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

},{"./Shape":4}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collisions_1 = require("../src_client/Collisions");
var Point_1 = require("../src_client/Point");
var Rectangle_1 = require("../src_client/Rectangle");
describe("Collisions", function () {
    it("IsPointInsideRectangle_PointIsInsideRectangle_ReturnsTrue", function () {
        // Arrange
        var collisions = new Collisions_1.Collisions();
        var point = new Point_1.Point(10, 30);
        var rectangle = new Rectangle_1.Rectangle(-70, -50, 140, 100);
        // Act
        var actual = collisions.IsPointInsideRectangle(point, rectangle);
        // Assert
        expect(actual).toEqual(true);
    });
    it("IsPointInsideRectangle_PointIsOutsideOnTheLeft_ReturnsFalse", function () {
        // Arrange
        var collisions = new Collisions_1.Collisions();
        var point = new Point_1.Point(-90, 10);
        var rectangle = new Rectangle_1.Rectangle(-70, -50, 140, 100);
        // Act
        var actual = collisions.IsPointInsideRectangle(point, rectangle);
        // Assert
        expect(actual).toEqual(false);
    });
    it("IsPointInsideRectangle_PointIsOutsideOnTheTop_ReturnsFalse", function () {
        // Arrange
        var collisions = new Collisions_1.Collisions();
        var point = new Point_1.Point(-50, 55);
        var rectangle = new Rectangle_1.Rectangle(-70, -50, 140, 100);
        // Act
        var actual = collisions.IsPointInsideRectangle(point, rectangle);
        // Assert
        expect(actual).toEqual(false);
    });
    it("IsPointInsideRectangle_PointIsOutsideOnTheRight_ReturnsFalse", function () {
        // Arrange
        var collisions = new Collisions_1.Collisions();
        var point = new Point_1.Point(90, -10);
        var rectangle = new Rectangle_1.Rectangle(-70, -50, 140, 100);
        // Act
        var actual = collisions.IsPointInsideRectangle(point, rectangle);
        // Assert
        expect(actual).toEqual(false);
    });
    it("IsPointInsideRectangle_PointIsOutsideOnTheBottom_ReturnsFalse", function () {
        // Arrange
        var collisions = new Collisions_1.Collisions();
        var point = new Point_1.Point(20, -51);
        var rectangle = new Rectangle_1.Rectangle(-70, -50, 140, 100);
        // Act
        var actual = collisions.IsPointInsideRectangle(point, rectangle);
        // Assert
        expect(actual).toEqual(false);
    });
});

},{"../src_client/Collisions":1,"../src_client/Point":2,"../src_client/Rectangle":3}]},{},[5]);
