define(["require", "exports", "./Collisions", "./Point", "./Rectangle"], function (require, exports, Collisions_1, Point_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            // Get input elements
            var pointX = document.getElementById("pointX");
            var pointY = document.getElementById("pointY");
            var rectX = document.getElementById("rectX");
            var rectY = document.getElementById("rectY");
            var rectWidth = document.getElementById("rectWidth");
            var rectHeight = document.getElementById("rectHeight");
            // Get the "result" element
            var result = document.getElementById("result");
            // Get the btnResult button
            var btnDetermine = document.getElementById("btnDetermine");
            var collisions = new Collisions_1.Collisions();
            btnDetermine.onclick = function () {
                var point = new Point_1.Point(parseFloat(pointX.value), parseFloat(pointY.value));
                var rect = new Rectangle_1.Rectangle(parseFloat(rectX.value), parseFloat(rectY.value), parseFloat(rectWidth.value), parseFloat(rectHeight.value));
                var r = collisions.IsPointInsideRectangle(point, rect);
                result.innerHTML = r.toString();
            };
        };
        return Program;
    }());
    // window.onload = () => Program.Main();
    Program.Main();
});
//# sourceMappingURL=Program.js.map