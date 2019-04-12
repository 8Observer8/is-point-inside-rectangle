define(["require", "exports", "../src_client/Collisions", "../src_client/Point", "../src_client/Rectangle"], function (require, exports, Collisions_1, Point_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=Collisions.spec.js.map