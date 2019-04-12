import { Collisions } from "./Collisions";
import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

class Program
{
    public static Main(): void
    {
        // Get input elements
        let pointX = document.getElementById("pointX") as HTMLInputElement;
        let pointY = document.getElementById("pointY") as HTMLInputElement;
        let rectX = document.getElementById("rectX") as HTMLInputElement;
        let rectY = document.getElementById("rectY") as HTMLInputElement;
        let rectWidth = document.getElementById("rectWidth") as HTMLInputElement;
        let rectHeight = document.getElementById("rectHeight") as HTMLInputElement;

        // Get the "result" element
        let result = document.getElementById("result") as HTMLSpanElement;

        // Get the btnResult button
        let btnDetermine = document.getElementById("btnDetermine") as HTMLButtonElement;

        let collisions = new Collisions();

        btnDetermine.onclick = () =>
        {
            let point = new Point(parseFloat(pointX.value), parseFloat(pointY.value));
            let rect = new Rectangle(
                parseFloat(rectX.value), parseFloat(rectY.value),
                parseFloat(rectWidth.value), parseFloat(rectHeight.value));
            let r = collisions.IsPointInsideRectangle(point, rect);
            result.innerHTML = r.toString();
        };
    }
}
// window.onload = () => Program.Main();
Program.Main();