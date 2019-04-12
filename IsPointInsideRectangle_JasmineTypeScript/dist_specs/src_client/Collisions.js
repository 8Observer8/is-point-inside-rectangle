define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=Collisions.js.map