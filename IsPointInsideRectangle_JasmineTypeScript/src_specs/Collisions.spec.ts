import { Collisions } from "../src_client/Collisions";
import { Point } from "../src_client/Point";
import { Rectangle } from "../src_client/Rectangle";

describe("Collisions", () =>
{
    it("IsPointInsideRectangle_PointIsInsideRectangle_ReturnsTrue", () =>
    {
        // Arrange
        let collisions = new Collisions();
        let point = new Point(10, 30);
        let rectangle = new Rectangle(-70, -50, 140, 100);

        // Act
        let actual = collisions.IsPointInsideRectangle(point, rectangle);

        // Assert
        expect(actual).toEqual(true);
    });

    it("IsPointInsideRectangle_PointIsOutsideOnTheLeft_ReturnsFalse", () =>
    {
        // Arrange
        let collisions = new Collisions();
        let point = new Point(-90, 10);
        let rectangle = new Rectangle(-70, -50, 140, 100);

        // Act
        let actual = collisions.IsPointInsideRectangle(point, rectangle);

        // Assert
        expect(actual).toEqual(false);
    });

    it("IsPointInsideRectangle_PointIsOutsideOnTheTop_ReturnsFalse", () =>
    {
        // Arrange
        let collisions = new Collisions();
        let point = new Point(-50, 55);
        let rectangle = new Rectangle(-70, -50, 140, 100);

        // Act
        let actual = collisions.IsPointInsideRectangle(point, rectangle);

        // Assert
        expect(actual).toEqual(false);
    });

    it("IsPointInsideRectangle_PointIsOutsideOnTheRight_ReturnsFalse", () =>
    {
        // Arrange
        let collisions = new Collisions();
        let point = new Point(90, -10);
        let rectangle = new Rectangle(-70, -50, 140, 100);

        // Act
        let actual = collisions.IsPointInsideRectangle(point, rectangle);

        // Assert
        expect(actual).toEqual(false);
    });

    it("IsPointInsideRectangle_PointIsOutsideOnTheBottom_ReturnsFalse", () =>
    {
        // Arrange
        let collisions = new Collisions();
        let point = new Point(20, -51);
        let rectangle = new Rectangle(-70, -50, 140, 100);

        // Act
        let actual = collisions.IsPointInsideRectangle(point, rectangle);

        // Assert
        expect(actual).toEqual(false);
    });
});