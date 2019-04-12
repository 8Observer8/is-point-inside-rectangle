import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

export class Collisions
{
    public IsPointInsideRectangle(point: Point, r: Rectangle): boolean
    {
        return (r.X < point.X && point.X < r.X + r.Width &&
            r.Y < point.Y && point.Y < r.Y + r.Height);

    }
}